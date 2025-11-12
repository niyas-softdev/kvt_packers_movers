import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Packers and Movers in Anna Nagar | Local Shifting & Relocation',
  description: 'Top-rated packers and movers in Anna Nagar for house shifting, office relocation, and local moving. Safe packing, careful handling, and on-time delivery at affordable prices.',
  keywords: [
    'packers and movers anna nagar',
    'packers and movers near me',
    'best packers and movers anna nagar',
    'local shifting services anna nagar',
    'house shifting anna nagar',
    'office relocation services anna nagar',
    'trusted moving company anna nagar',
    'affordable packers and movers anna nagar'
  ],
  url: '/locations/anna-nagar',
  image: '/logo.png',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Packers and Movers in Anna Nagar - Local Shifting & Relocation'
});

export default function AnnaNagarLocationLayout({ children }) {
  return children;
}

