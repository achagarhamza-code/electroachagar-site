import Link from 'next/link';
import { SAVForm } from '@/components/SAVForm';

export default function SAVPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>SAV</h1>
          <p>Réparation, diagnostic, intervention, garantie et maintenance.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-body">
                <h3>Demande de SAV</h3>
                <p>Décrivez votre produit, votre problème et les éléments utiles au diagnostic.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <h3>Types de demandes</h3>
                <p>Réparation • Diagnostic • Intervention • Garantie • Maintenance</p>
              </div>
            </div>
          </div>
          <SAVForm />
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'SAV',
  description: 'Service après-vente et maintenance ELECTROACHAGAR.',
};
