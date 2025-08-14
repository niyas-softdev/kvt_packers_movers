'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ServiceHero from '../../components/ServiceHero';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export default function LocalMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: MapPinIcon,
      title: "Local Expertise",
      description: "Deep knowledge of Chennai and surrounding areas for efficient local moves."
    },
    {
      icon: ClockIcon,
      title: "Quick Service",
      description: "Fast and efficient local moving services with minimal disruption."
    },
    {
      icon: ShieldCheckIcon,
      title: "Affordable Rates",
      description: "Competitive pricing for local moves with transparent cost structure."
    },
    {
      icon: HomeIcon,
      title: "Same Day Service",
      description: "Quick turnaround times for urgent local moving needs."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Quick Assessment",
      description: "Rapid evaluation of your moving requirements and timeline."
    },
    {
      step: "02",
      title: "Same Day Planning",
      description: "Immediate planning and scheduling for your local move."
    },
    {
      step: "03",
      title: "Efficient Packing",
      description: "Quick and professional packing with local expertise."
    },
    {
      step: "04",
      title: "Fast Transportation",
      description: "Quick local transport with optimized routes and timing."
    },
    {
      step: "05",
      title: "Quick Setup",
      description: "Rapid unloading and setup at your new location."
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'process', name: 'Our Process' },
    { id: 'services', name: 'Services' },
    { id: 'faq', name: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero
        badgeText="Quick Local Relocation"
        title="Local Movers"
        description="Fast and efficient local moving services in Chennai and surrounding areas. We make local moves quick, affordable, and stress-free."
        imageSrc="/img/shifting.jpg"
        imageAlt="Local Moving"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeTab === 'overview' && (
              <div className="animate-slideInUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our local moving service provides fast and efficient relocation within Chennai and surrounding areas. 
                  We specialize in quick local moves with minimal disruption to your daily routine. Our experienced 
                  team knows the local area well, ensuring smooth and timely service at competitive rates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-600 rounded-lg">
                          {(() => {
                            const IconComponent = feature.icon;
                            return <IconComponent className="w-6 h-6 text-white" />;
                          })()}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="animate-slideInUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="animate-slideInUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Same Day Moving</h4>
                        <p className="text-gray-600">Quick local moves completed within the same day</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Apartment Moving</h4>
                        <p className="text-gray-600">Specialized service for apartment and flat moves</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Office Relocation</h4>
                        <p className="text-gray-600">Quick office moves within the city</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Furniture Moving</h4>
                        <p className="text-gray-600">Safe transport of furniture and appliances</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Storage Solutions</h4>
                        <p className="text-gray-600">Short-term storage for local moves</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Packing Service</h4>
                        <p className="text-gray-600">Quick packing and unpacking assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="animate-slideInUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      question: "How quickly can you complete a local move?",
                      answer: "We can complete most local moves within the same day. Small moves (1-2 rooms) typically take 2-4 hours, while larger moves may take 4-8 hours. We provide specific timelines during consultation."
                    },
                    {
                      question: "What areas do you serve for local moves?",
                      answer: "We serve all areas of Chennai including Anna Nagar, T Nagar, Adyar, Mylapore, Velachery, and surrounding areas. We also cover nearby cities like Kanchipuram, Vellore, and Tiruvallur."
                    },
                    {
                      question: "Do you provide packing materials for local moves?",
                      answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, tape, and labels. These are included in our local moving service package."
                    },
                    {
                      question: "Can you handle same-day moves?",
                      answer: "Absolutely! We specialize in same-day local moves. If you call us early in the day, we can often complete your move the same day, depending on our schedule and the size of your move."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Quick Local Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your local move
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
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