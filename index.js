// JavaScript
// Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mobile Menu Toggle (Add this if needed)
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<svg>...</svg>'; // Add hamburger icon SVG
  document.querySelector('.header-content').appendChild(menuToggle);

  







  // JavaScript for Particle Animation
function initParticles() {
    const canvas = document.querySelector('.particles-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;
  
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.3 + 0.2;
      }
      
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        if (this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }
  
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }
  
    animate();
  
    // Resize handler
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
  
  // Initialize particles when DOM loads
  document.addEventListener('DOMContentLoaded', initParticles);
  










  // JavaScript for Dynamic Interactions
document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  







  





  <!-- JavaScript (Optional: for adding more interactivity) -->
<script>
    // Example: Adding a simple alert when booking
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Booking feature is under development!');
        });
    });
</script>











// JavaScript (Optional - for adding interactivity)
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
  
    teamMembers.forEach(member => {
      member.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
      });
  
      member.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });
  });
  






  // JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrast-toggle');
  
    contrastToggle.addEventListener('click', function() {
      document.body.classList.toggle('high-contrast-mode');
    });
  });
  











  // JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Expanding Box
    const expandingBox = document.querySelector('.expanding-box');
  
    expandingBox.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  
    // Notification
    const notificationContainer = document.querySelector('.notification-container');
    const notification = document.querySelector('.notification');
  
    setTimeout(() => {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000); //remove after 3 seconds
    }, 1000); // Show notification after 1 second
  });
  







  // JavaScript (Optional - for adding basic manual navigation)
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
  
    if(prevButton && nextButton){
      prevButton.addEventListener('click', () => {
        slider.scrollLeft -= 350; // Adjust scroll amount as needed
      });
  
      nextButton.addEventListener('click', () => {
        slider.scrollLeft += 350; // Adjust scroll amount as needed
      });
    }
  });
  

















  // JavaScript (Optional - for adding basic form submission handling)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Basic form validation (you should enhance this)
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert('Message sent! (This is a demo)');
        // You would typically send the form data to a server-side script here
        // using AJAX or the Fetch API
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
  












// JavaScript - Same as Before, no changes needed
document.addEventListener('DOMContentLoaded', function() {
    const articleSlider = document.querySelector('.article-slider');
    const articleCards = document.querySelectorAll('.article-card');
    const cardWidth = articleCards[0].offsetWidth + 16; // Card width + margin
    const totalCards = articleCards.length;
    let currentPosition = 0;
    let cardVisible = 3;


    function slideNext() {
        currentPosition += cardWidth;
        if (currentPosition >= (totalCards - cardVisible) * cardWidth) {
            currentPosition = 0; // Reset to the beginning
        }
        articleSlider.scrollLeft = currentPosition;
    }

    setInterval(slideNext, 5000); // Change slide every 5 seconds
});
