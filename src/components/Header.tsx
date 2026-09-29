'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation, siteConfig } from '@/lib/site-config';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rtl, setRtl] = useState(false);

  useEffect(() => {
    const isArabic = new URLSearchParams(window.location.search).get('lang') === 'ar';
    setRtl(isArabic);
  }, []);

  return (
    <header className="site-header" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="ELECTROACHAGAR accueil">
          <span className="brand-mark">EA</span>
          <span className="brand-text">ELECTROACHAGAR</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switcher" aria-label="Sélecteur de langue">
            <a href="/?lang=fr" className={!rtl ? 'active' : ''}>FR</a>
            <a href="/?lang=ar" className={rtl ? 'active' : ''}>AR</a>
          </div>
          <a
            className="btn btn-primary btn-small"
            href={siteConfig.phone.includes('PLACEHOLDER') ? '/contact' : `tel:${siteConfig.phone}`}
          >
            {rtl ? 'اتصل' : 'Appeler'}
          </a>
          <button className="mobile-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
