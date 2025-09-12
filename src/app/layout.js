// src/app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import SEOHead from './components/SEOHead';

export const metadata = {
  title: {
    default: 'KVT Packers and Movers - Professional Moving Services in Chennai, Tamil Nadu',
    template: '%s | KVT Packers and Movers'
  },
  description: 'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services. Call +91 75500 16167 for free quote.',
  keywords: [
    'packers and movers chennai',
    'moving services tamil nadu',
    'house shifting chennai',
    'office relocation chennai',
    'industrial movers chennai',
    'international movers chennai',
    'local movers chennai',
    'KVT packers movers',
    'professional moving services',
    'packing unpacking services'
  ],
  authors: [{ name: 'KVT Packers and Movers' }],
  creator: 'KVT Packers and Movers',
  publisher: 'KVT Packers and Movers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kvtpackersandmovers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KVT Packers and Movers - Professional Moving Services in Chennai',
    description: 'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.',
    url: 'https://kvtpackersandmovers.com',
    siteName: 'KVT Packers and Movers',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'KVT Packers and Movers Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KVT Packers and Movers - Professional Moving Services in Chennai',
    description: 'Professional packers and movers in Chennai with 25+ years experience. Residential, corporate, industrial, and international moving services.',
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Moving and Logistics Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KVT Packers and Movers" />
        <SEOHead />
      </head>
      <body className="bg-white text-gray-800 font-sans antialiased">
        {/* Navbar with top contact bar */}
        <Navbar />

        {/* Full-width main area */}
        <main className="w-full min-h-screen">
          {children}
        </main>

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
