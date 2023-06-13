// Example code to update the cart count (assuming you have a button for adding items)
const cartCount = document.querySelector('.cart-count');
let count = 0;

function addToCart() {
  count++;
  cartCount.textContent = count;
}

const addToCartButton = document.querySelector('.add-to-cart-button');
addToCartButton.addEventListener('click', addToCart);
