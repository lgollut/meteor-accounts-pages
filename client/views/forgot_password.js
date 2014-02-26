Template.forgotPassword.helpers({
  forgetPwdForm: function() {

    forgetPwdAutoForm = new AutoForm(forgetPwdSchema);

    forgetPwdAutoForm.hooks({
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
    });

    return forgetPwdAutoForm;
  },

  passwordReseted: function() {
    return Session.get('accountsPagePasswordReseted');
  }
});
