'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'slider.css',
	bundleFileName: 'slider.js',
	globalName: 'kite',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'kite-slider'
});