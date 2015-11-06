/**
 * Grunt path configuration.
 */

var path = require('path'),
	gruntConfigPath = path.normalize(process.cwd() + '/grunt/config'),
	srcPath = path.normalize(process.cwd() + '/src'),
	jsPath = path.normalize(srcPath + '/main/webapp/static/js'),
	scssPath = path.normalize(srcPath + '/main/scss'),
	scssFiles = path.normalize(scssPath + '/**.scss');

module.exports = {

	js: {
		path: jsPath
	},

	scss: {
		path: scssPath,
		files: scssFiles
	},

	grunt: {
		config: {
			path: gruntConfigPath
		}
	}

};
