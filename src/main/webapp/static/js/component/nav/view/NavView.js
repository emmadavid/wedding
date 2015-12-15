castacencio.NavView = Backbone.View.extend({

	events: {
		'click a': 'scrollToSection'
	},

	initialize: function() {
		this.defaultDuration = 250;

		this.render();
	},

	render: function() {
		return this;
	},

	scrollToSection: function( event ) {
		event.preventDefault();

		$( event.target.hash )
			.velocity("scroll", { duration: this.defaultDuration }, 'easeInSine');
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
