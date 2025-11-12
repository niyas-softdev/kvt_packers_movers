'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {

  return (
    <footer className="bg-[#111827] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Company Info */}
        <div>
          <Logo
            src="/img/white-logo.png"
            alt="KVT Logo"
            width={100}
            height={100}
            className="mb-4"
            variant="white"
          />
          <h2 className="text-lg font-semibold mb-2">
            KVT Packers and Movers Company in Chennai
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Delivering your world one package at a time. 25+ years of trusted moving services in Chennai and across India.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 font-bold text-green-500 hover:text-green-400 transition-colors"
          >
            START BOOKING
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-500 pl-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-white transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog & News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-500 pl-2">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/services/local" className="hover:text-white transition-colors">
                Local Movers
              </Link>
            </li>
            <li>
              <Link href="/services/residential" className="hover:text-white transition-colors">
                Residential Movers
              </Link>
            </li>
            <li>
              <Link href="/services/corporate" className="hover:text-white transition-colors">
                Corporate Movers
              </Link>
            </li>
            <li>
              <Link href="/services/international" className="hover:text-white transition-colors">
                International Movers
              </Link>
            </li>
            <li>
              <Link href="/services/industrial-machinery-movers" className="hover:text-white transition-colors">
                Industrial Machinery Movers
              </Link>
            </li>
            <li>
              <Link href="/services/distribution" className="hover:text-white transition-colors">
                Distribution Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-500 pl-2">
            Our Locations
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/locations/chennai" className="hover:text-white transition-colors">
                Packers and Movers in Chennai
              </Link>
            </li>
            <li>
              <Link href="/locations/anna-nagar" className="hover:text-white transition-colors">
                Packers and Movers in Anna Nagar
              </Link>
            </li>
            <li>
              <Link href="/locations/arumbakkam" className="hover:text-white transition-colors">
                Packers and Movers in Arumbakkam
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="bg-lime-500 text-black py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Phone */}
          <div className="flex items-start space-x-3">
            <PhoneIcon className="h-5 w-5 text-blue-800 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Phone No</p>
              <a href="tel:+917550016167" className="hover:underline">
                +91 75500 16167
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPinIcon className="h-5 w-5 text-blue-800 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-sm">
                2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission, Backside DG Vaishnav College Rd,
                Arumbakkam, Chennai, Tamil Nadu 600106
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <EnvelopeIcon className="h-5 w-5 text-blue-800 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Email Address</p>
              <a href="mailto:kvtpackersandmovers@gmail.com" className="hover:underline break-all">
                kvtpackersandmovers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#0a0e1a] text-gray-400 py-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col items-center justify-center text-center gap-2 text-sm">
      <p>
        © {new Date().getFullYear()} Developed by{" "}
        <a
          href="https://www.instagram.com/saop.india"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 font-medium"
        >
          @saop.india
        </a>
        . All rights reserved.
      </p>
    </div>
  </div>
</div>

    </footer>
  );
}
