// Product images for rotation
const images = [
    "https://webapi3.adata.com/storage/product/legend_710_p_01.jpg",
    "https://dynaquestpc.com/cdn/shop/files/62_d1bd03ec-6354-4e31-921a-4ce3e6c052cc.png?v=1706522325&width=160",
    "https://webapi3.adata.com/storage/product/legend710_a1_1500x1500.jpg"
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
      id: "ADATA 512GB LEGEND 710 ",
      name: "ADATA 512GB LEGEND 710 M.2 PCIe NVMe (ALEG-710-512GCS) Solid State Drive",
      price: 31.37,
      quantity: 1
    };
  
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added ADATA 512GB LEGEND 710 to cart!");
  }