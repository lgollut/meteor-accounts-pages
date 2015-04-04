signInSchema = new SimpleSchema({
  email: {
    type: String,
    label: 'Email address',
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      afFieldInput: {
        type: 'email',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  },
  password: {
    type: String,
    label: 'Password',
    autoform: {
      afFieldInput: {
        type: 'password',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  }
});

signUpSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Your username',
    autoform: {
      afFieldInput: {
        type: 'text',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Your email',
    autoform: {
      afFieldInput: {
        type: 'email',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  }
});

forgotPasswordSchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Your email',
    autoform: {
      afFieldInput: {
        type: 'email',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  }
});

resetPasswordSchema = new SimpleSchema({
  password: {
    type: String,
    min: 6,
    label: 'Your new password',
    autoform: {
      afFieldInput: {
        type: 'password',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  },
  confirmPassword: {
    type: String,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    },
    label: 'Confirm your new password',
    autoform: {
      afFieldInput: {
        type: 'password',
        autocomplete: 'off',
        spellcheck: 'false',
        autocapitalize: 'off',
        autocorrect: "off"
      }
    }
  }
});
