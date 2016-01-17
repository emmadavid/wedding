'use strict';

var project = require( '../config/project' );

module.exports = {
	closurecompiler: {
		minify: {
			files: {
				[ project.js.out ]: project.js.in
			},
			options: {
				"compilation_level": "SIMPLE_OPTIMIZATIONS",
				"max_processes": 5,
				"banner": "/* hello world! */",
				"jscomp_off": "uselessCode",
				"warning_level": "QUIET"
			}
		}
	}
};
