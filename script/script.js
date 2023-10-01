const accordionSlideInit = () => {
  const slidesWrapper = document.querySelector('.accordion-slider__wrapper');
  // const allSlides = document.querySelectorAll('.accordion-slide'); if you only need one active slide

  slidesWrapper.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('accordion-slide__title')) {
      // allSlides.forEach((slide) => slide.classList.remove('active')); if you only need one active slide
      el.closest('.accordion-slide').classList.toggle('active');
    }
  });
};

accordionSlideInit();
