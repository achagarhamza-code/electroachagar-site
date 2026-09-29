import Link from 'next/link';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string; brand?: string; availability?: string; sort?: string; query?: string; view?: string };
}) {
  const query = (searchParams?.query ?? '').trim().toLowerCase();
  const category = searchParams?.category ?? 'all';
  const brand = searchParams?.brand ?? 'all';
  const availability = searchParams?.availability ?? 'all';
  const sort = searchParams?.sort ?? 'newest';
  const view = searchParams?.view ?? 'grid';

  let filtered = products.filter((product) => {
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.reference.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    const matchesCategory = category === 'all' || product.category.toLowerCase() === category.toLowerCase();
    const matchesBrand = brand === 'all' || product.brand.toLowerCase() === brand.toLowerCase();
    const matchesAvailability = availability === 'all' || product.availability === availability;

    return matchesQuery && matchesCategory && matchesBrand && matchesAvailability;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return (a.price ?? '9999').localeCompare(b.price ?? '9999');
    if (sort === 'price-desc') return (b.price ?? '9999').localeCompare(a.price ?? '9999');
    if (sort === 'newest') return b.id.localeCompare(a.id);
    return 0;
  });

  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Catalogue produits</h1>
          <p>Recherche, filtres et sélection de produits adaptés à vos besoins.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <form className="form-card" method="get">
            <div className="form-grid two-col">
              <label>
                Recherche
                <input type="text" name="query" defaultValue={query} placeholder="Référence, marque, produit..." />
              </label>
              <label>
                Catégorie
                <select name="category" defaultValue={category}>
                  <option value="all">Toutes</option>
                  <option value="machine a laver">Machine à laver</option>
                  <option value="réfrigérateurs">Réfrigérateurs</option>
                  <option value="climatisation">Climatisation</option>
                  <option value="caméras">Caméras</option>
                  <option value="switch">Switch</option>
                  <option value="télévisions">Télévisions</option>
                </select>
              </label>
              <label>
                Marque
                <select name="brand" defaultValue={brand}>
                  <option value="all">Toutes</option>
                  <option value="lg">LG</option>
                  <option value="demo">DEMO</option>
                </select>
              </label>
              <label>
                Disponibilité
                <select name="availability" defaultValue={availability}>
                  <option value="all">Toutes</option>
                  <option value="Disponible">Disponible</option>
                  <option value="Sur commande">Sur commande</option>
                  <option value="Stock limité">Stock limité</option>
                  <option value="En rupture">En rupture</option>
                </select>
              </label>
              <label>
                Tri
                <select name="sort" defaultValue={sort}>
                  <option value="newest">Nouveauté</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </label>
              <label>
                Vue
                <select name="view" defaultValue={view}>
                  <option value="grid">Grille</option>
                  <option value="list">Liste</option>
                </select>
              </label>
            </div>
            <div className="product-actions">
              <button className="btn btn-primary" type="submit">Appliquer les filtres</button>
              <Link className="btn btn-secondary" href="/produits">Réinitialiser</Link>
            </div>
          </form>

          <div className={view === 'list' ? 'list-view' : 'grid three-col'}>
            {filtered.length > 0 ? (
              filtered.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="product-card">
                <div className="product-card-body">
                  <h3>Aucun produit trouvé</h3>
                  <p>Essayez d’autres filtres ou contactez ELECTROACHAGAR pour un devis personnalisé.</p>
                  <Link href="/devis" className="btn btn-primary btn-small">Demander un devis</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Produits',
  description: 'Catalogue produits ELECTROACHAGAR : électroménager, vidéosurveillance, réseaux et solutions techniques.',
};
