'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ServiceHero from '../../components/ServiceHero';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function ResidentialMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: HeartIcon,
      title: "Personalized Service",
      description: "We treat your home and belongings with the same care as if they were our own."
    },
    {
      icon: ShieldCheckIcon,
      title: "Safe & Secure",
      description: "Comprehensive insurance coverage and careful handling of all your precious items."
    },
    {
      icon: ClockIcon,
      title: "Flexible Scheduling",
      description: "We work around your schedule to make the moving process as convenient as possible."
    },
    {
      icon: UserGroupIcon,
      title: "Professional Team",
      description: "Experienced movers who understand the emotional aspect of moving homes."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We visit your home to assess your moving needs and provide a detailed quote."
    },
    {
      step: "02",
      title: "Customized Plan",
      description: "Create a personalized moving plan that fits your timeline and requirements."
    },
    {
      step: "03",
      title: "Professional Packing",
      description: "Expert packing of all items with proper materials and labeling."
    },
    {
      step: "04",
      title: "Safe Transportation",
      description: "Careful loading and secure transportation with real-time tracking."
    },
    {
      step: "05",
      title: "Unpacking & Setup",
      description: "Professional unpacking and arrangement of items in your new home."
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
        badgeText="Home Relocation"
        title="Residential Movers"
        description="Complete house shifting services with professional packing and unpacking. We make your move stress-free and smooth."
        imageSrc="/img/shifting.jpg"
        imageAlt="Residential Moving"
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
                  Our residential moving service provides complete house shifting solutions with professional packing and unpacking. 
                  We handle everything from furniture disassembly to safe loading and unloading, ensuring your belongings 
                  reach their destination safely. Our experienced team provides personalized attention to make your move stress-free.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-600 rounded-lg">
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
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
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
                        <h4 className="font-semibold text-gray-900">Complete Packing</h4>
                        <p className="text-gray-600">Professional packing of all household items with quality materials</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Furniture Handling</h4>
                        <p className="text-gray-600">Safe disassembly and reassembly of all furniture pieces</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Appliance Moving</h4>
                        <p className="text-gray-600">Specialized handling of refrigerators, washing machines, etc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Loading & Unloading</h4>
                        <p className="text-gray-600">Safe loading and unloading with proper equipment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Transportation</h4>
                        <p className="text-gray-600">Secure transportation with GPS tracking and insurance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Unpacking Service</h4>
                        <p className="text-gray-600">Professional unpacking and arrangement in new home</p>
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
                      question: "How much notice do you need for a residential move?",
                      answer: "We recommend booking at least 2-3 weeks in advance, especially during peak moving seasons (summer months). However, we can accommodate last-minute moves if our schedule permits."
                    },
                    {
                      question: "Do you provide packing materials?",
                      answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and labels. These are included in our comprehensive moving service."
                    },
                    {
                      question: "What happens if something gets damaged during the move?",
                      answer: "We carry comprehensive insurance coverage for all moves. In the rare event of damage, we have a claims process to ensure you're fully compensated. Our careful handling minimizes this risk."
                    },
                    {
                      question: "Can you help with specialty items like pianos or artwork?",
                      answer: "Absolutely! We have specialized equipment and trained personnel for moving delicate items like pianos, artwork, antiques, and other valuable possessions. We take extra care with these items."
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
            Ready to Move Your Home?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your residential move
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