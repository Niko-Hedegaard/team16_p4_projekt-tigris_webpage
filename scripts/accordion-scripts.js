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

// For/in Loop til object "keys" og event listener
for (let key in accordionButtons) {
    accordionButtons[key].addEventListener('click', function() {
        const index = parseInt(key.slice(-1)) - 1;
        toggleAccordion(index); 
        handleImageChange(index); 
    });
}

// Function til content visning af content
function toggleAccordion(index) {
    for (let i = 0; i < Object.keys(accordionButtons).length; i++) {
        const isActive = (i === index && !accordionButtons[`button${i + 1}`].classList.contains('active'));

        accordionButtons[`button${i + 1}`].classList.toggle('active', isActive);

        if (isActive) {
            accordionContents[`content${i + 1}`].style.maxHeight = accordionContents[`content${i + 1}`].scrollHeight + 'px';
        } else {
            accordionContents[`content${i + 1}`].style.maxHeight = '0';
        }
    }
}

// Function til at håndtere billede array og forandringer
function handleImageChange(index) {
    if (currentImageIndex === index) {
        // zoom effect 1
        faqImage.classList.add('zoom');
        setTimeout(() => faqImage.classList.remove('zoom'), 300);
    } else {
        // zoom effect 2
        faqImage.classList.remove('zoom');
        faqImage.src = images[index];
        currentImageIndex = index;
    }
}