castacencio.NavView = Backbone.View.extend({

	initialize: function() {
		console.log('NavView');
		console.dir(this.$el);
		this.render();
	},

	render: function() {
		return this;
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
