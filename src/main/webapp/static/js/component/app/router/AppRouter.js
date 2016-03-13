Castacencio.Router.AppRouter = Backbone.Router.extend({

	// TODO: usescrollspy to load individually.
	routes: {
		'': 'render'
	},

	initialize: function() {
		this.splash = $('#splash');
		this.site = $('#site');
		this.logo = $('#logo');
	},

	render: function () {
		if (!Castacencio.Util.readCookie('skipAnimation')) {
			this._loadSplashComponent();
			Backbone.pubSub.on('SPLASH_ANIMATION_END', this.loadModules, this);
		} else {
			this.splash.remove();
			this.logo.show();
			this.loadModules();
		}
	},

	loadModules: function() {
		this._loadNavComponent();
		this._loadHeroComponent();
		this._loadOurStoryComponent();
		this._loadFamilyFriendsComponent();
		this._loadBridalSquadComponent();
		this._loadScrollControllerView();
	},

	_loadSplashComponent: function() {
		Castacencio.view.splashView = new Castacencio.View.SplashView({
			el: this.splash,
			site: this.site,
			logo: this.logo
		});
	},

	_loadNavComponent: function() {
		Castacencio.view.navView = new Castacencio.View.NavView({
			el: $( 'nav.top-navigation' )
		});

		Castacencio.view.hamburgerMenuView = new Castacencio.View.HamburgerMenuView({
			el: $('.nav-button')
		});

		Castacencio.view.overlayNavView = new Castacencio.View.OverlayNavView({
			el: $('.overlay-navigation'),
			hamburgerMenu: Castacencio.view.hamburgerMenuView
		});
	},

	_loadHeroComponent: function() {
		Castacencio.view.heroView = new Castacencio.View.HeroView({
			el: $( '#hero' )
		});
	},

	_loadOurStoryComponent: function() {
		Castacencio.view.ourStoryView = new Castacencio.View.OurStoryView({
			el: $( '#our-story' )
		});
	},

	_loadFamilyFriendsComponent: function() {
		Castacencio.view.familyFriendsView = new Castacencio.View.FriendsFamilyView({
			el: $( '#family-and-friends' )
		});
	},

	_loadBridalSquadComponent: function() {
		Castacencio.view.bridalSquadView = new Castacencio.View.BridalSquadView({
			el: $( '#bridal-squad' ),
			overlay: $('.md-overlay')
		});
	},

	_loadScrollControllerView: function() {
		Castacencio.view.scrollControllerView = new Castacencio.View.ScrollControllerView({});
	}

});
