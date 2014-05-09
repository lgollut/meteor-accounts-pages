Package.describe({
  summary: "Meteor smart package for full authentication pages styled with Bootstrap 3"
});

Package.on_use(function (api, where) {

  // client
  api.use([
    'ui',
    'templating',
    'spacebars',
    'less'
    ], 'client');

  api.add_files([
    'client/views/account_button.html',
    'client/views/account_button.js',
    'client/views/sign_in.html',
    'client/views/sign_in.js',
    'client/views/sign_up.html',
    'client/views/sign_up.js',
    'client/views/forgot_password.html',
    'client/views/forgot_password.js',
    'client/views/reset_password.html',
    'client/views/reset_password.js',
    'client/views/error.html',
    'client/views/error.js',
    'client/views/account_settings.html',
    'client/views/account_settings.js',
    'client/views/user_profile.html',
    'client/views/user_profile.js',
    'client/views/accounts_pages_layout.html'
  ], 'client');

  // server
  api.add_files([
    'server/startup.js'
  ], 'server');

  // client and server
  api.export('AccountsPages', ['client', 'server']);

  api.use([
    'iron-router',
    'autoform',
    'simple-schema',
    'accounts-base',
    'accounts-password',
    'check',
    'moment'
  ], ['client', 'server']);

  api.add_files([
    'lib/startup.js',
    'lib/router.js',
    'lib/schema_user.js'
  ], ['client', 'server']);

});

Package.on_test(function (api) {

});
