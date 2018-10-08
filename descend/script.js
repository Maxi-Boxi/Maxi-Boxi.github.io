$(function () {
    var tracks = ['music/track1.mp3', 'music/track2.mp3', 'music/track3.mp3', 'music/track4.mp3', 'music/track5.mp3', 'music/track6.mp3'];
    var currentTrack = 0;
    var mediaElement = document.getElementById("audio");
    var liClick = [].slice.call(document.querySelectorAll('li'));
    $(liClick[currentTrack]).addClass('li_neon_click');

// --------- playlist track click
    liClick.forEach(function (element, z) {

        element.addEventListener('click', function (e) {
            e.stopPropagation();
            $(".pause_button").attr({src: 'img/pause_circle.svg', title: 'Pause'}).removeClass('play_button');
            mediaElement.src = tracks[z];
            mediaElement.play();
            currentTrack = z;
            $(liClick).removeClass('li_neon_click');
            $(liClick[z]).addClass('li_neon_click');
        });
    });

// ---------- track end
    $('audio').on('ended', function (e) {
        currentTrack++;
        if (currentTrack > tracks.length - 1) currentTrack = 0;
        e.target.src = tracks[currentTrack];
        e.target.play();
        $(liClick).removeClass('li_neon_click');
        $(liClick[currentTrack]).addClass('li_neon_click');
    });
// ------------- click <
    $(".skip_previous_button").bind('click', function (e) {
        e.stopPropagation();
        $(this).animate({opacity: '1'}, 300);
        setTimeout(function () {
            $(".skip_previous_button").animate({opacity: '0.5'}, 300);
        }, 300);
        $(".pause_button").attr({src: 'img/pause_circle.svg', title: 'Pause'}).removeClass('play_button');
        currentTrack--;
        if (currentTrack < 0) currentTrack = 5;
        mediaElement.src = tracks[currentTrack];
        mediaElement.play();
        $(liClick).removeClass('li_neon_click');
        $(liClick[currentTrack]).addClass('li_neon_click');

    });
// ------------- click >
    $(".skip_next_button").bind('click', function (e) {
        e.stopPropagation();
        $(this).animate({opacity: '1'}, 300);
        setTimeout(function () {
            $(".skip_next_button").animate({opacity: '0.5'}, 300);
        }, 300);
        $(".pause_button").attr({src: 'img/pause_circle.svg', title: 'Pause'}).removeClass('play_button');

        currentTrack++;
        if (currentTrack >= tracks.length) currentTrack = 0;
        mediaElement.src = tracks[currentTrack];
        mediaElement.play();
        $(liClick).removeClass('li_neon_click');
        $(liClick[currentTrack]).addClass('li_neon_click');

    });
// ------------- click pause and play
    $(".pause_button").bind('click', function (e) {
        e.stopPropagation();
        $(this).animate({opacity: '1'}, 300);
        setTimeout(function () {
            $(".pause_button").animate({opacity: '0.5'}, 300);
        }, 300);
        $(this).toggleClass('play_button');

        if ($(this).hasClass("play_button")) {
            mediaElement.pause();
            $(this).attr({src: 'img/play_circle.svg', title: 'Play'});

        } else {
            mediaElement.play();
            $(this).attr({src: 'img/pause_circle.svg', title: 'Pause'});
        }

    });
});


//------------ start animation

$(function () {
    $("p, a").css('opacity', '0');

    $(".left_box_container").click(function () {

        $('audio').trigger('play');

        setTimeout(function () {
            $(".backSvg, .gradientBack").animate({opacity: '1'}, 2000);

            $(".back5").css('pointer-events', 'none');

            $(".box").addClass('boxAnim');

            $(".triangle").addClass('triangleAnim');

            $(".circle").addClass('circleAnim');

            $("#path_D").addClass('path_D');

            $("#path_E").addClass('path_E');

            $("#path_S").addClass('path_S');

            $("#path_C").addClass('path_C');

            $("#path_E_2").addClass('path_E_2');

            $("#path_N").addClass('path_N');

            $("#path_D_2").addClass('path_D_2');

        }, 100);


        setTimeout(function () {

            $(".line_1").addClass('linesAnim');
        }, 4500);

        setTimeout(function () {
            $(".line_2").addClass('linesAnim');
        }, 5000);

        setTimeout(function () {
            $(".line_3").addClass('linesAnim');
        }, 5500);

        setTimeout(function () {
            $(".line_4").addClass('linesAnim');
        }, 6000);

        setTimeout(function () {
            $(".lines_container").addClass('linesConAnim');
        }, 8600);

        setTimeout(function () {
            $(".name").addClass('nameAnim');
        }, 6600);

        setTimeout(function () {
            $(".img-container").addClass('matrix');
        }, 10400);

        setTimeout(function () {

            $(".box, .triangle, .circle, .albumName").addClass(' endAnimAll blinkAnim');
            $('#particleCanvas-White').css('opacity', '0.5');
            $('#particleCanvas-Blue').css('opacity', '0.9');
        }, 13500);

        setTimeout(function () {
            $("p, a").animate({opacity: '1'}, 3000);
            $(".all_playlist_button").css('display', 'block').animate({opacity: '0.4'}, 3000);
            $(".all_player_button").css('display', 'block').animate({opacity: '0.5'}, 3000);
        }, 17500);


        //------------ jellyfish

        // setTimeout(function () {

        //     $(".jellyfish").css('display', 'block');
        // }, 40000);
        // setTimeout(function () {

        //     $(".jellyfish").css('display', 'none');
        // }, 69400);

    });
});


