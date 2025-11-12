import { generatePageMetadata } from '../../components/PageSEO';

export const metadata = generatePageMetadata({
  title: 'Distribution Services Chennai - Logistics & Supply Chain Solutions',
  description: 'Comprehensive distribution services in Chennai. Multi-modal transport, warehousing, and last-mile delivery for businesses. Call +91 75500 16167 for distribution solutions.',
  keywords: [
    'distribution services chennai',
    'packers and movers chennai distribution',
    'logistics services chennai',
    'supply chain solutions',
    'distribution packers movers',
    'warehouse services chennai',
    'last mile delivery',
    'business distribution services'
  ],
  url: '/services/distribution',
  image: '/img/packing_truck.jpg',
  type: 'website',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Distribution Services Chennai - Logistics Solutions'
});

export default function DistributionLayout({ children }) {
  // Service JSON-LD Schema
  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Distribution Services",
  "name": "Distribution Services Chennai",
  "description": "Comprehensive distribution services for businesses and individuals. We provide efficient, secure, and reliable distribution solutions across India and globally.",
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

