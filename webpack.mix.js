let mix = require('laravel-mix')

mix.js('resources/js/markdown.js', 'dist/js')
   .sass('resources/sass/markdown.scss', 'dist/css')
    .webpackConfig({
        resolve: {
            symlinks: false
        }
    })
