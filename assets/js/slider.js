// ===hostby-slider===
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
          el: '.custom-pagination',
          type: 'custom',
          renderCustom: (swiper, current, total) => `${current} of ${total}`,
      },
  });


//   ===story-slider===
  var swiper = new Swiper(".story-slide-slider", {
    slidesPerView: 7,
    spaceBetween: 0,
  });
