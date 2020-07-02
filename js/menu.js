var btnOpen = document.querySelector('.main-nav__open');
var btnClose = document.querySelector('.main-nav__close');
var menu = document.querySelector('.main-nav');


btnOpen.addEventListener("click", function(e) {
    menu.classList.toggle("main-nav__show");
    btnOpen.classList.toggle("main-nav__open--op");
})