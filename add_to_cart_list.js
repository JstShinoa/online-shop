// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Reference to the cart items container
const cartItemsContainer = document.getElementById('cart-items-container');
const totalPriceElem = document.getElementById('total-price');

// Function to render the cart
function renderCart() {
    cartItemsContainer.innerHTML = ''; // Clear the container

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElem.textContent = '0.00';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong><br>
            Quantity: ${item.quantity} | Total: $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElem.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove item from the cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render the cart
}

// Function to go back to the store page
document.getElementById('go-to-store').addEventListener('click', () => {
    window.location.href = 'storepage.html'; // Redirect to store page
});

// Initial render of the cart
renderCart();
