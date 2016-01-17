Castacencio.Collection.GalleryItems = Backbone.Collection.extend({

	model: Castacencio.Model.GalleryItem,

	initialize: function() {
		this.reset( Castacencio.settings.gallery );
	}

});

Castacencio.collection.galleryItems = new Castacencio.Collection.GalleryItems();
