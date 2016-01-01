/**
 * Grunt path configuration.
 */

var path = require('path'),
	sqsPath = path.normalize(process.cwd() + '/sqs'),
	sqsStylePath = path.normalize(sqsPath + '/styles'),
	sqsScriptPath = path.normalize(sqsPath + '/scripts'),
	gruntConfigPath = path.normalize(process.cwd() + '/grunt/config'),
	srcPath = path.normalize(process.cwd() + '/src'),
	jsPath = path.normalize(srcPath + '/main/webapp/static/js'),
	scssPath = path.normalize(srcPath + '/main/scss'),
	scssFiles = path.normalize(scssPath + '/**.scss'),
	templateFiles = path.normalize(jsPath + '/component/**/*.html');

module.exports = {

	sqs: {
		path: sqsPath,
		stylePath: sqsStylePath,
		scriptPath: sqsScriptPath
	},

	js: {
		path: jsPath,
		in: [
			jsPath + '/vendor/jquery-2.1.4.min.js',
			jsPath + '/vendor/slick.min.js',
			jsPath + '/vendor/velocity.min.js',
			jsPath + '/vendor/velocity.ui.js',
			jsPath + '/vendor/underscore-min.js',
			jsPath + '/vendor/backbone-min.js',

			jsPath + '/main.js',
			jsPath + '/templates.js',

			jsPath + '/component/splash/view/SplashView.js',

			jsPath + '/component/nav/view/NavView.js',

			jsPath + '/component/hero/view/HeroView.js',

			jsPath + '/component/section/view/OurStoryView.js',
			jsPath + '/component/section/view/FriendsFamilyView.js',

			jsPath + '/component/instagram/model/InstagramImage.js',
			jsPath + '/component/instagram/collection/InstagramImages.js',
			jsPath + '/component/instagram/view/InstagramImageListView.js',
			jsPath + '/component/instagram/view/InstagramImageView.js',

			jsPath + '/component/app/router/AppRouter.js'
		],
		out: sqsScriptPath + '/app.js'
	},

	scss: {
		path: scssPath,
		files: scssFiles
	},

	template: {
		files: templateFiles
	},

	grunt: {
		config: {
			path: gruntConfigPath
		}
	}

};
