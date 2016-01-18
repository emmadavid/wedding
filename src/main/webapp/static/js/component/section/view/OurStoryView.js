Castacencio.View.OurStoryView = Backbone.View.extend({

	events: {
		'click #story-emma': 'showEmmaStory',
		'click #story-david': 'showDavidStory',
		'click .overlay': 'hideStory'
	},

	initialize: function() {
		this.defaultDuration = 250;

		this.overlay = this.$( '.overlay' );
		this.emmaOverlay = this.$( '.overlay.emma' );
		this.davidOverlay = this.$( '.overlay.david' );

		this.render();
	},

	render: function() {
		return this;
	},

	showEmmaStory: function( event ) {
		event.preventDefault();

		this.emmaOverlay
			.velocity("fadeIn", { duration: this.defaultDuration, display: "flex" });
	},

	showDavidStory: function( event ) {
		event.preventDefault();

		this.davidOverlay
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
