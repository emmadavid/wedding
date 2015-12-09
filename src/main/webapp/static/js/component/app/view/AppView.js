castacencio.AppView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		this.splashComponent();
		this.heroComponent();
		this.navComponent();

		return this;
	},

	splashComponent: function() {
		var splashView = new castacencio.SplashView({
			el: this.$( '#splash' ),
			site: this.$(  '#site' ),
			logo: this.$( '#logo' )
		});
	},

	navComponent: function() {
		var navView = new castacencio.NavView({
			el: this.$( 'nav' )
		});
	},

	heroComponent: function() {
		var heroView = new castacencio.HeroView({
			el: this.$( '#hero' )
		});
	}

});
