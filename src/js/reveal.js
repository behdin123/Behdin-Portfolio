// Letvægts scroll-reveal (erstatter AOS): v-reveal og v-reveal="{ delay: 150 }"
const observer =
  typeof window !== 'undefined' && 'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.dataset.revealDelay || 0;
              setTimeout(() => el.classList.add('is-revealed'), delay);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.12 }
      )
    : null;

export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal');
    if (binding.value && binding.value.delay) {
      el.dataset.revealDelay = binding.value.delay;
    }
    if (observer) {
      observer.observe(el);
    } else {
      el.classList.add('is-revealed');
    }
  },
};

// Tælleranimation: animateCount(el, 560, 1200)
export function animateCount(el, target, duration = 1200) {
  const start = performance.now();
  const from = 0;
  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (target - from) * eased).toLocaleString('da-DK');
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
