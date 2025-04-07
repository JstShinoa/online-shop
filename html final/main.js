let cart = [];
const cartButton = document.getElementById('cart-button');
const cartList = document.getElementById('cart-list');
const totalPrice = document.getElementById('total-price');
const shopNowButton = document.getElementById('shop-now-button');

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.dataset.product;
        const price = parseFloat(e.target.dataset.price);

        cart.push({ product, price });
        updateCart();
        saveCartToLocalStorage();
    });
});

function updateCart() {
    // Update the cart list
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    // Update the total price
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    // Update the cart button count
    cartButton.textContent = `🛒 Cart (${cart.length})`;
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Check if there is a cart in localStorage on page load
window.onload = function () {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}