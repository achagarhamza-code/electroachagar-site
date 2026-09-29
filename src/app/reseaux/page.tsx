import Link from 'next/link';

export default function ReseauxPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Réseaux</h1>
          <p>Câblage réseau, Wi‑Fi, routeurs, switch et maintenance.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid three-col">
            {['Câblage réseau', 'Wi‑Fi', 'Routeur', 'Switch', 'Réseau professionnel', 'Installation & configuration', 'Maintenance'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Des installations fiables pour un réseau stable, rapide et adapté à votre activité.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-box">
            <Link href="/devis" className="btn btn-primary">Demander une étude réseau</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Réseaux',
  description: 'Réseaux ELECTROACHAGAR : câblage, Wi‑Fi, routeur, switch, configuration et maintenance.',
};
