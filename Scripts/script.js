document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const ctaButtons = document.querySelectorAll('.cta');
  
    // Toggle Mobile Menu
    document.querySelector('.logo').addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // CTA Buttons Click Event
    ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Welcome to Modrop! Your journey to amazing products starts here!');
      });
    });
  });
  