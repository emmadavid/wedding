Castacencio.View.HeroView = Backbone.View.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.slick({
			autoplay: true,
			autoplaySpeed: 10000,
			centerMode: false,
			pauseOnHover: false
		});

		$( '.slick-slide', '#hero' ).each(function() {
			$(this).css('background-position', (this.dataset.fpX * 100) + '%' + ' ' + (this.dataset.fpY * 100) + '%');
		});

		return this;
	}

});
