//let windowWidth = window.innerWidth;
// let windowWidth = navigator.userAgent;

$('.open-popup').click(function(){
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function(){
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');

});
