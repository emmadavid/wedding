Castacencio.View.HamburgerMenuView = Backbone.View.extend({

	events: {
		'click': 'toggle'
	},

	initialize: function() {
		this.bar1 = this.$('b:nth-child(1)');
		this.bar3 = this.$('b:nth-child(3)');

		this.render();
	},

	render: function() {
		return this;
	},

	toggle: function() {
		this.$el.toggleClass('active');

		if (this.$el.hasClass('active')) {
			$('html').addClass('no-scroll');
			this.bar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
			this.bar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
				.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
			this.$el.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
		} else {
			$('html').removeClass('no-scroll');
			this.$el.velocity("reverse");
			this.bar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
				.velocity({ top: "100%" }, {duration: 200, easing: "swing"});
			this.bar1.velocity("reverse", {delay: 800});
		}
	},

});
