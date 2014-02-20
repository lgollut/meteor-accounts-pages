Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.add_files('accounts-pages.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('accounts-pages');

  api.add_files('accounts-pages_tests.js', ['client', 'server']);
});
