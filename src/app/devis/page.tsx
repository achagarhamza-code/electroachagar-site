import { QuoteForm } from '@/components/QuoteForm';

export default function DevisPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Demande de devis</h1>
          <p>Partagez votre besoin et notre équipe vous recontactera rapidement.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Devis',
  description: 'Demande de devis ELECTROACHAGAR : électroménager, sécurité, réseau, installation et maintenance.',
};
