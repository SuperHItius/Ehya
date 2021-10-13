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

});