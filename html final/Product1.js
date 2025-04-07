const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRne80j5E2M14Cb40NdF8pYRLQVWbYIH7BQ&s",
    "https://i.rtings.com/assets/products/ElJvpiyf/razer-deathadder-v2/design-large.jpg?format=auto",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bkOFB9cRRuOeAVPyIglruFPsKx0DNEfGSw&s"
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
  
    const existingItem = cart.find(item => item.id === "razer-mouse");
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: "razer-mouse",
        name: "Razer DeathAdder V2",
        price: 99.99,
        quantity: 1
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  }
  