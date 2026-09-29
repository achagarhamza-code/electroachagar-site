export const siteConfig = {
  companyName: 'ELECTROACHAGAR',
  businessName: 'ELECTROACHAGAR',
  tagline: 'Votre spécialiste en électroménager et solutions techniques',
  taglineLong: 'Vente, installation, vidéosurveillance, réseaux et service après-vente.',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '[PHONE_PLACEHOLDER]',
  whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP ?? '[WHATSAPP_PLACEHOLDER]',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? '[EMAIL_PLACEHOLDER]',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? '[ADDRESS_PLACEHOLDER]',
  city: process.env.NEXT_PUBLIC_COMPANY_CITY ?? '[CITY_PLACEHOLDER]',
  ice: process.env.NEXT_PUBLIC_COMPANY_ICE ?? '[ICE_PLACEHOLDER]',
  ifNumber: process.env.NEXT_PUBLIC_COMPANY_IF ?? '[IF_PLACEHOLDER]',
  rc: process.env.NEXT_PUBLIC_COMPANY_RC ?? '[RC_PLACEHOLDER]',
  businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS_OPEN ?? '[HOURS_OPEN_PLACEHOLDER]',
  businessClose: process.env.NEXT_PUBLIC_BUSINESS_HOURS_CLOSE ?? '[HOURS_CLOSE_PLACEHOLDER]',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '#',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '#',
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? '#',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://electroachagar.ma',
  seoDescription:
    'ELECTROACHAGAR propose des solutions d’électroménager, vidéosurveillance, réseaux et installation avec conseil, SAV et garantie.',
};

export const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Produits', href: '/produits' },
  { label: 'Services', href: '/services' },
  { label: 'Vidéosurveillance', href: '/videosurveillance' },
  { label: 'Réseaux', href: '/reseaux' },
  { label: 'Installation', href: '/installation' },
  { label: 'Devis', href: '/devis' },
  { label: 'Contact', href: '/contact' },
  { label: 'À propos', href: '/a-propos' },
];

export const categoryBadges = {
  appliance: 'Électroménager',
  security: 'Vidéosurveillance',
  network: 'Réseaux',
  services: 'Services',
};
