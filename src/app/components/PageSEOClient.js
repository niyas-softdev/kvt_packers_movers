'use client';

import { useEffect } from 'react';

/**
 * Client-side Page SEO Component
 * Use this in client components ('use client') to inject meta tags
 * 
 * Note: For better SEO, prefer using server-side metadata exports in page.js files
 * This component is for cases where you must use client components
 */
export default function PageSEO({
  title,
  description,
  keywords = [],
  image = '/logo.png',
  url,
  type = 'website'
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

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', fullDescription);
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', fullDescription, 'property');
    updateMetaTag('og:image', fullImage, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'KVT Packers and Movers', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', fullImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [fullTitle, fullDescription, fullImage, fullUrl, type, keywords]);

  // Return null since we're using useEffect to update the head
  return null;
}

