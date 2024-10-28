document.addEventListener("DOMContentLoaded", function () {
    const marqueeWrapper = document.querySelector(".marquee-wrapper");

    // Duplicer indholdet for at sikre, at det ruller kontinuerligt
    marqueeWrapper.innerHTML += marqueeWrapper.innerHTML;

    let position = 0; // Startposition

    function animateMarquee() {
        position -= 1; // Flyt mod venstre med 1 px
        if (position <= -marqueeWrapper.scrollWidth / 2) {
            position = 0; // Reset, når halvdelen er rullet
        }
        marqueeWrapper.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateMarquee); // Fortsætter animationen
    }

    animateMarquee(); // Start animationen
});

