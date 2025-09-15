'use strict';

$(document).ready(function () {
    // カルーセル
    const swiper = new Swiper('.swiper', {
        loop: false,
        initialSlide: 1,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 13,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                enabled: false,
                // slidesPerView: 3,
            },
        }
    });
});