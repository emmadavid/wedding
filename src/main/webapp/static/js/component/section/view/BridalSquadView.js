Castacencio.View.BridalSquadView = Backbone.View.extend({

	events: {
		'click > div': 'openGallery'
	},

	initialize: function(options) {
		this.overlay = options.overlay;
		this.galleries = {};

		this.render();
	},

	render: function() {
		var ladies = [];
		var gents = [];

		_.each(Castacencio.collection.galleryItems.models, function(item) {
			if (_.contains( item.get('tags'), 'ladies')) {
				ladies.push(item);
			} else if (_.contains(item.get('tags'), 'gents')) {
				gents.push(item);
			}
		}, this);

		this.galleries.ladies = new Castacencio.View.GalleryItemListView({
			collection: ladies,
			overlay: this.overlay
		});

		this.galleries.gents = new Castacencio.View.GalleryItemListView({
			collection: gents,
			overlay: this.overlay
		});

		return this;
	},

	openGallery: function(event) {
		this.$el.toggleClass('open');
		this.loadGallery(event.currentTarget.className);
	},

	loadGallery: function(gallery) {
		this.galleries[gallery].$el.appendTo(this.$el);
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
