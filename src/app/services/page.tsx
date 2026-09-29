import Link from 'next/link';
import { serviceCategories } from '@/data/services';

export default function ServicesOverviewPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Nos services</h1>
          <p>Vente, conseil, installation, maintenance, réseau et SAV.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid three-col">
            {serviceCategories.map((service) => (
              <div key={service.slug} className="product-card">
                <div className="product-card-body">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="btn btn-primary btn-small">Voir le service</Link>
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
  title: 'Services',
  description: 'Services ELECTROACHAGAR : vente, installation, maintenance, réseau, sécurité et SAV.',
};
