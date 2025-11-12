import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Residential Movers Chennai - House Shifting & Home Relocation Services',
  description: 'Professional residential moving services in Chennai. Complete house shifting with packing, unpacking, and setup. Trusted by thousands of families. Call +91 75500 16167 for free quote.',
  keywords: [
    'residential movers chennai',
    'packers and movers chennai residential',
    'house shifting chennai',
    'home relocation chennai',
    'residential packers movers',
    'house moving services chennai',
    'home shifting chennai',
    'family moving services'
  ],
  url: '/services/residential',
  image: '/img/shifting.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Residential Movers Chennai - House Shifting Services'
});

export default function ResidentialMoversLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Residential Moving Services",
  "name": "Residential Movers Chennai",
  "description": "Complete house shifting services with professional packing and unpacking. We make your residential move stress-free and smooth.",
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

