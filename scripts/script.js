document.addEventListener("DOMContentLoaded", function () {
    let currentSlideIndex = 0;
    // Auto-skift hvert 5. sekund, gemmer interval id'et til variabel
    let intervalId = setInterval(() => changeSlide(1), 5000);
  
    const slides = document.querySelectorAll(".slide");
    const heroTitle = document.getElementById("heroTitle");
    const heroParagraph = document.getElementById("heroParagraph");
  
    function showSlide(index) {
      // loop\/
      slides.forEach((slide, i) => {
        // loop/\
        slide.classList.toggle("active", i === index);
      });
      heroTitle.textContent = slideTexts[index].title;
      heroParagraph.textContent = slideTexts[index].paragraph;
    }
  
    function changeSlide(step) {
      // Fjernet interval-nulstilling for at undgå gentagelse og stop af slide-skift
      currentSlideIndex = (currentSlideIndex + step + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    }
  
    // Initialiser første slide
    showSlide(currentSlideIndex);
  
    // Auto-skift hvert 5. sekund (ændret til at blive sat én gang)
    setInterval(() => changeSlide(1), 5000); // Interval oprettes én gang uden nulstilling
  });
  