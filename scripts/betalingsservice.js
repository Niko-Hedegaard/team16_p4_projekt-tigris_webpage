document.addEventListener("DOMContentLoaded", function () {
  let prices = [50, 100, 150, "Andet"];
  let amountButtonContainer = document
    .querySelectorAll(".betaling__box")[1]
    .querySelector(".betaling__box--knapbox--hori");
  let customAmountSection = document.getElementById(
    "betaling__input--skrivbelob"
  );
  let amountInput = customAmountSection.querySelector(".input__skriv");
  let saveAmountButton = document.getElementById("beløb__gemknap");
  let priceDisplay = document.getElementById("betaling__pris");

  let activeButton = null;
  let isMonthly = false;

  let monthlyButton = document.querySelector(
    ".betaling__box--knapbox--hori .betaling__knap:first-child"
  );
  let singleButton = document.querySelector(
    ".betaling__box--knapbox--hori .betaling__knap:nth-child(2)"
  );

  // Håndterer klik på Månedligtbetaling knappen
  monthlyButton.addEventListener("click", function () {
    if (!isMonthly) {
      isMonthly = true;
      monthlyButton.classList.add("active");
      singleButton.classList.remove("active");
      updatePriceDisplay();
    }
  });

  // Håndterer klik på Enkeltbetaling knappen
  singleButton.addEventListener("click", function () {
    if (isMonthly) {
      isMonthly = false;
      singleButton.classList.add("active");
      monthlyButton.classList.remove("active");
      updatePriceDisplay();
    }
  });

  // Fjerner eventuelle eksisterende knapper under "Vælg beløb"
  amountButtonContainer.innerHTML = "";

  // Genererer knapper dynamisk baseret på prices-arrayet
  prices.forEach((price) => {
    let button = document.createElement("button");
    button.classList.add("betaling__knap");
    button.textContent = typeof price === "number" ? `${price} kr.` : price;
    amountButtonContainer.appendChild(button);

    button.addEventListener("click", function () {
      if (activeButton) {
        activeButton.classList.remove("active");
      }

      button.classList.add("active");
      activeButton = button;

      if (price === "Andet") {
        customAmountSection.style.display = "flex";
      } else {
        customAmountSection.style.display = "none";
        priceDisplay.textContent = `pris: ${price} kr.`;
      }
      updatePriceDisplay();
    });
  });

  // Formatteringsfunktion for tusind-separatorer
  function formatAmount(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Lytter på inputfeltet og formaterer beløbet ved indtastning
  amountInput.addEventListener("input", function () {
    let rawValue = amountInput.value.replace(/\D/g, ""); // Fjern eventuelle ikke-numeriske tegn
    amountInput.value = formatAmount(rawValue);
  });

  saveAmountButton.addEventListener("click", function () {
    let customAmount = amountInput.value.replace(/\./g, ""); // Fjern punktummer for at gemme det rå tal
    if (customAmount) {
      priceDisplay.textContent = `pris: ${formatAmount(customAmount)} kr.`;
      updatePriceDisplay();
    }
  });

  function updatePriceDisplay() {
    // Fjerner eventuel eksisterende "om måneden" tekst først
    priceDisplay.textContent = priceDisplay.textContent.replace(
      " om måneden",
      ""
    );
    if (isMonthly) {
      priceDisplay.textContent += " om måneden";
    }
  }
});
