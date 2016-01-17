Castacencio.View.BridalSquadView = Backbone.View.extend({

	events: {
		'click .ladies-half': 'enableLadiesHalf',
		'click .gents-half': 'enableGentsHalf'
	},

	initialize: function() {
		this.ladiesSection = this.$('.ladies-half');
		this.gentsSection = this.$('.gents-half');

		this.render();
	},

	render: function() {
		var ladies = [];
		var gents = [];

		_.each( Castacencio.collection.galleryItems.models, function( item ) {
			if ( _.contains( item.get( 'tags' ), 'ladies' ) ) {
				ladies.push( item );
			} else if ( _.contains( item.get( 'tags' ), 'gents' ) ) {
				gents.push( item );
			}
		}, this);

		Castacencio.view.ladiesGalleryItemListView = new Castacencio.View.GalleryItemListView({
			collection: ladies,
			bioSection: this.gentsSection,
			gallerySection: this.ladiesSection
		});

		Castacencio.view.gentsGalleryItemListView = new Castacencio.View.GalleryItemListView({
			collection: gents,
			bioSection: this.ladiesSection,
			gallerySection: this.gentsSection
		});

		return this;
	},

	enableLadiesHalf: function(event) {
		event.preventDefault();

		this.ladiesSection.removeClass( 'inactive' ).addClass('active');
		this.gentsSection.removeClass( 'active' ).addClass('inactive');
	},

	enableGentsHalf: function(event) {
		event.preventDefault();

		this.gentsSection.removeClass( 'inactive' ).addClass('active');
		this.ladiesSection.removeClass( 'active' ).addClass('inactive');
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
