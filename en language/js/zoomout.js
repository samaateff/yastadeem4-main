jQuery(document).ready(function() {
    var all_height = $('.myfooter').height() + $('nav').height() + 350;
    var all_height_t = $('.myfooter').height() + $('nav').height() + 700;

    jQuery('.notifications .tab-pane , .aboutsection , .blogitems').css('min-height', "calc(100vh - " + all_height + "px)");
    jQuery('.contactuss ').css('min-height', "calc(100vh - " + all_height_t + "px)");
});