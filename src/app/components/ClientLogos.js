'use client';

import Image from 'next/image';

const clients = [
  { name: 'Tamil Nadu Election Commission', src: '/img/clients/tn_election.png' },
  { name: 'HCL', src: '/img/clients/hcl.png' },
  { name: 'Accenture', src: '/img/clients/accenture.svg' },
  { name: 'Indian Oil', src: '/img/clients/indian_oil.png' },
  { name: 'Canara Bank', src: '/img/clients/canara_bank.webp' },
  { name: 'State Bank of India', src: '/img/clients/sbi.png' },
  { name: 'Indian Bank', src: '/img/clients/indian_bank.png' },
  { name: 'Infosys', src: '/img/clients/infosys.png' },
  { name: 'Bharat Petroleum', src: '/img/clients/bharat_petroleum.png' },
  { name: 'Chennai Corporation', src: '/img/clients/chennai_corp.jpg' },
  { name: 'Tamil Nadu Secretariat', src: '/img/clients/tn_secretariat.jpg' },
  { name: 'Terumo PCT', src: '/img/clients/terumo.png' },
  { name: 'ITC', src: '/img/clients/ITC.jpg' },
];

export default function ClientLogos({ title = 'Trusted by leading organizations' }) {
  return (
    <section className="py-12 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">{title}</h2>

        {/* Infinite marquee row */}
        <div className="relative overflow-hidden">
          <div className="flex gap-10 items-center animate-logo-marquee will-change-transform" aria-hidden>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <div className="relative w-32 h-12 sm:w-40 sm:h-14">
                  <Image src={c.src} alt={c.name} fill sizes="160px" className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle separators */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          width: calc(200%);
          animation: logo-marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}


