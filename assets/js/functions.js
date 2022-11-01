(function ($) {
	"use strict";
	var $bgSection = $(".bg-section");
	$bgSection.each(function () {
		var bgSrc = $(this).children("img").attr("src");
		var bgUrl = "url(" + bgSrc + ")";
		$(this).parent().css("backgroundImage", bgUrl);
		$(this).parent().addClass("bg-section");
		$(this).remove();
	});
	var $navAffix = $(".header-fixed .navbar-fixed-top");
	$navAffix.affix({
		offset: {
			top: 50,
		},
	});
	$(".carousel").each(function () {
		var $Carousel = $(this);
		$Carousel.owlCarousel({
			loop: $Carousel.data("loop"),
			autoplay: $Carousel.data("autoplay"),
			margin: $Carousel.data("space"),
			nav: $Carousel.data("nav"),
			dots: $Carousel.data("dots"),
			dotsSpeed: $Carousel.data("speed"),
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: $Carousel.data("slide-res"),
				},
				1000: {
					items: $Carousel.data("slide"),
				},
			},
		});
	});
	var aScroll = $('a[data-scroll="scrollTo"]');
	aScroll.on("click", function (event) {
		var target = $($(this).attr("href"));
		if (target.length) {
			event.preventDefault();
			$("html, body").animate(
				{
					scrollTop: target.offset().top - 100,
				},
				600
			);
		}
	});
	var wow = new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 50,
		mobile: false,
		live: true,
	});
	wow.init();
})(jQuery);
