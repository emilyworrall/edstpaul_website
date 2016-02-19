// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jquery easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the responsive menu on menu item click
$('.dropdown-menu a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.navbar-collapse ul li a#contact-button').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.navbar-collapse ul li a#about-button').click(function() {
    $('.navbar-toggle:visible').click();
});
