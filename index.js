const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  ....,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// OR (Alternative)

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation],
//   ....,
// });
// swiper.nextEl = '.swiper-button-next';
// swiper.prevEl = '.swiper-button-prev';
