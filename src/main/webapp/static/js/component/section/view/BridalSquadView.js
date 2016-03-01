Castacencio.View.BridalSquadView = Backbone.View.extend({

	events: {
		'click .ladies': 'openGallery',
		'click .gents': 'openGallery',
		'click h2 a': 'openGallery',
		'click .close-overlay': 'closeGallery'
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
		event.preventDefault();

		this.$el.addClass(event.currentTarget.className);
		$('html').addClass('no-scroll');
		this.loadGallery(event.currentTarget.className);
	},

	closeGallery: function() {
		$('html').removeClass('no-scroll');
		this.unloadGallery();
		this.$el.removeClass('open gents ladies');
	},

	loadGallery: function(gallery) {
		this.activeGallery = this.galleries[gallery];
		this.activeGallery.$el.appendTo(this.$el);
	},

	unloadGallery: function(gallery) {
		this.activeGallery.$el.detach();
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
