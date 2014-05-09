Router.map(function() {

  this.route('signIn', {
    path: '/sign-in',
    template: 'signIn',
    layoutTemplate: 'accountsPagesLayout'
  });

  this.route('forgotPassword', {
    path: '/forgot-password',
    template: 'forgotPassword',
    layoutTemplate: 'accountsPagesLayout'
  });

  this.route('signUp', {
    path: '/sign-up',
    template: 'signUp',
    layoutTemplate: 'accountsPagesLayout'
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
  });

  this.route('resetPassword', {
    path: '/reset-password/:resetToken',
    template: 'resetPassword',
    layoutTemplate: 'accountsPagesLayout',
    before: function() {
      resetToken = this.params.resetToken;
      Session.set('resetToken', resetToken);
    }
  });

  this.route('accountSettings', {
    path: '/account-settings',
    template: 'accountSettings'
  });

  this.route('user', {
    path: '/user/:id',
    template: 'userProfile'
  });
});
