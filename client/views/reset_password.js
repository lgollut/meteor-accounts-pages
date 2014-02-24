Template.resetPassword.events({
  'submit form': function(e) {
    e.preventDefault();

    password = $('input[name="password"]').val();
    resetToken = Session.get('resetToken');

    Accounts.resetPassword(resetToken, password, function(error) {
      if(error) {
        Session.set('accountsPageError', error);
      } else {
        Session.set('accountsPagePasswordReseted', undefined);
        Session.set('accountsPageError', undefined);
        Session.set('resetToken', undefined);
        Router.go('home');
      }
    })
  }
})

Template.resetPassword.rendered = function() {

  $('.ui.form').form({
    password: {
      identifier: 'password',
      rules: [
        {
          type: 'empty',
          prompt : 'You must enter a new password'
        }, {
          type: 'length[6]',
          prompt: 'Your password must be at least 6 characters'
        }
      ]
    },
    retypePassword: {
      identifier: 'retypePassword',
      rules: [
        {
          type: 'empty',
          prompt : 'You must retype your password'
        }, {
          type: 'match[password]',
          prompt: 'Password fields don\'t match'
        }
      ]
    }
  }, {
    keyboardShortcuts: false,
    inline: true,
    on: 'blur'
  });
}
