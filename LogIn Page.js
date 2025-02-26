// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Parallax Effect
    document.addEventListener('scroll', function () {
        const parallaxBg = document.querySelector('.parallax-bg');
        let scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    });

    // Create more floating circles
    const loginContainer = document.querySelector('.login-container');

    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.classList.add('animation-element');
        circle.style.left = Math.random() * 100 + '%';
        circle.style.top = Math.random() * 100 + '%';
        circle.style.animationDelay = Math.random() * 2 + 's';
        loginContainer.appendChild(circle);
    }
});
