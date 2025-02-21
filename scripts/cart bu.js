// class CartProduct {
//     constructor(id, image, price, name) {
//         this.id = id;
//         this.image = image;
//         this.price = price;
//         this.name = name;
//     }

//     static getProductById(id) {
//         return products.find(product => product.id === id);
//     }
// }

// // Produktliste
// var products = [
//     new CartProduct('shirt1', 'Produktpics/shirt1_mockup.png', '29.99$', 'Band T-Shirt'),
//     new CartProduct('shirt2', 'Produktpics/shirt2_mockup.png', '29.99$', 'Band T-Shirt'),
//     new CartProduct('shirt3', 'Produktpics/shirt3_mockup.png', '29.99$', 'Band T-Shirt'),
//     new CartProduct('shirt4', 'Produktpics/shirt4_mockup.png', '29.99$', 'Band T-Shirt'),
//     new CartProduct('mütze', 'Produktpics/mütze_mockup.png', '9.99$', 'Mütze'),
//     new CartProduct('tasche', 'Produktpics/tasche_mockup.png', '14.99$', 'Badetasche'),
//     new CartProduct('poster', 'Produktpics/poster_mockup.png', '4.99$', 'One Erection Poster'),
//     new CartProduct('sticker', 'Produktpics/sticker_mockup.png', '0.50$', 'Sticker'),
//     new CartProduct('hoodie', 'Produktpics/hoodie_mockup.png', '29.99$', 'Hoodie')
// ];

// // Event Listener für das Laden der Produktdetails
// $(document).ready(function() {

//     function getQueryParameter(name) {
//         const urlParams = new URLSearchParams(window.location.search);
//         return urlParams.get(name);
//     }

//     const productId = getQueryParameter('id');
//     const cartProduct = CartProduct.getProductById(productId);
    
//     // Beispiel: Ausgabe der Produkt-ID in der Konsole
//     console.log(`${productId}`);
    
    
//     // Beispiel: Anzeige der Produkt-Daten im HTML-Dokument
//     if (cartProduct) {
//         // Check if the product already exists in localStorage
//         const storedProducts = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : [];
//         const productExists = storedProducts.some(product => product.id === cartProduct.id);
        
//         if (!productExists) {
//             //newDiv wird in die globale variable jsteil eingefügt und mit den Produktinformationen befüllt
//             const newDiv = document.createElement('div');
//             newDiv.innerHTML = `
//                 <div class="trennung"></div>
//                 <div class="produkt">
//                     <div class="product-Image">
//                         <img class="productImage" src="" alt="Band T-Shirt mit Blumen Logo">
//                     </div>
//                     <div class="item-details">
//                         <div class="namepreis">
//                             <div class="produktname">
//                                 <h3 id="productName">Band T-Shirt mit Blumen Logo</h3>
//                             </div>
//                             <div class="productPrice">
//                                 <span>29.99$</span>
//                              </div>
//                         </div>
//                         <div class="verfügbarmenge">
//                             <div class="verfügbar-text">
//                                 Verfügbar
//                             </div>
//                             <div class="verfügbar-img">
//                                 <img src="Produktpics/Oval Copy.png" alt="Checkmark">
//                             </div>
//                             <div class="quantity-select">
//                                 <select id="quantity" name="quantity">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div class="müll">
//                                 <img src="Trash.png" alt="Entfernungssympbol" onclick="removeProduct('${cartProduct.id}')">
//                         </div>        
//                     </div>
//                 </div>
//             `;
    
//             const jsteil = document.getElementById('jsteil');
//             jsteil.appendChild(newDiv);
    
//             document.getElementsByClassName('productImage').src = cartProduct.image;
//             document.getElementsByClassName('productPrice').textContent = cartProduct.price;
//             document.getElementById('productName').textContent = cartProduct.name;
    
//             // Speichern der Produktinformationen im Local Storage
//             storedProducts.push(cartProduct);
//             localStorage.setItem('cartProducts', JSON.stringify(storedProducts));
//         }
//     } else {
//         console.error('Produkt nicht gefunden');
//     }

//     // Überprüfen, ob im Local Storage bereits Produkte gespeichert sind
//     if (localStorage.getItem('cartProducts')) {
//         const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));

