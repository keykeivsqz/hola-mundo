/**
 * StatsCounter
 * Sube cada número de 0 a su valor real, una sola vez,
 * cuando la sección entra en pantalla. Solo se usa en el home.
 */
export class StatsCounter {
  constructor({ selector = '.stat-numero', duracion = 900 } = {}) {
    this.elementos = document.querySelectorAll(selector);
    this.duracion = duracion;

    if (!this.elementos.length || !('IntersectionObserver' in window)) return;

    this.observador = new IntersectionObserver(
      (entradas) => this.alObservar(entradas),
      { threshold: 0.4 }
    );

    this.elementos.forEach((el) => this.observador.observe(el));
  }

  alObservar(entradas) {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      this.animar(entrada.target);
      this.observador.unobserve(entrada.target);
    });
  }

  animar(elemento) {
    const destino = parseInt(elemento.dataset.target, 10) || 0;
    const inicio = performance.now();

    const paso = (ahora) => {
      const progreso = Math.min((ahora - inicio) / this.duracion, 1);
      elemento.textContent = Math.round(progreso * destino);
      if (progreso < 1) requestAnimationFrame(paso);
    };

    requestAnimationFrame(paso);
  }
}
