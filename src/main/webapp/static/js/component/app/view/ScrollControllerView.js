Castacencio.View.ScrollControllerView = Backbone.View.extend({

	initialize: function() {
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: .025,
				reverse: true
			}
		});

		// create a scene
		var scene = new ScrollMagic.Scene({
			//duration: 100,  // the scene should last for a scroll distance of 100px
			offset: 75      // start this scene after scrolling for 50px
		})
			.setPin("nav") // pins the element for the the scene's duration
			.setClassToggle("nav","floating")
			.addTo(controller); // assign the scene to the controller

		var accommodationsScene = new ScrollMagic.Scene({
			triggerElement: '#accommodations',
			duration: $('#accommodations').height()
		})
			.setClassToggle('#accommodations-anchor', 'active')
			.addTo(controller);

		var ourStoryScene = new ScrollMagic.Scene({
			triggerElement: '#our-story',
			duration: $('#our-story').height()
		})
			.setClassToggle('#our-story-anchor', 'active')
			.addTo(controller);

		var familyAndFriendsScene = new ScrollMagic.Scene({
			triggerElement: '#family-and-friends',
			duration: $('#family-and-friends').height()
		})
			.setClassToggle('#family-and-friends-anchor', 'active')
			.addTo(controller);

		var bridalSquadScene = new ScrollMagic.Scene({
			triggerElement: '#bridal-squad',
			duration: $('#bridal-squad').height()
		})
			.setClassToggle('#bridal-squad-anchor', 'active')
			.addTo(controller);

		var giftRegistryScene = new ScrollMagic.Scene({
			triggerElement: '#gift-registry',
			duration: $('#gift-registry').height()
		})
			.setClassToggle('#gift-registry-anchor', 'active')
			.addTo(controller);

		var sneakPeekScene = new ScrollMagic.Scene({
			triggerElement: '#sneak-peek',
			duration: $('#sneak-peek').height()
		})
			.setClassToggle('#sneak-peek-anchor', 'active')
			.addTo(controller);
	},

	render: function() {
		return this;
	}

});
