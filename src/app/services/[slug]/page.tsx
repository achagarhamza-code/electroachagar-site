import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories } from '@/data/services';

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceCategories.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  const advantages = [
    'Conseil pratique et adapté à votre besoin',
    'Installation maîtrisée et sécurisée',
    'Suivi et assistance après intervention',
    'Approche fiable et orientée résultat',
  ];

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-body">
                <h3>Avantages</h3>
                <ul>
                  {advantages.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <h3>Déroulement</h3>
                <p>1. Analyse du besoin<br />2. Conseil et proposition<br />3. Devis<br />4. Installation / livraison<br />5. Test et mise en service</p>
                <Link href="/devis" className="btn btn-primary btn-small">Demander un devis</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Services',
  description: 'Service ELECTROACHAGAR',
};
