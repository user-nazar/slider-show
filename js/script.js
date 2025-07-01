"use strict";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

function sliderMouseSlideInit() {
  document.addEventListener("mousemove", function (e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-mousemove-swipe]")) {
      const sliderElement = targetElement.closest("[data-mousemove-swipe]");
      const sliderItem = swiper[getIndex(sliderElement)];
      const sliderLength = sliderItem.slides.length;
      if (sliderLength > 1) {
        const sliderWidth = sliderItem.width;
        const sliderPath = Math.round(sliderWidth / sliderLength);
        const sliderMousePos = e.clientX - sliderElement.offsetLeft;
        const sliderSlide = Math.floor(sliderMousePos / sliderPath);
        sliderItem.slideTo(sliderSlide);
      }
    }
  });

  function getIndex(el) {
    return Array.from(el.parentNode.children).indexOf(el);
  }
}

if (document.querySelector("[data-mousemove-swipe]")) {
  sliderMouseSlideInit();
}
