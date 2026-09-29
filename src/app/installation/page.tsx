import Link from 'next/link';

export default function InstallationPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Installation</h1>
          <p>Processus clair, sécurisé et orienté qualité.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid three-col">
            {[
              'Analyse du besoin',
              'Conseil',
              'Devis',
              'Installation',
              'Configuration',
              'Test',
              'Livraison',
              'Garantie',
              'SAV',
            ].map((step, index) => (
              <div key={step} className="product-card">
                <div className="product-card-body">
                  <h3>{index + 1}. {step}</h3>
                  <p>Étape structurée pour un résultat fiable, conforme et durable.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-box">
            <Link href="/devis" className="btn btn-primary">Demander un devis d’installation</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Installation',
  description: 'Installation ELECTROACHAGAR : conseil, devis, installation, configuration, test et garantie.',
};
