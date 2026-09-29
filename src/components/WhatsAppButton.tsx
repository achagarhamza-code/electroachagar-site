'use client';

import { siteConfig } from '@/lib/site-config';

export function WhatsAppButton() {
  const message = encodeURIComponent('Bonjour ELECTROACHAGAR, je souhaite avoir des informations sur...');
  const href = siteConfig.whatsapp.includes('PLACEHOLDER')
    ? `https://wa.me/?text=${message}`
    : `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${message}`;

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter ELECTROACHAGAR sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}
