Template.forgotPassword.helpers({
  forgetPwdFormSchema: function() {
    return forgetPwdSchema;
  },
  resetMailSended: function() {
    return Session.get('accountsPageResetMailSended');
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
          Session.set('accountsPageResetMailSended', doc.email);
        }
      });

      this.resetForm();
      this.done();

      return false;
    }
  }
});
