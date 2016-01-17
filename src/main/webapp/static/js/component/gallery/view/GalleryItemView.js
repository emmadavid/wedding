Castacencio.View.GalleryItemView = Backbone.View.extend({

	tagName: 'li',
	className: 'gallery-item',
	template: window[ 'Castacencio' ][ 'gallery-item-template' ],

	events: {
		'click a': 'renderBio'
	},

	initialize: function( options ) {
		this.bioSection = options.bioSection;
	},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	},

	renderBio: function(event ) {
		event.preventDefault();

		var bio = new Castacencio.View.GalleryItemBioView({
			model: this.model
		});

		this.bioSection.empty();
		bio.render().$el.appendTo( this.bioSection );

		this.bioSection.show();
	}

});
