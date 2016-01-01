Castacencio.View.InstagramImageView = Backbone.View.extend({

	tagName: 'li',
	className: 'instagram-image',
	template: window[ 'Castacencio' ][ 'instagram-image-template' ],

	initialize: function() {
	},

	render: function() {
		var url = this.model.get('images').thumbnail.url;
		url = url.replace(/s150x150/g, 's640x640');
		this.model.set( 'imgSrc', url.replace( /s150x150/g, 's640x640' ) );
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	}

});
