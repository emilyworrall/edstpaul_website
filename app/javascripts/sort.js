$(document).ready(function(){
  var $container = $('.w3-row');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });

  $('.dropdown-menu a').click(function(){
    $('.dropdown-menu a .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');

    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
     });
     return false;
  });
});
