'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'carousel.css',
	bundleFileName: 'carousel.js',
	globalName: 'kite',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'kite-carousel'
});