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

		$('html').addClass('no-scroll');

		this.emmaOverlay
			.velocity("fadeIn", { duration: this.defaultDuration, display: "block" });
	},

	showDavidStory: function( event ) {
		event.preventDefault();

		$('html').addClass('no-scroll');

		this.davidOverlay
			.velocity("fadeIn", { duration: this.defaultDuration, display: "block" });
	},

	hideStory: function() {
		$('html').removeClass('no-scroll');

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
