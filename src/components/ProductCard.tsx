import Link from 'next/link';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        {product.isDemo && <span className="demo-badge">DEMO</span>}
      </div>
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.brand}</span>
          <span>{product.reference}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price-row">
          <strong>{product.price ?? 'Prix sur demande'}</strong>
          <span className="stock-badge">{product.availability}</span>
        </div>
        <div className="product-actions">
          <Link href={`/produits/${product.slug}`} className="btn btn-secondary btn-small">Voir produit</Link>
          <Link href="/devis" className="btn btn-primary btn-small">Demander un devis</Link>
        </div>
      </div>
    </article>
  );
}
