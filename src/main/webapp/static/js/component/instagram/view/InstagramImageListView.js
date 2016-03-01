Castacencio.View.InstagramImageListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'instagram-images',

	itemCount: 0,

	initialize: function(options) {
		this.container = options.container;
		this.nextButton = options.nextButton;
	},

	render: function() {
		if (this.collection.length > 0) {
			_.each(this.collection.models, function(image) {
				this.renderItem(image);
			}, this);

			this.$el.prependTo(this.container);
		}

		if (!this.collection.url) {
			this.nextButton.remove();
		}

		return this;
	},

	fetchNext: function() {
		this.collection.fetchNext();
	},

	renderItem: function (model) {
		var item = new Castacencio.View.InstagramImageView({
			model: model
		});

		this.itemCount++;
		item.render().$el.appendTo(this.$el);

		if (this.itemCount % 3 === 0) {
			this.appendLineBreak();
		}
	},

	appendLineBreak: function() {
		$('<li class="line-break"></li>').appendTo(this.$el);
	}
});
