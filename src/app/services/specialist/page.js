'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  CheckCircleIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  BeakerIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

export default function SpecialistMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: MusicalNoteIcon,
      title: "Piano Moving",
      description: "Specialized piano moving with professional equipment and expertise."
    },
    {
      icon: PaintBrushIcon,
      title: "Art Transportation",
      description: "Delicate handling of artwork, sculptures, and valuable collectibles."
    },
    {
      icon: BeakerIcon,
      title: "Medical Equipment",
      description: "Temperature-controlled transport for sensitive medical devices."
    },
    {
      icon: CubeIcon,
      title: "Antique Handling",
      description: "Expert care for antique furniture and valuable items."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Specialized Assessment",
      description: "Detailed evaluation of your specialized items and their specific requirements."
    },
    {
      step: "02",
      title: "Custom Equipment Setup",
      description: "Preparation of specialized equipment and materials for your items."
    },
    {
      step: "03",
      title: "Expert Packing",
      description: "Professional packing using specialized materials and techniques."
    },
    {
      step: "04",
      title: "Specialized Transport",
      description: "Careful transportation with specialized vehicles and monitoring."
    },
    {
      step: "05",
      title: "Precise Installation",
      description: "Expert installation and setup at the destination location."
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
                    Specialist Movers
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                    Specialized moving for delicate and valuable items requiring expert care. We handle pianos, artwork, medical equipment, and antiques with precision.
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
                    src="/img/van.jpg"
                    alt="Specialist Moving"
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
                  Our specialist movers handle delicate and valuable items requiring special care. We provide temperature-controlled 
                  transportation for medical equipment, specialized handling for pianos and artwork, and secure transport for 
                  sensitive materials. Our expertise ensures safe delivery of your most precious items with the utmost care.
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
                        <h4 className="font-semibold text-gray-900">Piano Moving</h4>
                        <p className="text-gray-600">Grand pianos, upright pianos, and electronic keyboards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Art & Sculptures</h4>
                        <p className="text-gray-600">Paintings, sculptures, and valuable artwork</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Medical Equipment</h4>
                        <p className="text-gray-600">Temperature-controlled transport for sensitive devices</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Antique Furniture</h4>
                        <p className="text-gray-600">Valuable antique pieces and collectibles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Musical Instruments</h4>
                        <p className="text-gray-600">Guitars, violins, drums, and other instruments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Laboratory Equipment</h4>
                        <p className="text-gray-600">Sensitive scientific equipment and instruments</p>
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
                      question: "How do you handle piano moving?",
                      answer: "We use specialized piano dollies, ramps, and equipment designed specifically for piano moving. Our team is trained in proper piano handling techniques to ensure safe transport without damage to the instrument."
                    },
                    {
                      question: "Do you provide climate-controlled transport?",
                      answer: "Yes, we offer temperature-controlled transportation for sensitive items like medical equipment, artwork, and musical instruments. We monitor temperature and humidity throughout the journey."
                    },
                    {
                      question: "What insurance do you provide for valuable items?",
                      answer: "We offer specialized insurance coverage for valuable items including pianos, artwork, and antiques. Coverage includes damage, theft, and transit risks with higher limits for valuable items."
                    },
                    {
                      question: "Can you handle large sculptures or heavy items?",
                      answer: "Absolutely! We have specialized equipment for moving large sculptures, heavy antiques, and oversized items. Our team includes experts in handling items of all sizes and weights."
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
            Need Specialist Moving?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your specialized moving needs
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