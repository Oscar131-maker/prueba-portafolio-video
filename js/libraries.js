/***************************************************************************
Libraries
****************************************************************************/

/* Social slider */
var socialPost = new Swiper('.social-post-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      932:{
        slidesPerView: 3,
      },
      667:{
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/* Testimonies */
var testimoniesSlider = new Swiper('.testimonies-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
});


