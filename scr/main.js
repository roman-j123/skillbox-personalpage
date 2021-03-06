let mobileMenu = document.querySelector('.main-navigation__mobile');
let menuClose = document.querySelector('.navigation-list__item--close');
let modalButton = document.querySelectorAll('.btn');
let modalClose = document.querySelector('.header__close');
let modalWindow = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');

mobileMenu.onclick = function() {
    document.querySelector('.main-navigation__navigation-list').classList.add('navigation--open');
};
menuClose.onclick = function () {
    document.querySelector('.main-navigation__navigation-list').classList.remove('navigation--open');
};
[].forEach.call(modalButton, function(el){
    el.onclick = function(e){
        //modalWindow.style.display = 'flex';
        modalOverlay.classList.add('modal__open');
        modalWindow.classList.add('modal__open');
        modalWindow.scrollIntoView();
    }
})
modalClose.onclick = function () {
    modalOverlay.classList.remove('modal__open');
    modalWindow.classList.remove('modal__open');
    //modalWindow.style.display = 'none';
}

const smoothLinks = document.querySelectorAll('.navigation-list__item[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


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
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }
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