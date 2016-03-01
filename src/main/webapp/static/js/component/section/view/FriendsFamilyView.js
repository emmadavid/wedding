Castacencio.View.FriendsFamilyView = Backbone.View.extend({

	events: {
		'click .next': 'fetchNext'
	},

	initialize: function() {
		Castacencio.collection.instagramImages = new Castacencio.Collection.InstagramImages();

		Castacencio.view.instagramImageListView = new Castacencio.View.InstagramImageListView({
			container: this.$('.instagram'),
			collection: Castacencio.collection.instagramImages,
			nextButton: this.$('.next')
		});

		Castacencio.collection.instagramImages.deferred.done(function() {
			Castacencio.view.instagramImageListView.render();
		});

		this.render();
	},

	render: function() {
		window.fitText(document.getElementById("hashtag"));

		return this;
	},

	// TODO: Cleanup pagination code.
	fetchNext: function(event) {
		event.preventDefault();

		Castacencio.view.instagramImageListView.fetchNext();
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call(this);
	}

});
