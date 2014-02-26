signInSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Your username'
  },
  password: {
    type: String,
    label: 'Your password'
  }
});

signUpSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Your username'
  },
  email: {
    type: String,
    regEx: SchemaRegEx.Email,
    label: 'Your email'
  },
  password: {
    type: String,
    label: 'Your password'
  }
});

forgetPwdSchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SchemaRegEx.Email,
    label: 'Your email'
  }
});

resetPwdSchema = new SimpleSchema({
  password: {
    type: String,
    min: 6,
    label: 'Your new password'
  },
  confirmPassword: {
    type: String,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    },
    label: 'Confirm your new password'
  }
});
