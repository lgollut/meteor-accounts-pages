Template.signUp.helpers({
  signUpFormSchema: function() {
    return signUpSchema;
  }
});

AutoForm.hooks({
  signUp: {
    onSubmit: function(doc) {

      Accounts.createUser(doc, function(error) {
        if(error) {
          console.log(error);
          Session.set('accountsPageError', error);
          return;
        };

        Session.set('accountsPageError', undefined);
        Router.go('home');
      });

      return false;
    }
  }
});
