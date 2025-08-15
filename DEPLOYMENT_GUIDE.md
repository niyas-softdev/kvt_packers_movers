# Production Deployment Guide - Image Loading Issues

## Problem Summary
Images are not displaying on the live site despite working locally. This is a common issue with Next.js static exports.

## Root Causes Identified
1. **Mixed Image Usage**: Inconsistent use of Next.js Image component vs HTML img tags
2. **Static Export Configuration**: `output: 'export'` requires special handling
3. **Missing Error Handling**: No fallbacks for failed image loads
4. **Image Path Issues**: Some images may not be included in the build

## Solutions Implemented

### 1. Image Component Standardization
- ✅ Replaced all HTML `<img>` tags with Next.js `<Image>` components
- ✅ Added proper `width` and `height` attributes
- ✅ Implemented `priority` loading for hero images

### 2. Error Handling & Fallbacks
- ✅ Added `onError` handlers for all images
- ✅ Created fallback UI components when images fail to load
- ✅ Implemented loading states with skeleton placeholders

### 3. Next.js Configuration Updates
- ✅ Enhanced `next.config.mjs` with better static export support
- ✅ Added webpack configuration for image assets
- ✅ Enabled trailing slashes for better static hosting compatibility

### 4. SafeImage Component
- ✅ Created reusable `SafeImage` component with built-in error handling
- ✅ Provides consistent fallback UI across the application

## Pre-Deployment Checklist

### 1. Verify Image Files Exist
```bash
# Check if all referenced images exist in public/img/
ls -la public/img/hero/
ls -la public/img/special/
ls -la public/img/gallery/
ls -la public/img/location/
```

### 2. Build and Test Locally
```bash
npm run build
npm run start
# Test all images load correctly
```

### 3. Check Build Output
```bash
# After building, verify images are copied to out/ directory
ls -la out/img/
```

## Deployment Steps

### 1. Build for Production
```bash
npm run build
```

### 2. Verify Static Export
```bash
# Check out/ directory contains all images
ls -la out/img/
```

### 3. Deploy to Hosting Platform
- Upload entire `out/` directory to your hosting platform
- Ensure `.htaccess` (Apache) or `_redirects` (Netlify) is configured for SPA routing

## Common Hosting Platform Configurations

### Netlify
Create `_redirects` file in `public/`:
```
/*    /index.html   200
```

### Vercel
No additional configuration needed - works out of the box

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Troubleshooting

### Images Still Not Loading?
1. **Check Browser Console**: Look for 404 errors
2. **Verify File Paths**: Ensure image paths match exactly (case-sensitive)
3. **Check Hosting Platform**: Some platforms require specific configurations
4. **Clear CDN Cache**: If using a CDN, clear cache after deployment

### Performance Issues?
1. **Image Optimization**: Consider using WebP format for better compression
2. **Lazy Loading**: Implement lazy loading for non-critical images
3. **CDN**: Use a CDN for faster image delivery

## Monitoring & Maintenance

### 1. Regular Checks
- Monitor image loading performance
- Check for broken image links
- Verify new images are properly included in builds

### 2. Analytics
- Track image load times
- Monitor user engagement with visual content
- Identify which images fail most often

## Additional Recommendations

### 1. Image Optimization
- Use appropriate image formats (WebP, AVIF for modern browsers)
- Implement responsive images with `sizes` attribute
- Consider using `next/image` with external domains if needed

### 2. SEO & Accessibility
- Always provide meaningful `alt` text
- Use descriptive image filenames
- Implement structured data for images when relevant

### 3. Performance
- Implement image preloading for critical images
- Use `loading="lazy"` for below-the-fold images
- Consider implementing image compression

## Support
If issues persist after following this guide:
1. Check browser developer tools for specific error messages
2. Verify hosting platform requirements
3. Test with different browsers/devices
4. Consider using a different hosting platform that better supports Next.js static exports
