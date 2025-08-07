'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MapPinIcon,
  CubeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function DistributionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: TruckIcon,
      title: "Multi-Modal Transport",
      description: "Air, sea, and land transportation solutions for all distribution needs."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Network",
      description: "Extensive network covering domestic and international distribution."
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Distribution",
      description: "Comprehensive security and tracking for all shipments."
    },
    {
      icon: ClockIcon,
      title: "Express Delivery",
      description: "Fast and reliable delivery services with guaranteed timelines."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Order Processing",
      description: "Efficient processing and documentation of distribution orders."
    },
    {
      step: "02",
      title: "Warehouse Operations",
      description: "Professional storage, sorting, and preparation of goods."
    },
    {
      step: "03",
      title: "Transport Planning",
      description: "Strategic route planning and mode selection for optimal delivery."
    },
    {
      step: "04",
      title: "Secure Transportation",
      description: "Safe and monitored transport with real-time tracking."
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Timely delivery and proof of delivery documentation."
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Distribution
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                    Comprehensive distribution services for businesses and individuals. We provide efficient, secure, and reliable distribution solutions across India and globally.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/quote"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                    <a
                      href="tel:+917550016167"
                      className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/img/packing_truck.jpg"
                    alt="Distribution Services"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  Our distribution service provides comprehensive logistics solutions for businesses and individuals. 
                  We offer multi-modal transportation including air, sea, and land freight with extensive coverage 
                  across India and international markets. Our secure distribution network ensures timely delivery 
                  with real-time tracking and comprehensive insurance coverage.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-indigo-600 rounded-lg">
                          <feature.icon className="w-6 h-6 text-white" />
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
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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
                        <h4 className="font-semibold text-gray-900">Air Freight</h4>
                        <p className="text-gray-600">Fast air transportation for urgent shipments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Sea Freight</h4>
                        <p className="text-gray-600">Cost-effective ocean shipping for large volumes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Road Transport</h4>
                        <p className="text-gray-600">Reliable ground transportation across India</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Warehouse Storage</h4>
                        <p className="text-gray-600">Secure storage facilities with inventory management</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Express Delivery</h4>
                        <p className="text-gray-600">Same-day and next-day delivery options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">E-commerce Fulfillment</h4>
                        <p className="text-gray-600">Complete order fulfillment for online businesses</p>
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
                      question: "What types of goods can you distribute?",
                      answer: "We handle all types of goods including electronics, clothing, furniture, machinery, documents, and perishable items. We have specialized handling for fragile, valuable, and temperature-sensitive items."
                    },
                    {
                      question: "Do you provide real-time tracking?",
                      answer: "Yes, we provide real-time tracking for all shipments. You can monitor your goods throughout the journey with our advanced tracking system and receive regular updates."
                    },
                    {
                      question: "What are your delivery timelines?",
                      answer: "Delivery timelines vary by service type. Express delivery is available same-day or next-day, while standard delivery takes 2-5 days domestically. International shipping timelines depend on destination and mode of transport."
                    },
                    {
                      question: "Do you offer warehousing services?",
                      answer: "Yes, we provide comprehensive warehousing services including storage, inventory management, order processing, and fulfillment. Our warehouses are secure and climate-controlled for various types of goods."
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
            Need Distribution Services?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your distribution needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
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