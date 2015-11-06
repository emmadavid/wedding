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
			src: [ project.scss.files ],
			dest: project.sqs.stylePath + '/site.css'
			//files: {
			//	project.sqs.stylePath + '/site.css' : project.scss.files
			//}
		}
	}
};
