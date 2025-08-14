'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ClientLogos from '../components/ClientLogos';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  TruckIcon,
  CubeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  TrophyIcon,
  HomeIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  const stats = [
    { number: "1000+", label: "Delivered Goods", icon: TruckIcon },
    { number: "25+", label: "Years Experience", icon: StarIcon },
    { number: "500+", label: "Happy Customers", icon: UserGroupIcon },
    { number: "24/7", label: "Customer Support", icon: ClockIcon }
  ];

  const coreServices = [
    {
      title: "Home/Office Shifting",
      description: "Professional packing and moving services for homes and offices with care and precision.",
      image: "/img/gallery/30.jpg",
      icon: HomeIcon
    },
    {
      title: "Corporate Shifting",
      description: "Seamless office relocation services minimizing business disruption and downtime.",
      image: "/img/team.jpg",
      icon: BuildingOfficeIcon
    },
    {
      title: "Industrial Movers",
      description: "Heavy machinery and industrial equipment moving with specialized expertise.",
      image: "/img/vechical/forklift.jpg",
      icon: CogIcon
    }
  ];

  const clients = [
    {
      name: "AIMTC Leader",
      title: "AIMTC Chairman Honourable GR. Shanmugappa",
      role: "All India Motor Transport Congress Honourable President",
      image: "/img/about/1.jpg",
      description: "Leading authority in motor transport industry with nationwide recognition and influence."
    },
    {
      name: "Tamil Nadu Lorry Owners",
      title: "Honourable Thiru. Dhanraj",
      role: "Tamil Nadu Lorry Owners President",
      image: "/img/about/2.jpg",
      description: "Representing the interests of lorry owners across Tamil Nadu with dedication and leadership."
    },
    {
      name: "Water Tanker Association",
      title: "Honourable Thiru. Nijalingam",
      role: "Tamil Nadu Private Water Tanker Lorry Owners President",
      image: "/img/about/3.jpg",
      description: "Leading the water tanker industry with focus on service quality and industry standards."
    },
    {
      name: "South India Federation",
      title: "Honourable Thiru. S. Yuvaraj",
      role: "South India Lorry Owners Federation Co-ordinator",
      image: "/img/about/4.jpg",
      description: "Coordinating lorry owners' interests across South India with strategic vision and expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Red Background */}
      <section className="relative bg-gradient-to-r from-[#0d47a1] to-[#00796b] overflow-hidden">
  {/* Background glowing circles */}
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 opacity-30 blur-3xl rounded-full" />
  <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500 opacity-30 blur-3xl rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div
        className={`text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Breadcrumb */}
        <Link
          href="/services"
          className="inline-flex items-center text-sm mb-4 hover:underline"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1" /> Back to Services
        </Link>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slideInUp">
          WELCOME TO KVT
          <span className="block"> Logistics Company About Us</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-white/80 mb-6 animate-fadeIn stagger-2">
          With over 25 years of experience and partnerships with top brands, we
          provide affordable and reliable packing and moving services for local
          and long-distance relocations in Chennai.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 animate-fadeIn stagger-3">
          <Link
            href="/contact"
            className="btn-animate bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get Quote
          </Link>
          <a
            href="tel:+911234567890"
            className="btn-animate bg-white text-[#0d47a1] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className={`relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Image
          src="/img/hero/2.png"
          alt="Heavy Machinery Crane"
          width={1000}
          height={1000}
          className="object-contain drop-shadow-2xl animate-scaleIn"
        />
      </div>
    </div>
  </div>
</section>


      {/* Profile Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Profile</h2>
          </div>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
            <p>
              KVT Packers and Movers is a leading logistics company based in Chennai, Tamil Nadu, with over 25 years of experience in the industry. We specialize in providing comprehensive packing, moving, and logistics solutions for both residential and commercial clients.
            </p>
            <p>
              Our company has built a strong reputation for reliability, efficiency, and customer satisfaction. We understand that moving can be a stressful experience, which is why we've developed a comprehensive range of services designed to make your transition as smooth and hassle-free as possible.
            </p>
            <p>
              We are committed to delivering excellence in every move, from small local relocations to large international shipments. Our team of experienced professionals ensures that your belongings are handled with the utmost care and attention to detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">To provide reliable, efficient, and affordable moving services while ensuring customer satisfaction and safety of belongings.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">To become the most trusted and preferred logistics partner for all moving and transportation needs across India.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
                <p className="text-gray-600">Integrity, professionalism, customer focus, and continuous improvement in all our services and operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Client Logos */}
       <ClientLogos title="Our clients across industries" />


      {/* Key People Section - Split Red/White */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - White Background with Images */}
            <div className="bg-white p-12">
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="relative group">
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
                      <p className="text-sm font-semibold">{client.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Red Background */}
            <div className="bg-red-600 p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Key People</h2>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                We are proud to serve and collaborate with distinguished leaders and organizations in the transport and logistics industry. Our partnerships with key industry leaders demonstrate our commitment to excellence and industry standards.
              </p>
              <div className="space-y-4">
                {clients.map((client, index) => (
                  <div key={index} className="border-l-4 border-white pl-4">
                    <h3 className="font-semibold text-lg">{client.title}</h3>
                    <p className="text-red-100 text-sm">{client.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-600 rounded-lg">
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Section - Split Red/White */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Red Background */}
            <div className="bg-red-600 p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                Founded in 1998, KVT Packers and Movers has grown from a small local moving company to one of Chennai's most trusted logistics providers. Over the past 25+ years, we have successfully completed thousands of moves, building lasting relationships with our customers and industry partners.
              </p>
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                Our journey has been marked by continuous innovation, expansion of services, and unwavering commitment to customer satisfaction. We have adapted to changing market demands while maintaining our core values of reliability and professionalism.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Read More
              </button>
            </div>
            
            {/* Right Side - White Background with Image */}
            <div className="bg-white p-12">
              <div className="relative h-full">
                <Image
                  src="/img/van.jpg"
                  alt="KVT History"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of customers across India for reliable and professional moving services
            </p>
          </div>
          
          <div 
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg mb-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {startCount && (
                    <CountUp
                      end={stat.number === "24/7" ? 24 : parseInt(stat.number.replace('+', ''))}
                      duration={4}
                      useEasing={true}
                      start={0}
                      delay={index * 0.2}
                      suffix={stat.number.includes('+') ? '+' : stat.number === "24/7" ? '/7' : ''}
                    />
                  )}
                  {!startCount && stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Special Meeting Highlight */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-red-600 rounded-2xl shadow-xl p-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left side content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white rounded-lg">
              <TrophyIcon className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold">Legislative Assembly Election 2021-2026</h3>
          </div>
          <p className="text-red-100 leading-relaxed mb-6">
            <strong>EVM Machine Transport Related Meeting</strong> at Greater Chennai Corporation Ribbon Building.
            This significant meeting demonstrates our commitment to supporting critical infrastructure and
            government operations with our reliable transport services.
          </p>
          <div className="flex items-center gap-4 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              <span>Greater Chennai Corporation</span>
            </div>
            <div className="flex items-center gap-2">
              <BuildingOfficeIcon className="w-4 h-4" />
              <span>Ribbon Building</span>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative">
          <Image
            src="/img/about/3.jpg" // Replace with your business meeting image
            alt="Government meeting discussion"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move with Confidence?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let us handle your moving needs with our proven expertise and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+917550016167"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 