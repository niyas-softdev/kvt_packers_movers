'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
// Metadata is handled in layout.js

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
  CogIcon,
  SparklesIcon,
  HeartIcon,
  LightBulbIcon,
  AcademicCapIcon,
  HandThumbUpIcon,
  ArrowTrendingUpIcon
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
      name: "All India Lorry Owners Administration",
      title: "AIMTC Chairman Honourable GR. Shanmugappa",
      role: "All India Lorry Owners Administration",
      image: "/img/about/1.jpg",
      description: "Leading authority in motor transport industry with nationwide recognition and influence."
    },
    {
      name: "Stand By AIMTC President 2025 - 2026",
      title: "Honourable Thiru. Dhanraj",
      role: "Stand By AIMTC President 2025 - 2026",
      image: "/img/about/2.jpg",
      description: "Representing the interests of lorry owners across Tamil Nadu with dedication and leadership."
    },
    {
      name: "TN - Election Commission Board Meeting 2021 By Greater Chennai Corporation HeadQuarters",
      title: "Honourable Thiru. Nijalingam",
      role: "TN - Election Commission Board Meeting 2021 By Greater Chennai Corporation HeadQuarters",
      image: "/img/about/3.jpg",
      description: "Leading the water tanker industry with focus on service quality and industry standards."
    },
    {
      name: "Stand By Tamil Nadu Lorry Owner Federation President",
      title: "Honourable Thiru. S. Yuvaraj",
      role: "Stand By Tamil Nadu Lorry Owner Federation President",
      image: "/img/about/4.jpg",
      description: "Coordinating lorry owners' interests across South India with strategic vision and expertise."
    },
    {
      name: "Tamilnadu van owners Association president ",
      title: "Honourable Thiru R.Kamalakannan (a)Durai",
      role: "Tamilnadu van owners Association president",
      image: "/img/about/5.jpg",
      description: "Coordinating lorry owners' interests across South India with strategic vision and expertise."
    }

  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-teal-50">
        {/* Hero Section - Creative Gradient Background */}
        <section className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-32 right-32 w-16 h-16 bg-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-yellow-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-16 w-8 h-8 bg-pink-300/40 rotate-12 animate-pulse"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className={`text-white transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                {/* Breadcrumb */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm mb-6 hover:underline bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Services
                </Link>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Trusted Since 1998</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    About KVT Packers and Movers in Chennai
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  With over <span className="font-bold text-yellow-300">25+ years</span> of experience and partnerships with top brands, we provide 
                  <span className="font-semibold text-cyan-300"> affordable and reliable</span> packing and moving services for local and long-distance relocations in Chennai. 
                  Explore our <Link href="/services" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">comprehensive services</Link>, 
                  visit our <Link href="/locations/chennai" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">Chennai location</Link>, 
                  or <Link href="/contact" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">contact us</Link> for a free quote.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold text-yellow-300">25+</div>
                    <div className="text-sm text-white/80">Years</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold text-cyan-300">5000+</div>
                    <div className="text-sm text-white/80">Moves</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold text-pink-300">100%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Free Quote
                      <ArrowTrendingUpIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="tel:+917550016167"
                    className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <PhoneIcon className="w-5 h-5" />
                      Call Now
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Side - Creative Image Layout */}
              <div className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                <div className="relative">
                  {/* Main Image with Creative Frame */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                      <Image
                        src="/img/hero/2.png"
                        alt="KVT Heavy Machinery"
                        width={600}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <TruckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                    <HeartIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Company Story Section - Creative Design */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full text-purple-700 font-semibold mb-6">
                <LightBulbIcon className="w-5 h-5" />
                <span>Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
                <br />
                <span className="text-gray-800">Since 1998</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <TruckIcon className="w-4 h-4 text-white" />
                    </div>
                    Our Journey
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KVT Packers and Movers began as a small local moving company in Chennai with a simple mission: 
                    to make moving stress-free and reliable. Over 25+ years, we've grown into Tamil Nadu's most 
                    trusted logistics partner, serving thousands of satisfied customers. Today, we offer comprehensive 
                    <Link href="/services" className="text-purple-600 hover:text-purple-700 font-semibold underline mx-1">moving services</Link> 
                    including residential, corporate, and industrial relocations across Chennai and beyond.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <HeartIcon className="w-4 h-4 text-white" />
                    </div>
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We understand that moving is more than just transporting belongings – it's about 
                    moving lives, dreams, and memories. That's why we treat every move with the care 
                    and attention it deserves. Whether you're moving within <Link href="/locations/chennai" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Chennai</Link>, 
                    to <Link href="/locations/anna-nagar" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Anna Nagar</Link>, 
                    or <Link href="/locations/arumbakkam" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Arumbakkam</Link>, 
                    our team ensures a seamless experience. <Link href="/contact" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Get in touch</Link> to learn more.
                  </p>
                </div>
              </div>

              {/* Right Side - Visual Elements */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
                      <div className="text-3xl font-bold mb-2">25+</div>
                      <div className="text-sm opacity-90">Years of Excellence</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl">
                      <div className="text-3xl font-bold mb-2">5000+</div>
                      <div className="text-sm opacity-90">Successful Moves</div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-6 text-white shadow-xl">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-sm opacity-90">Customer Satisfaction</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 text-white shadow-xl">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-sm opacity-90">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section - Creative Cards */}
        <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Core Values</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <TrophyIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    To provide reliable, efficient, and affordable moving services while ensuring 
                    customer satisfaction and safety of belongings. We strive to make every move 
                    a positive experience.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <GlobeAltIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    To become the most trusted and preferred logistics partner for all moving 
                    and transportation needs across India, setting new standards in the industry.
                  </p>
                </div>
              </div>

              {/* Values Card */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-3xl p-8 text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <HandThumbUpIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-white/90 leading-relaxed">
                    Integrity, professionalism, customer focus, and continuous improvement in all 
                    our services and operations. We believe in doing the right thing, always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


       {/* Client Logos */}
       <ClientLogos title="Our clients across industries" />


        {/* Key People Section - Creative Design */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full text-purple-700 font-semibold mb-6">
                <UserGroupIcon className="w-5 h-5" />
                <span>Leadership Team</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Industry Leaders
                </span>
                <br />
                <span className="text-gray-800">We Work With</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proud partnerships with distinguished leaders and organizations in the transport and logistics industry
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                {clients.map((client, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-all duration-300">
                      <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={client.image}
                          alt={client.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-sm font-bold">{client.name}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-gray-800 text-sm mb-1">{client.title}</h3>
                        <p className="text-xs text-gray-600">{client.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right Side - Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-5 h-5" />
                    </div>
                    Industry Recognition
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg mb-6">
                    Our partnerships with key industry leaders demonstrate our commitment to excellence 
                    and industry standards. We work closely with distinguished organizations to maintain 
                    the highest levels of service quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">25+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm opacity-90">Industry Partners</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 border border-cyan-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                      <StarIcon className="w-4 h-4 text-white" />
                    </div>
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to maintaining the highest standards of professionalism and service 
                    excellence, working with industry leaders to continuously improve our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section - Creative Design */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-6 py-3 rounded-full text-yellow-300 font-semibold mb-6">
                <CogIcon className="w-5 h-5" />
                <span>What We Do</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Core Services</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive solutions for all your moving and logistics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl border border-white/10 transform group-hover:scale-105 transition-all duration-300">
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-white/80 leading-relaxed">{service.description}</p>
                      <Link 
                        href="/services"
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 block text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section - Creative Timeline Design */}
        <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-purple-100 px-6 py-3 rounded-full text-cyan-700 font-semibold mb-6">
                <AcademicCapIcon className="w-5 h-5" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  25+ Years
                </span>
                <br />
                <span className="text-gray-800">Of Excellence</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Timeline Content */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1998</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">The Beginning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Founded as a small local moving company in Chennai with a simple mission: 
                        to make moving stress-free and reliable for our community.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2010</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Expansion</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Expanded our services to include corporate relocations and industrial 
                        machinery moving, establishing partnerships with major brands.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2023</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Today</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Now one of Chennai's most trusted logistics providers, serving thousands 
                        of satisfied customers with comprehensive moving solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image and Stats */}
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src="/img/van.jpg"
                      alt="KVT History"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold">Our Fleet</h3>
                      <p className="text-sm opacity-90">Modern vehicles for every need</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">5000+</div>
                      <div className="text-sm opacity-90">Moves Completed</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Creative Design */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-6 py-3 rounded-full text-yellow-300 font-semibold mb-6">
                <TrophyIcon className="w-5 h-5" />
                <span>Our Achievements</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Numbers That Matter
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
                  className="group text-center"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl border border-white/10 transform group-hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2">
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
                    <div className="text-white/80 font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Special Meeting Highlight - Creative Design */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <TrophyIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Legislative Assembly Election 2021-2026</h3>
                      <p className="text-white/80 text-lg">EVM Machine Transport Related Meeting</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg mb-8">
                    This significant meeting at Greater Chennai Corporation Ribbon Building demonstrates 
                    our commitment to supporting critical infrastructure and government operations with 
                    our reliable transport services. We're proud to contribute to democratic processes 
                    through our professional logistics expertise.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Greater Chennai Corporation</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      <span>Ribbon Building</span>
                    </div>
                  </div>
                </div>

                {/* Right side image */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
                    <Image
                      src="/img/about/3.jpg"
                      alt="Government meeting discussion"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Creative Design */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-8">
                <SparklesIcon className="w-5 h-5" />
                <span>Ready to Get Started?</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Move with <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Confidence</span>
              </h2>
              
              <p className="text-2xl text-white/90 mb-12 leading-relaxed">
                Let us handle your moving needs with our proven expertise and reliable service. 
                Experience the difference that 25+ years of excellence makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    Get Free Quote
                    <ArrowTrendingUpIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="tel:+917550016167"
                  className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-3">
                    <PhoneIcon className="w-6 h-6" />
                    Call Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 