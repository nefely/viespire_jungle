$(document).ready(function() {

    if (window.matchMedia('(max-width: 1200px)').matches) {} else {
        $("body").mousemove(function(e) {
            let screenWidth = $(window).width();
            let screenHeight = $(window).height();
            $(".parallax").css({
                transform: "translate(-" + e.pageX / screenWidth * 100 + "px, -" + e.pageY / screenHeight * 100 + "px)"
            });
            $(".parallax_img").css({
                transform: "translate(-" + e.pageX / screenWidth * 30 + "px, -" + e.pageY / screenHeight * 30 + "px)"
            });
            $(".parallax_main_img").css({
                transform: "translate(" + e.pageX / screenWidth * 20 + "px, " + e.pageY / screenHeight * 20 + "px)"
            });
        });
    }

});