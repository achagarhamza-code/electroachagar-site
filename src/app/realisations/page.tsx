import { realizations } from '@/data/realizations';

export default function RealisationsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Réalisations</h1>
          <p>Installations caméra, réseau, produits et interventions.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid three-col">
            {realizations.map((item) => (
              <div key={item.title} className="product-card">
                <div className="product-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="product-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Réalisations',
  description: 'Réalisations et installations ELECTROACHAGAR.',
};
