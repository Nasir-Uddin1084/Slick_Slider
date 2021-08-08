$(document).ready(function () {
	// slider1 js start
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
	// slider1 js end
	// slider2 js start
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		Speed: 2500,
		autoplay: true,
		dots: false,
		cssEase: true,
		arrows: false,
	});
	// slider2 js end
	// slider3 js start
	$('.slider3').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
	});
	// slider3 js end
	// slider4 js start
	$('.slide4').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		// autoplaySpeed: 1500,
		fade: true,
		// speed: 1500,
		cssEase: true,
		prevArrow: '.left-arrow',
		nextArrow: '.right-arrow',
	});
	// slider4 js end
});
