Castacencio.View.GalleryItemView = Backbone.View.extend({

	tagName: 'li',
	template: window['Castacencio']['gallery-item-template'],

	events: {
		'click a': 'openBio'
	},

	initialize: function(options) {
		_.bindAll(this, 'animateIn');

		imagesLoaded(this.el, this.animateIn);

		this.overlay = options.overlay;
	},

	render: function() {
		var markup = this.template(this.model.toJSON());
		this.$el.html(markup);

		return this;
	},

	animateIn: function() {
		this.$el.addClass('animate');
	},

	openBio: function(event) {
		event.preventDefault();

		new Castacencio.View.ModalView({
			model: this.model,
			overlay: this.overlay
		});
	}

});
