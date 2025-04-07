// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
function updateCartButton() {
    const cartButton = document.getElementById("view-cart-button");
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartButton.innerText = `View Cart (${itemCount})`;
}

// Handle "Add to Cart" button click
function addItemToCart(name, price, id) {
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if product already in cart
    } else {
        cart.push({
            id,
            name,
            price,
            quantity: 1
        });
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart button with new item count
    updateCartButton();
}

// Initialize the cart button on page load
updateCartButton();


// Product image rotation logic
const productImages = [
    "https://techcrunch.com/wp-content/uploads/2021/02/keyboard.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-GAMING-MOUSE-2048px-5462.jpg?auto=webp&quality=75&width=1024",
    "https://i.ytimg.com/vi/KoWN3ZOS4so/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiMbl6E1VZLbcO0w0ihfnZAE7QOA"
];

let currentProductIndex = 0;
const rotatingProductImage = document.getElementById("rotating-product-image");

function rotateProductImage() {
    currentProductIndex = (currentProductIndex + 1) % productImages.length; // Loop through the products
    rotatingProductImage.src = productImages[currentProductIndex];
}

// Change the product image every 5 seconds
setInterval(rotateProductImage, 5000);



document.querySelectorAll(".product-image").forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
        window.location.href = `product${index + 1}.html`;
    });
});
