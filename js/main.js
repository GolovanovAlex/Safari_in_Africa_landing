$(function () {
  $('.gallery__slider').slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img class="arrow arrow-prev" src="images/icon/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img class="arrow arrow-next" src="images/icon/arrow-next.svg" alt="arrow-next"></button>',
  });

  $('.gallery__item-box').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
});

// ---- ---- hamburger ---- ---- //
let button = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
let btn = document.querySelector('.burger-menu__icon');
button.onclick = function () {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
};
