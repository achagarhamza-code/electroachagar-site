export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>À propos</h1>
          <p>Une entreprise locale orientée conseil, qualité, installation et suivi client.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-body">
                <h3>Notre approche</h3>
                <p>ELECTROACHAGAR accompagne les clients du conseil à la mise en service, avec un réel souci de qualité, de service et de fiabilité technique.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <h3>Nos domaines</h3>
                <p>Électroménager, vidéosurveillance, réseaux, installation, maintenance et SAV.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'À propos',
  description: 'À propos d’ELECTROACHAGAR, son approche et ses domaines d’expertise.',
};
