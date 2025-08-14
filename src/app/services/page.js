'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ServiceHero from '../components/ServiceHero';
import ClientLogos from '../components/ClientLogos';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  PhoneIcon,
  TruckIcon,
  HomeIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CarIcon,
  UserGroupIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState('industrial-machinery-movers');
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

  const services = [
    {
      id: 'residential',
      name: 'Residential Movers',
      icon: HomeIcon,
      description: 'Complete house shifting services with professional packing and unpacking.',
      image: '/img/shifting.jpg',
      features: ['Professional packing', 'Furniture disassembly', 'Safe transportation', 'Unpacking assistance']
    },
    {
      id: 'corporate',
      name: 'Corporate Movers',
      icon: BuildingOfficeIcon,
      description: 'Seamless office relocation with minimal business disruption.',
      image: '/img/team.jpg',
      features: ['Minimized downtime', 'IT infrastructure handling', 'Customized plans', 'Confidentiality']
    },
    {
      id: 'industrial-machinery-movers',
      name: 'Industrial Machinery Movers',
      icon: CogIcon,
      description: 'Heavy machinery moving, rigging and plant relocation with safety-first execution.',
      image: '/img/vechical/forklift.jpg',
      features: ['Rigging & lifting plans', 'Specialized transport fleet', 'Precision installation', 'Insurance & permits']
    },
    {
      id: 'international',
      name: 'International Movers',
      icon: GlobeAltIcon,
      description: 'Worldwide relocation services with customs clearance.',
      image: '/img/packing_truck.jpg',
      features: ['Customs clearance', 'Documentation assistance', 'Global coverage', 'Insurance coverage']
    },
    {
      id: 'local',
      name: 'Local Movers & Distribution',
      icon: TruckIcon,
      description: 'Reliable local shifting and last-mile delivery services within the city.',
      image: '/img/gallery/30.jpg ', // Add this image to your public folder
      features: ['Same-day local moving', 'Last-mile delivery', 'Local warehousing', 'Route optimization']
    }
  ];
  

  const currentService = services.find(service => service.id === activeService);

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero
        badgeText="Professional Moving Services"
        title={currentService ? currentService.name : 'Service Details'}
        description={currentService ? currentService.description : 'Professional moving services tailored to your specific needs.'}
        imageSrc={currentService ? currentService.image : '/img/packing_truck.jpg'}
        imageAlt={currentService ? currentService.name : 'Service Details'}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                        activeService === service.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{service.name}</span>
                      <ArrowRightIcon className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        activeService === service.id ? 'text-white' : 'text-gray-400'
                      }`} />
                    </button>
                  ))}
                </div>

                {/* Contact Box */}
                <div className="mt-8 p-6 bg-blue-600 rounded-lg text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <PhoneIcon className="w-6 h-6" />
                    <h4 className="font-semibold">Contact with us for any advice</h4>
                  </div>
                  <p className="text-blue-100 mb-3">Need help? Talk to an expert</p>
                  <a
                    href="tel:+917550016167"
                    className="text-2xl font-bold hover:text-blue-200 transition-colors"
                  >
                    +91 75500 16167
                  </a>
                </div>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-3">
              {currentService && (
                <div className="animate-slideInUp">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Service Image */}
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={currentService.image}
                        alt={currentService.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <h2 className="text-3xl font-bold text-white mb-2">{currentService.name}</h2>
                        <p className="text-blue-100">{currentService.description}</p>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-8">
                      {/* Service Overview */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {currentService.id === 'corporate' ? (
                            <>
                              Our corporate movers service ensures seamless transitions for businesses with minimal disruption to operations. 
                              We specialize in safe transport of office equipment, IT infrastructure, and furniture while maintaining 
                              confidentiality and security. Our customized plans are tailored to fit unique business needs and schedules, 
                              providing comprehensive assistance from packing to final setup.
                            </>
                          ) : currentService.id === 'residential' ? (
                            <>
                              Our residential moving service provides complete house shifting solutions with professional packing and unpacking. 
                              We handle everything from furniture disassembly to safe loading and unloading, ensuring your belongings 
                              reach their destination safely. Our experienced team provides personalized attention to make your move stress-free.
                            </>
                          ) : currentService.id === 'international' ? (
                            <>
                              Our international moving service covers worldwide relocation with comprehensive customs clearance and documentation 
                              assistance. We handle all aspects of international moves including packing, shipping, customs procedures, 
                              and final delivery. Our global network ensures reliable service across borders.
                            </>
                          ) : (
                            <>
                              Our full-service moving solution provides end-to-end support for all your relocation needs. From initial 
                              planning to final setup, we handle every aspect of your move with professional care. Our comprehensive 
                              service includes packing, loading, transportation, unloading, and assistance with unpacking and setup.
                            </>
                          )}
                        </p>
                      </div>

                      {/* Service Center */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Center</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Our Service Centre is your go-to resource for seamless moving support, offering prompt assistance and maintenance services. 
                          We're committed to ensuring your move is efficient and worry-free from start to finish.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            {currentService.features.slice(0, 2).map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600">{feature}</p>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-4">
                            {currentService.features.slice(2).map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={`/services/${currentService.id}`}
                          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link
                          href="/contact"
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of customers across India for reliable and professional moving services
            </p>
          </div>
          
          <div 
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <TruckIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={5000}
                    duration={4}
                    separator=","
                    useEasing={true}
                    start={0}
                    delay={0.2}
                  />
                )}
                +
              </div>
              <div className="text-gray-600">Successful Moves</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <UserGroupIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={1000}
                    duration={4}
                    useEasing={true}
                    start={0}
                    delay={0.4}
                  />
                )}
                +
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <StarIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={25}
                    duration={4}
                    useEasing={true}
                    start={0}
                    delay={0.6}
                  />
                )}
                +
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <CheckCircleIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={100}
                    duration={4}
                    useEasing={true}
                    start={0}
                    delay={0.8}
                  />
                )}
                %
              </div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Our Service Centre is your go-to resource for seamless moving support, offering prompt assistance and maintenance services. 
              We're committed to ensuring your move is efficient and worry-free from start to finish.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How do I book your moving services?",
                answer: "You can book our services by calling us at +91 75500 16167, filling out our online contact form, or visiting our office in Chennai. Our team will assess your requirements and provide a detailed quote."
              },
              {
                question: "What areas do you serve?",
                answer: "We offer local, interstate, and international moving services, covering a wide range of locations. Our services are available throughout Chennai, Tamil Nadu, and across India, with international coverage for corporate and personal moves."
              },
              {
                question: "What is included in your packing services?",
                answer: "Our packing services include professional packing of all items, use of high-quality packing materials, labeling of boxes, furniture disassembly and reassembly, and special handling for delicate items."
              },
              {
                question: "What types of insurance do you offer for my move?",
                answer: "We offer comprehensive insurance coverage for all types of moves including basic coverage, full value protection, and specialized coverage for valuable items. Our insurance covers damage, loss, and transit risks."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free quote for your moving needs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
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