// (function () {
//   var scaleY = 0,
//       rotateX = 0;

//   document.onkeydown = function (e) {
//          if (e.keyCode === 37) scaleY -= 1
//     else if (e.keyCode === 38) rotateX += 1
//     else if (e.keyCode === 39) scaleY += 1
//     else if (e.keyCode === 40) rotateX -= 1

//     document.querySelector('.circle').style.transform = 
//       'rotateY(' + scaleY + 'deg)'+
//       'rotateX(' + rotateX + 'deg)';
//     }
// })();

$(function() {

   // $(".audio-container, .back5").css( 'pointer-events', 'none');

 
  $(".circle-container").click(function() {
                    $(".back, .back2, .back3, .back4").css( 'pointer-events', 'none');
                 
                 $('audio').trigger('play');

                 setTimeout(function () {
                    $(".name").css('opacity', '1');
                  }, 6500); 

                  setTimeout(function () {
                    $(".triangle-container").addClass('triangle-container-end');
                   
                     $(".triangle-container").removeClass('triangle-container-anim');
                    
                  }, 2500); 

                    setTimeout(function () {
                   
                     $(".box1").addClass('box1-end');
                    
                     $(".box1").removeClass('box1Anim');
                  }, 3000); 

                $(".triangle-container").addClass('triangle-container-anim');
                $(".lines-container, .box1, .back1, .triangle").addClass('opa');


             $(".album-name1").addClass('albumname1Anim');
              $(".circle").addClass('circleAnim');
              $(".box1").addClass('box1Anim');

           setTimeout(function () {
                 $(".line1, .line2, .line3, .line4").css('display','block');
                $(".line1, .line2, .line3, .line4").animate({maxWidth: '100vmin'}, 3400);
               }, 6500); 

            setTimeout(function () {
                $(".back, .back4, .back3, .back2, .back5").addClass('matrix');
           }, 9900); 

             setTimeout(function () {
                $(".back, .back2, .back3").addClass('neonAnim');
                 // $(".audio-container, .back5").css( 'pointer-events', '');
               $('#particleCanvas-White').css('opacity', '0.5');
                $('#particleCanvas-Blue').css('opacity', '1');
        
           }, 13500); 

            setTimeout(function () {
                 $("p").animate({opacity: '1'}, 3000);
           }, 17500); 
          

    });

    //   $(".audio-container").click(function() {

    //         $('audio').trigger('pause');
    // });
});


$(function() {

   setInterval(function(){
       var back1Width2 = 0,
             linesCon2 = 1.7;
             linesCon2 *= $('.lines-container').width();
             back1Width2 += $('.back1').width();
       
        if (back1Width2 > linesCon2 && $('.back').hasClass("matrix")) {
    
                   $('.back4, .back3, .back2, .back, .back5').addClass('left');

                   
                   $('.audio-container').addClass('audio-container-left');
        } else {
    
                   $('.back4, .back3, .back2, .back, .back5').removeClass('left');
      
                    $('.audio-container').removeClass('audio-container-left');
       }
  }, 100);


}); 


$(function() {

   setInterval(function(){
       var back1Height2 = 0,
             linesCon1 = 1.7;
             linesCon1 *= $('.lines-container').height();
             back1Height2 += $('.back1').height();
       
        if (back1Height2 > linesCon1 && $('.back').hasClass("matrix")) {
      
                       $('.back4, .back3, .back2, .back, .back5').addClass('top');
       
                        $('.audio-container').addClass('audio-container-top');
        } else {
    
                       $('.back4, .back3, .back2, .back, .back5').removeClass('top');
       
                         $('.audio-container').removeClass('audio-container-top');
       }
  }, 100);

}); 


