let mix = require('laravel-mix')

mix.js('resources/js/simplemde.js', 'dist/js')
   .sass('resources/sass/simplemde.scss', 'dist/css')
    .webpackConfig({
        resolve: {
            symlinks: false
        }
    })
