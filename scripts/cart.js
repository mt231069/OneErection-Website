
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  //console.log(cartQuantity);
};



function addToCart(productId, quantity, productPrice) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){  //ist ein Object also ein truthy value
    matchingItem.quantity += parseInt(quantity);
  } else {
    cart.push({
      productId: productId,
      quantity: parseInt(quantity),
      price: productPrice
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));

  
  updateCartQuantity();
}









