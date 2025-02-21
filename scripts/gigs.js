console.log(cart);

updateCartQuantity();

let productsHTML = '';

gigdaten.forEach((gig) => {
    let ticketHTML = '';

    if(gig.ticket === true) {
        console.log("ja");

        ticketHTML = 
        `<button id="cart-button" data-gig-id=${gig.id}>
        <h4>In den Warenkorb</h4>
        </button>
        <div class="quantity">
          <select id="quantityid-${gig.id}" class="js-quantity-selector" name="quantityId"
          data-gig-id="${gig.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>`;
    } else if(gig.ticket === false) {
        console.log("nein");
        ticketHTML = 
        `<div class="quantity">
        nur Abendkassa
        </div>`;
    }

    productsHTML += 
    `<div class="allrec">
        <div class="time">
            <div>
                <div class="date-data">
                    <h2>${gig.date}</h2>
                </div>
                <div class="time-data">
                    <h3>Einlass:${gig.entry}</h3>
                    <h3>Beginn:${gig.showtime}</h3>
                </div>
            </div>
        </div>
        <div class="location-price">
            <div class="location">
                <h2>${gig.location}</h2>
            </div>
            <div class="adresse-price">
                <div class="adresse">
                    <h3>${gig.adresse}</h3>
                </div>
                <div class="price">
                    <h3>${gig.preisCent  / 100}€</h3>
                </div>
            </div>
            <div class="info-cart-quantity">
                <div class="info">
                    <h3>Info:${gig.info}</h3>
                </div>
                <div class="cart-quantity-select js-ticket-info">
                    ${ticketHTML}
                </div>
            </div>
        </div>
    </div>`;

    productPrice = gig.preisCent;
});

document.querySelector(".js-container").innerHTML = productsHTML;

// Get all select elements
const quantitySelects = document.querySelectorAll('.js-quantity-selector');

quantitySelects.forEach((quantitySelect) => {
    quantitySelect.addEventListener('change', function() {
        const gigId = quantitySelect.dataset.gigId;
        const quantity = quantitySelect.value;
    });
});

// Get all cart buttons
const cartButtons = document.querySelectorAll('#cart-button');

cartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = button.dataset.gigId;
        const quantitySelect = document.querySelector(`#quantityid-${productId}`);
        const quantity = quantitySelect.value;
        
        console.log(`Product ID: ${productId}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Product Price: ${productPrice}`);

        addToCart(productId, quantity, productPrice);
        console.log(cart);
    });
});