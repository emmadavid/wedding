/**
 * Compile Sass to CSS using node-sass.
 */

'use strict';

var project = require( '../config/project' );

module.exports = {
	sass: {
		options: {
			includePaths: [
				require( 'bourbon' ).includePaths,
				'node_modules/bourbon-neat/app/assets/stylesheets'
			]
		},
		dist: {
			src: [ project.scss.files ],
			dest: project.sqs.stylePath + '/app.css'
		}
	}
};
