document.addEventListener("DOMContentLoaded", function () {
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function changeSlide(step) {
    currentSlideIndex = (currentSlideIndex + step + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  // første slide
  showSlide(currentSlideIndex);

  // skift hvert 5. sekund
  setInterval(() => changeSlide(1), 5000);

  // Gør dots klikbar
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
    });
  });

  // Gør pile klikbar
  document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
  document.querySelector(".next").addEventListener("click", () => changeSlide(1));
});

