Template.forgotPassword.events({
  'click #submitButton': function(e) {
    e.preventDefault();

    isValid = $('.ui.form').form('validate form');

    if(!isValid) {
      return;
    }

    Session.set('login', $('input[name="login"]').val());

    Meteor.loginWithPassword(Session.get('login'), Session.get('password'), function(error) {
      Session.set('password', undefined);

      if(error) {
        alert(error);
      } else if(Session.get('fromWhere')) {

      } else {
        Router.go('/');
      }
    })
  }
})

Template.forgotPassword.rendered = function() {

  $('.ui.form').form({
    email: {
      identifier: 'email',
      rules: [
        {
          type: 'empty',
          prompt : 'You must enter your email address'
        }, {
          type: 'email',
          prompt: 'You must enter a valid email address'
        }
      ]
    }
  }, {
    inline: true,
    on: 'blur'
  });
}
