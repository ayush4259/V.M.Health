// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Auto-scroll for meditation slider (can be customized)
    const meditationSlider = document.querySelector('.meditation-slider');
    let scrollInterval = setInterval(() => {
      meditationSlider.scrollLeft += 300; // Adjust scroll speed
      if (meditationSlider.scrollLeft >= (meditationSlider.scrollWidth - meditationSlider.clientWidth)) {
        meditationSlider.scrollLeft = 0;
      }
    }, 3000);
  });
  