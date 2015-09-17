$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});

$(function(){
	// Instantiate MixItUp:
	$('.mixitupcontainer').mixItUp();
});