import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Corporate Movers Chennai - Office Relocation & Business Moving Services',
  description: 'Professional corporate relocation services in Chennai. Office moves with minimal downtime, IT equipment handling, and seamless business transitions. Call +91 75500 16167.',
  keywords: [
    'corporate movers chennai',
    'packers and movers chennai corporate',
    'office relocation chennai',
    'business moving services',
    'corporate packers movers',
    'office shifting chennai',
    'commercial movers chennai',
    'office relocation services'
  ],
  url: '/services/corporate',
  image: '/img/team.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Corporate Movers Chennai - Office Relocation Services'
});

export default function CorporateMoversLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Corporate Moving Services",
  "name": "Corporate Movers Chennai",
  "description": "Seamless office relocation with minimal business disruption. We specialize in corporate moves that keep your business running smoothly.",
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

