# KVT Packers & Movers - Deployment Script
# Run this script in PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KVT Packers & Movers - Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green
Write-Host ""

Write-Host "📋 Step 1: Building for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}
Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Step 2: Verifying build output..." -ForegroundColor Yellow
if (-not (Test-Path "out\index.html")) {
    Write-Host "❌ Build output not found! Check the build process." -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}
Write-Host "✅ Build output verified!" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Step 3: Checking image files..." -ForegroundColor Yellow
if (-not (Test-Path "out\img")) {
    Write-Host "❌ Images directory not found!" -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}
Write-Host "✅ Images directory found!" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Step 4: Ready for deployment!" -ForegroundColor Yellow
Write-Host ""
Write-Host "📁 Your production files are ready in the 'out' directory" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 To deploy to your hosting platform:" -ForegroundColor Cyan
Write-Host "   1. Upload the entire 'out' folder contents to your web server" -ForegroundColor White
Write-Host "   2. Ensure .htaccess (Apache) or _redirects (Netlify) is included" -ForegroundColor White
Write-Host "   3. Test your live site" -ForegroundColor White
Write-Host ""
Write-Host "📊 Build Summary:" -ForegroundColor Cyan
Write-Host "   - Main page: out\index.html" -ForegroundColor White
Write-Host "   - Images: out\img\" -ForegroundColor White
Write-Host "   - Static assets: out\_next\" -ForegroundColor White
Write-Host "   - Configuration: out\.htaccess, out\_redirects" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Deployment package is ready!" -ForegroundColor Green
Write-Host ""

# Show file sizes
Write-Host "📈 Build Statistics:" -ForegroundColor Cyan
$outSize = (Get-ChildItem -Path "out" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "   Total build size: $([math]::Round($outSize, 2)) MB" -ForegroundColor White

$imgSize = (Get-ChildItem -Path "out\img" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "   Images size: $([math]::Round($imgSize, 2)) MB" -ForegroundColor White

Read-Host "Press Enter to continue"
