import { generatePageMetadata } from '../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Moving Tips & Guides – Packers and Movers Blog Chennai',
  description: 'Expert moving tips, guides, and industry insights from KVT Packers and Movers Chennai. Learn about packing, relocation, and choosing the right movers for your needs.',
  keywords: [
    'packers movers blog chennai',
    'moving tips blog',
    'relocation guides',
    'packing tips blog',
    'moving advice chennai',
    'KVT movers blog'
  ],
  url: '/blog',
  image: '/img/hero/hero_blog.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Moving Tips & Guides – Packers and Movers Blog Chennai'
});

export default function BlogLayout({ children }) {
  return children;
}

