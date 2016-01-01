Castacencio.View.OurStoryView = Backbone.View.extend({

	events: {
		'click a': 'showStory',
		'click .overlay': 'hideStory'
	},

	initialize: function() {
		this.defaultDuration = 250;

		this.overlay = this.$( '.overlay' );

		this.render();
	},

	render: function() {
		return this;
	},

	showStory: function( event ) {
		event.preventDefault();

		this.overlay
			.velocity("fadeIn", { duration: this.defaultDuration, display: "flex" });
	},

	hideStory: function() {
		this.overlay
			.velocity("fadeOut", { duration: this.defaultDuration, display: "none" });
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
