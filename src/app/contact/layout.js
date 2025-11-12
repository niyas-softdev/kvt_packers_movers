import { generatePageMetadata } from '../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Contact KVT Packers and Movers in Chennai - Get Free Quote',
  description: 'Contact KVT Packers and Movers for professional moving services in Chennai. Call +91 75500 16167 or email kvtpackersandmovers@gmail.com. Get free quote for residential, corporate, and industrial moves.',
  keywords: [
    'contact packers movers chennai',
    'get quote moving services chennai',
    'KVT contact number chennai',
    'moving services quote chennai',
    'packers movers phone number chennai',
    'moving services email chennai',
    'free quote moving chennai',
    'KVT packers movers contact',
    'moving services consultation chennai',
    'packers movers address chennai'
  ],
  url: '/contact',
  image: '/img/hero/hero_contact.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Contact KVT Packers and Movers in Chennai - Get Free Quote'
});

export default function ContactLayout({ children }) {
  return children;
}

