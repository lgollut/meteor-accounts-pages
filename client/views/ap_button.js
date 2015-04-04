Template.apButton.events({
  'click #signInLink': function() {
    currentRoute = Router.current().route.name;
    Session.set('fromWhere', currentRoute);
  }
});

Template.apButton.helpers({
  getuser: function () {
    user = Meteor.user();

    displayName = user.username;

    if(user.profile && user.profile.givenName) {
      displayName = user.profile.givenName;
      if(user.profile.familyName) {
        displayName += ' ' + user.profile.familyName;
      }
    }
    return displayName;
  },

  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      if(Router.current()) {
        return Router.current().route.name === name;
      }
    });

    return active && 'active';
  },

  profileLink: function() {
    //return Router.routes['user'].path({id: Meteor.userId()});
  }
});

Template.apButton.rendered = function() {
  this.$('.dropdown-toggle').dropdown();
};
