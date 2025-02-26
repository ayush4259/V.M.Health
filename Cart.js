document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    // Initialize image sliders
    document.querySelectorAll('.product-image-slider').forEach(slider => {
        let images = slider.querySelectorAll('img');
        let currentImageIndex = 0;

        // Initially show first image
        images[currentImageIndex].style.opacity = 1;

        // Function to switch images
        function nextImage() {
            images[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.opacity = 1;
        }

        // Switch images every 3 seconds
        setInterval(nextImage, 3000);
    });

    // Function to handle "Add to Cart" button clicks (currently does nothing)
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // For an actual implementation, you would:
            // 1. Retrieve the product ID from the button's data attribute.
            // 2. Add the product to the cart.
            // 3. Update the cart display.
            console.log(`Added product with ID ${this.dataset.productId} to cart`);
            alert("Product added to cart");
        });
    });
});
