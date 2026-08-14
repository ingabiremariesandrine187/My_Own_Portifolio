// ─── EmailJS Configuration ────────────────────────────────────
// Steps to get your keys (free at emailjs.com):
// 1. Sign up at https://www.emailjs.com
// 2. Add an Email Service (connect your Gmail) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// Then replace the placeholders below with your real values.

export const EMAILJS_CONFIG = {
  SERVICE_ID:  'YOUR_SERVICE_ID',   // e.g. 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',  // e.g. 'template_xyz789'
  PUBLIC_KEY:  'YOUR_PUBLIC_KEY',   // e.g. 'AbCdEfGhIjKlMnOp'
};
