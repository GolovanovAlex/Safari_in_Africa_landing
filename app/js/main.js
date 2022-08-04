$(function () {
  $('.gallery__slider').slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><svg class="arrow arrow-prev"  width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="43.5" y="43.5" width="43" height="43" rx="21.5" transform="rotate(-180 43.5 43.5)" stroke="#C4C4C4"/><path d="M24 29L18 23.0016L24 17" stroke="white" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><svg class="arrow arrow-next" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#C4C4C4"/><path d="M19.2207 17L25.2207 22.9984L19.2207 29" stroke="white" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
  });

  $('.direction__inner').slick({
    mobileFirst: true,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><svg class="arrow arrow-prev arrow--direction-prev"  width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="43.5" y="43.5" width="43" height="43" rx="21.5" transform="rotate(-180 43.5 43.5)" stroke="#a25f2a"/><path d="M24 29L18 23.0016L24 17" stroke="#a25f2a" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><svg class="arrow arrow-next arrow--direction-next" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#a25f2a"/><path d="M19.2207 17L25.2207 22.9984L19.2207 29" stroke="#a25f2a" stroke-width="2" stroke-miterlimit="10"/></svg></button>',
    responsive: [
      {
        breakpoint: 601,
        settings: 'unslick',
      },
    ],
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
  $('.menu, .header__arrow').on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
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
