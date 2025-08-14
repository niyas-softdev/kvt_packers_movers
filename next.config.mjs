/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // ensure images work on static hosting (no /_next/image)
    },
  };

export default nextConfig;
  