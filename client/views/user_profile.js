Template.userProfile.helpers({
  givenName: function() {
    return Meteor.user().profile && Meteor.user().profile.givenName;
  },

  familyName: function() {
    return Meteor.user().profile && Meteor.user().profile.familyName;
  },

  jobTitle: function() {
    return Meteor.user().profile && Meteor.user().profile.jobTitle;
  },

  inlineAddress: function() {
    address = '';

    if(Meteor.user().profile) {

      p = Meteor.user().profile.address;

      if(p.streetAddress) {
        address += p.streetAddress;
      };

      if(p.streetAddress && p.postalCode) {
        address += ', ' + p.postalCode;
      } else if(p.postalCode) {
        address += p.postalCode;
      };

      if(p.postalCode && p.addressLocality) {
        address += ' ' + p.addressLocality;
      } else if(p.addressLocality) {
        address += ', ' + p.addressLocality;
      };
    }

    return address;
  },

  birthDate: function() {
    date = '';
    if(p = Meteor.user().profile) {
      if(b = p.birthDate) {
        date = moment.utc(b).format("dddd DD MMMM YYYY");
      }
    }
    return date;
  },

  countryOptions: function() {
    //return countryIso;
    return [
      {'label':'', 'value':''},
      {'label':'Switzerland', 'value':'CH'},
      {'label':'France', 'value':'FR'},
      {'label':'Deutchland', 'value':'DE'}
    ];
  },

  genderOptions: function() {
    return [
      {'label':'', 'value':''},
      {'label':'Male', 'value':'Male'},
      {'label':'Female', 'value':'Female'}
    ];
  },

  profileFormSchema: function() {
    return userProfileSchema;
  },

  userSchema: function() {
    return _.keys(userProfileSchema.schema());
  },

  userProfile: function() {
    return Meteor.user().profile;
  }
});

Template.userProfile.rendered = function() {
  $('.date').datepicker({
    format: 'DD dd MM yyyy',
    autoclose: true,
    startView: 2,
    clearBtn: true
  });
};

Template.userProfile.events({
  'click #growlWarning': function(e) {

    options = {
      type: 'warning',
      code: '300',
      userId: Meteor.userId()
    };

    Growl.create('Warning', 'Something happend !', options, true);
  },

  'click #growlDanger': function(e) {

    options = {
      type: 'danger',
      code: '500',
      userId: Meteor.userId()
    };

    Growl.create('Error', 'Something goes wrong', options, true);
  }
});

AutoForm.hooks({
  profileForm: {
    onSubmit: function(doc) {

      modifier = {
        $set: {'profile': doc}
      }

      Meteor.users.update(Meteor.userId(), modifier, function(error) {

        if(error) {
          console.log(error);
          Session.set('accountsPageError', error);
        } else {

          options = {
            type: 'success',
            code: '200',
            userId: Meteor.userId(),
          };

          Growl.create('Modifications saved', 'Your profile has been saved', options);

        }

      })

      return false;
    },
    onError: function(operation, error, template) {
      console.log(operation);
      console.log(error);
      console.log(template);
    },
    onSuccess: function(operation, result, template) {
      console.log(result);
    },
    formToDoc: function(doc) {
      if(doc.birthDate !== null) {
        doc.birthDate = moment.utc(doc.birthDate, 'dddd DD MMMM YYYY').toDate();
      }
      return doc;
    },
    docToForm: function(doc) {
      if(doc.birthDate !== undefined) {
        doc.birthDate = moment.utc(doc.birthDate).format("dddd DD MMMM YYYY");
      }
      return doc;
    }
  }
});
