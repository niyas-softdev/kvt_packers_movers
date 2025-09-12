# Next.js Sitemap & Robots.txt Setup Guide

## 🎯 Overview
This guide covers the automatic generation of `sitemap.xml` and `robots.txt` files for your KVT Packers and Movers Next.js website using `next-sitemap`.

## ✅ What's Been Implemented

### **1. Package Installation**
- ✅ Installed `next-sitemap` as a dev dependency
- ✅ Added sitemap generation scripts to `package.json`

### **2. Configuration File**
- ✅ Created `next-sitemap.config.js` with comprehensive settings
- ✅ Configured site URL: `https://www.kvtpackersandmovers.com`
- ✅ Set up automatic robots.txt generation
- ✅ Added custom priority and changefreq rules

### **3. Generated Files**
- ✅ `public/sitemap.xml` - Complete sitemap with all pages
- ✅ `public/robots.txt` - SEO-optimized robots.txt

## 📁 Files Created/Updated

```
✅ next-sitemap.config.js - Configuration file
✅ package.json - Added sitemap scripts
✅ public/sitemap.xml - Generated sitemap (35 pages)
✅ public/robots.txt - Generated robots.txt
```

## 🔧 Configuration Details

### **next-sitemap.config.js**
```javascript
module.exports = {
  siteUrl: 'https://www.kvtpackersandmovers.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/_next/*', '/admin/*', '/private/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/', '/*.json$', '/*?*', '/*#']
      }
    ]
  }
}
```

### **Generated Sitemap Includes:**
- **Homepage** (priority: 1.0, changefreq: weekly)
- **Services Pages** (priority: 0.8-0.9, changefreq: monthly)
- **Service Subpages** (priority: 0.7, changefreq: monthly)
- **Blog Posts** (priority: 0.5, changefreq: weekly)
- **Other Pages** (about, contact, gallery, testimonials)

## 🚀 Commands

### **Generate Sitemap Manually**
```bash
npm run sitemap
```

### **Build with Auto Sitemap Generation**
```bash
npm run build
```
*Note: Sitemap is automatically generated after build via `postbuild` script*

### **Development Mode**
```bash
npm run dev
```

## 📊 Generated Files Content

### **sitemap.xml** (35 pages included)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.kvtpackersandmovers.com/</loc>
    <lastmod>2025-09-12T17:10:54.376Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... 34 more pages ... -->
</urlset>
```

### **robots.txt** (SEO Optimized)
```txt
# *
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*
Disallow: /*#

# Googlebot
User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Bingbot
User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Host
Host: https://www.kvtpackersandmovers.com

# Sitemaps
Sitemap: https://www.kvtpackersandmovers.com/sitemap.xml
```

## 🔍 SEO Best Practices Implemented

### **1. Robots.txt Rules**
- ✅ **Allow all pages** for search engines
- ✅ **Block API routes** (`/api/`)
- ✅ **Block Next.js internals** (`/_next/`)
- ✅ **Block admin areas** (`/admin/`, `/private/`)
- ✅ **Block query parameters** (`/*?*`)
- ✅ **Block JSON files** (`/*.json$`)
- ✅ **Block hash fragments** (`/*#`)

### **2. Sitemap Optimization**
- ✅ **Priority system**: Homepage (1.0) > Services (0.8-0.9) > Other pages (0.5-0.7)
- ✅ **Change frequency**: Weekly for homepage/blog, monthly for services
- ✅ **Last modified dates**: Auto-generated timestamps
- ✅ **Complete page coverage**: All 35 pages included

### **3. Search Engine Specific Rules**
- ✅ **Googlebot**: Optimized crawling rules
- ✅ **Bingbot**: Specific Bing optimization
- ✅ **General crawlers**: Standard rules for all others

## 🌐 Deployment & Google Integration

### **1. Deploy Your Website**
```bash
# Build the project
npm run build

# Deploy the 'out' folder to your hosting platform
# The sitemap.xml and robots.txt will be in the public folder
```

### **2. Google Search Console Setup**

#### **Step 1: Add Property**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.kvtpackersandmovers.com`
3. Verify ownership using HTML meta tag method

#### **Step 2: Submit Sitemap**
1. In Search Console, go to **Sitemaps** section
2. Add sitemap URL: `https://www.kvtpackersandmovers.com/sitemap.xml`
3. Click **Submit**

#### **Step 3: Test Sitemap**
1. Use **URL Inspection** tool to test individual pages
2. Check **Coverage** report for indexing status
3. Monitor **Performance** for search visibility

### **3. Other Search Engines**

#### **Bing Webmaster Tools**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site and verify ownership
3. Submit sitemap: `https://www.kvtpackersandmovers.com/sitemap.xml`

#### **Yandex Webmaster**
1. Go to [Yandex Webmaster](https://webmaster.yandex.com)
2. Add your site and verify
3. Submit sitemap

## 🔄 Automatic Updates

### **How It Works**
- **During build**: `postbuild` script automatically runs `next-sitemap`
- **Manual generation**: Run `npm run sitemap` anytime
- **Page changes**: Sitemap updates automatically when you add/remove pages

### **When to Regenerate**
- ✅ **After adding new pages**
- ✅ **After changing page priorities**
- ✅ **Before each deployment**
- ✅ **Monthly maintenance**

## 📈 Monitoring & Maintenance

### **1. Regular Checks**
- **Monthly**: Verify sitemap is accessible
- **Quarterly**: Check for new pages to include
- **Annually**: Review and update priorities

### **2. Tools for Monitoring**
- **Google Search Console**: Sitemap status and errors
- **Bing Webmaster Tools**: Indexing status
- **Sitemap Validators**: Online tools to check XML validity

### **3. Common Issues & Solutions**

#### **Sitemap Not Found (404)**
- Check if `sitemap.xml` exists in `public/` folder
- Verify file is deployed to hosting platform
- Ensure correct URL in Search Console

#### **Pages Not Indexed**
- Check robots.txt doesn't block the pages
- Verify pages are in sitemap.xml
- Use URL Inspection tool in Search Console

#### **Sitemap Errors**
- Validate XML syntax
- Check for duplicate URLs
- Ensure all URLs are accessible

## 🎯 Expected Results

### **Immediate Benefits**
- ✅ **Better search engine crawling**
- ✅ **Faster page discovery**
- ✅ **Improved indexing efficiency**

### **Long-term Benefits**
- 📈 **Higher search rankings**
- 📈 **Increased organic traffic**
- 📈 **Better search visibility**
- 📈 **Improved SEO performance**

## 🛠️ Troubleshooting

### **Common Commands**
```bash
# Check if sitemap exists
ls -la public/sitemap.xml

# Validate sitemap XML
curl https://www.kvtpackersandmovers.com/sitemap.xml

# Test robots.txt
curl https://www.kvtpackersandmovers.com/robots.txt

# Regenerate sitemap
npm run sitemap
```

### **Debug Mode**
```bash
# Run with verbose output
DEBUG=next-sitemap npm run sitemap
```

## 📞 Support

For technical issues with sitemap generation:
- Check `next-sitemap` documentation
- Verify configuration in `next-sitemap.config.js`
- Test with online XML validators
- Check hosting platform requirements

---

**Last Updated**: December 19, 2024  
**Version**: 1.0  
**Status**: Production Ready
