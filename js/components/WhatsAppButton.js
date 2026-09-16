/**
 * WhatsAppButton
 * Inyecta un botón flotante de WhatsApp en cualquier página que
 * la use. Cambia SOLO los valores de `phone` y `message` en
 * main.js cuando tengas tu número real — no hay que tocar nada más.
 */
export class WhatsAppButton {
  constructor({ phone, message = 'Hola, quiero más información' } = {}) {
    this.phone = phone;
    this.message = message;
    this.render();
  }

  construirEnlace() {
    const texto = encodeURIComponent(this.message);
    return `https://wa.me/${this.phone}?text=${texto}`;
  }

  render() {
    const enlace = document.createElement('a');
    enlace.href = this.construirEnlace();
    enlace.className = 'boton-whatsapp';
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.setAttribute('aria-label', 'Escribir por WhatsApp');
    enlace.innerHTML = `
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.6 4.3 1.7 6.1L4 29l8.06-1.7c1.7.9 3.6 1.4 5.96 1.4 6.62 0 12.02-5.4 12.02-12.02C30.04 8.4 24.64 3 16.02 3zm0 22.2c-1.9 0-3.7-.5-5.3-1.4l-.38-.2-4.8 1 1.02-4.68-.24-.4a9.9 9.9 0 0 1-1.5-5.4c0-5.5 4.5-10 10-10s10 4.5 10 10-4.4 10.9-8.8 10.9zm5.4-7.5c-.3-.15-1.75-.85-2-.95-.28-.1-.48-.15-.68.15s-.78.95-.95 1.15c-.17.2-.35.22-.65.07-.3-.15-1.24-.45-2.35-1.44-.87-.77-1.46-1.73-1.63-2.02-.17-.3 0-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.62-.93-2.22-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.4.24-.7.24-1.3.17-1.4-.07-.12-.27-.2-.57-.34z"/>
      </svg>
      <span>WhatsApp</span>
    `;
    document.body.appendChild(enlace);
  }
}
