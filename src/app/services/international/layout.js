import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'International Movers Chennai - Global Relocation & Overseas Moving Services',
  description: 'Worldwide relocation services from Chennai. International moving with customs clearance, documentation assistance, and door-to-door delivery. Call +91 75500 16167.',
  keywords: [
    'international movers chennai',
    'packers and movers chennai international',
    'overseas moving services',
    'global relocation chennai',
    'international packers movers',
    'abroad moving services',
    'international shipping chennai',
    'worldwide relocation'
  ],
  url: '/services/international',
  image: '/img/packing_truck.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'International Movers Chennai - Global Relocation Services'
});

export default function InternationalMoversLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "International Moving Services",
  "name": "International Movers Chennai",
  "description": "Worldwide relocation services with customs clearance and comprehensive support. We make international moves seamless and stress-free.",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "Chennai"
    },
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Place",
      "name": "Worldwide"
    }
  ],
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

