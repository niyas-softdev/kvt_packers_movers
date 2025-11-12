import { generatePageMetadata } from '../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'About KVT Packers and Movers in Chennai - 25+ Years of Excellence',
  description: 'Learn about KVT Packers and Movers - Chennai\'s trusted moving company with 25+ years experience. Professional residential, corporate, and industrial moving services across Tamil Nadu. Call +91 75500 16167.',
  keywords: [
    'about KVT packers movers chennai',
    'KVT company history chennai',
    'packers movers chennai about',
    'moving company profile chennai',
    'KVT team members chennai',
    'logistics company chennai',
    'professional movers about',
    'KVT achievements chennai',
    'packers movers experience chennai'
  ],
  url: '/about',
  image: '/img/hero/2.png',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'About KVT Packers and Movers in Chennai - 25+ Years of Excellence'
});

export default function AboutLayout({ children }) {
  return children;
}

