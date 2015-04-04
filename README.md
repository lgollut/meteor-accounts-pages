# lgollut:accounts-pages

Encapsulate accounts administration logic into reusable components.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [apPage](#appage)
  - [apForm](#apform)
  - [Routing](#routing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
$ meteor add lgollut:accounts-pages
```

## Usage

`accounts-pages` give you access to 4 components. `apPage`, `apForm`, `apError` and `apButton`.

### apPage

`apPage` is the main component where you defined the page `type` you want to create.

```html
{{#apPage type="signIn"}}
  <!-- Page content -->
{{/apPage}}
```

### apForm

`apForm` encapsulate the creation of the AutoForm element. The generated form attributes depend on the `type` attribute defined on `apPage` component.

```html
{{#apForm class='custom-form-class'}}

  <!-- ... -->

  {> afFormGroup name='customField'}}

  <!-- ... -->

{{/apForm}}
```

### Routing

Out of the box, `accounts-pages` give you seven routes you can point to :

```javascript
/sign-in
/sign-up
/sign-out
/forgot-password
/reset-password/:resetToken
/enroll-account/:enrollToken
/verify-email/:verifyToken
```

If you want to configure these routes to fit your needs, just call the adequate `iron:router` plugin with options you want.

```javascript
Router.plugin('signIn', {
  path: '/custom-sign-in-path',
  template: 'customSignInTemplate',
  controller: 'CustomController'
});
```

There is one plugin per route : `signIn`, `signUp`, `signOut`, `forgotPassword`, `resetPassword`, `enrollAccount`, `verifyEmail`
