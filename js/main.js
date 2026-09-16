import { NavMenu } from './components/NavMenu.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { StatsCounter } from './components/StatsCounter.js';

// ⚠️ Cambia "50200000000" por tu número real (código de país + número, sin + ni espacios)
// cuando lo tengas. Es el ÚNICO lugar del sitio donde hay que tocarlo.
const WHATSAPP_CONFIG = {
  phone: '50240339235',
  message: 'Hola Kevin, quiero más información',
};

new NavMenu();
new WhatsAppButton(WHATSAPP_CONFIG);
new StatsCounter(); // no hace nada en páginas sin .stat-numero, así que es seguro incluirlo en todas
