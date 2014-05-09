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

postalAddressSchema = new SimpleSchema({
  addressCountry: {
    type: String,
    label: 'Country',
    optional: true
  },
  addressLocality: {
    type: String,
    label: 'Locality',
    optional: true
  },
  addressRegion: {
    type: String,
    label: 'Region',
    optional: true
  },
  postalCode: {
    type: String,
    label: 'Postal code',
    optional: true
  },
  postOfficeBoxNumber: {
    type: String,
    label: 'PO box number',
    optional: true
  },
  streetAddress: {
    type: String,
    label: 'Street',
    optional: true
  }
});

userProfileSchema = new SimpleSchema({
  address: {
    type: postalAddressSchema,
    optional: true
  },
  birthDate: {
    type: Date,
    label: 'Date of birth',
    optional: true
  },
  familyName: {
    type: String,
    label: 'Surname',
    optional: true
  },
  email: {
    type: String,
    regEx: SchemaRegEx.Email,
    label: 'Email',
    optional: true
  },
  gender: {
    type: String,
    label: 'Gender',
    optional: true
  },
  givenName: {
    type: String,
    label: 'Name',
    optional: true
  },
  jobTitle: {
    type: String,
    label: 'Job title',
    optional: true
  },
  nationality: {
    type: String,
    label: 'Nationality',
    optional: true
  },
  telephone: {
    type: String,
    label: 'Telephone',
    optional: true
  }
});
