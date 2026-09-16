// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('abierto');
    navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('abierto');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contador de estadísticas: sube de 0 al número real una sola vez,
// cuando la sección entra en pantalla.
const statNumeros = document.querySelectorAll('.stat-numero');

if (statNumeros.length && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (!entrada.isIntersecting) return;

      const elemento = entrada.target;
      const destino = parseInt(elemento.dataset.target, 10) || 0;
      const duracion = 900;
      const inicio = performance.now();

      function paso(ahora) {
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        elemento.textContent = Math.round(progreso * destino);
        if (progreso < 1) requestAnimationFrame(paso);
      }
      requestAnimationFrame(paso);

      observador.unobserve(elemento);
    });
  }, { threshold: 0.4 });

  statNumeros.forEach(el => observador.observe(el));
}