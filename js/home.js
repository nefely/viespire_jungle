$(document).ready(function() {

    const vid = $('.video > video')[0];
    const step = $('.steps')[0];
    const music = $('.music')[0];
    music.pause();
    const vid_duration = 9.7;
    const part_vid = (vid_duration) / 61;
    var counttime = 1;
    vid.pause();
    var $preloader = $('.preloader');
    var $loader = $preloader.find('.preloader');

    $('.preloader').addClass('preloader_active');
    $('.preloader button').addClass('active');
    $('.preloader button.active').click(function() {
        $loader.fadeOut();
        $preloader.delay(100).fadeOut(500);
        vid.play();
        music.play();
        setTimeout(function() {
            vid.pause();
        }, 1000);
        var setint = null;
        setint = setInterval(function() {
            if (vid.currentTime < vid_duration) {
                var span_full = (Math.ceil(vid.currentTime / part_vid));
                $('.progressbar_progressbar > span:lt(' + span_full + ')').addClass('full');
                setTimeout(function() {
                    clearInterval(setint);
                    setint = null;
                }, 8700);
            } else {
                clearInterval(setint);
                setint = null;
            }
            if ((vid.currentTime == vid_duration) || (vid.currentTime >= vid_duration - 0.15)) {
                music.pause();
                step.pause();
                $('section:not(.portfolio_section)').fadeOut(600);
                $('section.portfolio_section').fadeIn(600);
                $('.progressbar_progressbar > span').removeClass('full');
                $('.progressbar , .music_on').fadeOut(600);
                $('.single-item').slick('refresh');
                $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
                $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
                cursor.setupEventListeners();
            }
        }, 50);
    });

    /*make step on keypush or touchcreen*/
    $('.home_section').on('mousedown touchstart', function(event) {
        vid.play();
        step.play();
        var setint = null;
        setint = setInterval(function() {
            if (vid.currentTime < vid_duration) {
                var span_full = (Math.ceil(vid.currentTime / part_vid));
                $('.progressbar_progressbar > span:lt(' + span_full + ')').addClass('full');
                setTimeout(function() {
                    clearInterval(setint);
                    setint = null;
                }, 8700);
                console.log(' mouse down or touchstart --- if ');
            } else {
                clearInterval(setint);
                setint = null;
                console.log(' mouse down or touchstart --- if else ');
            }
            if ((vid.currentTime == vid_duration) || (vid.currentTime >= vid_duration - 0.15)) {
                clearInterval(setint);
                setint = null;
                music.pause();
                step.pause();
                $('section:not(.portfolio_section)').fadeOut(600);
                $('section.portfolio_section').fadeIn(600);
                $('.progressbar_progressbar > span').removeClass('full');
                $('.progressbar , .music_on').fadeOut(600);
                $('.single-item').slick('refresh');
                $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
                $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
                cursor.setupEventListeners();
            }
        }, 50);

        $('.home_section').on('mouseup touchend', function(event) {
            clearInterval(setint);
            setint = null;
            vid.pause();
            step.pause();
            console.log('mouse up or touchend');
        });
    });

    /*audio bottom left trigger*/
    $('.music_on').click(function() {
        $('.music_on .music_status > *').toggleClass('on');
        $('.music_on .music_line > *').toggleClass('on');
    });

    var clicked = true;
    $(".music_on").click(function() {
        if (clicked) {
            $(".bar").addClass("noAnim");
            music.muted = true;
            step.muted = true;
            clicked = null;
        } else {
            $(".bar").removeClass("noAnim");
            music.muted = null;
            step.muted = null;
            clicked = true;
        }
    });

    $('header nav > div > ul > li:not(:first-child) > button').click(function() {
        /*prevent useless render the same section*/
        if ($('section.' + $(this).attr('class') + "_section").css('display') == 'block') {} else {
            /*render section if need*/
            counttime = 1;
            vid.currentTime = 1;
            vid.pause();
            music.pause();
            $('.progressbar_progressbar > span').removeClass('full');
            $('.progressbar , .music_on').fadeOut(600);
        }

    });

    $('header .logo > button , header nav > div > ul > li:first-child > button').click(function() {
        /*prevent useless render the same section*/
        if ($('section.' + $(this).attr('class') + "_section").css('display') == 'block') {} else {
            /*render section if need*/
            counttime = 1;
            vid.currentTime = 1;
            $('.progressbar_progressbar > span').removeClass('full');
            $('.progressbar , .music_on').fadeIn(600);
            vid.play();
            music.play();
            setTimeout(function() {
                vid.pause();
            }, 1000);
            var setint = null;
            setint = setInterval(function() {
                if (vid.currentTime < vid_duration) {
                    var span_full = (Math.ceil(vid.currentTime / part_vid));
                    $('.progressbar_progressbar > span:lt(' + span_full + ')').addClass('full');
                    setTimeout(function() {
                        clearInterval(setint);
                        setint = null;
                    }, 8700);
                } else {
                    clearInterval(setint);
                    setint = null;
                }
                if ((vid.currentTime == vid_duration) || (vid.currentTime >= vid_duration - 0.15)) {
                    music.pause();
                    step.pause();
                    $('section:not(.portfolio_section)').fadeOut(600);
                    $('section.portfolio_section').fadeIn(600);
                    $('.progressbar_progressbar > span').removeClass('full');
                    $('.progressbar , .music_on').fadeOut(600);
                    $('.single-item').slick('refresh');
                    $('.slick-prev').html('<img src="img/left.png" alt="" class="prev_arr">');
                    $('.slick-next').html('<img src="img/left.png" alt="" class="next_arr">');
                    cursor.setupEventListeners();
                }
            }, 50);
        }
    });

    $('.preloader button').click(function() {
        $('.home_section_container > h1').typedText($('.home_section_container > h1').attr('data-text'), 100, function() {});
        $('.home_section_container > p').typedText($('.home_section_container > p').attr('data-text'), 100, function() {});
    });

});