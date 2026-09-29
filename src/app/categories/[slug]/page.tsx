import Link from 'next/link';

export default function CategoriesPage({ params }: { params: { slug: string } }) {
  const categoryNames: Record<string, string> = {
    'lave-linge': 'Lave-linge',
    'refrigerateurs': 'Réfrigérateurs',
    'climatisation': 'Climatisation',
    'cameras': 'Caméras',
    'reseaux': 'Réseaux',
  };

  const name = categoryNames[params.slug] ?? 'Catégorie';

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>{name}</h1>
          <p>Catalogue spécialisé pour cette catégorie.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cta-box">
            <Link href="/produits" className="btn btn-primary">Voir les produits</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Catégories',
  description: 'Catégories produits ELECTROACHAGAR.',
};
