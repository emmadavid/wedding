Castacencio.View.GalleryItemListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'gallery',

	initialize: function(options) {
		this.overlay = options.overlay;

		this.render();
	},

	render: function() {
		_.each(this.collection, function(item) {
			this.renderGalleryItem(item);
		}, this);

		return this;
	},

	renderGalleryItem: function (model) {
		var item = new Castacencio.View.GalleryItemView({
			model: model,
			overlay: this.overlay
		});

		item.render().$el.appendTo(this.$el);
	}

});
