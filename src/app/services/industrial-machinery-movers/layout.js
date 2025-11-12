import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Industrial Machinery Movers Chennai - Heavy Equipment & Plant Relocation',
  description: 'Professional industrial machinery moving services in Chennai. Heavy equipment relocation, plant shifting, rigging, and specialized transport. Call +91 75500 16167.',
  keywords: [
    'industrial movers chennai',
    'packers and movers chennai industrial',
    'heavy machinery movers',
    'plant relocation chennai',
    'industrial packers movers',
    'equipment moving services',
    'machinery shifting chennai',
    'rigging services chennai'
  ],
  url: '/services/industrial-machinery-movers',
  image: '/img/vechical/forklift.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Industrial Machinery Movers Chennai - Heavy Equipment Relocation'
});

export default function IndustrialMachineryMoversLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Industrial Machinery Moving Services",
  "name": "Industrial Machinery Movers Chennai",
  "description": "Heavy machinery moving, rigging and plant relocation with safety-first execution. Partner with us for unmatched Heavy Machinery Relocation.",
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

