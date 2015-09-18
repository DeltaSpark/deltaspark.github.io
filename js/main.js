// Forces the iframe to reload when the modal window closes
// Causes so that when user clicks on modal again, it appears as a new link

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(function(){
	// Instantiate MixItUp:
	$('.mixitupcontainer').mixItUp();
});

