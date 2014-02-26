Template.pageAccountButton.getuser = function () {
  user = Meteor.user();
  return user.username;
};

Template.pageAccountButton.events({
  'click #signInLink': function() {
    currentRoute = Router.current().route.name;
    Session.set('fromWhere', currentRoute);
  }
});

Template.pageAccountButton.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      return Router.current().route.name === name
    });

    return active && 'active';
  },

  getUserId: function() {
    return {id:Meteor.userId()};
  }
});
