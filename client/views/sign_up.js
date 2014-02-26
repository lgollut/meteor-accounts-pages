Template.signUp.helpers({
  signUpForm: function() {

    signUpAutoForm = new AutoForm(signUpSchema);

    signUpAutoForm.hooks({
      onSubmit: function(doc) {

        Accounts.createUser(doc, function(error) {
          if(error) {
            Session.set('accountsPageError', error);
            return;
          };

          Session.set('accountsPageError', undefined);
          Router.go('home');
        });

        return false;
      }
    });

    return signUpAutoForm;
  }
});
