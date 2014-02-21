Router.map(function() {

  this.route('signIn', {
    path: '/sign-in',
    template: 'signIn'
  });

  this.route('forgotPassword', {
    path: '/forgot-password',
    template: 'forgotPassword'
  });

  this.route('signUp', {
    path: '/sign-up',
    template: 'signUp'
  });

  this.route('signOut', {
    path: '/sign-out',
    action: function() {
      if(Meteor.userId) {
        Meteor.logout(function(error) {
          Router.go('/');
        })
      }
    }
  })
});
