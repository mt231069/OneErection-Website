//cart = JSON.parse(localStorage.getItem('cart')) || []; 
console.log(cart);
//console.log(products);


// HTML für Warenkorb generieren
let productsHTML = '';

const combinedArray = products.concat(gigdaten);

cart.forEach((cartItem) => {
  const cartId = cartItem.productId;
  //console.log(cartId);



  combinedArray.forEach((product) => {
    const productId = product.id;
    // console.log(productId);

      if(cartId === productId){
        console.log('jawolll');

          productsHTML +=
        `<div class="js-generated-html-${product.id}">
          <div class="trennung"></div>
          <div class="produkt">
              <div class="product-image">
                  <img  src="${product.picture2}" alt="bild">
              </div>
              <div class="item-details">
                  <div class="namepreis">
                      <div class="produktname">
                          <h3 id="productName">${product.name}</h3>
                      </div>
                      <div class="productPrice">
                          <h4>${product.preisCent / 100}€</h4>
                      </div>
                  </div>
                  <div class="verfügbarmenge">
                        <div class="müll-button">
                            <button class="müll js-delete-button" 
                            data-product-id="${product.id}">
                                <img src="Trash.png" id="müllBild" alt="in den Müll">
                            </button> 
                        </div>

                        <div class="quantity-select">
                            <select id="quantity" name="quantity" 
                            data-product-id="${product.id}"->
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
                        </div>
                             
                    </div> 
              </div>
          </div>
        </div>
        `
    }
  });
})

document.querySelector("#jsteil").innerHTML = productsHTML;

//Updated den Preis

function updatePrice(){
    let totalPrice = 0;

    cart.forEach((cartItem) => {
        let price = (cartItem.price / 100) * cartItem.quantity;
        totalPrice = totalPrice + price;
        
    });

    document.querySelector('.js-total-price').innerHTML = (totalPrice + 5).toFixed(2) + '€';

    document.querySelector('.js-total-price').innerHTML = (totalPrice + 5).toFixed(2) + '€';

    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

}

// damit das richtige darsteht

updateCartQuantity();

updatePrice();


// Update Cart Quantity

let quantitySelect = document.querySelectorAll('#quantity');

console.log(quantitySelect);

//Does die quantities gleich sind
quantitySelect.forEach((quantitySelect) => {

    const productId = quantitySelect.dataset.productId;
    
        cart.forEach((cartItem) => {
            if(cartItem.productId === productId){
                quantitySelect.value = cartItem.quantity;
            }
        });

        quantitySelect.addEventListener('change', () => {

            console.log('hallo');

            const quantity = quantitySelect.value;
        
            cart.forEach((cartItem) => {
                if(cartItem.productId === productId){
                    cartItem.quantity = parseInt(quantity);
                }
            });
        
            localStorage.setItem('cart', JSON.stringify(cart));
    
            //console.log(cart);
        
            updateCartQuantity();
            updatePrice();
    
    });
});

 


// Delete Button

document.querySelectorAll('.js-delete-button').forEach((button) =>{
    button.addEventListener('click', () => {
        
        const productId = button.dataset.productId;

        const newCart = [];

        function deletefromCart(productId){
            cart.forEach((cartItem) => {
              if(cartItem.productId !== productId){
                  newCart.push(cartItem);
              }

            });

            cart = newCart;

            localStorage.setItem('cart',JSON.stringify(cart));

            }

            deletefromCart(productId);

            const container = document.querySelector(`.js-generated-html-${productId}`);
            //console.log(container);
            container.remove();

            updateCartQuantity();
            updatePrice();

            console.log(cart);
            console.log(localStorage);
            
    });
});

// console.log(localStorage);
// console.log(cart);


// checkoutButton = document.querySelector('js-checkout-button');
// checkoutButton.addEventListener('click', (event) => {
//     console.log('Hallo');
// });












