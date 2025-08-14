'use client';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import ClientLogos from './components/ClientLogos';
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
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);


   const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

   useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);
  const processSteps = [
    {
      icon: PhoneIcon,
      title: "Online Booking",
      description: "Easy online booking system for quick service requests"
    },
    {
      icon: TruckIcon,
      title: "Select Freight Type",
      description: "Choose the right freight type for your needs"
    },
    {
      icon: CubeIcon,
      title: "Delivery",
      description: "Professional delivery to your destination"
    },
    {
      icon: MapPinIcon,
      title: "Track Order",
      description: "Real-time tracking of your shipment"
    }
  ];

  const recentWork = [
    {
      title: "Corporate Moves",
      image: "/img/packers.jpg",
      description: "Professional corporate relocation services"
    },
    {
      title: "Home Relocation",
      image: "/img/shifting.jpg",
      description: "Complete home moving solutions"
    },
    {
      title: "Specialty Moves",
      image: "/img/packing_truck.jpg",
      description: "Specialized moving for unique items"
    },
    {
      title: "Long-Distance Moves",
      image: "/img/van.jpg",
      description: "Reliable long-distance transportation"
    }
  ];

  const blogPosts = [
    {
      title: "Trusted Heavy Item Relocation Experts in Anna Nagar, Chennai",
      excerpt: "Professional heavy item relocation services in Anna Nagar, Chennai. We specialize in moving steel lockers, machinery, and heavy equipment with care and precision.",
      image: "/img/location/anna_nagar1.jpg",
      date: "Nov 04, 2024",
    },
    {
       title: "House shifting services in Arumbakkam",
      excerpt: "Complete house shifting services in Arumbakkam with professional packing, loading, and unloading. Trusted by thousands of families.",
      image: "/img/location/arumbakkam.jpg",
      date: "Nov 01, 2024",
    },
    {
      title: "House shifting from Chennai to Nagercoil",
      excerpt: "Reliable house shifting services from Chennai to Nagercoil. Door-to-door service with complete packing and unpacking assistance.",
      image: "/img/location/nagercoil.jpg",
      date: "Nov 01, 2024",
    }
  ];

  const faqs = [
    "What are the Benefits of using your online booking system?",
    "How do your insurance services benefit my move?",
    "What makes your packing services different from others?",
    "How do you ensure the safety of fragile items?",
    "What are your delivery time guarantees?"
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#e9f5ff] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-28">
          {/* LEFT SIDE: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Packers and Movers <br /> Services in Tamil Nadu
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Experience a stress-free move with our affordable packing and unpacking
              services for both local and interstate relocations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className="border border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold px-6 py-3 rounded-lg transition"
              >
                Explore Services
              </a>
            </div>
            {/* Stats */}
           <div
      ref={ref}
      className="mt-10 flex justify-center lg:justify-start gap-10 text-left"
    >
      <div>
        <p className="text-3xl font-bold text-gray-900">
          {startCount && (
            <CountUp
              end={25}
              duration={4}
              useEasing={true}
              start={0}
              delay={0.2}
            />
          )}
          +
        </p>
        <p className="text-sm text-gray-500">Years Experience</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">
          {startCount && (
            <CountUp
              end={5000}
              duration={4}
              separator=","
              useEasing={true}
              start={0}
              delay={0.4}
            />
          )}
          +
        </p>
        <p className="text-sm text-gray-500">Successful Moves</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">
          {startCount && (
            <CountUp
              end={100}
              duration={4}
              useEasing={true}
              start={0}
              delay={0.6}
            />
          )}
          %
        </p>
        <p className="text-sm text-gray-500">Client Satisfaction</p>
      </div>
    </div>
          </div>

          {/* RIGHT SIDE: Hero Image */}
          <div className="relative w-full lg:w-1/2 z-10">
            <Image
              src="/img/hero/hero1.png"
              alt="Mover Holding Box"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />

            {/* Floating Badges */}
            <div className="absolute top-10 right-10 bg-white rounded-full shadow-lg px-4 py-2 text-sm font-semibold text-gray-700">
              Local Moving
            </div>
            <div className="absolute bottom-16 right-0 bg-white rounded-full shadow-lg px-4 py-2 text-sm font-semibold text-gray-700">
              Packing & Unpacking
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-full shadow-lg px-4 py-2 text-sm font-semibold text-gray-700">
              Door-to-Door Service
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-200 to-green-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#f0fdf4] w-full overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Truck Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/img/truck.png"
              alt="KVT Truck"
              width={600}
              height={400}
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              About Us KVT
            </h2>
            <p className="text-lg text-gray-700">
              KVT Packers and Movers, with over{" "}
              <strong className="text-blue-900">25+ years of experience</strong> and
              partnerships with top brands, provides{" "}
              <strong className="text-blue-900">affordable and reliable packing</strong>{" "}
              and moving services for local and long-distance{" "}
              <strong className="text-blue-900">relocations in Chennai</strong>.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6a1 1 0 0 1 1-1h3.586a1 1 0 0 1 .707.293l2.414 2.414A1 1 0 0 0 11.414 8H20a1 1 0 0 1 0 2h-9.586a1 1 0 0 1-.707-.293L7.293 7H4a1 1 0 0 1-1-1z" />
                    <path d="M4 13a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
                    <path d="M4 17a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transport Service</h4>
                  <p className="text-sm text-gray-600">
                    Efficient and reliable transport services ensuring your goods reach their destination safely and on time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v2H3zm2 4h14v2H5zm-2 4h18v2H3zm2 4h14v2H5zm-2 4h18v2H3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast, Efficient Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Experience fast, efficient delivery services that prioritize speed and reliability for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="bg-gradient-to-r from-[#e9f5ff] to-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50 rounded-xl shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out animate-fadeIn">
              <img src="/img/special/services1.jpg" alt="Storage Service" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hassle-free Home relocation Services
              </h3>
              <p className="text-sm text-gray-600">
                Moving homes can be stressful, but it doesn't have to be! Our expert team ensures careful packing of your belongings.
              </p>
              <a href="/services" className="mt-4 inline-block text-blue-700 font-medium hover:underline">
                Read More
              </a>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 rounded-xl shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out animate-fadeIn delay-100">
              <img src="/img/gallery/30.jpg" alt="International Relocation" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Efficient office relocation Services
              </h3>
              <p className="text-sm text-gray-600">
                Relocating your office? We understand the importance of minimizing downtime and ensuring a seamless transition.
              </p>
              <a href="/services" className="mt-4 inline-block text-blue-700 font-medium hover:underline">
                Read More
              </a>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 rounded-xl shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out animate-fadeIn delay-200">
              <img src="/img/gallery/14.jpg" alt="Vehicle Shifting" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Packing Solutions for your valuables
              </h3>
              <p className="text-sm text-gray-600">
                Worried about the safety of your valuables during the move? Our packing experts use high-quality materials.
              </p>
              <a href="" className="mt-4 inline-block text-blue-700 font-medium hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Customer Support Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                24/7 Customer Support
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Any time of the day or night, customers can get help and find answers to questions as soon as possible.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/img/hero/hero_contact.jpg"
                alt="Moving Truck"
                width={500}
                height={300}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Working Process For Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img/process.jpg"
                alt="Working Process"
                width={500}
                height={300}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Recent Work Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Explore Our Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentWork.map((work, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {work.title}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-5 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers who trusted KVT Packers and Movers for their relocation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Arumuga Sundaram</h3>
                  <p className="text-sm text-gray-500">1 review • a month ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I used KVT Packers and Movers service to relocate within Chennai. I am very satisfied with the service. The team (Prabhakaran, Venkatesh, Ravi, Khaleel) did a very good job throughout the process."
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Vinuthna Reddim</h3>
                  <p className="text-sm text-gray-500">7 reviews • 8 photos • a month ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  V
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "KVT packers and movers helped us twice to move our house. They were really helpful even though we asked for service the previous day and guaranteed work without any damage."
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">VARUN MANOHARAN</h3>
                  <p className="text-sm text-gray-500">2 reviews • 5 months ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  V
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I hired KVT Packers and movers to move our things to the new house. They did an exceptionally professional job and very very quick and clean."
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Ns.Fayaz 786</h3>
                  <p className="text-sm text-gray-500">7 reviews • 2 months ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  N
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Glad that we chose KVT Packers and Movers for local shifting within Chennai at the last minute. Appreciate the efforts of the owner and team. Highly recommend KVT Packers for their professional service."
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Kokila Koki</h3>
                  <p className="text-sm text-gray-500">3 reviews • 1 photo • a month ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We shifted our house from jamalia to tvk nagar. Their team also very friendly handled all products. Anandan team handling their team with a good spirit. I highly recommend this Packer & movers company to everyone who wants to shift their house."
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Billclinton Arockiasamy</h3>
                  <p className="text-sm text-gray-500">Local Guide • 14 reviews • 4 photos • 6 months ago</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Professional service done by Anand Sir and Team 💫 We had a great experience with KVT Packers and movers! The team was professional, handled everything with care, and delivered on time without any damage. Highly recommended!"
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm text-gray-600">Google Review</span>
              </div>
            </div>
          </div>

          {/* View All Reviews Button */}
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Reviews
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits FAQ & Quote Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-5 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                WHAT WE PROVIDE Benefits FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{faq}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Request a Quote Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Request a Quote
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Moving From"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Moving To"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="date"
                  placeholder="Shifting Date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Movement of Things"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Get a Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Recent Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href="/blog"
                    className="text-blue-600 font-medium hover:underline flex items-center gap-2"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
