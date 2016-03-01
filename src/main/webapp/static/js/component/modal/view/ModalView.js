Castacencio.View.ModalView = Backbone.View.extend({

	tagName: 'div',
	className: 'md-modal md-effect-12',

	template: window['Castacencio']['modal-template'],

	events: {
		'click': 'hideModal'
	},

	initialize: function(options) {
		_.bindAll(this, 'hideModal');

		this.overlay = options.overlay;
		this.overlay.on('click', this.hideModal);

		this.render();
	},

	render: function() {
		var markup = this.template(this.model.toJSON());
		this.$el.html(markup);
		this.$el.insertBefore(this.overlay);
		this.showModal();

		return this;
	},
	
	showModal: function() {
		this.$el.addClass('md-show');
		$('html').addClass('no-scroll');
	},

	hideModal: function(event) {
		event.preventDefault();

		var that = this;
		this.$el.removeClass('md-show');
		$('html').removeClass('no-scroll');
		this.$el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			that.destroy();
		});
	},

	destroy: function() {
		this.$el.remove();

		this.undelegateEvents();
		this.remove();

		Backbone.View.prototype.remove.call( this );
	}

});
