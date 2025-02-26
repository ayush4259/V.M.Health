// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register-form');
    const phoneInput = document.getElementById('phone');
    const verificationTick = document.querySelector('.verification-tick');
    const successMessage = document.querySelector('.success-message');

    // Phone Number Validation (Simple Example)
    phoneInput.addEventListener('input', function() {
        if (this.value.length > 9) {
            verificationTick.textContent = '✓';
            verificationTick.style.display = 'inline';
        } else {
            verificationTick.style.display = 'none';
        }
    });

    // Form Submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default submission

        // Simulate account generation
        setTimeout(() => {
            form.style.display = 'none'; // Hide the form
            successMessage.style.display = 'block'; // Show the success message
        }, 1500); // Simulate 1.5 seconds process
    });

     // Parallax Effect
     document.addEventListener('scroll', function() {
            const parallaxBg = document.querySelector('.parallax-bg');
            let scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        });
});
