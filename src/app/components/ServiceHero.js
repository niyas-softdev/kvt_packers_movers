'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function ServiceHero({
  backHref = '/services',
  badgeText = 'Premium Service',
  title,
  description,
  imageSrc,
  imageAlt,
  stats = [
    { k: '6k+', v: 'Happy Customers' },
    { k: '2k+', v: 'Team Members' },
    { k: '8k+', v: 'Client Reviews' }
  ],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background and decorative shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700"></div>
      <div className="absolute -top-24 -right-24 w-[680px] h-[680px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-white/10" style={{ clipPath: 'polygon(0 100%, 0 40%, 30% 60%, 60% 30%, 100% 55%, 100% 100%)' }}></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <Link href={backHref} className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm mb-4">
                <ShieldCheckIcon className="w-4 h-4" /> {badgeText}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mt-5 max-w-2xl">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                  Get Quote
                </Link>
                <a href="tel:+917550016167" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Call Now
                </a>
              </div>

              {/* Stats */}
              {stats?.length ? (
                <div className="mt-10 grid grid-cols-3 gap-4 text-white/90">
                  {stats.map((s, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                      <div className="text-3xl font-bold">{s.k}</div>
                      <div className="text-sm text-blue-100">{s.v}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 md:h-96 lg:h-[500px]">
                <Image src={imageSrc} alt={imageAlt} fill priority className="object-contain drop-shadow-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-green-500/80 rounded-xl blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/80 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 45C840 60 960 90 1080 95C1200 100 1320 80 1380 70L1440 60V100H0V60Z" fill="white" fillOpacity="0.9"/>
      </svg>
    </section>
  );
}


