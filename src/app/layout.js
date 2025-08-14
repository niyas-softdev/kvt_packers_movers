// src/app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export const metadata = {
  title: 'KVT Packers and Movers',
  description: 'Best packers and movers in Tamil Nadu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
