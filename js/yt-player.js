// Forces the iframe to reload when the modal window closes
// Causes so that when user clicks on modal again, it appears as a new link

jQuery(document).bind('hidden.bs.modal', function() {
    var vid = jQuery('#monologueForThree iframe[src*="youtube"]');
    if ( vid.length > 0 ){
        var src = vid.attr('src');
        vid.attr('src', '');
        vid.attr('src', src);
    }
});