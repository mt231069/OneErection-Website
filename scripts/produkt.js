
console.log(localStorage);
shopLinkId = localStorage.getItem('product');
console.log(shopLinkId);

//einkaufswagen lädt + anzeige wird geupdated

//cart = JSON.parse(localStorage.getItem('cart')) || [];

updateCartQuantity();

console.log(cart);


//variable für product Preis untn 
let productPrice;

//Produkt + Beschreibung generieren

let productsHTML = '';

products.forEach(product => {
    if(shopLinkId === product.id) {

        productPrice = product.preisCent;

        console.log(productPrice);
        console.log(product.name);
        

        productsHTML = 
        `<div class="product-image">
                        <img id="productImage" src="${product.picture2}" alt="">
                    </div>
                    <div class="abstand"></div>
                    <div class="product-details">
                        <div class="info">
                            <h3 id="productName">${product.name}</h3> 
                            <div class="gleicheHöhe">
                                <div id="productPrice">
                                    <h2 class="js-product-price">${product.preisCent / 100}€</h2>
                                </div>
                            </div>
                                

                            <div class="gleicheHöhe">
                                <button id="cart-button">
                                    <h4>In den Warenkorb</h4>
                                    <img src="Produktpics/Add Shopping Cart 2.png" alt="Warenkorb Icon">
                                </button>
                                <div class="quantity">
                                    <select id="quantityid" name="quantity">
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
                        <div id="productDescription" class="description">
                            <h4>Artikelbeschreibung:</h4>
                            <div class="liste">
                                <ul>
                                    <li>${product.beschreibung.punkt1}</li>
                                    <li>${product.beschreibung.punkt2}</li>
                                    <li>${product.beschreibung.punkt3}</li>
                                    <li>${product.beschreibung.punkt4}</li>
                                    <li>${product.beschreibung.punkt5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
                `
    }
});



document.querySelector(".js-product-container").innerHTML = productsHTML;

//Wert aus Mengenangabe holen
const quantitySelect = document.getElementById('quantityid');
let quantity = 1;

quantitySelect.addEventListener('change', function() {
    let quantity = quantitySelect.value;
    console.log(quantity);
});


// bei Buttonklick Produkt in Warenkorparray hinzufügen

let cartButton = document.querySelector('#cart-button').addEventListener('click', () => {

    let quantity = document.getElementById('quantityid').value;
    console.log(quantity);

    const productId = shopLinkId;

    addToCart(productId, quantity, productPrice);

    //product Price wird oben gemacht
    console.log(productPrice);

});










// class Product {
//     constructor(id, image, price, name, description) {
//         this.id = id;
//         this.image = image;
//         this.price = price;
//         this.name = name;
//         this.description = description;
//     }
// }

// // Produktliste
// let productlist = [
//     new Product('shirt1', 'Produktpics/shirt1_mockup.png', '29.99$', 'Band T-Shirt', '<ul><li>Großes, auffälliges Logo</li><li>Provokantes Design</li><li>Fair hergestellt</li><li>Hochwertige Qualität</li><li>Großer Druck des Bandlogos auf der Vorderseite</li></ul>'),
//     new Product('shirt2', 'Produktpics/shirt2_mockup.png', '29.99$', 'Band T-Shirt', '<ul><li>Stilvoll und bequem</li><li>Hochwertige Materialien</li><li>Aussagekräftiges Motiv</li><li>Vielseitig kombinierbar</li><li>Nachhaltig produziert</li></ul>'),
//     new Product('shirt3', 'Produktpics/shirt3_mockup.png', '29.99$', 'Band T-Shirt', '<ul><li>Nobles, weisses T-shirt für Gross und Klein</li><li>schlaues Design</li><li>Hochwertige Qualität</li><li>Ungulus Bungulus</li></ul>'),
//     new Product('shirt4', 'Produktpics/shirt4_mockup.png', '29.99$', 'Band T-Shirt', '<ul><li>Biergläser</li><li>durchdachtes Design</li><li>100% Baummwolle</li><li>Hochwertige Qualität</li></ul>'),
//     new Product('mütze', 'Produktpics/mütze_mockup.png', '9.99$', 'Mütze', '<ul><li>universelle Passform</li><li>Blumenlogo</li><li>Fair hergestellt</li><li>hält den Kopf auch im Sommer warm</li><li>Juhu eine Mütze</li></ul>'),
//     new Product('tasche', 'Produktpics/tasche_mockup.png', '14.99$', 'Badetasche', '<ul><li>Badetasche</li><li>4 Liter Fassungsvermögen</li><li>Fair hergestellt</li><li>Hochwertige Qualität</li><li>kann jeder brauchen</li></ul>'),
//     new Product('poster', 'Produktpics/poster_mockup.png', '4.99$', 'One Erection Poster', '<ul><li>Holz</li><li>macht Spass</li><li>Fair hergestellt</li><li>Hochwertige Qualität</li><li>ein Muss für jedes Konzert</li></ul>'),
//     new Product('sticker', 'Produktpics/sticker_mockup.png', '0.50$', 'Sticker', '<ul><li>Hochwertiger Sticker mit stilvollem Blumendesign</li><li>Strapazierfähiges Material</li><li>Einfache Anwendung</li><li>Vielseitig einsetzbar</li><li>Einzigartige Details</li></ul>'),
//     new Product('hoodie', 'Produktpics/hoodie_mockup.png', '29.99$', 'Hoodie', '<ul><li>Moderner Schnitt</li><li>Hochwertige Verarbeitung</li><li>Einzigartiges Design</li><li>tag und Nacht tragbar</li><li>Pflegeleicht</li></ul>')
// ];




// Event Listener für das Laden der Produktdetails
// document.addEventListener('DOMContentLoaded', function() {

//     function getQueryParameter(name) {
//         const urlParams = new URLSearchParams(window.location.search);
//         return urlParams.get(name);
//     }

//     const productId = getQueryParameter('id');
//     const product = Product.getProductById(productId);

//     if (product) {
//         document.getElementById('productImage').src = product.image;
//         document.getElementById('productPrice').textContent = product.price;
//         document.getElementById('productName').textContent = product.name;
//         document.getElementById('productDescription').innerHTML = product.description;
//     } else {
//         console.error('Produkt nicht gefunden');
//     }

//     const cartButton = document.getElementById('cart-button');
//     if (cartButton) {
//         cartButton.addEventListener('click', function() {
//             console.log(`${productId}`);
//             window.location.href = `warenkorb.html?id=${productId}`;
//         });
//     } else {
//         console.error('Warenkorb-Button nicht gefunden');
//     }
//});



