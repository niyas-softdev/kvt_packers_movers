'use client';
import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },

    { name: 'Who We Are', href: '/about' },
    {
      name: 'Locations',
      subItems: [
        { name: 'Chennai', href: '/locations/chennai' },
        { name: 'Anna Nagar', href: '/locations/anna-nagar' },
        { name: 'Arumbakkam', href: '/locations/arumbakkam' },
        { name: 'Koyambedu', href: '/packers-and-movers-in-koyambedu' },
        { name: 'Mogappair', href: '/locations/mogappair' },
      ],
    },
    {
      name: 'Services',
      subItems: [
        { name: 'Service Details', href: '/services' },
        { name: 'Industrial Machinery Movers', href: '/services/industrial-machinery-movers' },

        { name: 'Local Movers', href: '/services/local' },
        { name: 'Residential', href: '/services/residential' },
        { name: 'International', href: '/services/international' },
        { name: 'Corporate', href: '/services/corporate' },
        { name: 'Distribution', href: '/services/distribution' },


      ],
    },
    { name: 'Contact', href: '/contact' },

  ];

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Contact Bar */}
      <div className="bg-green-600 overflow-hidden text-white text-sm py-2">
        <div
          className="flex items-center gap-x-6 whitespace-nowrap animate-marquee px-4"
          style={{
            animation: 'simple-marquee 20s linear infinite',
          }}
        >
          <span className="inline-flex items-center gap-x-2">📞 +91 75500 16167</span>
          <span className="inline-flex items-center gap-x-2">📧 kvtpackersandmovers@gmail.com</span>
          <span className="inline-flex items-center gap-x-2">Follow us:</span>

          <a
            href="https://www.facebook.com/people/KVT-Packers-And-Movers/100089017598094/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
            </svg>
          </a>

          <span className="inline-flex items-center gap-x-2">Facebook</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
          <span className="inline-flex items-center gap-x-1">Instagram</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="px-4 sm:px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo 
              src="/logo.png" 
              alt="KVT Packers and Movers Logo" 
              width={120} 
              height={60} 
              className="object-contain"
              variant="default"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-x-6">
            {navItems.map((item, idx) =>
              item.subItems ? (
                <div key={idx} className="relative">
                  <button 
                    className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                    onClick={() => handleDropdownToggle(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg z-20 transition-all duration-200 ease-in-out min-w-[200px] ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.subItems.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 whitespace-nowrap transition-colors duration-200"
                        onClick={handleDropdownClose}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden mt-4 px-2 pb-6 space-y-4">
            {navItems.map((item, idx) =>
              item.subItems ? (
                <details key={idx} className="text-left">
                  <summary className="cursor-pointer py-2 text-gray-700 font-medium hover:text-green-600 transition-colors duration-200">
                    {item.name}
                  </summary>
                  <ul className="ml-4 space-y-1 mt-2">
                    {item.subItems.map((subItem, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors duration-200"
                          onClick={() => setMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="block bg-green-600 hover:bg-green-700 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
