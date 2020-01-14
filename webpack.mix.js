let mix = require('laravel-mix');

mix
  .js('resources/js/simplemde.js', 'dist/js')
  .webpackConfig({
    resolve: {
      symlinks: false
    }
  });
