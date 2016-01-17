Castacencio.View.GalleryItemBioView = Backbone.View.extend({

	className: 'bio',
	template: window[ 'Castacencio' ][ 'gallery-item-bio-template' ],

	events: {
		'click': 'destroy'
	},

	initialize: function() {
		Backbone.pubSub.on( 'DESTROY_BIO', this.destroy, this );
	},

	render: function() {
		var markup = this.template( this.model.toJSON() );
		this.$el.html( markup );

		return this;
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
