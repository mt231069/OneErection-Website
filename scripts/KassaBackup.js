let totalPrice = JSON.parse(localStorage.getItem('totalPrice'));

updateCartQuantity();

document.querySelector('.js-total-price').innerHTML = (totalPrice + 5).toFixed(2) + '€';


document.querySelector('.js-checkout-button').addEventListener('click', (event) => {
    let errorMessage = document.querySelector('.js-error-message');
    let inputFields = document.querySelectorAll('.input-feld');
    let allFilled = true;

    // Check if all input fields are filled
    inputFields.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            allFilled = false;
        } else {
            input.style.border = '1px solid #000000';
        }
    });

    if (!allFilled) {
        errorMessage.style.display = 'block';
        event.preventDefault(); // Stoppe den Checkout
    } else {
        errorMessage.style.display = 'none';

        // Lade Bestelldaten aus localStorage
        let paymentData = JSON.parse(localStorage.getItem('paymentData')) || [];
        let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

        // Daten an PHP senden
        fetch('../send-email.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentData, totalPrice })
        })
        .then(response => response.json())
        .then(data => console.log('Antwort von PHP:', data))
        .catch(error => console.error('Fehler:', error));
    }
});


let paymentData = JSON.parse(localStorage.getItem('paymentData')) || [];
let inputFeld = document.querySelectorAll('.input-feld');

inputFeld.forEach((inputFeld, i) => {
    inputFeld.addEventListener('input', (event) => {
        paymentData[i] = event.target.value;  
        savePaymentData(); 
        console.log(paymentData); 
    });
});

function savePaymentData() {
    localStorage.setItem('paymentData', JSON.stringify(paymentData));
}

function updatePaymentData() {
    let storedPaymentData = JSON.parse(localStorage.getItem('paymentData')) || [];
    let input = document.querySelectorAll('.input-feld');
   
    input.forEach((input, i) => {
        input.value = storedPaymentData[i] || '';  // Load data if exists, else set to empty
    });
}

updatePaymentData();

console.log(localStorage);
console.log(paymentData);