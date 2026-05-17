const tiltCards = document.querySelectorAll('[data-tilt]');
const canAnimate = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (canAnimate) {
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${y * -7}deg) rotateY(${x * 8}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
