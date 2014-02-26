Template.resetPassword.helpers({
  resetPwdForm: function() {

    resetPwdAutoForm = new AutoForm(resetPwdSchema);

    resetPwdAutoForm.hooks({
      onSubmit: function(doc) {

        password = doc.password;
        resetToken = Session.get('resetToken');

        Accounts.resetPassword(resetToken, password, function(error) {
          if(error) {
            Session.set('accountsPageError', error);
          } else {
            Session.set('accountsPagePasswordReseted', undefined);
            Session.set('accountsPageError', undefined);
            Session.set('resetToken', undefined);
            Router.go('home');
          }
        });

        return false;
      }
    });

    return resetPwdAutoForm;
  }
});
