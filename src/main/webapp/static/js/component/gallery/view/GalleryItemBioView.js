Castacencio.View.GalleryItemBioView = Backbone.View.extend({

	template: window[ 'Castacencio' ][ 'gallery-item-bio-template' ],

	initialize: function() {},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	}

});
