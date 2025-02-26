// JavaScript - script.js
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    attachFormSubmitHandler();
});

function createBubbles() {
    const bubbleContainer = document.querySelector('.bubbles');
    const bubbleCount = 20; // Increased bubble count for more immersive effect

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');

        // Randomize horizontal position
        bubble.style.setProperty('--bubble-left', `${Math.random() * 100}%`);

        // Randomize size and animation speed
        const size = Math.random() * 30 + 10; // Size between 10px and 40px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.animationDuration = `${Math.random() * 15 + 20}s`; // Duration between 20s and 35s

        bubbleContainer.appendChild(bubble);
    }
}

function attachFormSubmitHandler() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Simulate form submission
        successMessage.style.display = 'block'; // Show success message

        // Clear form
        contactForm.reset();

        // Hide success message after a few seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000); // Adjust the time as needed
    });
}
