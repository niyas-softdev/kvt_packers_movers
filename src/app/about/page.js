'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "1000+", label: "Delivered Goods", icon: TruckIcon },
    { number: "25+", label: "Years Experience", icon: StarIcon },
    { number: "500+", label: "Happy Customers", icon: UserGroupIcon },
    { number: "24/7", label: "Customer Support", icon: ClockIcon }
  ];

  const services = [
    {
      title: "Expert Packing",
      description: "Our expert packing services ensure secure wrapping and protection for all your valuable items during transit.",
      image: "/img/packers.jpg",
      icon: CubeIcon
    },
    {
      title: "Fragile Item Care",
      description: "We handle fragile items with utmost care using top-quality materials and specialized techniques.",
      image: "/img/packing_truck.jpg",
      icon: ShieldCheckIcon
    },
    {
      title: "Premium Protection",
      description: "Premium packing services designed to safeguard your valuable possessions throughout the journey.",
      image: "/img/shifting.jpg",
      icon: CheckCircleIcon
    }
  ];

  const tabs = [
    { id: 'about', name: 'About Us' },
    { id: 'mission', name: 'Our Mission' },
    { id: 'values', name: 'Our Values' },
    { id: 'team', name: 'Our Team' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  About Us
                </h1>
                <div className="flex items-center justify-center text-blue-200 mb-8">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="mx-2">{'>'}</span>
                  <span className="text-white">About</span>
                </div>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  With over 25 years of experience and partnerships with top brands, we provide affordable and reliable packing and moving services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images */}
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/img/team.jpg"
                  alt="KVT Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <TruckIcon className="w-8 h-8" />
                    <div>
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm">Delivered Goods</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Image
                    src="/img/truck.png"
                    alt="KVT Fleet"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/img/van.jpg"
                    alt="KVT Services"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="animate-slideInUp" style={{ animationDelay: '0.1s' }}>
                <div className="text-sm text-gray-500 font-semibold mb-2">ABOUT US KVT</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Moving Partner
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  KVT Packers and Movers, with over 25 years of experience and partnerships with top brands, 
                  provides affordable and reliable packing and moving services for local and long-distance 
                  relocations in Chennai. We are committed to delivering excellence in every move.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <TruckIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Transport Services</h3>
                    </div>
                    <p className="text-green-100">
                      Efficient and reliable transport solutions with our modern fleet of vehicles.
                    </p>
                  </div>
                </div>

                <div className="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <CubeIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Fast, Efficient Delivery</h3>
                    </div>
                    <p className="text-green-100">
                      We prioritize speed and reliability in every delivery we make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-500 font-semibold mb-2">CUSTOMER TEAMS & AN AGILE SERVICES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Specialist Packers Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
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
                    <div className="p-2 bg-green-600 rounded-lg">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            24/7 Customer Support
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Any time of the day or night, customers can get help and find answers to questions as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KVT Packers and Movers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the No.1 packers and movers company in Chennai, delivering your world one package at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slideInUp">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                With 25+ years of experience, we've built a reputation for reliable and trustworthy service.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Fast and efficient delivery services that prioritize your time and convenience.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled professionals ensure your belongings are handled with care and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move with Confidence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us handle your moving needs with our proven expertise and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+917550016167"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 