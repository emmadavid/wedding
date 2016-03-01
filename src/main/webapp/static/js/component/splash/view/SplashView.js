Castacencio.View.SplashView = Backbone.View.extend({

	initialize: function( options ) {
		_.bindAll(this, 'fadeOutSplashImage', 'shrinkMonogram', 'fadeInSite', 'destroy');

		this.defaultDuration = 1000;

		this.site = options.site;
		this.logo = options.logo;

		this.flower = this.$('#splash-layer-petals, #splash-layer-flowers');
		this.monogram = this.$('#splash-layer-monogram');

		this.render();
	},

	render: function() {
		this.site.hide();
		this.slideUpSplashImage();

		return this;
	},

	slideUpSplashImage: function() {
		this.$el.velocity('transition.slideUpIn', {
			duration: this.defaultDuration,
			complete: this.fadeOutSplashImage
		});
	},

	fadeOutSplashImage: function() {
		this.flower.delay(this.defaultDuration * 1.85).velocity({
			opacity: 0
		}, {
			duration: this.defaultDuration,
			begin: this.shrinkMonogram
		});
	},

	shrinkMonogram: function() {
		this.monogram.velocity({
			height: '250px',
			left: '-22px',
			opacity: '.8',
			top: '-19px',
			width: '100%'
		},{
			duration: this.defaultDuration,
			complete: this.fadeInSite
		});
	},

	fadeInSite: function() {
		this.site.show();
		this.site.css({
			'opacity': 0
		});
		this.setCookie();
		this.destroy();
	},

	setCookie: function() {
		Castacencio.Util.createCookie('skipAnimation', true, ( 1/24 ));
	},

	destroy: function() {
		Backbone.pubSub.trigger('SPLASH_ANIMATION_END', {});

		this.site.css({
			'opacity': 1
		});

		this.logo.show();
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
