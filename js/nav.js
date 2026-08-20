/* ==========================================================================
   NAV — shared behavior across home / about / projects / contact
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Page-transition reveal on load ---- */
  const transition = document.getElementById('pageTransition');
  if (transition) {
    setTimeout(() => transition.classList.remove('show'), 250);
  }

  /* ---- Intercept internal nav links for a smooth cover-then-navigate ---- */
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (link.target === '_blank' || href.startsWith('http')) return;
      e.preventDefault();
      if (transition) {
        transition.classList.add('show');
        setTimeout(() => { window.location.href = href; }, 480);
      } else {
        window.location.href = href;
      }
    });
  });

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('mobilePanel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      panel.classList.toggle('open');
    });
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        panel.classList.remove('open');
      });
    });
  }

  /* ---- Active nav link based on current filename ---- */
  const current = window.location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nav-links a, .mobile-panel a').forEach((a) => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }
});
