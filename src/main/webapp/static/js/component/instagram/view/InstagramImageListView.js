Castacencio.View.InstagramImageListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'instagram-images',

	initialize: function( options ) {
		this.container = options.container;
	},

	render: function() {
		// TODO: switch out for underscore.
		for ( var i = 0; i < this.collection.length; i++ ) {
			this.renderItem( this.collection.models[ i ] );
		}

		this.$el.prependTo( this.container );

		return this;
	},

	fetchNext: function() {
		this.collection.fetchNext();
	},

	renderItem: function ( model ) {
		var item = new Castacencio.View.InstagramImageView({
			model: model
		});

		item.render().$el.appendTo( this.$el );
	}

});
