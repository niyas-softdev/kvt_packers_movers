@echo off
echo ========================================
echo   KVT Packers & Movers - Deployment
echo ========================================
echo.

echo 🚀 Starting deployment process...
echo.

echo 📋 Step 1: Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
)
echo ✅ Build completed successfully!
echo.

echo 📋 Step 2: Verifying build output...
if not exist "out\index.html" (
    echo ❌ Build output not found! Check the build process.
    pause
    exit /b 1
)
echo ✅ Build output verified!
echo.

echo 📋 Step 3: Checking image files...
if not exist "out\img" (
    echo ❌ Images directory not found!
    pause
    exit /b 1
)
echo ✅ Images directory found!
echo.

echo 📋 Step 4: Ready for deployment!
echo.
echo 📁 Your production files are ready in the 'out' directory
echo.
echo 🌐 To deploy to your hosting platform:
echo    1. Upload the entire 'out' folder contents to your web server
echo    2. Ensure .htaccess (Apache) or _redirects (Netlify) is included
echo    3. Test your live site
echo.
echo 📊 Build Summary:
echo    - Main page: out\index.html
echo    - Images: out\img\
echo    - Static assets: out\_next\
echo    - Configuration: out\.htaccess, out\_redirects
echo.
echo 🎉 Deployment package is ready!
echo.
pause
