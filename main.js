// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Waitlist form
const form = document.getElementById('waitlist-form');
const successEl = document.getElementById('waitlist-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value.trim();
  if (!email) return;

  // Swap form for success message (wire up a real backend later)
  form.style.display = 'none';
  successEl.textContent = '¡Listo! Te avisamos cuando abramos. 🤙';
});

// Scroll-reveal with IntersectionObserver
const revealEls = document.querySelectorAll(
  '.about__content, .about__label, .collection, .waitlist__inner'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
);

revealEls.forEach(el => observer.observe(el));
