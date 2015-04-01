Template.resetPassword.helpers({
  resetPwdForm: function() {
    return resetPwdSchema;
  }
});

AutoForm.hooks({
  resetPwd: {
    onSubmit: function(doc) {

      password = doc.password;
      resetToken = Session.get('resetToken');

      Accounts.resetPassword(resetToken, password, function(error) {
        if(error) {
          Session.set('accountsPageError', error);
        } else {
          Session.set('accountsPageResetMailSended', undefined);
          Session.set('accountsPageError', undefined);
          Session.set('resetToken', undefined);
          Router.go('/');
        }
      });

      this.resetForm();
      this.done();

      return false;
    }
  }
});
