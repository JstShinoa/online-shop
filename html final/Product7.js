const images = [
    "https://product.hstatic.net/200000837185/product/1024__56__d69b545276234cc3bf06f1c05a7d2071.png",
    "https://ecommerce.datablitz.com.ph/cdn/shop/files/1024_2_fa54fef2-fa07-41ed-864e-ee26876e93d6_800x.jpg?v=1743470985",
    "https://ecommerce.datablitz.com.ph/cdn/shop/files/1024_e145bab5-5cb4-49d6-9dfa-dc7b28c59237_800x.jpg?v=1743470985"
  ];
  
  let currentIndex = 0;
  const productImage = document.getElementById("product-image");
  
  function rotateImage() {
    currentIndex = (currentIndex + 1) % images.length;
    productImage.src = images[currentIndex];
  }
  
  setInterval(rotateImage, 5000); // Rotate every 5 seconds

  
function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItem = cart.find(item => item.id === "graphics-card");
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: "graphics-card",
        name: "MSI GeForce RTX™ 5080 VANGUARD SOC LAUNCH EDITION 16GB GDDR7 256-bit Graphics Card",
        price: 1536.99,
        quantity: 1
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  }
  