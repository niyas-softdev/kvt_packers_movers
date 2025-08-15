/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // ensure images work on static hosting (no /_next/image)
    loader: 'default',
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Remove experimental CSS optimization that causes critters error
  // experimental: {
  //   optimizeCss: true,
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
  