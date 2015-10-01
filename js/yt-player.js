/*
    yt-player.js - Used in: cmp/camphisierra.html
    
    Code will force an iframe in the #monologueForThree modal window and with 
    content from youtube to reload when the modal window is closed.

    This is done to force the YouTube video to stop playing when the user 
    closes the window, and to reset should they choose to open again.
*/

jQuery(document).bind('hidden.bs.modal', function() {
    var vid = jQuery('#monologueForThree iframe[src*="youtube"]');
    if ( vid.length > 0 ){
        var src = vid.attr('src');
        vid.attr('src', '');
        vid.attr('src', src);
    }
});