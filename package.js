Package.describe({
  summary: "Meteor smart package for full authentication pages styled with Bootstrap 3",
  version: "0.1.0",
  git: "https://github.com/lgollut/meteor-accounts-pages.git"
});

Package.onUse(function (api) {

  api.use('blaze', 'client');
  api.use('templating', 'client');
  api.use('spacebars', 'client');
  api.use('less', 'client');

  api.use('iron:router', ['client', 'server']);
  api.use('aldeed:autoform', ['client', 'server']);
  api.use('aldeed:simple-schema', ['client', 'server']);
  api.use('mrt:moment', ['client', 'server']);
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-password', ['client', 'server']);
  api.use('check', ['client', 'server']);
  api.use('underscore', ['client', 'server']);

  api.addFiles('client/views/account_button.html', 'client');
  api.addFiles('client/views/account_button.js', 'client');
  api.addFiles('client/views/sign_in.html', 'client');
  api.addFiles('client/views/sign_in.js', 'client');
  api.addFiles('client/views/sign_up.html', 'client');
  api.addFiles('client/views/sign_up.js', 'client');
  api.addFiles('client/views/forgot_password.html', 'client');
  api.addFiles('client/views/forgot_password.js', 'client');
  api.addFiles('client/views/reset_password.html', 'client');
  api.addFiles('client/views/reset_password.js', 'client');
  api.addFiles('client/views/error.html', 'client');
  api.addFiles('client/views/error.js', 'client');

  api.addFiles('lib/startup.js', ['client', 'server']);
  api.addFiles('lib/router.js', ['client', 'server']);
  api.addFiles('schemas/accounts.js', ['client', 'server']);

  api.export('AccountsPages', ['client', 'server']);

});

Package.onTest(function (api) {

});
