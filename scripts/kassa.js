// Gesamtpreis aus LocalStorage abrufen oder auf 0 setzen
let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

// Aktuelles Preiselement aktualisieren
let totalPriceElement = document.querySelector('.js-total-price');
if (totalPriceElement) {
    totalPriceElement.innerHTML = (totalPrice + 5).toFixed(2) + '€';
}

// Checkout Button
let checkoutButton = document.querySelector('.js-checkout-button');
if (checkoutButton) {
    checkoutButton.addEventListener('click', (event) => {
        let errorMessage = document.querySelector('.js-error-message');
        let agbCheckbox = document.querySelector('.js-agb-checkbox');
        let inputFields = document.querySelectorAll('.input-feld');
        let allFilled = true;

        // Überprüfen, ob alle Eingabefelder ausgefüllt sind
        inputFields.forEach((input) => {
            if (input.value === '') {
                input.style.border = '2px solid red';
                allFilled = false;
            } else {
                input.style.border = '1px solid #000000';
            }
        });

        // AGB-Checkbox prüfen
        if (!agbCheckbox.checked) {
            agbCheckbox.style.outline = '2px solid red'; // Rote Umrandung
            allFilled = false;
        } else {
            agbCheckbox.style.outline = 'none'; // Zurücksetzen
        }

        // Fehlernachricht anzeigen, wenn Felder oder AGB nicht akzeptiert wurden
        if (!allFilled) {
            if (errorMessage) {
                errorMessage.style.display = 'block';
                errorMessage.innerText = 'Bitte fülle alle Felder aus und akzeptiere die AGB.';
            }
            event.preventDefault();
        } else {
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }

            sendMail();

            // Weiterleitung zur Bestellseite
            window.location.href = 'bestellung.html';
        }
    });
}

// Laden und Speichern der Zahlungsdaten im LocalStorage
let paymentData = JSON.parse(localStorage.getItem('paymentData')) || [];
let inputFields = document.querySelectorAll('.input-feld');

// Event-Listener für die Eingabefelder
inputFields.forEach((inputField, i) => {
    inputField.addEventListener('input', (event) => {
        paymentData[i] = event.target.value;
        savePaymentData();
    });
});

// Speichern der Zahlungsdaten im LocalStorage
function savePaymentData() {
    localStorage.setItem('paymentData', JSON.stringify(paymentData));
}

// Lade gespeicherte Zahlungsdaten und fülle sie in die Felder
function updatePaymentData() {
    let storedPaymentData = JSON.parse(localStorage.getItem('paymentData')) || [];
    let inputs = document.querySelectorAll('.input-feld');

    inputs.forEach((input, i) => {
        input.value = storedPaymentData[i] || ''; // Fülle Felder mit gespeicherten Daten
    });
}

// Zahlungsdaten beim Laden der Seite anzeigen
updatePaymentData();
updateCartQuantity();
