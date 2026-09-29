export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  reference: string;
  category: string;
  subcategory: string;
  description: string;
  characteristics: string[];
  availability: 'Disponible' | 'Sur commande' | 'Stock limité' | 'En rupture' | 'À confirmer';
  price: string | null;
  image: string;
  tags: string[];
  isDemo?: boolean;
  warranty?: string;
  stockLabel?: string;
};

export const products: Product[] = [
  {
    id: 'p-001',
    slug: 'machine-a-laver-lg-8kg-gris',
    name: 'Machine à laver LG 8KG gris',
    brand: 'LG',
    reference: 'F2Y1TYP6J',
    category: 'Machine à laver',
    subcategory: 'Lavage',
    description:
      'Machine à laver 8 kg, design sobre et fiable pour un usage domestique régulier.',
    characteristics: ['Capacité 8 kg', 'Programmation multi-usage', 'Économie d’énergie', 'Cycle rapide'],
    availability: 'Sur commande',
    price: null,
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Machine à laver'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
    stockLabel: 'Stock non confirmé',
  },
  {
    id: 'p-002',
    slug: 'refrigerateur-avec-congeloire-demo',
    name: 'Réfrigérateur double porte DEMO',
    brand: 'DEMO',
    reference: 'REF-DEMO-201',
    category: 'Réfrigérateurs',
    subcategory: 'Froid',
    description:
      'Modèle de démonstration pour illustrer le catalogage d’électroménager. Prix et stock à confirmer.',
    characteristics: ['Capacité variable', 'Système de refroidissement', 'Design premium', 'Conservation optimale'],
    availability: 'Disponible',
    price: null,
    image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Réfrigérateur'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
  },
  {
    id: 'p-003',
    slug: 'climatiseur-split-demo',
    name: 'Climatiseur split DEMO',
    brand: 'DEMO',
    reference: 'CLIM-DEMO-45',
    category: 'Climatisation',
    subcategory: 'Refroidissement',
    description:
      'Exemple de produit technique. Aucune donnée commerciale réelle n’est utilisée sans confirmation officielle.',
    characteristics: ['Refroidissement efficace', 'Mode eco', 'Filtration avancée', 'Installation recommandée'],
    availability: 'Sur commande',
    price: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Climatisation'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
  },
  {
    id: 'p-004',
    slug: 'camera-ip-4mp-demo',
    name: 'Caméra IP 4MP DEMO',
    brand: 'DEMO',
    reference: 'CAM-IP-4MP',
    category: 'Caméras',
    subcategory: 'Vidéosurveillance',
    description:
      'Solution de démonstration pour le secteur sécurité et vidéosurveillance.',
    characteristics: ['Résolution 4 MP', 'Vision nocturne', 'Stockage local', 'Accès mobile'],
    availability: 'Disponible',
    price: null,
    image: 'https://images.unsplash.com/photo-1558002038-c7b2f5d7d0b1?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Sécurité'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
  },
  {
    id: 'p-005',
    slug: 'switch-reseau-24-ports-demo',
    name: 'Switch réseau 24 ports DEMO',
    brand: 'DEMO',
    reference: 'SWITCH-24-PO',
    category: 'Switch',
    subcategory: 'Réseaux',
    description:
      'Exemple de matériel réseau pour environnement bureau, commerce ou petite structure.',
    characteristics: ['24 ports', 'Gestion simplifiée', 'Fiable', 'Conception professionnelle'],
    availability: 'Stock limité',
    price: null,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Réseaux'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
  },
  {
    id: 'p-006',
    slug: 'television-smart-demo',
    name: 'Télévision Smart DEMO',
    brand: 'DEMO',
    reference: 'TV-SMART-55',
    category: 'Télévisions',
    subcategory: 'Maison',
    description:
      'Produit de démonstration illustrant les standards d’équipement du foyer.',
    characteristics: ['Écran intelligent', 'Connectivité', 'Audio immersif', 'Conception élégante'],
    availability: 'Sur commande',
    price: null,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80',
    tags: ['DEMO', 'Télévision'],
    isDemo: true,
    warranty: 'Selon les conditions applicables au produit et au fournisseur.',
  },
];

export const categories = [
  { slug: 'lave-linge', name: 'Lave-linge', type: 'electromenager' },
  { slug: 'lave-vaisselle', name: 'Lave-vaisselle', type: 'electromenager' },
  { slug: 'refrigerateurs', name: 'Réfrigérateurs', type: 'electromenager' },
  { slug: 'congelateurs', name: 'Congélateurs', type: 'electromenager' },
  { slug: 'climatisation', name: 'Climatisation', type: 'electromenager' },
  { slug: 'televisions', name: 'Télévisions', type: 'electromenager' },
  { slug: 'cuisine', name: 'Cuisine', type: 'electromenager' },
  { slug: 'petit-electromenager', name: 'Petit électroménager', type: 'electromenager' },
  { slug: 'accessoires', name: 'Accessoires', type: 'electromenager' },
  { slug: 'cameras', name: 'Caméras', type: 'tech' },
  { slug: 'nvr-dvr', name: 'NVR / DVR', type: 'tech' },
  { slug: 'videosurveillance', name: 'Vidéosurveillance', type: 'tech' },
  { slug: 'reseaux', name: 'Réseaux', type: 'tech' },
  { slug: 'switch', name: 'Switch', type: 'tech' },
  { slug: 'routeurs', name: 'Routeurs', type: 'tech' },
  { slug: 'wifi', name: 'Wi-Fi', type: 'tech' },
  { slug: 'cablage', name: 'Câblage', type: 'tech' },
  { slug: 'accessoires-reseau', name: 'Accessoires réseau', type: 'tech' },
];

export const productFilters = {
  brands: ['LG', 'DEMO', 'Samsung', 'Sony', 'TP-Link', 'Ubiquiti'],
  availability: ['Disponible', 'Sur commande', 'Stock limité', 'En rupture'],
};
