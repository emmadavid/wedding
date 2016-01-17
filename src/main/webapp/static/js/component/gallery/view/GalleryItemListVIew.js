Castacencio.View.GalleryItemListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'gallery',

	initialize: function( options ) {
		this.ladiesSection = options.ladiesSection;
		this.ladiesGallery = options.ladiesGallery;
		this.gentsSection = options.gentsSection;
		this.gentsGallery = options.gentsGallery;

		this.render();
	},

	render: function() {
		var gents = [];
		var ladies = [];

		_.each( this.collection.models, function( item ) {
			if ( _.contains( item.get( 'tags' ), 'ladies' ) ) {
				ladies.push( item );
			} else if ( _.contains( item.get( 'tags' ), 'gents' ) ) {
				gents.push( item );
			}
		}, this);

		_.each( ladies, function( lady ) {
			this.renderGalleryItem( lady, this.gentsSection );
		}, this);
		this.$el.appendTo( this.ladiesSection );

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
