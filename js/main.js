new Swiper('.parallax-slider', {
  //on parallax
  parallax: true,
  //скорость переключения
  speed: 2000,
  // Optional parameters
   loop: true,
   slidesPerView: 1,
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    //булеты
    clickable: true,
    },
  grabCursor: true,
  touchAngle: 50,
  autoHeight: true,

  });