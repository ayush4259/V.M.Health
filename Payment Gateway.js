document.addEventListener('DOMContentLoaded', function() {
    // Simulate Card Payment
    document.getElementById('cardForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Simulated card payment processing...\n(No real transaction will occur)');
        // Add actual payment processing logic here (e.g., API calls)
    });

    // Simulate UPI Payment
    document.getElementById('upiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Simulated UPI payment processing...\n(No real transaction will occur)');
        // Add actual UPI payment processing logic here (e.g., API calls)
    });

    // Handle Cancel Payment
    document.querySelector('.cancel-button').addEventListener('click', function() {
        alert('Payment cancelled.');
        // Add logic to redirect to a different page, clear the cart, etc.
    });
});
