import Link from 'next/link';

export default function VideoSurveillancePage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Vidéosurveillance</h1>
          <p>Caméras IP, DVR/NVR, stockage, vision à distance et maintenance.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>De quelle solution avez-vous besoin ?</h2>
          <div className="grid three-col">
            {['Maison', 'Appartement', 'Commerce', 'Bureau', 'Entrepôt', 'Villa', 'Autre'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Une étude adaptée à votre environnement et vos objectifs de sécurité.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Solutions clés</h2>
          <div className="grid three-col">
            {['Caméras IP', 'Caméras de sécurité', 'DVR / NVR', 'Stockage', 'Vision à distance', 'Installation & configuration', 'Maintenance'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Une infrastructure sécurisée et facile à suivre au quotidien.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-box">
            <Link href="/devis" className="btn btn-primary">Demander une étude</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Vidéosurveillance',
  description: 'Vidéosurveillance : caméras IP, DVR/NVR, installation, vision à distance et maintenance.',
};
