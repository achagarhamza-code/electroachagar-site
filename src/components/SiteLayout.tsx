'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('lang');
    setDir(value === 'ar' ? 'rtl' : 'ltr');
  }, []);

  return (
    <div className={`site-shell ${dir === 'rtl' ? 'rtl' : ''}`} dir={dir}>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
