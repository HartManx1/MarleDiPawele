var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 1400,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});