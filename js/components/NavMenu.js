/**
 * NavMenu
 * Controla la apertura/cierre del menú en pantallas pequeñas.
 * Se usa igual en todas las páginas del sitio.
 */
export class NavMenu {
  constructor({ toggleId = 'navToggle', linksId = 'navLinks' } = {}) {
    this.toggle = document.getElementById(toggleId);
    this.links = document.getElementById(linksId);

    if (!this.toggle || !this.links) return;

    this.toggle.addEventListener('click', () => this.alternar());

    this.links.querySelectorAll('a').forEach((enlace) => {
      enlace.addEventListener('click', () => this.cerrar());
    });
  }

  alternar() {
    const abierto = this.links.classList.toggle('abierto');
    this.toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  }

  cerrar() {
    this.links.classList.remove('abierto');
    this.toggle.setAttribute('aria-expanded', 'false');
  }
}
