var mobileMenu = document.querySelector('.main-navigation__mobile');
var menuClose = document.querySelector('.navigation-list__item--close');
var modalButton = document.querySelectorAll('.btn');
var modalClose = document.querySelector('.header__close');
var modalWindow = document.querySelector('.modal');


function disableScrolling () {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(x,y);
    }
}
function enableScrolling() {
    window.onscroll = function() {};
}
mobileMenu.onclick = function() {
    document.querySelector('.main-navigation__navigation-list').classList.add('navigation--open');
};
menuClose.onclick = function () {
    document.querySelector('.main-navigation__navigation-list').classList.remove('navigation--open');
};
[].forEach.call(modalButton, function(el){
    el.onclick = function(e){
        //modalWindow.style.display = 'flex';
        modalWindow.classList.add('modal__open');
        modalWindow.scrollIntoView();
        disableScrolling();
    }
})
modalClose.onclick = function () {
    modalWindow.classList.remove('modal__open');
    //modalWindow.style.display = 'none';
    enableScrolling();
}

// SWIPER
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    breakpoints: {
        320: {
            spaceBetween: 20,
            initialSlide: 1,
            slidesPerView: 1,
            navigation: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }
        },
        375: {
            spaceBetween: 20,
            initialSlide: 1,
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            initialSlide: 0,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 35,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }
});