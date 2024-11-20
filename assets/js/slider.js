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

// ===photo-detal-slider===
var swiper = new Swiper(".photo-detail-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   ===story-slider===
  var swiper = new Swiper(".story-slide-slider", {
    slidesPerView: 7,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      425: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
    },
  });

//   ===story-slider===
  var swiper = new Swiper(".latest-draf-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });


  $(document).ready(function () {
    $('.posts-card-post').each(function (index) {
        const $swiperContainer = $(this); // Current Swiper container
        const $dotsContainer = $swiperContainer.next('.custom-dots-container'); // Find the associated dots container

        // Initialize Swiper for this specific container
        const swiper = new Swiper($swiperContainer[0], {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: $swiperContainer.find('.custom-pagination')[0],
                type: 'custom',
                renderCustom: (swiper, current, total) => {
                    return `<span>${current} of ${total}</span>`;
                },
            },
            on: {
                init: function () {
                    updateDots(this, $dotsContainer); // Use `this` to refer to the current Swiper instance
                },
                slideChange: function () {
                    updateDots(this, $dotsContainer); // Use `this` to refer to the current Swiper instance
                },
            },
        });

    });
});

// Function to update dots for each Swiper instance
function updateDots(swiper, $dotsContainer) {
    const total = swiper.slides.length; // Total slides
    const current = swiper.realIndex + 1; // Current active slide (1-based index)

    // Generate dot HTML
    let dotsHTML = '';
    for (let i = 1; i <= total; i++) {
        dotsHTML += `<span class="dot ${i === current ? 'active' : ''}" data-slide="${i}"></span>`;
    }
    $dotsContainer.html(dotsHTML); // Update the dots container

    // Add click event for navigation
    $dotsContainer.find('.dot').off('click').on('click', function () {
        const slideIndex = parseInt($(this).data('slide'), 10) - 1; // Convert to zero-based index
        swiper.slideTo(slideIndex);
    });
}

