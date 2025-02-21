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
        let inputFields = document.querySelectorAll('.input-feld');
        let allFilled = true;

        // Überprüfen, ob alle Felder ausgefüllt sind
        inputFields.forEach((input) => {
            if (input.value === '') {
                input.style.border = '2px solid red';
                allFilled = false;
            } else {
                input.style.border = '1px solid #000000';
            }
        });

        // Fehlernachricht anzeigen, wenn Felder nicht ausgefüllt sind
        if (!allFilled) {
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
            event.preventDefault();
        } else {

            sendMail();

            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
            // Weiterleitung zur Bestellseite
            // let cartLink = document.querySelector('.js-cart-link');
            let cartLink = document.querySelector('.js-checkout-button');
            if (cartLink) {
                window.location.href = 'bestellung.html'
            }
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
        console.log(paymentData);
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

// Debugging-Ausgaben für Entwickler
console.log(localStorage);
console.log(paymentData);