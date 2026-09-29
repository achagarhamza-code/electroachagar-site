'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-small">
            <span className="brand-mark">EA</span>
            <span className="brand-text">ELECTROACHAGAR</span>
          </div>
          <p>
            Électroménager | Vidéosurveillance | Réseaux | Installation | SAV
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/produits">Produits</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/devis">Devis</Link></li>
            <li><Link href="/sav">SAV</Link></li>
          </ul>
        </div>

        <div>
          <h3>Coordonnées</h3>
          <ul className="footer-links">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.businessHours} - {siteConfig.businessClose}</li>
          </ul>
        </div>

        <div>
          <h3>Réseaux sociaux</h3>
          <ul className="footer-links">
            <li><a href={siteConfig.facebook.includes('PLACEHOLDER') ? '#' : siteConfig.facebook}>Facebook</a></li>
            <li><a href={siteConfig.instagram.includes('PLACEHOLDER') ? '#' : siteConfig.instagram}>Instagram</a></li>
            <li><a href={siteConfig.linkedin.includes('PLACEHOLDER') ? '#' : siteConfig.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">© 2026 ELECTROACHAGAR — Tous droits réservés.</div>
    </footer>
  );
}
