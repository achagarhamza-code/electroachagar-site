import Link from 'next/link';
import { products } from '@/data/products';
import { articles, faqs } from '@/data/articles';
import { serviceCategories } from '@/data/services';
import { ProductCard } from '@/components/ProductCard';
import { siteConfig } from '@/lib/site-config';

const featuredProducts = products.slice(0, 3);
const activityCards = [
  {
    title: 'Électroménager',
    description: 'Machines à laver, réfrigérateurs, climatisation, cuisson, petits appareils et accessoires.',
    href: '/produits?category=electromenager',
  },
  {
    title: 'Solutions techniques',
    description: 'Vidéosurveillance, réseaux, câblage, installation, maintenance et SAV.',
    href: '/videosurveillance',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Votre spécialiste en électroménager et solutions techniques</h1>
          <p>Vente, installation, vidéosurveillance, réseaux et service après-vente.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/produits">Découvrir nos produits</Link>
            <Link className="btn btn-outline" href="/devis">Demander un devis</Link>
            <Link className="btn btn-secondary" href="/contact">Nous contacter</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Nos deux activités</h2>
          <div className="grid two-col">
            {activityCards.map((card) => (
              <div key={card.title} className="product-card">
                <div className="product-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link href={card.href} className="btn btn-primary btn-small">Découvrir</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Produits populaires</h2>
          <div className="grid three-col">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Catégories électroménager</h2>
          <div className="grid four-col">
            {['Lave-linge', 'Lave-vaisselle', 'Réfrigérateurs', 'Climatisation', 'Télévisions', 'Cuisine', 'Petit électroménager', 'Accessoires'].map((category) => (
              <div className="product-card" key={category}>
                <div className="product-card-body">
                  <h3>{category}</h3>
                  <Link href="/produits" className="btn btn-secondary btn-small">Voir</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Solutions vidéosurveillance</h2>
          <div className="grid three-col">
            {['Caméras IP', 'DVR/NVR', 'Stockage', 'Vision à distance', 'Installation', 'Maintenance'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Solutions adaptées à la maison, au commerce et aux bâtiments professionnels.</p>
                  <Link href="/videosurveillance" className="btn btn-primary btn-small">En savoir plus</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Solutions réseau</h2>
          <div className="grid three-col">
            {['Câblage réseau', 'Wi‑Fi', 'Routeur', 'Switch', 'Réseau professionnel', 'Maintenance'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Infrastructure fiable pour la performance, la sécurité et la stabilité du réseau.</p>
                  <Link href="/reseaux" className="btn btn-secondary btn-small">Découvrir</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Installation & maintenance</h2>
          <div className="grid two-col">
            <div className="product-card">
              <div className="product-card-body">
                <h3>Analyse du besoin</h3>
                <p>Étude préalable pour identifier la bonne solution et éviter les erreurs de choix techniques.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-card-body">
                <h3>Suivi technique</h3>
                <p>Installation, configuration, mise en service, garantie et SAV pour un accompagnement complet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Pourquoi choisir ELECTROACHAGAR ?</h2>
          <div className="grid three-col">
            {['Conseil', 'Installation', 'SAV', 'Suivi', 'Expertise technique', 'Solutions adaptées'].map((item) => (
              <div key={item} className="product-card">
                <div className="product-card-body">
                  <h3>{item}</h3>
                  <p>Une approche sérieuse et orientée client pour des projets durables et performants.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Nos services</h2>
          <div className="grid three-col">
            {serviceCategories.map((service) => (
              <div key={service.slug} className="product-card">
                <div className="product-card-body">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="btn btn-secondary btn-small">Voir détail</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Comment ça marche</h2>
          <div className="grid three-col">
            {['1. Analyse du besoin', '2. Conseil & devis', '3. Installation & suivi'].map((step) => (
              <div key={step} className="product-card">
                <div className="product-card-body">
                  <h3>{step}</h3>
                  <p>Une méthode simple et claire pour passer rapidement d’un besoin à une solution opérationnelle.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Conseils utiles</h2>
          <div className="grid three-col">
            {articles.slice(0, 3).map((article) => (
              <div key={article.slug} className="product-card">
                <div className="product-card-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link href="/conseils" className="btn btn-primary btn-small">Lire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container narrow">
          <h2>Demander un devis</h2>
          <p className="text-center">Un besoin précis ? Une étude ou un projet technique ? Faites votre demande et nous vous recontactons rapidement.</p>
          <div className="cta-box">
            <Link className="btn btn-primary" href="/devis">Demander un devis</Link>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <h2>Contact</h2>
          <div className="grid two-col">
            <div className="contact-card">
              <p><strong>Téléphone :</strong> {siteConfig.phone}</p>
              <p><strong>Email :</strong> {siteConfig.email}</p>
              <p><strong>Adresse :</strong> {siteConfig.address}</p>
              <p><strong>Horaires :</strong> {siteConfig.businessHours} - {siteConfig.businessClose}</p>
            </div>
            <div className="contact-card">
              <Link className="btn btn-primary" href="/contact">Nous contacter</Link>
              <Link className="btn btn-secondary" href="/rendez-vous">Demander un rendez-vous</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'ELECTROACHAGAR | Électroménager, Vidéosurveillance et Réseaux',
  description: 'Votre spécialiste en électroménager, vidéosurveillance, réseaux et services techniques au Maroc.',
};
