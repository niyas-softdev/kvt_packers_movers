'use client';

export default function PageSEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/logo.png',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'KVT Packers and Movers',
  section,
  tags = []
}) {
  const fullTitle = title ? `${title} | KVT Packers and Movers` : 'KVT Packers and Movers - Professional Moving Services in Chennai';
  const fullDescription = description || 'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.';
  const fullUrl = url ? `https://kvtpackersandmovers.com${url}` : 'https://kvtpackersandmovers.com';
  const fullImage = image.startsWith('http') ? image : `https://kvtpackersandmovers.com${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "headline": fullTitle,
    "description": fullDescription,
    "url": fullUrl,
    "image": fullImage,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://kvtpackersandmovers.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KVT Packers and Movers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kvtpackersandmovers.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "KVT Packers and Movers",
      "url": "https://kvtpackersandmovers.com"
    },
    ...(type === 'article' && publishedTime && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime
    }),
    ...(section && { "articleSection": section }),
    ...(tags.length > 0 && { "keywords": tags.join(', ') })
  };

  return (
    <>
      {/* Page-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
      
      {/* Page-specific meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KVT Packers and Movers" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@kvtpackersmovers" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </>
  );
}
