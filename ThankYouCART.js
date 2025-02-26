document.addEventListener('DOMContentLoaded', function() {
    // Function to redirect to homepage
    function redirectToHome() {
        window.location.href = '/'; // Replace '/' with your actual homepage URL
    }

    // Redirect after 3 seconds
    setTimeout(redirectToHome, 3000);
});
