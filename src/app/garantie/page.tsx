import Link from 'next/link';

export default function GarantiePage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Garantie</h1>
          <p>Selon les conditions applicables au produit et au fournisseur.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-body">
                <h3>Conditions</h3>
                <p>Les conditions de garantie varient selon le produit, le fournisseur et les conditions spécifiques du matériel.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <h3>Procédure</h3>
                <p>Contact du SAV, diagnostic, vérification des documents, suivi et résolution conforme aux conditions applicables.</p>
              </div>
            </div>
          </div>
          <div className="cta-box">
            <Link href="/sav" className="btn btn-primary">Demander un SAV / garantie</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Garantie',
  description: 'Informations sur la garantie ELECTROACHAGAR et les conditions applicables.',
};
