Castacencio.View.BridalSquadView = Backbone.View.extend({

	events: {
		'click .ladies-half': 'enableLadiesHalf',
		'click .gents-half': 'enableGentsHalf'
	},

	initialize: function() {
		this.ladiesSection = this.$('.ladies-half');
		this.gentsSection = this.$('.gents-half');

		Castacencio.view.galleryItemListView = new Castacencio.View.GalleryItemListView({
			collection: Castacencio.collection.galleryItems,
			ladiesSection: this.ladiesSection,
			ladiesGallery: this.$( '.gallery, ladies-half' ),
			ladiesBio: $('.bio', '.gents-half'),
			gentsGallery: this.$( '.gallery, gents-half' ),
			gentsBio: $('.bio', '.ladies-half')
		});

		this.render();
	},

	render: function() {
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
