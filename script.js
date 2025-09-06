// FADE CAROUSEL SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll('.carousel-slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
});
