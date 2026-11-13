// Wanderly — small interactions, no dependencies
(() => {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  // Sticky header background after scrolling
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile / burger menu
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Destination slider arrows
  const slider = document.getElementById('slider');
  document.querySelectorAll('.slider-nav .circle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = slider.querySelector('.dest-card');
      const step = card ? card.getBoundingClientRect().width + 24 : 300;
      const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;
      const dir = Number(btn.dataset.dir);
      if (dir > 0 && atEnd) slider.scrollTo({ left: 0 });
      else if (dir < 0 && slider.scrollLeft <= 0) slider.scrollTo({ left: slider.scrollWidth });
      else slider.scrollBy({ left: dir * step });
    });
  });

  // Count-up for the stat number
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Reveal elements on scroll
  const reveals = document.querySelectorAll('.reveal, [data-count]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => {
      el.classList.add('is-visible');
      if (el.dataset.count) el.textContent = el.dataset.count;
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
