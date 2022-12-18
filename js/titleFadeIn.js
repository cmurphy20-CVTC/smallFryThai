$(window).on('load', function(){

  var $title = $('.introTitle');
  var $content = $('.introP');
  var $btns = $('.introBtns');

  $(document).ready(function() {
    
   console.log($title);

    $title.css({
      opacity: 0,
      bottom: "50px"
    }).animate({
      opacity: 1,
      bottom: "0px"
    }, 3000);

    $content.css({
      opacity: 0,
      bottom: "50px"
    }).animate({
      opacity: 1,
      bottom: "0px"
    }, 3250);

    $btns.css({
      opacity: 0,
      bottom: "50px"
    }).animate({
      opacity: 1,
      bottom: "0px"
    }, 2750);

  });
});
  
 

  

  
