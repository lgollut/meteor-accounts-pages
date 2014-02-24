Template.signIn.events({
  'submit form': function(e) {
    e.preventDefault();

    isValid = $('.ui.form').form('validate form');

    if(!isValid) {
      return false;
    }

    Session.set('login', $('input[name="login"]').val());
    Session.set('password', $('input[name="password"]').val());

    Meteor.loginWithPassword(Session.get('login'), Session.get('password'), function(error) {
      Session.set('password', undefined);

      if(error) {
        Session.set('accountsPageError', error);
      } else if(Session.get('fromWhere')) {

      } else {
        Session.set('accountsPageError', undefined);
        Router.go('/');
      }
    })
  }
})

Template.signIn.rendered = function() {

  $('.ui.form').form({
    login: {
      identifier: 'login',
      rules: [
        {
          type: 'empty',
          prompt : 'You must enter your login'
        }
      ]
    },
    password : {
      identifier: 'password',
      rules: [
        {
          type: 'empty',
          prompt: 'You must enter your password'
        },{
          type: 'length[6]',
          prompt: 'Your password must be at least 6 characters'
        }
      ]
    }
  }, {
    keyboardShortcuts: false,
    inline: true,
    on: 'blur'
  });
}
