//When clicking a navigation <a> tag, remove the class active from all of them, then add it back on just the one you clicked.
$('.navigation a').click(function() {
    $('.navigation a').removeClass('active');
    $(this).addClass('active');
});

//saving the position of the original navigation position when loading the page
var navigationPos = $('.navigation').offset().top;

//on scroll
$(window).scroll(function () {
    //save a variable with the current scroll position (a number value)
    var scrollPos = $(window).scrollTop();

    //if the current scroll position is greater than the navigation's original position...
    if (scrollPos > navigationPos) {
        //add the sticky class to it.
        $('.navigation').addClass('sticky');
    }
    else {
        //If it's back above it, remove the sticky class from it.
        $('.navigation').removeClass('sticky');
    }

    //Checking position of the scroll position being greater than each of the sections and then fading in its text as it reaches that section.
    if (scrollPos > $('.blue-light').offset().top) {
        $('.blue-light').children('.section-text').fadeIn(500);
    }

    if (scrollPos > $('.blue-normal').offset().top) {
        $('.blue-normal').children('.section-text').fadeIn(500);
    }

    if (scrollPos > $('.blue-medium').offset().top) {
        $('.blue-medium').children('.section-text').fadeIn(500);
    }

    if (scrollPos > $('.blue-dark').offset().top) {
        $('.blue-dark').children('.section-text').fadeIn(500);
    }

 }); 

//the below allows for smooth animated scrolling when using jump links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});