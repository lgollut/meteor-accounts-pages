Template.pageAccountButton.getuser = function () {
  user = Meteor.user();
  return user.username;
}

Template.pageAccountButton.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
      return Router.current().route.name === name
    });

    return active && 'active';
  }
});

Template.pageAccountButton.rendered = function() {
  $('.ui.dropdown').dropdown();
}
