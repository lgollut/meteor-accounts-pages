Template.forgotPassword.helpers({
  forgetPwdFormSchema: function() {
    return forgetPwdSchema;
  },

  passwordReseted: function() {
    return Session.get('accountsPagePasswordReseted');
  }
});

AutoForm.hooks({
  forgetPwd: {
    onSubmit: function(doc) {

      options = {
        email: doc.email
      };

      Accounts.forgotPassword(options, function(error) {
        if(error) {
          Session.set('accountsPageError', error);
        } else {
          Session.set('accountsPageError', undefined);
          Session.set('accountsPagePasswordReseted', doc.email);
        }
      });

      return false;
    }
  }
});
