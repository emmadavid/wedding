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
			this.renderLadyItem( lady );
		}, this);

		this.$el.appendTo( this.ladiesSection );

		return this;
	},

	renderLadyItem: function ( model ) {
		var item = new Castacencio.View.GalleryItemView({
			model: model,
			gentsSection: this.gentsSection
		});

		item.render().$el.appendTo( this.$el );
	}

});
