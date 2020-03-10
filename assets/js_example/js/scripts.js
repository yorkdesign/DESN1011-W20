// function openPopup() {
//     $('.popup').addClass('open');
// }

// setTimeout(openPopup, 1000);

// $('.close-popup').click(function(event) {
//     event.preventDefault();
//     $('.popup').removeClass('open');
// });

$('.card-image').click(function(event) {
    event.preventDefault();
    $('.window').toggleClass('open');
});

$('.window-close').click(function(event) {
    event.preventDefault();
    $('.window').toggleClass('open');
});