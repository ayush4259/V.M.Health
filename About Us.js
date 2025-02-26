// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = document.querySelectorAll('.about-slider .slider-image');
    let currentIndex = 0;

    // Add 'active' class to the first image
    sliderImages[0].classList.add('active');

    function showNextImage() {
        // Remove 'active' class from the current image
        sliderImages[currentIndex].classList.remove('active');

        // Increment the index or reset to 0 if it's the last image
        currentIndex = (currentIndex + 1) % sliderImages.length;

        // Add 'active' class to the next image
        sliderImages[currentIndex].classList.add('active');
    }

    // Set interval to change image every 5 seconds
    setInterval(showNextImage, 5000);
});
