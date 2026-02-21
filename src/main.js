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

// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('invisible');

      if (isOpen) {
        // Close Menu
        mobileMenu.classList.add('invisible', 'opacity-0', '-translate-y-4');
        mobileMenu.classList.remove('visible', 'opacity-100', 'translate-y-0');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        // Open Menu
        mobileMenu.classList.remove('invisible', 'opacity-0', '-translate-y-4');
        mobileMenu.classList.add('visible', 'opacity-100', 'translate-y-0');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('invisible', 'opacity-0', '-translate-y-4');
        mobileMenu.classList.remove('visible', 'opacity-100', 'translate-y-0');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));

  console.log('BORCELLE Animation Engine Started');
});
