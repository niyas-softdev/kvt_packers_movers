import { generatePageMetadata } from '../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Customer Reviews – KVT Packers and Movers Chennai',
  description: 'Read authentic customer reviews and testimonials for KVT Packers and Movers. 4.8/5 average rating from satisfied customers in Chennai. See why thousands trust us for their relocation needs.',
  keywords: [
    'KVT packers movers reviews',
    'customer testimonials chennai',
    'packers movers reviews chennai',
    'moving company reviews',
    'KVT customer feedback',
    'chennai movers testimonials'
  ],
  url: '/testimonials',
  image: '/img/review/01.png',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Customer Reviews - KVT Packers and Movers Chennai'
});

export default function TestimonialsLayout({ children }) {
  return children;
}

