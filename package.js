Package.describe({
  name: "lgollut:accounts-pages",
  version: "0.1.0",
  summary: "Meteor smart package for full authentication pages styled with Bootstrap 3",
  git: "https://github.com/lgollut/meteor-accounts-pages.git",
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.use('blaze', 'client');
  api.use('tracker', 'client');
  api.use('templating', 'client');
  api.use('spacebars', 'client');
  api.use('less', 'client');
  api.use('check', ['client', 'server']);
  api.use('underscore', ['client', 'server']);
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-password', ['client', 'server']);

  api.use('iron:router', ['client', 'server']);
  api.use('aldeed:autoform', ['client', 'server']);
  api.use('aldeed:simple-schema', ['client', 'server']);
  api.use('momentjs:moment', ['client', 'server']);

  api.addFiles('client/views/ap_button.html', 'client');
  api.addFiles('client/views/ap_button.js', 'client');
  api.addFiles('client/views/ap_page.html', 'client');
  api.addFiles('client/views/ap_page.js', 'client');
  api.addFiles('client/views/ap_form.html', 'client');
  api.addFiles('client/views/ap_error.html', 'client');
  api.addFiles('client/views/ap_error.js', 'client');

  api.addFiles('schemas/accounts.js', ['client', 'server']);
  api.addFiles('schemas/config.js', ['client', 'server']);
  api.addFiles('lib/router.js', ['client', 'server']);

});

Package.onTest(function (api) {

});
