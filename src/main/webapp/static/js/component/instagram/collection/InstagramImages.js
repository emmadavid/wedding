Castacencio.Collection.InstagramImages = Backbone.Collection.extend({

	model: Castacencio.Model.InstagramImage,
	url: 'https://api.instagram.com/v1/tags/dribbble/media/recent?access_token=2782011.467ede5.e13594c3c9884b8386986d5657388691&count=4&callback=?',

	initialize: function( models, options ) {
		this.fetch({
			success: this.fetchSuccess,
			error: this.fetchError
		});

		this.deferred = new $.Deferred();
	},

	deferred: Function.constructor.prototype,

	fetchSuccess: function ( collection, response ) {
		collection.deferred.resolve();
	},

	fetchError: function ( collection, response ) {
		throw new Error( "Instagram fetch did not get collection from API" );
	},

	fetchNext: function() {
		// TODO: Remove repeating code.
		this.fetch({
			success: this.fetchNextSuccess,
			error: this.fetchError
		});
	},

	fetchNextSuccess: function ( collection, response ) {
		Castacencio.view.instagramImageListView.render();
	},

	parse: function( response ) {
		// TODO: handle case when at end of pagination.
		this.url = response.pagination.next_url + '&callback=?';

		return response.data;
	}

});

Castacencio.collection.instagramImages = new Castacencio.Collection.InstagramImages();
