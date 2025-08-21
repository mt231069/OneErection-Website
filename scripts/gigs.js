let productsHTML = '';

gigdaten.forEach((gig) => {
    let ticketHTML = '';

    if(gig.ticket === true) {
        console.log("ja");

        ticketHTML = 
        `<a id="cart-button" data-gig-id=${gig.id}
        href="https://one-erection.sumupstore.com/produkte">
        <h4>zum Shop</h4>
        </a>
        `;
    } else if(gig.ticket === false) {
        console.log("nein");
        ticketHTML = 
        `<div class="quantity">
        ${gig.whereToBuy}
        </div>`;
    }

    productsHTML += 
    `<div class="allrec">
        <div class="time">
            <div class="date-data">
                <h2>${gig.date}</h2>
            </div>
            <div class="time-data">
                <h3>Einlass:${gig.entry}</h3>
                <h3>Beginn:${gig.showtime}</h3>
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
                    <h3>${gig.preisCent}€</h3>
                </div>
            </div>
            <div class="info-cart-quantity">
                <div class="info">
                    <h3>${gig.info}</h3>
                </div>
                <div class="cart-quantity-select js-ticket-info">
                    ${ticketHTML}
                </div>
            </div>
        </div>
    </div>`;
    productPrice = gig.preisCent;
    console.log(gigdaten)
});

document.querySelector(".js-container").innerHTML = productsHTML;

if(productsHTML === '') {
    document.querySelector(".heading").innerHTML = 
    `<h2>NO UPCOMING GIGS</h2>`;
} else {
    document.querySelector(".heading").innerHTML = 
    `<h2>UPCOMING GIGS</h2>`;
}
