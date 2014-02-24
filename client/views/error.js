Template.accountsPageError.helpers({
  getError: function() {
      return _.map(_.filter(Session.get('accountsPageError'), function(msg, key) {
        return key == 'reason';
      }), function(msg, key) {
        return msg;
      });
  }
});

Template.accountsPageError.events({
  'click .close.icon': function(e) {
    Session.set('accountsPageError', undefined);
  }
});
