import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Packers and Movers in Arumbakkam | Nearby Local Shifting Services',
  description: 'Reliable packers and movers in Arumbakkam for local house shifting and office relocation. Professional packing, careful handling, and transparent pricing for stress‑free moves.',
  keywords: [
    'packers and movers arumbakkam',
    'packers and movers near me',
    'best packers and movers arumbakkam',
    'local shifting services arumbakkam',
    'house shifting arumbakkam',
    'office relocation services arumbakkam',
    'trusted moving company arumbakkam',
    'affordable packers and movers arumbakkam'
  ],
  url: '/locations/arumbakkam',
  image: '/logo.png',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Packers and Movers in Arumbakkam - Nearby Local Shifting Services'
});

export default function ArumbakkamLocationLayout({ children }) {
  return children;
}

