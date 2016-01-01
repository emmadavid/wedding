module.exports = function( grunt ) {
	grunt.registerTask( 'default',
		[
			'sass',
			'jst',
			'closurecompiler'
		]
	);
};
