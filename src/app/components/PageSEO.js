/**
 * Server-side Page SEO Helper for Next.js App Router
 * 
 * Usage in server components (page.js files):
 * 
 * import { generatePageMetadata } from '@/app/components/PageSEO';
 * 
 * export const metadata = generatePageMetadata({
 *   title: 'Page Title',
 *   description: 'Page description',
 *   keywords: ['keyword1', 'keyword2'],
 *   url: '/page-path',
 *   image: '/image.jpg',
 *   type: 'website' // or 'article'
 * });
 * 
 * For client components, use the PageSEOClient component below.
 */

/**
 * Generates Next.js metadata object for server-side rendering
 * This runs at build time and ensures proper SEO meta tags
 */
export function generatePageMetadata({
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
  tags = [],
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt
}) {
  const fullTitle = title 
    ? `${title} | KVT Packers and Movers` 
    : 'KVT Packers and Movers - Professional Moving Services in Chennai';
  
  const fullDescription = description || 
    'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.';
  
  const fullUrl = url 
    ? `https://kvtpackersandmovers.com${url}` 
    : 'https://kvtpackersandmovers.com';
  
  const fullImage = image.startsWith('http') 
    ? image 
    : `https://kvtpackersandmovers.com${image}`;
  
  const defaultImageAlt = imageAlt || 
    (title ? `${title} - KVT Packers and Movers` : 'KVT Packers and Movers Logo');

  // Build metadata object compatible with Next.js App Router
  const metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: 'KVT Packers and Movers',
      images: [
        {
          url: fullImage,
          width: imageWidth,
          height: imageHeight,
          alt: defaultImageAlt,
        },
      ],
      locale: 'en_IN',
      type: type,
      ...(type === 'article' && publishedTime && {
        publishedTime: publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [author],
        section: section,
        tags: tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@kvtpackersmovers',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

/**
 * Server Component for Structured Data (JSON-LD)
 * This component renders structured data that needs to be in the component tree
 * Use this alongside generatePageMetadata in your page component
 */
export default function PageStructuredData({
  title,
  description,
  image = '/logo.png',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'KVT Packers and Movers',
  section,
  tags = [],
  structuredData = null // Allow passing custom structured data
}) {
  // If custom structuredData is provided, use it directly
  if (structuredData) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
    );
  }

  // Otherwise, build structured data from props
  const fullTitle = title 
    ? `${title} | KVT Packers and Movers` 
    : 'KVT Packers and Movers - Professional Moving Services in Chennai';
  
  const fullDescription = description || 
    'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.';
  
  const fullUrl = url 
    ? `https://kvtpackersandmovers.com${url}` 
    : 'https://kvtpackersandmovers.com';
  
  const fullImage = image.startsWith('http') 
    ? image 
    : `https://kvtpackersandmovers.com${image}`;

  const defaultStructuredData = {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(defaultStructuredData, null, 2)
      }}
    />
  );
}
