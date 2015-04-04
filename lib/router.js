/**********************************************
 *
 * Default controller
 *
 **********************************************/
apController = RouteController.extend({});

/**********************************************
 *
 * Call hook before certain routes
 *
 **********************************************/
Iron.Router.plugins.mustBeSignIn = function(router, options) {
  options = options || {};

  router.onBeforeAction(function() {
    if(!Meteor.user()) {
      if(Meteor.loggingIn()) {
        this.render(this.loadingTemplate);
      } else {
        this.redirect(options.redirect || 'signIn');
      }
    } else {
      this.next();
    }
  }, {except: options.except});

};

/**********************************************
 *
 * Plugins definitions for custom routes creation
 *
 **********************************************/
Iron.Router.plugins.signIn = function(router, options) {

  options = options || {};

  router.route(options.path || '/sign-in', {
    name: 'signIn',
    controller: options.controller || apController,

    onStop: function() {
      AutoForm.resetForm('signIn');
      Session.set('accountsPageError', undefined);
    },

    action: function() {
      this.render(options.template || 'signIn');
    }

  });
};

Iron.Router.plugins.signUp = function(router, options) {

  options = options || {};

  router.route(options.path || '/sign-up', {
    name: 'signUp',
    controller: options.controller || apController,

    onStop: function() {
      AutoForm.resetForm('signUp');
      Session.set('accountsPageError', undefined);
    },

    action: function() {
      this.render(options.template || 'signUp');
    }

  });
};

Iron.Router.plugins.signOut = function(router, options) {

  options = options || {};

  router.route(options.path || '/sign-out', {
    name: 'signOut',
    controller: options.controller || apController,

    action: function() {
      if(Meteor.userId) {
        Meteor.logout(function(error) {
          if(error) {
            throw new Meteor.Error(error);
          }
        });
      }

      this.redirect('/');
    }
  });
};

Iron.Router.plugins.forgotPassword = function(router, options) {

  options = options || {};

  router.route(options.path || '/forgot-password', {
    name: 'forgotPassword',
    controller: options.controller || apController,

    onStop: function() {
      AutoForm.resetForm('forgotPassword');
    },

    action: function() {
      this.render(options.template || 'forgotPassword');
    }
  });
};

Iron.Router.plugins.resetPassword = function(router, options) {

  options = options || {};

  router.route(options.path + '/:resetToken' || '/reset-password/:resetToken', {
    name: 'resetPassword',
    controller: options.controller || apController,

    onBeforeAction: function() {
      Session.set('resetToken', this.params.resetToken);
      this.next();
    },

    onStop: function() {
      AutoForm.resetForm('resetPassword');
    },

    action: function() {
      this.render(options.template || 'resetPassword');
    }
  });
};

Iron.Router.plugins.enrollAccount = function(router, options) {

  options = options || {};

  router.route(options.path + '/:enrollToken' || '/enroll-account/:enrollToken', {
    name: 'enrollAccount',
    controller: options.controller || apController,

    onBeforeAction: function() {
      Session.set('resetToken', this.params.enrollToken);
      this.next();
    },

    onStop: function() {
      AutoForm.resetForm('enrollAccountForm');
    },

    action: function() {
      this.render(options.template || 'enrollAccount');
    }
  });
};

Iron.Router.plugins.verifyEmail = function(router, options) {

  options = options || {};

  router.route(options.path + '/:verifyToken' || '/verify-email/:verifyToken', {
    name: 'verifyEmail',
    controller: options.controller || apController,

    action: function() {
      Accounts.verifyEmail(this.params.verifyToken, function(error) {

        if(error)
          throw new Meteor.Error(error);

        this.redirect('/');

      });
    }
  });
};
