castacencio.AppView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		this.splashComponent();
		this.heroComponent();
		this.navComponent();
		this.ourStoryComponent();

		return this;
	},

	splashComponent: function() {
		new castacencio.SplashView({
			el: this.$( '#splash' ),
			site: this.$( '#site' ),
			logo: this.$( '#logo' )
		});
	},

	navComponent: function() {
		new castacencio.NavView({
			el: this.$( 'nav' )
		});
	},

	heroComponent: function() {
		new castacencio.HeroView({
			el: this.$( '#hero' )
		});
	},

	ourStoryComponent: function() {
		new castacencio.OurStoryView({
			el: this.$( '#our-story' )
		});
	}

});
