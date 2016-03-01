window.Castacencio = window.Castacencio || {};
Castacencio.View = Castacencio.View || {};

Castacencio.View.preload = function() {
	var $elements = $('body').find('img[src]');
	$('body [style]').each(function() {
		var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
		if (src && src != 'none') {
			$elements = $elements.add($('<img src="' + src + '"/>'));
		}
	});

	var $loading = $('#loader-container');
	var $loadPercentageLine = $('#loader-percentage-line');
	var $loadPercentageText = $('#loader-percentage');
	var elementsLoaded = 0;
	var speed = 1000;

	function animatePercentage(e) {
		$loadPercentageText.text(parseInt(e));
	}

	function loading() {
		var percentage = 0;
		if ($elements.length) {
			percentage = parseInt((elementsLoaded / $elements.length) * 100);
		}

		$loadPercentageLine.stop().animate({
			width: percentage + '%'
		}, speed);

		$loading.stop().animate({
			percentage: percentage
		}, {
			duration: speed,
			step: animatePercentage
		});
	}

	function loadingFinish() {
		var percentage = 100;

		$loadPercentageLine.stop().animate({
			width: percentage + '%'
		}, (speed / 2));

		$loading.stop().animate({
				percentage: percentage
			}, {
				duration: (speed / 2),
				step: animatePercentage
			})
			.css({
				opacity: 1
			}).animate({
			opacity: 0
		}, function() {
			$loading.css({
				display: 'none'
			});

			$('#site').css({
				opacity: 1
			});
		});

		Backbone.history.start();
	}

	if ($elements.length) {
		loading();

		$elements.load(function() {
			$(this).off('load');
			elementsLoaded++;
			loading();
		});
	}

	$(window).load(function() {
		loadingFinish();
	});
};

$(function() {
	Castacencio.View.preload();
});
