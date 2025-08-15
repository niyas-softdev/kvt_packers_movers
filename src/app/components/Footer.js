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
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700">
        {/* Left */}
        <div>
          <Logo
            src="/img/white-logo.png"
            alt="KVT Logo"
            width={100}
            height={100}
            className="mb-4"
            variant="white"
          />
          <h2 className="text-lg font-semibold">
            KVT Packers and Movers Company in Chennai.
          </h2>
          <p className="text-gray-300 mt-2">
            Delivering your world one package at a time
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 font-bold text-green-500 hover:underline"
          >
            START BOOKING
          </Link>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-500 pl-2">
            Explore
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Company
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Latest Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog & News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-500 pl-2">
            Services
          </h3>
          <ul className="space-y-2 text-green-400 text-sm">
            <li>
              <Link href="/services/local" className="hover:text-white">
                Local Movers
              </Link>
            </li>
            <li>
              <Link href="/services/residential" className="hover:text-white">
                Residential Movers
              </Link>
            </li>
            <li>
              
            </li>
            <li>
              <Link href="/services/international" className="hover:text-white">
                International
              </Link>
            </li>
            <li>
              <Link href="/services/corporate" className="hover:text-white">
                Corporate Movers
              </Link>
            </li>
            <li>
              <Link href="/services/distribution" className="hover:text-white">
                Distribution
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div className="bg-lime-500 text-black py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-blue-800" />
            <div>
              <p className="font-semibold">Phone No</p>
              <p>+91 75500 16167</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-blue-800" />
            <div>
              <p className="font-semibold">Address</p>
              <p>
                2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission,<br/> Backside DG Vaishnav College Rd,
                Arumbakkam, Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-5 w-5 text-blue-800" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p>kvtpackersandmovers@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
