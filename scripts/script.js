const slideshow = new Siema({
  selector: '.slideshow',
  duration: 2000,
  easing: 'ease-out',
  loop: true
});

let autoSlideInterval;
const slideDelay = 6000;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideshow.next();
  }, slideDelay);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

document.querySelector('#prev').addEventListener('click', () => {
  slideshow.prev();
  resetAutoSlide();
});

document.querySelector('#next').addEventListener('click', () => {
  slideshow.next();
  resetAutoSlide();
});

// Starte die automatische Slideshow
startAutoSlide();


