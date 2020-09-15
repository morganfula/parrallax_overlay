let atScroll = false;
let parrallaxTitle = document.querySelectorAll('.parrallax-title');

const scrollProgress = () => {
  atScroll = true;
};

const raf = () => {
  if (atScroll) {
    parrallaxTitle.forEach((element, index) => {
      element.style.transform = 'translateX(' + window.scrollY / 8 + '%)';
    });
    atScroll = false;
  }

  requestAnimationFrame(raf)
};

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollProgress);