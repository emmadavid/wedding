Castacencio.View.OverlayNavView = Backbone.View.extend({

	events: {
		'click a': 'scrollToSection'
	},

	initialize: function(options) {
		this.hamburgerMenu = options.hamburgerMenu;

		this.render();
	},

	render: function() {
		return this;
	},

	scrollToSection: function(event) {
		event.preventDefault();

		this.hamburgerMenu.toggle();

		$(event.target.hash)
			.velocity('scroll', { duration: this.defaultDuration }, 'easeInSine');
	}

});
