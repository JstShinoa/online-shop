// Product images for rotation
const images = [
    "https://m.media-amazon.com/images/I/51GaUAKZC1L._AC_SL1200_.jpg",
    "https://yestonstore.com/cdn/shop/files/3_fa94c70b-6a9a-4ec9-b6c0-917e199d4b30.jpg?v=1737528733&width=1445",
    "https://m.media-amazon.com/images/I/61iYMdf4xyL._AC_SL1200_.jpg"
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("product-image");
  
  function rotateImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }
  
  setInterval(rotateImage, 5000); // Every 5 seconds
  
  // Add to Cart Function
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const item = {
      id: "Yeston Sakura Radeon RX 7800 XT",
      name: "Yeston Sakura Radeon RX 7800 XT 16G GDDR6 256bit 5nm video cards Desktop computer PC Video Graphics Card",
      price: 619.00,
      quantity: 1
    };
  
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added Yeston Sakura Radeon RX 7800 XT to cart!");
  }
  