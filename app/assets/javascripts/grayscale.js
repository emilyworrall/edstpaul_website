/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready( function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 480,
    isFitWidth: true
  });

  var textTarget1 = $('#project-header');
  var textTarget2 = $('#sort');
  var textTargetHeight = 300

  $(document).scroll(function(e){
    var scrollPercent = 1 - ((textTargetHeight - window.scrollY) / textTargetHeight);
    if(scrollPercent >= 0){
      textTarget1.css('opacity', scrollPercent);
      textTarget2.css('opacity', scrollPercent);
    }
  });

  if ( $(window).width() < 900 ) {
    $("#sort").addClass("sort-small");
    $('#project-header').addClass("header-small");
  } else {
    $("#sort").removeClass("sort-small");
    $('#project-header').removeClass("header-small");
  };



});
