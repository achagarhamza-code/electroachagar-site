import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page introuvable.</p>
      <div>
        <Link className="btn btn-primary" href="/">Accueil</Link>
        <Link className="btn btn-secondary" href="/produits">Produits</Link>
        <Link className="btn btn-secondary" href="/services">Services</Link>
        <Link className="btn btn-secondary" href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Page introuvable',
  description: 'Cette page est introuvable.',
};
