Template.apPage.helpers({
  apContext: function(type) {

    if(type === 'signIn')
      return {formId: 'signIn', schema: signInSchema};

    if(type === 'signUp')
      return {formId: 'signUp', schema: signUpSchema};

    if(type === 'forgotPassword')
      return {formId: 'forgotPassword', schema: forgotPasswordSchema};

    if(type === 'resetPassword')
      return {formId: 'resetPassword', schema: resetPasswordSchema};
  }
});

AutoForm.hooks({
  signIn: {
    onSubmit: function(doc) {
      Meteor.loginWithPassword(doc.email, doc.password, function(error) {
        if(error) {
          Session.set('accountsPageError', error);
        } else {
          Session.set('accountsPageError', undefined);
          Router.go(Router.current().route.path() || '/');
        }
      });

      this.resetForm();
      this.done();
      return false;
    }
  },
  signUp: {
    onSubmit: function(doc) {

      Accounts.createUser(doc, function(error) {
        if(error) {
          console.log(error);
          Session.set('accountsPageError', error);
          return;
        }

        Session.set('accountsPageError', undefined);
        Router.go('home');
      });

      return false;
    }
  },
  forgotPassword: {
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
  },
  resetPassword: {
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
