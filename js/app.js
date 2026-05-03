document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle (Placeholder logic)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }
    });
  }
  
  // Format elements carrying Data attributes for numbers
  const formatNodes = document.querySelectorAll('[data-format="price"]');
  formatNodes.forEach(node => {
     let val = parseInt(node.innerText, 10);
     if(!isNaN(val) && window.db) {
         node.innerText = window.db.formatPrice(val);
     }
  });

});
