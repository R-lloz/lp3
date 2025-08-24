'use strict';

$(document).ready(function () {
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
    });
});