/* ----------auto move left and top---------- */

$(function () {
    var bb2b3b4b5 = $('.img-container'),
        abb_cb_cob = $('a, .all_player_button');

    setInterval(function () {
        var back1Width2 = $('.back').width(),
            linesCon2 = 1.7;

        linesCon2 *= $('.img-container').width();


        if (back1Width2 > linesCon2 && $('.img-container').hasClass("matrix")) {

            bb2b3b4b5.addClass('left');
            abb_cb_cob.css('pointer-events', 'auto');
            $('.audio-container').addClass('audio-container-left');

        } else {

            bb2b3b4b5.removeClass('left');
            abb_cb_cob.css('pointer-events', '');
            $('.audio-container').removeClass('audio-container-left');

        }

    }, 100);

    // setInterval(function () {
    //     var back1Height = $('.container').height(),
    //         back1Width = $('.container').width();

    //     if (back1Width > back1Height) {

    //         $(".back, .back5, .greyBack, .gradientBack").addClass('black_lines');
    //         $(".img-container").addClass('black_lines_2');
    //         $(".audio-container").addClass('black_lines_3');
    //         $("a").addClass('black_lines_4');
    //         $("#particleCanvas-Blue, #particleCanvas-White").addClass('black_lines_5');
    //         $(".back5").addClass('back5_black_lines');
    //         $("li").addClass('li_black_lines');

    //     } else {

    //         bb2b3b4b5.removeClass('left');
    //         abb_cb_cob.css('pointer-events', '');
    //         $('.audio-container').removeClass('audio-container-left');

    //         $(".back, .back5, .greyBack, .gradientBack").removeClass('black_lines');
    //         $(".img-container").removeClass('black_lines_2');
    //         $(".audio-container").removeClass('black_lines_3');
    //         $("a").removeClass('black_lines_4');
    //         $("#particleCanvas-Blue, #particleCanvas-White").removeClass('black_lines_5');
    //         $(".back5").removeClass('back5_black_lines');
    //         $("li").removeClass('li_black_lines');
    //     }

    // }, 100);


    setInterval(function () {
        var back1Height2 = $('.back').height(),
            linesCon1 = 1.37,
            linesCon3 = 1.6;
        linesCon1 *= $('.img-container').height();
        linesCon3 *= $('.img-container').height();

        if (back1Height2 > linesCon1 && back1Height2 <= linesCon3 && $('.img-container').hasClass("matrix")) {
            bb2b3b4b5.removeClass('top2').addClass('top');
            $('.audio-container').removeClass('audio-container-top2').addClass('audio-container-top');
            abb_cb_cob.addClass('pointerEvent');

        } else if (back1Height2 > linesCon3 && $('.img-container').hasClass("matrix")) {
            $('.audio-container').removeClass('audio-container-top').addClass('audio-container-top2');
            bb2b3b4b5.removeClass('top').addClass('top2');
            abb_cb_cob.addClass('pointerEvent');

        } else {
            bb2b3b4b5.removeClass('top2').removeClass('top');
            $('.audio-container').removeClass('audio-container-top2').removeClass('audio-container-top');
            abb_cb_cob.removeClass('pointerEvent');
        }
    }, 100);


// --------------playlist function

    $(".show_playlist_button").bind('click', function (e) {
        e.stopPropagation();
        $(this).animate({opacity: '1'}, 300);
        setTimeout(function () {
            $('.show_playlist_button').animate({opacity: '0.4'}, 300);

        }, 300);

        if (!$('li:nth-of-type(6)').hasClass('li_6_move')) {

            // $(this).toggleClass('buttonClickColor');
            setTimeout(function () {
                $(".fon").animate({width: '100%', opacity: '1'}, 2000);

            }, 2000);

            // $("ol").animate({opacity: '1'}, 1000);
            $("li:nth-of-type(1)").addClass('li_1_move');
            $("li:nth-of-type(2)").addClass('li_2_move');
            $("li:nth-of-type(3)").addClass('li_3_move');
            $("li:nth-of-type(4)").addClass('li_4_move');
            $("li:nth-of-type(5)").addClass('li_5_move');
            $("li:nth-of-type(6)").addClass('li_6_move');
        }
    });

    $(".hide_playlist_button").bind('click', function (e) {
        e.stopPropagation();
        $(this).animate({opacity: '1'}, 300);
        setTimeout(function () {
            $(".hide_playlist_button").animate({opacity: '0.4'}, 300);

        }, 300);

        if ($('li:nth-of-type(6)').hasClass("li_6_move")) {
            // $(this).toggleClass('buttonClickColor');
            // $("ol").animate({opacity: '0'}, 1000);
            $(".fon").animate({width: '0', opacity: '0'}, 1500);
            $("li:nth-of-type(1)").removeClass('li_1_move');
            $("li:nth-of-type(2)").removeClass('li_2_move');
            $("li:nth-of-type(3)").removeClass('li_3_move');
            $("li:nth-of-type(4)").removeClass('li_4_move');
            $("li:nth-of-type(5)").removeClass('li_5_move');
            $("li:nth-of-type(6)").removeClass('li_6_move');

        }

    });

}); 