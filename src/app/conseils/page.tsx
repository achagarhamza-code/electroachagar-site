import Link from 'next/link';
import { articles } from '@/data/articles';

export default function ConseilsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Conseils</h1>
          <p>Informations utiles pour choisir les bons équipements et les bons services.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid three-col">
            {articles.map((article) => (
              <div key={article.slug} className="product-card">
                <div className="product-card-body">
                  <p>{article.category}</p>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link href="/conseils" className="btn btn-secondary btn-small">Lire</Link>
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
  title: 'Conseils',
  description: 'Articles et conseils de ELECTROACHAGAR.',
};
