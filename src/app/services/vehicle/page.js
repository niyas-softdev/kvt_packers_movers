'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ServiceHero from '../../components/ServiceHero';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  CarIcon,
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  CogIcon,
  UserGroupIcon,
  CheckCircleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function VehicleTransportationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: CarIcon,
      title: "Enclosed Transport",
      description: "Fully enclosed carriers protect your vehicle from weather and road debris."
    },
    {
      icon: ShieldCheckIcon,
      title: "Comprehensive Insurance",
      description: "Full coverage insurance for your vehicle during transportation."
    },
    {
      icon: ClockIcon,
      title: "Real-time Tracking",
      description: "GPS tracking system to monitor your vehicle's journey in real-time."
    },
    {
      icon: MapPinIcon,
      title: "Door-to-Door Service",
      description: "Pickup from your location and delivery to your destination."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Vehicle Assessment",
      description: "Thorough inspection and documentation of your vehicle's condition."
    },
    {
      step: "02",
      title: "Transport Planning",
      description: "Route planning and scheduling for optimal delivery timeline."
    },
    {
      step: "03",
      title: "Secure Loading",
      description: "Professional loading using specialized equipment and securing methods."
    },
    {
      step: "04",
      title: "Safe Transportation",
      description: "Monitored transport with real-time tracking and insurance coverage."
    },
    {
      step: "05",
      title: "Final Delivery",
      description: "Careful unloading and delivery to your specified destination."
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
        badgeText="Vehicle & Fleet Logistics"
        title="Vehicle Transportation"
        description="Safe and secure vehicle transportation services for cars, bikes, and other vehicles. We ensure your vehicle reaches its destination safely."
        imageSrc="/img/truck.png"
        imageAlt="Vehicle Transportation"
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
                  Our vehicle transportation service provides safe and secure transport for cars, bikes, and other vehicles. 
                  We use enclosed transport options with comprehensive insurance coverage and real-time tracking systems. 
                  Our door-to-door service ensures convenience and peace of mind throughout the entire process.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-600 rounded-lg">
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
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
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
                        <h4 className="font-semibold text-gray-900">Car Transportation</h4>
                        <p className="text-gray-600">Safe transport of cars, SUVs, and luxury vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Motorcycle Transport</h4>
                        <p className="text-gray-600">Specialized handling for bikes and motorcycles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Commercial Vehicles</h4>
                        <p className="text-gray-600">Transport of trucks, vans, and commercial vehicles</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Enclosed Carriers</h4>
                        <p className="text-gray-600">Fully enclosed transport for maximum protection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">GPS Tracking</h4>
                        <p className="text-gray-600">Real-time tracking throughout the journey</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Insurance Coverage</h4>
                        <p className="text-gray-600">Comprehensive insurance for all vehicles</p>
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
                      question: "How long does vehicle transportation take?",
                      answer: "Transportation time depends on the distance and route. Local moves typically take 1-2 days, while interstate moves can take 3-7 days. We provide specific timelines during consultation."
                    },
                    {
                      question: "Do you transport all types of vehicles?",
                      answer: "Yes, we transport cars, SUVs, trucks, motorcycles, boats, and other vehicles. We have specialized equipment for different vehicle types and sizes."
                    },
                    {
                      question: "Is my vehicle insured during transport?",
                      answer: "Yes, all vehicles are fully insured during transportation. We provide comprehensive coverage that protects against damage, theft, and other risks during transit."
                    },
                    {
                      question: "Can I track my vehicle during transport?",
                      answer: "Absolutely! We provide real-time GPS tracking so you can monitor your vehicle's journey from pickup to delivery. You'll receive regular updates throughout the process."
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
            Ready to Transport Your Vehicle?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free consultation and quote for your vehicle transportation
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