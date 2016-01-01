'use strict';

var project = require( '../config/project' );

module.exports = {
	jst: {
		compile: {
			options: {
				namespace: 'Castacencio',
				processName: function( filename ) {
					var name = filename.split( '/' ).pop();

					return name.substr( 0, name.lastIndexOf( '.' ) );
				},
				templateSettings: {
					variable: 'data'
				}
			},
			files: {
				[ project.js.path + '/templates.js' ]: project.template.files
			}
		}
	}
};
