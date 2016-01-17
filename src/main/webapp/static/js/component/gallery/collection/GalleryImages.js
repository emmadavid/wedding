Castacencio.Collection.GalleryImages = Backbone.Collection.extend({

	model: Castacencio.Model.GalleryImage,

	initialize: function() {
		this.reset(Castacencio.settings.gallery);
	}

});

Castacencio.collection.galleryImages = new Castacencio.Collection.GalleryImages();