//         // Hinzufügen der gespeicherten Produkte zum HTML-Dokument
//         storedProducts.forEach(storedProduct => {
//             const newDiv = document.createElement('div');
//             newDiv.innerHTML = `
//                 <div class="trennung"></div>
//                 <div class="produkt">
//                     <div class="product-Image">
//                         <img class="productImage" src="${storedProduct.image}" alt="${storedProduct.name}">
//                     </div>
//                     <div class="item-details">
//                         <div class="namepreis">
//                             <div class="produktname">
//                                 <h3>${storedProduct.name}</h3>
//                             </div>
//                             <div class="productPrice">
//                                 <span>${storedProduct.price}</span>
//                             </div>
//                         </div>
//                         <div class="verfügbarmenge">
//                             <div class="verfügbar-text">
//                                 Verfügbar
//                             </div>
//                             <div class="verfügbar-img">
//                                 <img src="Produktpics/Oval Copy.png" alt="Checkmark">
//                             </div>
//                             <div class="quantity-select">
//                                 <select id="quantity" name="quantity">
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                     <option value="3">3</option>
//                                     <option value="4">4</option>
//                                     <option value="5">5</option>
//                                     <option value="6">6</option>
//                                     <option value="7">7</option>
//                                     <option value="8">8</option>
//                                     <option value="9">9</option>
//                                     <option value="10">10</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div class="müll">
//                                             <img src="Trash.png" alt="Entfernungssympbol">
//                                         </div>        
//                                     </div>
//                                 </div>
//                             `;

//                             jsteil.appendChild(newDiv);
//         });
//     }

//     document.getElementsByClassName("müll").onclick = function() { removeProduct('${storedProduct.id}') }

//     // Funktion zum Entfernen des Produkts
//     window.removeProduct = function(productId) {
//         const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));
//         const updatedProducts = storedProducts.filter(product => product.id !== productId);
//         localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
//         const productDiv = document.querySelector(`[data-product-id="${productId}"]`);
//         if (productDiv) {
//             productDiv.remove();
//         }
//     }

//     document.getElementById('totalPrice').textContent = totalPrice();

//     //Funktion um den totalPrice abhängig zu machen von den Preisen der Produkte
//     function totalPrice() {
//         const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));
//         let totalPrice = 0;
//         storedProducts.forEach(product => {
//             totalPrice = totalPrice + parseFloat(product.price);
//             //Preis auf 2 Nachkommastellen runden
//             totalPrice = Math.round(totalPrice * 100) / 100;
//         });
//         return totalPrice + 5;
//     }

    
//     let variableToSend = totalPrice();
//     let link = document.getElementById("link");
//     link.href = `kassa.html?variable=${encodeURIComponent(variableToSend)}`;
    


// });


class CartProduct {
    constructor(id, image, price, name) {
        this.id = id;
        this.image = image;
        this.price = price;
        this.name = name;
    }

    static getProductById(id) {
        return products.find(product => product.id === id);
    }
}

// Produktliste
var products = [
    new CartProduct('shirt1', 'Produktpics/shirt1_mockup.png', '29.99$', 'Band T-Shirt'),
    new CartProduct('shirt2', 'Produktpics/shirt2_mockup.png', '29.99$', 'Band T-Shirt'),
    new CartProduct('shirt3', 'Produktpics/shirt3_mockup.png', '29.99$', 'Band T-Shirt'),
    new CartProduct('shirt4', 'Produktpics/shirt4_mockup.png', '29.99$', 'Band T-Shirt'),
    new CartProduct('mütze', 'Produktpics/mütze_mockup.png', '9.99$', 'Mütze'),
    new CartProduct('tasche', 'Produktpics/tasche_mockup.png', '14.99$', 'Badetasche'),
    new CartProduct('poster', 'Produktpics/poster_mockup.png', '4.99$', 'One Erection Poster'),
    new CartProduct('sticker', 'Produktpics/sticker_mockup.png', '0.50$', 'Sticker'),
    new CartProduct('hoodie', 'Produktpics/hoodie_mockup.png', '29.99$', 'Hoodie')
];

