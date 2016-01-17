Castacencio.View.GalleryItemView = Backbone.View.extend({

	tagName: 'li',
	className: 'gallery-item',
	template: window[ 'Castacencio' ][ 'gallery-item-template' ],

	events: {
		'click a': 'renderBio'
	},

	initialize: function( options ) {
		this.gentsSection = options.gentsSection;
	},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	},

	renderBio: function(event ) {
		event.preventDefault();

		Backbone.pubSub.trigger( 'DESTROY_BIO', {} );

		var bio = new Castacencio.View.GalleryItemBioView({
			model: this.model
		});

		bio.render().$el.appendTo( this.gentsSection );
	}

});
