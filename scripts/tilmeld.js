// Funktion til at tilmelde sig events
function register() {
    // Henter værdier fra inputfelter og fjerner eventuelle mellemrum
    const name = document.getElementById('name').value.trim(); // Henter navnet
    console.log("Navn:", name); // Logger navnet til konsollen
    const email = document.getElementById('email').value.trim(); // Henter e-mail
    console.log("E-mail:", email); // Logger e-mail til konsollen
    const phone = document.getElementById('phone').value.trim(); // Henter telefonnummer
    console.log("Telefonnummer:", phone); // Logger telefonnummer til konsollen

    // Henter alle valgte events (checkboxe)
    const selectedEvents = []; // Initialiserer et tomt array til valgte events
    const checkboxes = document.querySelectorAll('.event-checkbox-input:checked'); // Henter markerede checkboxe

    // Tilføjer værdier fra markerede checkboxe til arrayet
    checkboxes.forEach((checkbox) => {
        selectedEvents.push(checkbox.value); // Tilføjer værdien af hver markerede checkbox til arrayet
    });
    console.log("Valgte events:", selectedEvents); // Logger de valgte events til konsollen

    // Tjekker for udfyldte felter
    if (name === '' || email === '' || phone === '') {
        alert("Udfyld venligst alle felter."); // Advarer brugeren
        return; // Stopper funktionen hvis der mangler felter
    }

    // Tjekker om der er valgt mindst én event
    if (selectedEvents.length === 0) {
        alert("Du skal vælge mindst ét event for at tilmelde dig."); // Advarer brugeren
        return; // Stopper funktionen hvis ingen events er valgt
    }

    // Bekræftelsesbesked
    alert("Tilmelding gennemført succesfuldt. Du er i sandhed en Tiger helt!"); // Informerer brugeren
    console.log("Tilmelding succesfuld for:", { name, email, phone, selectedEvents }); // Logger tilmeldingsoplysninger

    // Nulstil formularen efter tilmelding
    document.getElementById('name').value = ''; // Tømmer navn
    document.getElementById('email').value = ''; // Tømmer e-mail
    document.getElementById('phone').value = ''; // Tømmer telefonnummer

    // Nulstiller alle valgte checkboxe
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Tømmer hver checkbox
    });
}

// Tilføjer en event listener til tilmeldingsknappen
document.getElementById('registerButton').addEventListener('click', register); // Aktiverer register-funktionen ved klik