// Event Listener für das Laden der Produktdetails
$(document).ready(function() {

    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const productId = getQueryParameter('id');
    const cartProduct = CartProduct.getProductById(productId);
    
    // Beispiel: Ausgabe der Produkt-ID in der Konsole
    console.log(`${productId}`);
    
    
    // Beispiel: Anzeige der Produkt-Daten im HTML-Dokument
    if (cartProduct) {
        // Check if the product already exists in localStorage
        const storedProducts = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : [];
        const productExists = storedProducts.some(product => product.id === cartProduct.id);
        
        if (!productExists) {
            // newDiv wird in die globale variable jsteil eingefügt und mit den Produktinformationen befüllt
            const newDiv = document.createElement('div');
            newDiv.setAttribute('data-product-id', cartProduct.id);
            newDiv.innerHTML = `
                <div class="trennung"></div>
                <div class="produkt">
                    <div class="product-Image">
                        <img class="productImage" src="${cartProduct.image}" alt="Band T-Shirt mit Blumen Logo">
                    </div>
                    <div class="item-details">
                        <div class="namepreis">
                            <div class="produktname">
                                <h3 id="productName">${cartProduct.name}</h3>
                            </div>
                            <div class="productPrice">
                                <span>${cartProduct.price}</span>
                             </div>
                        </div>
                        <div class="verfügbarmenge">
                            <div class="verfügbar-text">
                                Verfügbar
                            </div>
                            <div class="verfügbar-img">
                                <img src="Produktpics/Oval Copy.png" alt="Checkmark">
                            </div>
                            <div class="quantity-select">
                                <select id="quantity" name="quantity">
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
                        <div class="müll">
                            <img src="Trash.png" alt="Entfernungssympbol" onclick="removeProduct('${cartProduct.id}')">
                        </div>        
                    </div>
                </div>
            `;
    
            const jsteil = document.getElementById('jsteil');
            jsteil.appendChild(newDiv);
    
            // Speichern der Produktinformationen im Local Storage
            storedProducts.push(cartProduct);
            localStorage.setItem('cartProducts', JSON.stringify(storedProducts));
        }
    } else {
        console.error('Produkt nicht gefunden');
    }

    // Überprüfen, ob im Local Storage bereits Produkte gespeichert sind
    if (localStorage.getItem('cartProducts')) {
        const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));

        // Hinzufügen der gespeicherten Produkte zum HTML-Dokument
        storedProducts.forEach(storedProduct => {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('data-product-id', storedProduct.id);
            newDiv.innerHTML = `
                <div class="trennung"></div>
                <div class="produkt">
                    <div class="product-Image">
                        <img class="productImage" src="${storedProduct.image}" alt="${storedProduct.name}">
                    </div>
                    <div class="item-details">
                        <div class="namepreis">
                            <div class="produktname">
                                <h3>${storedProduct.name}</h3>
                            </div>
                            <div class="productPrice">
                                <span>${storedProduct.price}</span>
                            </div>
                        </div>
                        <div class="verfügbarmenge">
                            <div class="verfügbar-text">
                                Verfügbar
                            </div>
                            <div class="verfügbar-img">
                                <img src="Produktpics/Oval Copy.png" alt="Checkmark">
                            </div>
                            <div class="quantity-select">
                                <select id="quantity" name="quantity">
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
                        <div class="müll">
                            <img src="Trash.png" alt="Entfernungssympbol" onclick="removeProduct('${storedProduct.id}')">
                        </div>        
                    </div>
                </div>
            `;

            const jsteil = document.getElementById('jsteil');
            jsteil.appendChild(newDiv);
        });
    }

    // Funktion zum Entfernen des Produkts
    window.removeProduct = function(productId) {
        const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));
        const updatedProducts = storedProducts.filter(product => product.id !== productId);
        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
        const productDiv = document.querySelector(`[data-product-id="${productId}"]`);
        if (productDiv) {
            productDiv.remove();
        }
        document.getElementById('totalPrice').textContent = totalPrice();
    }

    document.getElementById('totalPrice').textContent = totalPrice();

    // Funktion um den totalPrice abhängig zu machen von den Preisen der Produkte
    function totalPrice() {
        const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));
        let totalPrice = 0;
        storedProducts.forEach(product => {
            totalPrice = totalPrice + parseFloat(product.price);
        });
        // Preis auf 2 Nachkommastellen runden
        totalPrice = Math.round(totalPrice * 100) / 100;
        return totalPrice + 5;
    }

    let variableToSend = totalPrice();
    let link = document.getElementById("link");
    link.href = `kassa.html?variable=${encodeURIComponent(variableToSend)}`;
});
