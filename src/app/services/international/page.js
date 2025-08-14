'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ServiceHero from '../../components/ServiceHero';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function InternationalMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: GlobeAltIcon,
      title: "Global Coverage",
      description: "Worldwide relocation services with extensive network across all continents."
    },
    {
      icon: DocumentTextIcon,
      title: "Customs Clearance",
      description: "Expert assistance with all customs procedures and documentation requirements."
    },
    {
      icon: ShieldCheckIcon,
      title: "Comprehensive Insurance",
      description: "Full coverage for international shipments including marine and transit insurance."
    },
    {
      icon: ClockIcon,
      title: "Door-to-Door Service",
      description: "Complete service from pickup to final delivery at your new location."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive assessment of your international moving requirements and timeline."
    },
    {
      step: "02",
      title: "Documentation & Planning",
      description: "Handle all necessary documentation, permits, and create detailed shipping plan."
    },
    {
      step: "03",
      title: "Professional Packing",
      description: "International-grade packing with specialized materials for long-distance transport."
    },
    {
      step: "04",
      title: "Customs Processing",
      description: "Expert handling of all customs procedures and documentation requirements."
    },
    {
      step: "05",
      title: "International Shipping",
      description: "Secure transportation via air or sea with real-time tracking and monitoring."
    },
    {
      step: "06",
      title: "Final Delivery",
      description: "Door-to-door delivery and setup at your new international location."
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
        badgeText="Global Relocation"
        title="International Movers"
        description="Worldwide relocation services with customs clearance and comprehensive support. We make international moves seamless and stress-free."
        imageSrc="/img/packing_truck.jpg"
        imageAlt="International Moving"
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
                  Our international moving service covers worldwide relocation with comprehensive customs clearance and documentation 
                  assistance. We handle all aspects of international moves including packing, shipping, customs procedures, 
                  and final delivery. Our global network ensures reliable service across borders with door-to-door delivery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-600 rounded-lg">
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
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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
                        <h4 className="font-semibold text-gray-900">Air Freight Services</h4>
                        <p className="text-gray-600">Fast international shipping via air for urgent shipments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Sea Freight Services</h4>
                        <p className="text-gray-600">Cost-effective ocean shipping for large shipments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Customs Documentation</h4>
                        <p className="text-gray-600">Complete handling of all customs paperwork</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Container Services</h4>
                        <p className="text-gray-600">Full container and shared container options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Insurance Coverage</h4>
                        <p className="text-gray-600">Comprehensive marine and transit insurance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Tracking & Monitoring</h4>
                        <p className="text-gray-600">Real-time tracking throughout the journey</p>
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
                      question: "How long does international shipping take?",
                      answer: "Shipping times vary by destination and method. Air freight typically takes 3-7 days, while sea freight can take 20-45 days depending on the route. We provide detailed timelines during consultation."
                    },
                    {
                      question: "What documents do I need for international moves?",
                      answer: "Required documents include passport, visa, customs declaration forms, inventory list, and sometimes import permits. We handle all documentation preparation and submission."
                    },
                    {
                      question: "Do you provide insurance for international shipments?",
                      answer: "Yes, we offer comprehensive marine and transit insurance covering damage, loss, and delays. Additional coverage options are available for high-value items."
                    },
                    {
                      question: "Can you handle customs clearance for me?",
                      answer: "Absolutely! We have experienced customs brokers who handle all customs procedures, documentation, and clearance requirements for your international shipment."
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
            Ready for Your International Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your international relocation
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