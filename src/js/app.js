import VanillaTilt from 'vanilla-tilt';
import Slider from './slider';
// import Canvas from './canvas';

if (module.hot) {
  module.hot.accept();
}

window.addEventListener('load', () => {
  VanillaTilt.init(document.querySelector('.brand__card'), {
    max: 6,
  });
});

Slider();
// Canvas();
