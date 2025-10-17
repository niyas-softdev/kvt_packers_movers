'use client';

export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://kvtpackersandmovers.com/#organization",
        "name": "KVT Packers and Movers",
        "alternateName": "KVT Packers & Movers",
        "description": "Professional packers and movers in Chennai with 25+ years experience. We provide residential, corporate, industrial, and international moving services across Tamil Nadu and India.",
        "url": "https://kvtpackersandmovers.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kvtpackersandmovers.com/logo.png",
          "width": 1200,
          "height": 630,
          "caption": "KVT Packers and Movers Logo"
        },
        "image": "https://kvtpackersandmovers.com/logo.png",
        "telephone": "+91-75500-16167",
        "email": "kvtpackersandmovers@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission",
          "addressLocality": "Arumbakkam",
          "addressRegion": "Chennai",
          "addressCountry": "IN",
          "postalCode": "600106"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.0827",
          "longitude": "80.2177"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "foundingDate": "1998",
        "numberOfEmployees": "25-50",
        "areaServed": [
          {
            "@type": "City",
            "name": "Chennai",
            "containedInPlace": {
              "@type": "State",
              "name": "Tamil Nadu"
            }
          },
          {
            "@type": "State",
            "name": "Tamil Nadu"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "13.0827",
            "longitude": "80.2177"
          },
          "geoRadius": "500000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Moving Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Moving Services",
                "description": "Complete house shifting services with professional packing and unpacking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Moving Services",
                "description": "Seamless office relocation with minimal business disruption"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial Machinery Moving",
                "description": "Heavy machinery moving, rigging and plant relocation with safety-first execution"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "International Moving Services",
                "description": "Worldwide relocation services with customs clearance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Moving Services",
                "description": "Reliable local shifting and last-mile delivery services within the city"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Arumuga Sundaram"
            },
            "reviewBody": "I used KVT Packers and Movers service to relocate within Chennai. I am very satisfied with the service. The team did a very good job throughout the process.",
            "datePublished": "2024-11-01"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Vinuthna Reddim"
            },
            "reviewBody": "KVT packers and movers helped us twice to move our house. They were really helpful even though we asked for service the previous day and guaranteed work without any damage.",
            "datePublished": "2024-11-01"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/people/KVT-Packers-And-Movers/100089017598094/",
          "https://www.instagram.com/kvtpackersandmovers/"
        ],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kvtpackersandmovers.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kvtpackersandmovers.com/#website",
        "url": "https://kvtpackersandmovers.com",
        "name": "KVT Packers and Movers",
        "description": "Professional packers and movers in Chennai with 25+ years experience",
        "publisher": {
          "@id": "https://kvtpackersandmovers.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": "https://kvtpackersandmovers.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://kvtpackersandmovers.com/#webpage",
        "url": "https://kvtpackersandmovers.com",
        "name": "KVT Packers and Movers - Professional Moving Services in Chennai",
        "isPartOf": {
          "@id": "https://kvtpackersandmovers.com/#website"
        },
        "about": {
          "@id": "https://kvtpackersandmovers.com/#organization"
        },
        "description": "Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kvtpackersandmovers.com"
            }
          ]
        },
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="1jHfnYR8s72xyt02idASyPG_G30UucfuORpPKIoDYdQ" />
      <meta
        name="keywords"
        content="packers and movers near me, best packers and movers, packers and movers Anna Nagar, local shifting services, house shifting Chennai, office relocation services, trusted moving company, affordable packers and movers, residential moving Chennai, corporate relocation Chennai, industrial movers Chennai, international movers Chennai, local movers Chennai, safe packing and moving, movers and packers Chennai, relocation services Chennai, home shifting services, office shifting experts, nearby movers, budget movers Chennai"
      />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Mobile App Meta Tags */}
      <meta name="application-name" content="KVT Packers and Movers" />
      <meta name="msapplication-TileColor" content="#22c55e" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://kvtpackersandmovers.com" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0827;80.2177" />
      <meta name="ICBM" content="13.0827, 80.2177" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission" />
      <meta name="business:contact_data:locality" content="Arumbakkam" />
      <meta name="business:contact_data:region" content="Chennai" />
      <meta name="business:contact_data:postal_code" content="600106" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-75500-16167" />
      <meta name="business:contact_data:email" content="kvtpackersandmovers@gmail.com" />
      
      {/* Additional SEO */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
    </>
  );
}
