$(document).ready(function () {

var menuButton = $(".navbar__top--menu-button");
    menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

var modalButton = $('[data-toggle=modal]');
var closeModallButton = $(".modal__close");

modalButton.on('click', openModal);
closeModallButton.on('click', closeModal);

function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
}
function closeModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
}


$('.slider__wrapper--mini').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider-button--prev'),
    nextArrow: $('.slider-button--next'),
    responsive: [
        {
          breakpoint: 1205,
          settings: {
            rows:2,
            slidesToShow:2,
          },
        },],

  });

  $('.swiper-wrapper').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider__arrow--prev'),
    nextArrow: $('.slider__arrow--next'),
    responsive: [
        {
          breakpoint: 1205,
          settings: {
            slidesToShow: 4,
          },
        },],
        responsive: [
            {
              breakpoint: 1070,
              settings: {
                slidesToShow: 3,
              },
            },],
            responsive: [
                {
                  breakpoint: 870,
                  settings: {
                    slidesToShow: 2,
                  },
                },],
                responsive: [
                    {
                      breakpoint: 760,
                      settings: {
                        slidesToShow: 1,
                      },
                    },],
  });

});

