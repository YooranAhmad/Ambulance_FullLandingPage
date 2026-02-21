import './style.css'

// Advanced Scroll Reveal using Intersection Observer for better performance
const revealSettings = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Uncomment below if you only want animations to fire once
      // observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, revealSettings);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));

  console.log('BORCELLE Animation Engine Started');
});
