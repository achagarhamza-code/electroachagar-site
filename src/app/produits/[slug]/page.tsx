import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  return {
    title: product ? product.name : 'Produit',
    description: product ? product.description : 'Produit ELECTROACHAGAR',
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  const similar = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>{product.name}</h1>
          <p>{product.brand} • {product.reference}</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-image" style={{ height: 420 }}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <div className="product-meta"><span>{product.brand}</span><span>{product.reference}</span></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price-row">
                  <strong>{product.price ?? 'Prix sur demande'}</strong>
                  <span className="stock-badge">{product.availability}</span>
                </div>
                <ul>
                  {product.characteristics.map((char) => (
                    <li key={char}>• {char}</li>
                  ))}
                </ul>
                <div className="product-actions">
                  <Link className="btn btn-primary" href="/devis">Demander un devis</Link>
                  <a className="btn btn-secondary" href="https://wa.me/?text=Bonjour%20ELECTROACHAGAR%2C%20je%20souhaite%20plus%20d%27informations%20sur%20ce%20produit%20%3A%20F2Y1TYP6J" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
                <div className="product-actions" style={{ marginTop: 16 }}>
                  <a className="btn btn-outline" href="tel:[PHONE_PLACEHOLDER]">Appeler</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Produits similaires</h2>
          <div className="grid three-col">
            {similar.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
