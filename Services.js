// JavaScript - Keep the same
document.addEventListener('DOMContentLoaded', function () {
    // Optional: Add click event for "Learn More" links
    document.querySelectorAll('.learn-more').forEach(link => {
        link.addEventListener('click', function () {
            alert('Learn More clicked! (This is a demo)');
            // Replace this alert with actual navigation or modal display
        });
    });
});
