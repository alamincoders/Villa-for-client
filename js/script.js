var swiper = new Swiper(".swiper-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlice: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
