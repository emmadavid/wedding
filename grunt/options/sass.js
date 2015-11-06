/**
 * Compile Sass to CSS using node-sass.
 */

'use strict';

var project = require( '../config/project' );

module.exports = {
	sass: {
		options: {
			includePaths: require( 'bourbon' ).includePaths
		},
		dist: {
			files: {
				'main.css' : project.scss.files
			}
		}
	}
};
