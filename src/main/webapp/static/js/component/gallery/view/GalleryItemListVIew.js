Castacencio.View.GalleryItemListView = Backbone.View.extend({

	tagName: 'ul',
	className: 'gallery overlay',
	closeTemplate: '<li class="close"><a class="close-overlay" style="transform: rotateZ(135deg);"><b class="" style="top: 50%;"></b><b></b><b class="" style="top: 50%; transform: rotateZ(90deg);"></b></a></li>',

	initialize: function(options) {
		this.overlay = options.overlay;

		this.render();
	},

	render: function() {
		this.galleryItems = document.createDocumentFragment();

		//var galleryRow = document.createDocumentFragment();
		//var li = document.createElement("li");
		//var template = '<li class="gallery-row"><ul></ul></li>';

		_.each(this.collection, function(item) {
			this.renderGalleryItem(item);
		}, this);


		this.el.appendChild(this.galleryItems);
		this.$el.wrapInner('<li class="gallery-row"><ul></ul></li>');

		//var newEl = $(template).find('ul').append(this.galleryItems);
		//console.dirxml($(this.galleryItems).wrapAll(template));
		//this.$el.append(newEl);

		$(this.closeTemplate).prependTo(this.$el);

		return this;
	},

	renderGalleryItem: function (model) {
		var item = new Castacencio.View.GalleryItemView({
			model: model,
			overlay: this.overlay
		});

		//return item.render().el;
		//item.render().$el.appendTo()
		this.galleryItems.appendChild(item.render().el);

		//if (index === 0 || index === 3) {
		//	item.render().$el.wrap('<li class="gallery-row"><ul></ul></li>').parent().appendTo(this.$el);
		//} else {
		//	item.render().$el.appendTo(this.$el.find('ul').last());
		//}
	}

});
