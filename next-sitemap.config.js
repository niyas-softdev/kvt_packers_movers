/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kvtpackersandmovers.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/private/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/*?*',
          '/*#'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      }
    ],
    additionalSitemaps: [
      'https://www.kvtpackersandmovers.com/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom transform function to add lastmod, changefreq, and priority
    const customConfig = {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
      alternateRefs: config.alternateRefs ?? [],
    }

    // Add specific lastmod for important pages
    if (path === '/') {
      customConfig.lastmod = new Date().toISOString()
    }

    return customConfig
  },
  additionalPaths: async (config) => {
    // Add any additional paths that might not be automatically detected
    return [
      {
        loc: '/services/industrial-machinery-movers/bike-transport',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/car-transport',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/crane-hire',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/forklift-hire',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/jcb-earthmovers-breakers',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/jcb-hire',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/lorry-transport',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/services/industrial-machinery-movers/tipper-lorry-hire',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      }
    ]
  }
}

// Helper function to determine change frequency based on path
function getChangeFreq(path) {
  if (path === '/') return 'weekly'
  if (path.startsWith('/blog')) return 'weekly'
  if (path.startsWith('/services')) return 'monthly'
  if (path === '/contact') return 'monthly'
  if (path === '/about') return 'monthly'
  if (path === '/gallery') return 'monthly'
  if (path === '/testimonials') return 'monthly'
  return 'monthly'
}

// Helper function to determine priority based on path
function getPriority(path) {
  if (path === '/') return 1.0
  if (path === '/services') return 0.9
  if (path === '/contact') return 0.8
  if (path.startsWith('/services/')) return 0.8
  if (path === '/about') return 0.7
  if (path === '/gallery') return 0.6
  if (path === '/blog') return 0.6
  if (path === '/testimonials') return 0.5
  return 0.5
}
