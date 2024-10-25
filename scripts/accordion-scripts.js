// Objects ud fra knapper
const accordionButtons = {
    button1: document.getElementById('accordion-title-0'),
    button2: document.getElementById('accordion-title-1'),
    button3: document.getElementById('accordion-title-2')
};

// objects ud fra knapperes indhold (paragraphs)
const accordionContents = {
    content1: document.getElementById('accordion-content-0'),
    content2: document.getElementById('accordion-content-1'),
    content3: document.getElementById('accordion-content-2')
};

// variable, og herefter billede array. CurrentImageIndex er sat til intet via -1 (viser derfor standard billede fra html)
const faqImage = document.getElementById('faq-image');
const images = ['../images/icons/logo-icon.svg', '../images/icons/flag2-primary-orange.svg', '../images/icons/initiative-focus.svg'];
let currentImageIndex = -1;

// Loop through the object keys to add event listeners
for (let key in accordionButtons) {
    accordionButtons[key].addEventListener('click', function() {
        const index = parseInt(key.slice(-1)) - 1; // Extract numeric index from the key (button1 -> index 0)
        toggleAccordion(index);  // Toggle the accordion content
        handleImageChange(index); // Change the image based on the clicked accordion
    });
}

// Function to toggle accordion content visibility
function toggleAccordion(index) {
    // Loop through all accordion items and either open or close them
    for (let i = 0; i < Object.keys(accordionButtons).length; i++) {
        const isActive = (i === index && !accordionButtons[`button${i + 1}`].classList.contains('active'));

        // Toggle the active class for the current accordion button
        accordionButtons[`button${i + 1}`].classList.toggle('active', isActive);

        // Toggle the visibility of the corresponding accordion content
        if (isActive) {
            accordionContents[`content${i + 1}`].style.maxHeight = accordionContents[`content${i + 1}`].scrollHeight + 'px';
        } else {
            accordionContents[`content${i + 1}`].style.maxHeight = '0';
        }
    }
}

// Function to handle image change
function handleImageChange(index) {
    if (currentImageIndex === index) {
        // Apply zoom effect if the same image is clicked again
        faqImage.classList.add('zoom');
        setTimeout(() => faqImage.classList.remove('zoom'), 300);
    } else {
        // Switch image without zoom effect if a different one is clicked
        faqImage.classList.remove('zoom');
        faqImage.src = images[index];
        currentImageIndex = index;
    }
}