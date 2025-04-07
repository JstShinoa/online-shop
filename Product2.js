// Image rotation for product gallery
const images = [
    "https://shop.tti.com.ph/pub/media/catalog/product/cache/07dc43095bd992476134f3022ceb9abf/h/i/high_resolution_png-pro_gaming_keyboard_top_us.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZdS7bzmdMbleHT36CtwLRMlxeoCe4oI6F2KAwMtUob9FDM8xSLVUQBRyIg154Ou3pY8&usqp=CAU",
    "https://th-test-11.slatic.net/p/2a594a902b558787cd41c3d0a49c8cea.jpg"
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("product-image");
  
  function rotateImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }
  
  setInterval(rotateImage, 5000); // Change image every 5 seconds
  
  // Add to Cart Function
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const item = {
      id: "logitech-gprox-tkl",
      name: "Logitech G Pro X TKL Keyboard",
      price: 199.99,
      quantity: 1
    };
  
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added Logitech G Pro X TKL to cart!");
  }
  