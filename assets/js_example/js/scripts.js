function openPopup() {
    $('.popup').addClass('open');
}

setTimeout(openPopup, 1000);

$('.close-popup').click(function(event) {
    event.preventDefault();
    $('.popup').removeClass('open');
});

$('.card-image').click(function(event) {
    event.preventDefault();
    $('.slider').toggleClass('open');
});