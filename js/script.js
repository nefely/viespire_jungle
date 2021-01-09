$(document).ready(function() {

    $('section:not(.home_section)').fadeOut(100);

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $(window).on('orientationchange resize', function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    $("body").on('mouseover', 'a', function(e) {
        var $link = $(this),
            href = $link.attr('href') || $link.data("href");

        $link.off('click.chrome');
        $link.on('click.chrome', function() {
                window.location.href = href;
            })
            .attr('data-href', href)
            .css({
                cursor: 'pointer'
            })
            .removeAttr('href');
    });

    $('header .logo > button, header nav > div > ul > li > button').click(function() {
        $(document.body).animate({
            scrollTop: 0
        }, 100);
        $('section.' + $(this).attr('class') + '_section').fadeIn(600);
        $('section:not(.' + $(this).attr('class') + '_section)').fadeOut(600);
        $('header').removeClass('active');
        $('.navigation_btn').removeClass('active');
        $('#nav-icon3').removeClass('open');
    });

    /*audio on click*/
    const click_music = $('.click_music')[0];
    click_music.pause();
    $('a , button , input , textarea, .music_on, .mobile_btn').click(function() {
        if ($('.bar-c').hasClass('on')) {} else {
            click_music.play();
        }
    });

    /*mobile menu*/
    $('.navigation_btn').click(function() {
        $('.navigation_btn').toggleClass('active');
        $('header').toggleClass('active');
        $('#nav-icon3').toggleClass('open');
    });
    $(window).resize(function() {
        if (window.matchMedia('(max-width: 767px)').matches) {} else {
            $('.navigation_btn').removeClass('active');
            $('header').removeClass('active');
            $('#nav-icon3').removeClass('open');
        }
    })

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.social').appendTo($('nav > div'));
        $('.hire_us').appendTo($('nav > div'));
    } else {
        $('.social').appendTo($('body'));
        $('.hire_us').appendTo($('body'));
        $('header').removeClass('active');
    }
    $(window).resize(function() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('.social').appendTo($('nav > div'));
            $('.hire_us').appendTo($('nav > div'));
        } else {
            $('.social').appendTo($('body'));
            $('.hire_us').appendTo($('body'));
            $('header').removeClass('active');
        }
    })

    /*text typing*/
    if (window.matchMedia('(max-width: 1200px)').matches) {} else {
        $('.social li > a').mouseenter(function() {
            $(this).children('span').typedText("", 10, function() {});
            $(this).children('span').typedText($(this).attr('data-end'), 10, function() {});
        });
        $('.social li > a').mouseleave(function() {
            $(this).children('span').typedText("", 10, function() {});
            $(this).children('span').typedText($(this).attr('data-start'), 10, function() {});
        });
    }
});