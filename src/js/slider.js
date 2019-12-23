import Glider from 'glider-js';

export default function Slider() {
  window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 1.5,
      draggable: true,
      responsive: [
        {
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  // hide scrollbar in mozilla
  document.addEventListener('glider-loaded', hideFFScrollBars);
  document.addEventListener('glider-refresh', hideFFScrollBars);
  function hideFFScrollBars(e) {
    const scrollbarHeight = 17; // Currently 17, may change with updates
    if (/firefox/i.test(navigator.userAgent)) {
      // We only need to appy to desktop. Firefox for mobile uses
      // a different rendering engine (WebKit)
      if (window.innerWidth > 575) {
        e.target.parentNode.style.height = `${e.target.offsetHeight
          - scrollbarHeight}px`;
      }
    }
  }
}
