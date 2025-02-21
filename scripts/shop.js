//console.log(localStorage.removeItem('product'));
//console.log(JSON.parse(localStorage.getItem('cart')));

cart = JSON.parse(localStorage.getItem('cart')) || [];

updateCartQuantity();

console.log(cart);



function renderProducts(filteredProducts) {
  let productsHTML = '';

  filteredProducts.forEach((product) => {
    productsHTML += 
    `<div class="grid-item">
      <a class="js-shop-link" data-product-id="${product.id}" href="produkt.html">
          <div class="picture"><img src="${product.picture}" alt="${product.name}"></div>
          <div class="preis">${(product.preisCent / 100).toFixed(2)}</div>
          <div class="name">${product.name}</div>
      </a>
    </div>`;
  });


  document.querySelector(".js-grid-container").innerHTML = productsHTML;



  // Re-attach the click events to the new rendered items
  document.querySelectorAll(".js-shop-link")
    .forEach((shopLink) => {
      shopLink.addEventListener('click', () => {
        let shopLinkId = shopLink.getAttribute('data-product-id');
        localStorage.setItem('product', shopLinkId);
        console.log(shopLinkId);
        console.log(localStorage);
      });
    });
}

renderProducts(products);

// Add event listener to the "Delete all filters" button
const deleteFilterButton = document.querySelector('.js-delete-filter-button');
deleteFilterButton.style.display = 'none';  // Initially hidden

deleteFilterButton.addEventListener('click', () => {
  renderProducts(products);  // Render all products again
  deleteFilterButton.style.display = 'none';  // Hide the delete button
});

// Add event listeners to filter divs
document.querySelectorAll("#unternav div").forEach(div => {
  div.addEventListener("click", (event) => {
    const filter = event.currentTarget.getAttribute("data-filter");

    // Check if it's the delete filter button
    if (filter === null) return;

    // Filter products by checking if the filter keyword is included in the product's keywords array
    const filteredProducts = products.filter(product => product.keywords.includes(filter));

    // Render filtered products
    renderProducts(filteredProducts);

    // Show the delete filter button
    deleteFilterButton.style.display = 'block';
  });
});




// Erstellen der Produkte

let productsHTML = '';

products.forEach((product) => {

  productsHTML += 
  `<div class="grid-item">
    <a class="js-shop-link" data-product-id="${product.id}" href="produkt.html">
        <div class="picture"><img src="${product.picture}" alt="${product.name}"></div>
        <div class="preis">${(product.preisCent / 100).toFixed(2)}€</div>
        <div class="name">${product.name}</div>
      </a>
  </div>
  `;
});

document.querySelector(".js-grid-container").innerHTML = productsHTML;


//Id bei klicken des Links speichern 

document.querySelectorAll(".js-shop-link")
  .forEach((shopLink) => {
    shopLink.addEventListener('click', () => {
      let shopLinkId = shopLink.getAttribute('data-product-id');

      localStorage.setItem('product', shopLinkId);
      console.log(shopLinkId);
      console.log(localStorage);

    });
  });


 
