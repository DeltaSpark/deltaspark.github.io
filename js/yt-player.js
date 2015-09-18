$('.close-modal').click(function () {
    $('#yt-player').hide();
    $('#yt-player iframe').attr("src", jQuery("#yt-player iframe").attr("src"));
});