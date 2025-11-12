import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Local Movers Chennai - Quick & Affordable Local Moving Services',
  description: 'Fast and efficient local moving services in Chennai. Same-day local moves, apartment shifting, and quick relocation services at affordable rates. Call +91 75500 16167 for free quote.',
  keywords: [
    'local movers chennai',
    'packers and movers chennai local',
    'local shifting services chennai',
    'same day moving chennai',
    'apartment moving chennai',
    'local packers movers',
    'quick local moves chennai',
    'affordable local movers'
  ],
  url: '/services/local',
  image: '/img/shifting.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Local Movers Chennai - Quick Local Moving Services'
});

export default function LocalMoversLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Local Moving Services",
    "name": "Local Movers Chennai",
    "description": "Fast and efficient local moving services in Chennai and surrounding areas. Same-day local moves, apartment shifting, and quick relocation services.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "KVT Packers and Movers",
      "url": "https://kvtpackersandmovers.com",
      "telephone": "+91-75500-16167",
      "email": "kvtpackersandmovers@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission",
        "addressLocality": "Arumbakkam",
        "addressRegion": "Chennai",
        "addressCountry": "IN",
        "postalCode": "600106"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Chennai",
      "containedInPlace": {
        "@type": "State",
        "name": "Tamil Nadu"
      }
    },
    "sameAs": [
      "https://www.facebook.com/people/KVT-Packers-And-Movers/100089017598094/",
      "https://www.instagram.com/kvtpackersandmovers/"
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema, null, 2)
        }}
      />
      {children}
    </>
  );
}

