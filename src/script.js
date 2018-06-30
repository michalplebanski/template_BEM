
$('a[href^="#"]').on('click', function(event) {
	var target = $( $(this).attr('href') );
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});

var btnTravel = $('.traveling-button'),
	btnContact = $('.input-button'),
	btnNav = $('.search-button'),
	fb = $('.facebook'),
	linkedin = $('.linkedin');

btnTravel.click(function() {
	window.open('https://www.google.com/');
});

btnContact.click(function() {
	window.open('https://www.google.com/');
});

btnNav.click(function() {
	window.open('https://www.google.com/');
});

fb.click(function() {
	window.open('https://www.facebook.com/');
});

linkedin.click(function() {
	window.open('https://www.linkedin.com/');
});



	