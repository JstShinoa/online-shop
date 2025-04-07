// Product images for rotation
const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrPYTf2-v3_zwCggNFTi2Em4o_dHUMr5Rdx7h7c7Txhbqax6yHXKCiqp2VO9tpzSOYxo&usqp=CAU",
    "https://gameone.ph/media/catalog/product/cache/d378a0f20f83637cdb1392af8dc032a2/s/t/steelseries_arctis_nova_5_wireless.jpg",
    "https://media.steelseriescdn.com/thumbs/filer_public/aa/94/aa94ccb6-ae49-4f0d-99be-f64c6d3ef657/arctis_nova_5_wl_black_pdp_img_mobile_hero.png__540x540_crop-scale_subsampling-2.png"
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
      id: "steelseries-nova5p",
      name: "SteelSeries Arctis Nova 5P Wireless Gaming Headset",
      price: 129.99,
      quantity: 1
    };
  
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added SteelSeries Arctis Nova 5P to cart!");
  }
  