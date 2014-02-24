Package.describe({
  summary: "Meteor smart package for full authentication pages styled with Semantic UI"
});

Package.on_use(function (api, where) {

  // client
  api.use([
    'handlebars',
    'less',
    'templating'
    ], 'client');

  api.add_files([
    'client/views/account_button.html',
    'client/views/account_button.js',
    'client/views/sign_in.html',
    'client/views/sign_in.js',
    'client/views/forgot_password.html',
    'client/views/forgot_password.js',
    'client/views/sign_up.html',
    'client/views/sign_up.js'
  ], 'client');

  // client and server
  api.export('AccountsPages', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);
  api.add_files('lib/router.js', ['client', 'server']);

});

Package.on_test(function (api) {

});
