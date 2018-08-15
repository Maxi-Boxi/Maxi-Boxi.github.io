$(function () {
    var tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3', 'track4.mp3', 'track5.mp3', 'track6.mp3'];
    var currentTrack = 0;

    $('audio').on('ended', function(e) {
        currentTrack++;
        if (currentTrack > tracks.length - 1)
            currentTrack = 0;
        e.target.src = tracks[currentTrack];
        e.target.play();
    });
});

$(function () {
    $("p, a, .box-button, .circle-button, .container-button").css({'display': 'none', 'opacity': '0'});

    $(".circle-container").click(function () {
        $(".back, .back2, .back3, .back4, .back5, .audio-container, #particleCanvas-White, p").css('pointer-events', 'none');
        $('audio').trigger('play');

        /*------first animation------*/

        setTimeout(function () {
            $(".name").css('opacity', '1');
        }, 6500);

        setTimeout(function () {
            $(".triangle-container").addClass('triangle-container-end').removeClass('triangle-container-anim');
        }, 2500);

        setTimeout(function () {
            $(".box1").addClass('box1-end').removeClass('box1Anim');
        }, 3000);

        $(".triangle-container").addClass('triangle-container-anim');
        $(".lines-container, .box1, .back1, .triangle").addClass('opa');
        $(".album-name1").addClass('albumname1Anim');
        $(".circle").addClass('circleAnim');
        $(".box1").addClass('box1Anim');

        setTimeout(function () {
            $(".line1, .line2, .line3, .line4").css('display', 'block').animate({maxWidth: '100vmin'}, 3400);
        }, 6500);

        setTimeout(function () {
            $(".back, .back4, .back3, .back2, .back5").addClass('matrix');
        }, 9900);

        setTimeout(function () {
            $(".back, .back2, .back3").addClass('neonAnim');
            $('#particleCanvas-White').css('opacity', '0.5');
            $('#particleCanvas-Blue').css('opacity', '1');
        }, 13500);

        setTimeout(function () {
            $("p, a, .box-button, .circle-button, .container-button").css('display', 'block').animate({opacity: '1'}, 3000);
        }, 17500);
    });

    $(".circle-button").click(function () {
        $(this).toggleClass('buttonClickColor');
        $(".back2").addClass('matrixAnim');

        if ($(this).hasClass("buttonClickColor")) {
            $(".back2").css('animation-play-state', 'running');

        } else {
            $(".back2").css('animation-play-state', 'paused');
        }
    });

    $(".box-button").click(function () {
        $(this).toggleClass('buttonClickColor');
        $(".back, .back3").addClass('matrixAnim');

        if ($(this).hasClass("buttonClickColor")) {
            $(".back, .back3").css('animation-play-state', 'running');

        } else {
            $(".back, .back3").css('animation-play-state', 'paused');
        }
    });

    $(".container-button").click(function () {
        $(this).toggleClass('buttonClickColor');
        $(".back4").addClass('matrixAnim');

        if ($(this).hasClass("buttonClickColor")) {
            $(".back4").css('animation-play-state', 'running');

        } else {
            $(".back4").css('animation-play-state', 'paused');
        }
    });


});


$(function () {
    var bb2b3b4b5 = $('.back4, .back3, .back2, .back, .back5'),
        abb_cb_cob = $('a, .box-button, .circle-button, .container-button');

    setInterval(function () {
        var back1Width2 = 0,
            linesCon2 = 1.7;
        linesCon2 *= $('.lines-container').width();
        back1Width2 += $('.back1').width();

        if (back1Width2 > linesCon2 && $('.back').hasClass("matrix")) {

            bb2b3b4b5.addClass('left');
            abb_cb_cob.css('pointer-events', 'auto');
            $('.audio-container').addClass('audio-container-left');
        } else {

            bb2b3b4b5.removeClass('left');
            abb_cb_cob.css('pointer-events', '');
            $('.audio-container').removeClass('audio-container-left');
        }
    }, 100);

    setInterval(function () {
        var back1Height2 = 0,
            linesCon1 = 1.57,
            linesCon3 = 1.7;
        linesCon1 *= $('.lines-container').height();
        linesCon3 *= $('.lines-container').height();
        back1Height2 += $('.back1').height();

        if (back1Height2 > linesCon1 && back1Height2 < linesCon3 && $('.back').hasClass("matrix")) {
            bb2b3b4b5.removeClass('top2').addClass('top');
            $('.audio-container').removeClass('audio-container-top2').addClass('audio-container-top');
            abb_cb_cob.addClass('pointerEvent');

        } else if (back1Height2 > linesCon3 && $('.back').hasClass("matrix")) {
            $('.audio-container').removeClass('audio-container-top').addClass('audio-container-top2');
            bb2b3b4b5.removeClass('top').addClass('top2');
            abb_cb_cob.addClass('pointerEvent');

        } else {
            bb2b3b4b5.removeClass('top2').removeClass('top');
            $('.audio-container').removeClass('audio-container-top2').removeClass('audio-container-top');
            abb_cb_cob.removeClass('pointerEvent');
        }
    }, 100);

}); 


