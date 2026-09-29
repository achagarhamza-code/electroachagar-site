import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Contact</h1>
          <p>Une question, un besoin ou un projet ? Contactez-nous.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="contact-card">
              <h3>Coordonnées</h3>
              <p><strong>Téléphone :</strong> {siteConfig.phone}</p>
              <p><strong>WhatsApp :</strong> {siteConfig.whatsapp}</p>
              <p><strong>Email :</strong> {siteConfig.email}</p>
              <p><strong>Adresse :</strong> {siteConfig.address}</p>
              <p><strong>Horaires :</strong> {siteConfig.businessHours} - {siteConfig.businessClose}</p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Contact',
  description: 'Contact ELECTROACHAGAR : téléphone, WhatsApp, email et formulaire.',
};
