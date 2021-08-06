$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		speed: 1000,
		autoplay: true,
		// if use fade, do not use autoplaySpeed.
		// autoplaySpeed: 2000,
		cssEase: true,
		dots: false,
		arrows: false
	});
});
