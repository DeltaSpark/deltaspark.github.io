jQuery(document).bind('hidden.bs.modal', function() {
    var vid = jQuery('#monologueForThree iframe[src*="youtube"]');
    if ( vid.length > 0 ){
        var src = vid.attr('src');
        vid.attr('src', '');
        vid.attr('src', src);
    }
});