import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Packers and Movers in Chennai | Trusted Local Shifting Services',
  description: 'Looking for trusted and affordable packers and movers in Chennai? We offer reliable house shifting, office relocation, and local moving services with safe packing, on-time delivery, and transparent pricing.',
  keywords: [
    'packers and movers chennai',
    'packers and movers near me',
    'best packers and movers chennai',
    'local shifting services chennai',
    'house shifting chennai',
    'office relocation services chennai',
    'trusted moving company chennai',
    'affordable packers and movers chennai'
  ],
  url: '/locations/chennai',
  image: '/logo.png',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Packers and Movers in Chennai - Trusted Local Shifting Services'
});

export default function ChennaiLocationLayout({ children }) {
  return children;
}

