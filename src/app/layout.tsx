import type { Metadata } from 'next';
import './globals.css';
import { SiteLayout } from '@/components/SiteLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://electroachagar.ma'),
  title: {
    default: 'ELECTROACHAGAR | Électroménager, Vidéosurveillance et Réseaux',
    template: '%s | ELECTROACHAGAR',
  },
  description:
    'ELECTROACHAGAR, spécialiste en électroménager, vidéosurveillance, réseaux, installation et SAV au Maroc.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ELECTROACHAGAR',
    description: 'Électroménager, vidéosurveillance, réseaux et solutions techniques.',
    url: 'https://electroachagar.ma',
    siteName: 'ELECTROACHAGAR',
    locale: 'fr_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELECTROACHAGAR',
    description: 'Électroménager, vidéosurveillance, réseaux et solutions techniques.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
