'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CorporateMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: ClockIcon,
      title: "Minimized Downtime",
      description: "Efficient planning and execution to ensure minimal disruption to business operations during the move."
    },
    {
      icon: CogIcon,
      title: "Specialized Equipment Handling",
      description: "Expertise in moving office equipment, IT Infrastructure, and furniture safely and securely."
    },
    {
      icon: ShieldCheckIcon,
      title: "Customized Relocation Plans",
      description: "Tailored moving solutions to fit the unique needs and schedules of each business."
    },
    {
      icon: UserGroupIcon,
      title: "Confidentiality and Security",
      description: "Ensuring the safe transport of sensitive documents, data, and other confidential materials."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We conduct a thorough assessment of your office space, equipment, and specific requirements."
    },
    {
      step: "02",
      title: "Customized Planning",
      description: "Develop a detailed relocation plan tailored to your business needs and timeline."
    },
    {
      step: "03",
      title: "Professional Packing",
      description: "Expert packing of all office equipment, furniture, and sensitive materials."
    },
    {
      step: "04",
      title: "Secure Transportation",
      description: "Safe and monitored transportation with real-time tracking and insurance coverage."
    },
    {
      step: "05",
      title: "Installation & Setup",
      description: "Professional installation and setup of all equipment at the new location."
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
                    Corporate Movers
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                    Seamless office relocation with minimal business disruption. We specialize in corporate moves that keep your business running smoothly.
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
                    src="/img/team.jpg"
                    alt="Corporate Moving"
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
                  Our corporate movers service ensures seamless transitions for businesses with minimal disruption to operations. 
                  We specialize in safe transport of office equipment, IT infrastructure, and furniture while maintaining 
                  confidentiality and security. Our customized plans are tailored to fit unique business needs and schedules, 
                  providing comprehensive assistance from packing to final setup.
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
                        <h4 className="font-semibold text-gray-900">Office Equipment Moving</h4>
                        <p className="text-gray-600">Safe transport of computers, servers, and office machinery</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Furniture Relocation</h4>
                        <p className="text-gray-600">Professional disassembly and reassembly of office furniture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">IT Infrastructure</h4>
                        <p className="text-gray-600">Specialized handling of sensitive IT equipment and data</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Document Security</h4>
                        <p className="text-gray-600">Confidential handling of important documents and files</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekend Moving</h4>
                        <p className="text-gray-600">Minimal disruption with weekend and after-hours moving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Post-Move Support</h4>
                        <p className="text-gray-600">Ongoing assistance and setup support after relocation</p>
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
                      question: "How long does a corporate move typically take?",
                      answer: "The duration depends on the size and complexity of your office. Small offices (1-10 employees) typically take 1-2 days, while larger offices may take 3-5 days. We work efficiently to minimize business disruption."
                    },
                    {
                      question: "Do you provide packing materials for corporate moves?",
                      answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, and specialized containers for sensitive equipment. All materials are included in our comprehensive service."
                    },
                    {
                      question: "How do you ensure the security of sensitive documents?",
                      answer: "We use secure, sealed containers for sensitive documents and provide chain-of-custody documentation. Our team is trained in handling confidential materials and we offer additional security measures for highly sensitive items."
                    },
                    {
                      question: "Can you work after hours or on weekends?",
                      answer: "Absolutely! We offer flexible scheduling including after-hours and weekend moving services to minimize disruption to your business operations. This is especially popular for corporate moves."
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
            Ready for Your Corporate Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your office relocation
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