$(document).ready(function () {
	// slider1
	$('.slider1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		speed: 1500,
		autoplay: true,
		// if use fade, do not use autoplaySpeed.
		// autoplaySpeed: 2000,
		cssEase: true,
		dots: false,
		arrows: false,
	});
	// slider2
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		dots: false,
		cssEase: false,
		arrows: false,
	});
});
