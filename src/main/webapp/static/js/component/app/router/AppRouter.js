Castacencio.Router.AppRouter = Backbone.Router.extend({

	// TODO: usescrollspy to load individually.
	routes: {
		'': 'loadModules'
	},

	initialize: function() {
	},

	loadModules: function() {
		if (!Castacencio.Util.readCookie('skipAnimation')) {
			this._loadSplashComponent();
		} else {
			$( '#splash' ).remove();
			$( '#site' ).css('opacity', 1);
			$( '#logo' ).show();
		}

		this._loadNavComponent();
		this._loadHeroComponent();
		this._loadOurStoryComponent();
		this._loadFamilyFriendsComponent();
		this._loadBridalSquadComponent();
		this._loadScrollControllerView();
	},

	_loadSplashComponent: function() {
		Castacencio.view.splashView = new Castacencio.View.SplashView({
			el: $( '#splash' ),
			site: $( '#site' ),
			logo: $( '#logo' )
		});
	},

	_loadNavComponent: function() {
		Castacencio.view.navView = new Castacencio.View.NavView({
			el: $( 'nav' )
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
			el: $( '#bridal-squad' )
		});
	},

	_loadScrollControllerView: function() {
		Castacencio.view.scrollControllerView = new Castacencio.View.ScrollControllerView({

		});
	}

});
