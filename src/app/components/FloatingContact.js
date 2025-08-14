'use client';

import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function FloatingContact() {
  const phone = '+917550016167';
  const whatsappHref = `https://wa.me/917550016167?text=${encodeURIComponent("Hello KVT Packers & Movers, I'd like a quote.")}`;

  return (
    <div className="fixed z-50 bottom-6 right-4 sm:bottom-8 sm:right-6 flex flex-col items-center gap-3 select-none print:hidden">
      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping"></span>
        <WhatsAppIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${phone}`}
        aria-label="Call now"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping"></span>
        <PhoneIcon className="relative w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 .08 5.29.08 11.92c0 2.1.55 4.16 1.59 5.98L0 24l6.3-1.61a11.9 11.9 0 005.7 1.47h.01c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.17-3.43-8.46zM12 21.28h-.01a9.37 9.37 0 01-4.78-1.3l-.34-.2-3.74.95.99-3.65-.22-.37a9.34 9.34 0 01-1.4-4.79C2.5 6.7 6.7 2.5 12 2.5c2.5 0 4.86.97 6.63 2.74A9.29 9.29 0 0121.5 12c0 5.3-4.2 9.28-9.5 9.28zm5.43-7.01c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.15 4.55.72.31 1.29.49 1.73.63.73.23 1.39.2 1.92.12.59-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35z" />
    </svg>
  );
}


