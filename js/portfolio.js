$(document).ready(function() {

    var $status = $('.pagingInfo');
    var $slickElement = $('.single-item');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.typedText(i + '/' + slick.slideCount, 50, function() {});
    });

    if ($('.slide_block').height() > ($(window).height() * 0.6)) {
        $('.slider_navigation').css('background', 'rgba(21,21,21,1)');
    } else {
        $('.slider_navigation').css('background', 'transparent');
    }
    $(window).resize(function() {
        if ($('.slide_block ').height() > ($(window).height() * 0.6)) {
            $('.slider_navigation').css('background', 'rgba(21,21,21,1)');
        } else {
            $('.slider_navigation').css('background', 'transparent');
        }
    });

    cursor.setupEventListeners();

    $('.single-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.slider_navigation_container'),
        fade: true,
        dots: false,
        adaptiveHeight: true
    });

    $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
    $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');

    $('.single-item').slick('refresh');
    cursor.setupEventListeners();

    $(window).resize(function() {
        $('.single-item').slick('refresh');
        $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
        $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
        cursor.setupEventListeners();
    });
    $(window).on('resize orientationchange', function() {
        $('.single-item').slick('refresh');
        $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
        $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
        cursor.setupEventListeners();
    });
    $('header nav ul li:nth-child(2)').click(function() {
        $('.single-item').slick('refresh');
        $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
        $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
        cursor.setupEventListeners();
    });

});