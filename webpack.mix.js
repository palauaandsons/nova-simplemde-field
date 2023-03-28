let mix = require('laravel-mix');

require('./nova.mix');

mix
	.setPublicPath('dist')
	.js('resources/js/simplemde.js', 'js')
	.css('resources/css/simplemde.css', 'css')
	.vue({ version: 3 })
	.nova('palauaandsons/nova-simplemde-field');
