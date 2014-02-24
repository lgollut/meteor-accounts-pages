Template.forgotPassword.events({
  'submit form': function(e) {
    e.preventDefault();

    isValid = $('.ui.form').form('validate form');

    if(!isValid) {
      return;
    }

    options = {
      email: $('input[name="email"]').val()
    };

    Accounts.forgotPassword(options, function(error) {
      if(error) {
        Session.set('accountsPageError', error);
      } else {
        Session.set('accountsPageError', undefined);
        Session.set('accountsPagePasswordReseted', 'Email sended');
      }
    });
  }
})

Template.forgotPassword.helpers({
  passwordReseted: function() {
    return Session.get('accountsPagePasswordReseted');
  }
});

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
    keyboardShortcuts: false,
    inline: true,
    on: 'blur'
  });
}
