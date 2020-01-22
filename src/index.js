// JS Goes here - ES6 supported

import "./css/main.css";


//nav
$(document).ready(function(){
    $(".hamburger-menu").click(function(){
 
      $(this).toggleClass('animate');

      $('.toggle-hidden').slideToggle('').removeClass( "hidden" );

    })
  });



$(window).bind('mousewheel', function(event) {
  if (event.originalEvent.wheelDelta >= 0) {
    $(".add-active").removeClass("active");
  }
  else {
    $(".add-active").addClass("active");
  }
});


// Form success Message
$(document).ready(function() {
  $("#successMsg").hide();
  if (window.location.href.indexOf("success") > -1) {
    $("#contact").hide();
    $("#successMsg").show();
  }
});



// Scroll Down Button
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();




$(function($){
  
  //Video Poster image
  $('.play').click(function() {
    const video = '<iframe src="' + $('img').attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

});



