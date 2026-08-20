/* ==========================================================================
   PROJECTS — client-side tag filter
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#filterRow button');
  const cards = document.querySelectorAll('#projectGrid .project-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.tag === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
});
