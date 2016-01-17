Castacencio.View.GalleryItemListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'gallery',

	initialize: function( options ) {
		this.bioSection = options.bioSection;
		this.gallerySection = options.gallerySection;

		this.render();
	},

	render: function() {
		_.each( this.collection, function( item ) {
			this.renderGalleryItem( item, this.bioSection );
		}, this);

		this.$el.appendTo( this.gallerySection );

		return this;
	},

	renderGalleryItem: function ( model, bioSection ) {
		var item = new Castacencio.View.GalleryItemView({
			model: model,
			bioSection: bioSection
		});

		item.render().$el.appendTo( this.$el );
	}

});
