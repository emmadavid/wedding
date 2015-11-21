/**
 * Compile ES2015 React with Babel.
 */

'use strict';

var project = require( '../config/project' );

module.exports = {
	browserify: {
		options: {
			watch: false,
			keepAlive: false,

			browserifyOptions: {
				debug: true //Enables sourcemap.
			},

			transform: [[ 'babelify', {
				presets: [ 'es2015' ]
			}]]
		},

		dist: {
			src: [ project.js.path + '/main.js' ],
			dest: project.sqs.scriptPath + '/app.js'
		}
	}
};
