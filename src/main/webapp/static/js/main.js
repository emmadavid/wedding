// App
window.Castacencio = window.Castacencio || {};

// Classes
Castacencio.Model = Castacencio.Model || {};
Castacencio.Collection = Castacencio.Collection || {};
Castacencio.View = Castacencio.View || {};
Castacencio.Router = Castacencio.Router || {};
Castacencio.Util = Castacencio.Util || {};

// Instances
Castacencio.model = Castacencio.model || {};
Castacencio.collection = Castacencio.collection || {};
Castacencio.view = Castacencio.view || {};
Castacencio.router = Castacencio.router || {};

// Settings
Castacencio.settings = {
	accessToken: '2782011.467ede5.e13594c3c9884b8386986d5657388691',
	gallery: window.gallery
};

$( function() {
	// Kick off app initialization.
	Castacencio.router.appRouter = new Castacencio.Router.AppRouter();
	Backbone.pubSub = _.extend( {}, Backbone.Events );

	Castacencio.Util.createCookie = function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	};

	Castacencio.Util.readCookie = function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	};

	Castacencio.Util.eraseCookie = function(name) {
		Castacencio.Util.createCookie(name, "", -1);
	};
});

/**
 * A basic JavaScript file that refreshes the Squarespace ImageLoader. For more
 * information about writing custom JavaScript on a Squarespace developer site
 * visit the link below.
 * @see http://developers.squarespace.com/custom-javascript/
 *
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */
(function() {
	'use strict';

	// Stop the script if the user is on an old browser.
	// Browser support: http://caniuse.com/#search=queryselectorall
	if (!document.querySelectorAll) {
		return;
	}

	/**
	 * Loads all images on the page using Squarespace's Responsive ImageLoader.
	 *
	 * @method loadImages
	 * @see http://developers.squarespace.com/using-the-imageloader/
	 */
	function loadAllImages() {
		var images = document.querySelectorAll('img[data-src]' );

		for (var i = 0; i < images.length; i++) {
			ImageLoader.load(images[i]);
		}
	}

	// The event subscription that reloads images on resize.
	document.addEventListener('resize', loadAllImages);
}());
