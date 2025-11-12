import { generatePageMetadata } from '../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Photo Gallery - KVT Packers and Movers Chennai',
  description: 'Browse our gallery of moving and packing services. See our professional team in action, modern fleet, and successful relocations across Chennai and Tamil Nadu.',
  keywords: [
    'packers movers gallery chennai',
    'moving services photos',
    'packing services images',
    'relocation gallery',
    'KVT movers photos',
    'chennai packers gallery'
  ],
  url: '/gallery',
  image: '/img/gallery/30.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'KVT Packers and Movers Gallery - Professional Moving Services'
});

export default function GalleryLayout({ children }) {
  return children;
}

