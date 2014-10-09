/**********************************************
 *
 * Define hook to run before serving page
 * to user
 *
 **********************************************/
Iron.Router.hooks.mustBeSignIn = function() {
  if(!Meteor.user()) {
    this.layout('layout', {
      data: function () {
        return {
          hideNavbar: true,
          transparentBg: true
        };
      }
    });
    this.render('signIn');
  } else {
    this.next();
  }
};

/**********************************************
 *
 * Call hook before certain routes
 *
 **********************************************/
Router.onBeforeAction('mustBeSignIn', {except: ['signIn', 'forgotPassword', 'signOut', 'resetPassword', 'verifyEmail']});

Router.route('/sign-in', {
  name: 'signIn',
  onStop: function() {
    AutoForm.resetForm('signIn');
    Session.set('accountsPageError', undefined);
  },
  data: function() {
    return {
      hideNavbar: true,
      transparentBg: true
    };
  }
});

Router.route('/sign-out', {
  name: 'signOut',
  action: function() {
    if(Meteor.userId) {
      Meteor.logout(function(error) {
        if(error) {
          throw new Meteor.Error(error);
        }
      });
    }

    Router.go('/');
  }
});

Router.route('/forgot-password', {
  name: 'forgotPassword',
  onStop: function() {
    AutoForm.resetForm('forgetPwd');
  },
  data: function() {
    return {
      hideNavbar: true,
      transparentBg: true
    };
  }
});

Router.route('/sign-up', function() {
  /**
   * Signup function is disable
   */
  this.redirect('signIn');
});

Router.route('/reset-password/:resetToken', {
  name: 'resetPassword',
  onBeforeAction: function() {
    Session.set('resetToken', this.params.resetToken);
    this.next();
  },
  onStop: function() {
    AutoForm.resetForm('resetPwd');
  },
  data: function() {
    return {
      hideNavbar: true,
      transparentBg: true
    };
  }
});

Router.route('/verify-email/:verifyToken', {
  name: 'verifyEmail',
  action: function() {
    Accounts.verifyEmail(this.params.verifyToken, function(error) {

      if(error) {
        throw new Meteor.Error(error);
      }

      Router.go('/');

    });
  }
});
