Castacencio.Collection.InstagramImages = Backbone.Collection.extend({

	model: Castacencio.Model.InstagramImage,
	url: 'https://api.instagram.com/v1/tags/loveandcocktails/media/recent?access_token=2782011.467ede5.e13594c3c9884b8386986d5657388691&callback=?',

	startDate: new Date(2016, 1, 1), // February 1, 2016
	blacklist: Castacencio.instagramBlacklist || [],
	imagesAdded: 0,
	numberToFetch: 6,
	maxTagId: 0,

	initialize: function() {
		_.bindAll(this, 'fetchSuccess', 'fetchNextSuccess');

		var	params = this.maxTagId !== 0 ? $.param({
			count: this.numberToFetch,
			max_tag_id: this.maxTagId
		}) : $.param({
			count: this.numberToFetch
		});

		this.fetch({
			success: this.fetchSuccess,
			error: this.fetchError,
			data: params
		});

		this.deferred = new $.Deferred();
	},

	deferred: Function.constructor.prototype,

	fetchSuccess: function (collection) {
		if (this.imagesAdded % 3 !== 0) {
			this.numberToFetch = 3 - (this.imagesAdded % 3);
			this.fetchNext();
		} else {
			this.numberToFetch = 3;
		}

		collection.deferred.resolve();
	},

	fetchError: function (collection) {
		throw new Error("Instagram fetch did not get collection from API.");
	},

	fetchNext: function() {
		var	params = this.maxTagId !== 0 ? $.param({
			count: this.numberToFetch,
			max_tag_id: this.maxTagId
		}) : $.param({
			count: this.numberToFetch
		});

		this.fetch({
			success: this.fetchNextSuccess,
			error: this.fetchError,
			data: params
		});
	},

	fetchNextSuccess: function () {
		Castacencio.view.instagramImageListView.render();

		if (this.imagesAdded % 3 !== 0 && this.url) {
			this.numberToFetch = 3 - (this.imagesAdded % 3);
			this.fetchNext();
		} else {
			this.numberToFetch = 3;
		}
	},

	parse: function(response) {
		var images = _.filter(response.data, function(image) {
			var imageDate = new Date(parseInt(image.created_time) * 1000);

			if (imageDate < this.startDate) {
				this.url = null;
			}

			return (imageDate > this.startDate) &&
				_.indexOf(this.blacklist, image.id) === -1;
		}, this);

		this.imagesAdded += images.length;
		this.maxTagId = response.pagination.next_max_tag_id;

		return images;
	}
});
