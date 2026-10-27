const parallaxItems = document.querySelectorAll('.parallax-item');
const finePointer = window.matchMedia('(pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (finePointer.matches && !reducedMotion.matches) {
  parallaxItems.forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const bounds = item.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      item.style.setProperty('--rotate-y', `${(x - 0.5) * 9}deg`);
      item.style.setProperty('--rotate-x', `${(0.5 - y) * 9}deg`);
      item.style.setProperty('--move-x', `${(x - 0.5) * 4}px`);
      item.style.setProperty('--move-y', `${(y - 0.5) * 4}px`);
    });

    item.addEventListener('pointerleave', () => {
      item.style.removeProperty('--rotate-y');
      item.style.removeProperty('--rotate-x');
      item.style.removeProperty('--move-x');
      item.style.removeProperty('--move-y');
    });
  });
}
