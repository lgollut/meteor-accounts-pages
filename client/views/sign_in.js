Template.signIn.helpers({
  signInFormSchema: function() {
    return signInSchema;
  }
});

AutoForm.hooks({
  signIn: {
    onSubmit: function(doc) {

      Meteor.loginWithPassword(doc.username, doc.password, function(error) {

        if(error) {
          Session.set('accountsPageError', error);
        } else if(Session.get('fromWhere')) {
          Session.set('accountsPageError', undefined);
          Router.go(Session.get('fromWhere'));
        } else {
          Session.set('accountsPageError', undefined);
          Router.go('/');
        }
      })

      return false;
    }
  }
});
