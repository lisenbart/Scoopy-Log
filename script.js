// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Handle smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Track App Store button clicks (for analytics)
  const appStoreButtons = document.querySelectorAll('.btn-app-store');
  appStoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add analytics tracking here if needed
      // Example: gtag('event', 'app_store_click', { ... });
    });
  });
});
