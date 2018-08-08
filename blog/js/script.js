
/*-------------------preloader-------------------*/

$(document).ready(function () {
    var preloader    = $('#preloader'), // селектор прелоадера
        imagesCount  = $('iframe').length, // количество изображений
        dBody        = $('body'), //обращаемся к body
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = 5, // количество картинок
        loadedImg    = 0; // счетчик загрузки картинок

    if (imagesCount >= imgSum && imagesCount > 0) {
        preloader.css('background', '#eee');
        dBody.css('overflow', 'hidden');

        $(".progress-bar").circularProgress({
            color: "#fff",
            line_width: 17,
            height: "350px",
            width: "350px",
            percent: 0,
            // counter_clockwise: true,
            starting_position: 25
        }).circularProgress('animate', percent, 1000);

        for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
            // var img_copy        = document.createElement('iframe');
            img_copy            = $('iframe')[i];
            img_copy.onload     = img_load;
            img_copy.onerror    = img_load;
        }

        function img_load () {
            progress += percent;
            loadedImg++;
            if (progress >= 100 || loadedImg == imagesCount) {
                preloader.delay(400).fadeOut('slow');
                dBody.css('overflow', '');
            }
            $(".progress-bar").circularProgress('animate', progress, 500);
        }
    } else {
        preloader.remove();
    }


});


/*---------------read-all---------------*/

$(function()  {
          
    $('.read-all-open').click(function() {
          $(this).parent().animate({marginTop: '0'}, 500);
          $(this).hide(500); 
          $(this).next().slideDown(1500);
          $(this).siblings('.read-all-close').show(500);

});
     $('.read-all-close').click(function() {
          $(this).parent().animate({marginTop: '10px'}, 500);
          $(this).hide(500); 
          $(this).siblings('.read-all-spoiler').slideUp(1500);
          $(this).siblings('.read-all-open').show(500);
});
});     


/*-------------my Pajinate settings-------------*/

$(function()  { 

       function myPaj(){  
           $('#container').pajinate({
                               items_per_page : 4,
                                num_page_links_to_display : 3,
                                 abort_on_small_lists: true,
                                item_container_id : '.alt_content',
                                nav_panel_id : '.alt_page_navigation'        
              });
      };

      function myPaj1(){  
           $('#container').pajinate({
                               items_per_page : 1,
                                num_page_links_to_display : 3,
                                 abort_on_small_lists: true,
                                item_container_id : '.alt_content',
                                nav_panel_id : '.alt_page_navigation'        
              });
      };

      var a = $('#container label.pulse'),
          b = $('#container div.page-tab');

    // adds page navigation to the sections when clicked
      $('#container').on('click', 'label.pulse', function() { 
                  var n = a.index(this),
                      c = $('#container div.page-tab');  
                  c.removeClass('alt_content');
                  c.eq(n).addClass('alt_content');
                  myPaj();
     });

      
                
      //        $('#tab1').click(function() {
      //                myPaj1();
             
      // });
          
   // if the section is initially selected
    if ($('#tab1').is(':checked')) {
                          b.eq(0).addClass('alt_content');
                          myPaj();
    }

    if ($('#tab5').is(':checked')) {
                          b.eq(4).addClass('alt_content');
                          myPaj();
    }

});

/*-----------  iframe youtube -----------*/


$(function() { 

// mini all 
       $('.mini-max-all label:nth-of-type(1)').click(function() { 
                var a = $(this).parents('.container');
                a.find('.YouTube').css('min-width','');
                a.find('.YouTube input:nth-of-type(1)').prop('checked', true);

});  
 
// max all 
       $('.mini-max-all label:nth-of-type(2)').click(function() { 
                var a = $(this).parents('.container');
                a.find('.YouTube').css('min-width','100%');
                a.find('.YouTube input:nth-of-type(2)').prop('checked', true);
});

// max 
      $('.YouTube label:nth-of-type(2)').click(function() {
          $(this).parent().css('min-width','100%');
          $(this).parents('.container').find('.mini-max-all input:nth-of-type(1)').prop('checked', false);

});
   
// min
  
      $('.YouTube label:nth-of-type(1)').click(function() {
           $(this).parent().css('min-width','');
           $(this).parents('.page-tab').find('.mini-max-all input:nth-of-type(2)').prop('checked', false);
});
 
// add youPlayIcon-container and youPlayIcon

       $('.YouTube iframe').each( function( index, element ){
           $(this).before('<div><img></div>');
           $('.YouTube div div').addClass('youPlayIcon-container');
           $('.YouTube div div img').addClass('youPlayIcon').attr('src','https://maxi-boxi.github.io/blog/images/play-buttom.svg');
});
   
// play video by click function and stop others

    $('.YouTube iframe').hide();
      $('.youPlayIcon-container').click(function(event) {
                  var src = $(this).next().attr('src'),
                        a =  $(this).next(); 
                  a.attr('src', src + '&autoplay=1');
                  $(this).hide();
                  a.show();

           $('.youPlayIcon-container').each( function( index, element ){
                        var b = $(element).next(),
                            e = $(element).not(event.target).next(),
                            g = $(this).not(event.target),
                        vidURL = b.prop('src');
                        vidURL = vidURL.replace('&autoplay=1', '');
                        e.prop('src','');
                        e.prop('src',vidURL);
                        g.show();
                        e.hide();

});
});

// stop video function after reloud page

        $('.YouTube iframe').each( function( index, element ){
            var a = $(this).prop('src');
            a = a.replace('&autoplay=1', '');
            $(this).prop('src','');
            $(this).prop('src',a);
    }); 


});  

/*-----------wave play and pause-----------*/

$(function() {
      var a = $('.wave div'),
          b = $('#pauseIcon'),
          e = $('#playIcon');

            a.css('animation-play-state','paused');
      b.click(function() {
            a.css('animation-play-state','paused');
            $(this).hide();
            e.show();
});
      e.click(function() {
            a.css('animation-play-state','running');
            $(this).hide();
            b.show();
});
});   

/*----------face svg move to header by width----------*/

$(function() {
var handleMatchMedia = function (mediaQuery) {
        var fcBl = $('.face-block');
        if (mediaQuery.matches) {
            fcBl.appendTo('#header');
            fcBl.addClass('faceBlockToHeader');
            $('.face').addClass('faceToHeader');
        } else {
            fcBl.appendTo('#container');
            fcBl.removeClass('faceBlockToHeader');
            $('.face').removeClass('faceToHeader');
        }
    },
    autoOpen = window.matchMedia('all and (max-width: 960px)');

handleMatchMedia(autoOpen);
autoOpen.addListener(handleMatchMedia);
}); 