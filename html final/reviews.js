document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Change to your actual homepage file
});

document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    
    if (name && review) {
        const reviewContainer = document.getElementById("review-container");
        const reviewElement = document.createElement("div");
        reviewElement.innerHTML = `<strong>${name}:</strong> <p>${review}</p>`;
        reviewElement.style.border = "1px solid #ff0000";
        reviewElement.style.padding = "10px";
        reviewElement.style.margin = "10px 0";
        
        reviewContainer.appendChild(reviewElement);

        document.getElementById("review-form").reset();
    }
});
