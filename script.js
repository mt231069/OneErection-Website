

// function sendMail(params) {
//   var tempParams = {
//     message: JSON.stringify(localStorage.getItem('paymentData')),
//     cart: JSON.stringify(localStorage.getItem('cart')),
//     totalPrice: JSON.stringify(localStorage.getItem('totalPrice')),
//     from_name: document.getElementById('vorname').value + " " + document.getElementById('nachname').value,
//     mail: document.getElementById('email').value
//   }
 
//   console.log(mail);

//   emailjs.send('service_6l4ipjw','template_27pjsti', tempParams)
//   .then(function(res){
//     console.log("success", res.status);
//   })
// }

function sendMail(params) {
  var tempParams = {
    message: localStorage.getItem('paymentData') || "Keine Daten",
    cart: localStorage.getItem('cart') || "Kein Warenkorb",
    totalPrice: (parseFloat(localStorage.getItem('totalPrice')) || 0) + 5,
    from_name: document.getElementById('vorname').value + " " + document.getElementById('nachname').value,
    mail: document.getElementById('emailadresse').value
  }

  console.log(tempParams); // Debugging

  emailjs.send('service_6l4ipjw','template_27pjsti', tempParams)
  .then(function(res){
    console.log("Email erfolgreich gesendet", res.status);
  })
  .catch(function(error) {
    console.error("Fehler beim Senden der Email:", error);
  });
}