Castacencio.View.GalleryImageBioView = Backbone.View.extend({

	template: window[ 'Castacencio' ][ 'gallery-image-bio-template' ],

	initialize: function() {},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	}

});
