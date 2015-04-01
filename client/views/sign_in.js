Template.signIn.helpers({
  signInFormSchema: function() {
    return signInSchema;
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
  }
});
