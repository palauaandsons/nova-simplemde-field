let mix = require('laravel-mix')

mix.setPublicPath('dist')
   .js('resources/js/simplemde.js', 'js')
   .sass('resources/sass/simplemde.scss', 'css')
    .webpackConfig({
        resolve: {
            symlinks: false
        }
    })
