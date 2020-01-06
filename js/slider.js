var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 1650,
    coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});