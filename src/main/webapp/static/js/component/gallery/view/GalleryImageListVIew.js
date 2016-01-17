Castacencio.View.GalleryImageListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'gallery-images',

	initialize: function( options ) {
		this.ladiesGallery = options.ladiesGallery;
		this.gentsGallery = options.gentsGallery;
		this.ladiesBio = options.ladiesBio;
		this.gentsBio = options.gentsBio;

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

		this.$el.prependTo( this.ladiesGallery );

		return this;
	},

	renderLadyItem: function ( model ) {
		var item = new Castacencio.View.GalleryImageView({
			model: model,
			bioSection: this.ladiesBio
		});

		item.render().$el.appendTo( this.$el );
	}

});
