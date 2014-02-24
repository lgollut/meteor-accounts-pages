Template.signUp.events({
  'submit form': function(e) {
    e.preventDefault();

    isValid = $('.ui.form').form('validate form');

    if(!isValid) {
      return false;
    }

    userInfo = {
      username: $('input[name="username"]').val(),
      email: $('input[name="email"]').val(),
      password: $('input[name="password"]').val(),
      profile: {}
    }

    Accounts.createUser(userInfo, function(error) {
      if(error) {
        Session.set('accountsPageError', error);
        return;
      };
      Session.set('accountsPageError', undefined);
      Router.go('home');
    });
  }
})

Template.signUp.rendered = function() {

  $('.ui.form').form({
    username: {
      identifier: 'username',
      rules: [
        {
          type: 'empty',
          prompt : 'You must enter your user name'
        }
      ]
    },
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
    },
    password : {
      identifier: 'password',
      rules: [
        {
          type: 'empty',
          prompt: 'You must enter your password'
        }, {
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
