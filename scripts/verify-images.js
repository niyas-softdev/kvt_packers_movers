const fs = require('fs');
const path = require('path');

// List of all image paths referenced in the code
const imagePaths = [
  '/img/hero/hero1.png',
  '/img/truck.png',
  '/img/hero/hero_contact.jpg',
  '/img/process.jpg',
  '/img/special/services1.jpg',
  '/img/gallery/30.jpg',
  '/img/gallery/14.jpg',
  '/img/location/anna_nagar1.jpg',
  '/img/location/arumbakkam.jpg',
  '/img/location/nagercoil.jpg',
  '/img/packers.jpg',
  '/img/shifting.jpg',
  '/img/packing_truck.jpg',
  '/img/van.jpg'
];

console.log('🔍 Verifying image files exist...\n');

let allImagesExist = true;
const missingImages = [];

imagePaths.forEach(imagePath => {
  const fullPath = path.join(__dirname, '..', 'public', imagePath);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ ${imagePath} (${sizeInMB} MB)`);
  } else {
    console.log(`❌ ${imagePath} - MISSING`);
    missingImages.push(imagePath);
    allImagesExist = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allImagesExist) {
  console.log('🎉 All images are present and ready for deployment!');
} else {
  console.log('⚠️  Some images are missing:');
  missingImages.forEach(img => console.log(`   - ${img}`));
  console.log('\nPlease add the missing images to the public directory before deploying.');
}

console.log('\n📋 Next steps:');
console.log('1. Run: npm run build');
console.log('2. Check: ls -la out/img/');
console.log('3. Deploy the out/ directory to your hosting platform');
console.log('4. Ensure proper .htaccess or _redirects configuration');
