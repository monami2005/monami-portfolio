/* 
===============================================
    MONAMI SADHU PORTFOLIO - JS LOGIC
=============================================== 
*/

document.addEventListener("DOMContentLoaded", () => {

  // 1. Initialize AOS (Animate On Scroll) Library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 80,
  });

  // 2. Initialize Typed.js for Hero Section
  const typedElement = document.getElementById('typed-text');
  if (typedElement) {
    new Typed('#typed-text', {
      strings: [
        "B.Tech CSE Student",
        "Programmer",
        "Web Developer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
      autoInsertCss: true
    });
  }

  // 3. Active Navbar tracking on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= (sectionTop - 200)) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // 4. Smooth Anchor Scrolling (Fallback for Bootstrap's native scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetAttr = this.getAttribute('href');
      if (targetAttr !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetAttr);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // offset for fixed navbar
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 5. Mobile Menu Close on link click
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  // 6. Contact Form Basic Simulation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = btn.innerHTML;

      btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';
      btn.disabled = true;

      setTimeout(() => {
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
        btn.innerHTML = originalHTML;
        btn.disabled = false;
      }, 1500);
    });
  }
});
