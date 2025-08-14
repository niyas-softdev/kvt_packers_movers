'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  PhoneIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  CogIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function IndustrialMachineryMoversPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate the service carousel
  useEffect(() => {
    if (isCarouselHovered) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isCarouselHovered]);

  // Determine cards per view based on viewport
  useEffect(() => {
    const compute = () => {
      if (typeof window === 'undefined') return;
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setVisibleCount(3);
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const features = [
    {
      icon: CogIcon,
      title: 'Heavy Equipment Handling',
      description:
        'Expert team trained to move presses, CNC machines, generators, transformers, and plant equipment with precision.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Safety First Approach',
      description:
        'Rigging plans, load tests, and industry-grade safety gear for accident-free relocations.'
    },
    {
      icon: TruckIcon,
      title: 'Specialized Transport Fleet',
      description:
        'Low-bed trailers, hydraulic axles, and air-suspension vehicles designed for heavy and delicate loads.'
    },
    {
      icon: ClockIcon,
      title: 'Minimal Downtime',
      description:
        'Meticulous planning and rapid execution so your production resumes faster.'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Site Survey', description: 'On-site assessment of equipment dimensions, route, and lift plan.' },
    { step: '02', title: 'Planning & Permits', description: 'Method statements, equipment scheduling, and statutory approvals.' },
    { step: '03', title: 'Rigging & Packing', description: 'Locking, bracing, and protective packing to safeguard sensitive parts.' },
    { step: '04', title: 'Loading & Transport', description: 'Cranes, forklifts, and skates for safe loading; GPS-tracked transit.' },
    { step: '05', title: 'Installation & Alignment', description: 'Precise positioning, grouting, and final commissioning support.' }
  ];

  const serviceSlides = [
    {
      title: 'Crane Hire',
      href: '/services/industrial-machinery-movers/crane-hire',
      image: '/img/vechical/crane.png'
    },
    {
      title: 'Fork Lift Hire',
      href: '/services/industrial-machinery-movers/forklift-hire',
      image: '/img/vechical/forklift.jpg'
    },
    {
      title: 'Tipper Lorry',
      href: '/services/industrial-machinery-movers/tipper-lorry-hire',
      image: '/img/vechical/Lorry_Tripper.jpg'
    },
    {
      title: 'JCB Hire',
      href: '/services/industrial-machinery-movers/jcb-hire',
      image: '/img/vechical/jcb.jpg'
    },
    {
      title: 'JCB Earthmovers Breakers',
      href: '/services/industrial-machinery-movers/jcb-earthmovers-breakers',
      image: '/img/vechical/jcb_earthbreak.jpg'
    },
    {
      title: 'Lorry Transport Service',
      href: '/services/industrial-machinery-movers/lorry-transport',
      image: '/img/gallery/01.jpg'
    },
    {
      title: 'Car Transport Service',
      href: '/services/industrial-machinery-movers/car-transport',
      image: '/img/vechical/car_transport.webp'
    },
    {
      title: 'Bike Transport Service',
      href: '/services/industrial-machinery-movers/bike-transport',
      image: '/img/vechical/bike_transport.jpg'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'process', name: 'Our Process' },
    { id: 'services', name: 'What We Move' },
    { id: 'faq', name: 'FAQ' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient with angled overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-700"></div>
        <div className="absolute -top-24 -right-24 w-[680px] h-[680px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-white/10" style={{clipPath:'polygon(0 100%, 0 40%, 30% 60%, 60% 30%, 100% 55%, 100% 100%)'}}></div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Services
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Copy */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm mb-4 animate-fadeIn">
                    <ShieldCheckIcon className="w-4 h-4" /> Industrial Rigging & Plant Relocation
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight animate-slideInUp">
                    Partner with us for unmatched Heavy Machinery Relocation
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 mt-5 max-w-2xl animate-fadeIn stagger-2">
                    From mini forklifts to top-of-the-line cranes, we have the right equipment and experts to move your
                    mission-critical machines safely and on time.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn stagger-3">
                    <Link href="/quote" className="btn-animate bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                      Get Quote
                    </Link>
                    <a href="tel:+917550016167" className="btn-animate bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                      Call Now
                    </a>
                  </div>

                  {/* Stats */}
                  <div className="mt-10 grid grid-cols-3 gap-4 text-white/90 animate-fadeIn stagger-4">
                    {[{k:'6k+',v:'Happy Customers'},{k:'2k+',v:'Team Members'},{k:'8k+',v:'Client Reviews'}].map((s,idx)=> (
                      <div key={idx} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                        <div className="text-3xl font-bold">{s.k}</div>
                        <div className="text-sm text-blue-100">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-72 md:h-96 lg:h-[500px] animate-scaleIn">
                    <Image src="/img/vechical/crane1.png" alt="Crane and machinery" fill priority className="object-contain drop-shadow-2xl" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-green-500/80 rounded-xl blur-xl animate-float"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/80 rounded-full blur-lg animate-float" style={{animationDelay:'0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 45C840 60 960 90 1080 95C1200 100 1320 80 1380 70L1440 60V100H0V60Z" fill="white" fillOpacity="0.9"/>
        </svg>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature highlight row under hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-20 mb-10">
            {[
              {title:'Discuss Your Project',desc:'We assess your site and create a safe lift plan.'},
              {title:'Finalize Your Rental',desc:'Clear scope, schedule and best-fit equipment.'},
              {title:'On-site Setup',desc:'Certified operators arrive and set up quickly.'},
            ].map((c,idx)=> (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <h4 className="font-semibold text-gray-900 mb-1">{c.title}</h4>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Services Showcase – 3-up with pagination like provided design */}
          <div className="mt-6" onMouseEnter={() => setIsCarouselHovered(true)} onMouseLeave={() => setIsCarouselHovered(false)}>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: visibleCount }).map((_, idx) => {
                const item = serviceSlides[(currentSlide + idx) % serviceSlides.length];
                return (
                  <Link key={`${item.title}-${idx}`} href={item.href} className="group block">
                    <div className="relative h-72 overflow-hidden rounded-xl shadow-lg">
                      {/* Image */}
                      <Image src={item.image} alt={item.title} fill className="object-cover" />

                      {/* Top decorative angled corners to match reference */}
                      <div className="absolute inset-x-0 top-0 h-12">
                        <div className="absolute left-0 -top-8 w-40 h-40 bg-white/90" style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)' }} />
                      </div>

                      {/* Bottom ribbon with icon + title */}
                      <div className="absolute left-0 right-0 bottom-0">
                        <div className="relative bg-blue-900/95 text-white px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded bg-blue-800/80 border border-white/10">
                              <TruckIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pager controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                aria-label="Previous"
                className="w-12 h-12 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center shadow"
                onClick={() => setCurrentSlide((prev) => (prev - visibleCount + serviceSlides.length) % serviceSlides.length)}
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                aria-label="Next"
                className="w-12 h-12 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center shadow"
                onClick={() => setCurrentSlide((prev) => (prev + visibleCount) % serviceSlides.length)}
              >
                <ArrowLeftIcon className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'
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
                  We provide specialized industrial moving services for plants, factories, and infrastructure projects. Our
                  trained riggers, operators, and supervisors follow detailed method statements and safety checklists to
                  move high-value machinery without damage. From single-machine shifts to complete plant relocation,
                  we manage it all.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Move</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">CNC Machines & Presses</h4>
                        <p className="text-gray-600">Precision handling for high-value manufacturing assets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Transformers & Generators</h4>
                        <p className="text-gray-600">Heavy-lift, route survey, and secure mounting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Boilers & Tanks</h4>
                        <p className="text-gray-600">Dismantling, skidding, and re-installation</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Assembly Lines</h4>
                        <p className="text-gray-600">Section-wise packing and calibrated reassembly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Medical & Lab Equipment</h4>
                        <p className="text-gray-600">Vibration-free, climate-conscious transportation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Complete Plant Relocation</h4>
                        <p className="text-gray-600">Turnkey solutions from decommissioning to commissioning</p>
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
                      question: 'Do you handle dismantling and installation?',
                      answer:
                        'Yes. We provide skilled riggers and technicians for dismantling, leveling, alignment, and re-commissioning.'
                    },
                    {
                      question: 'Can you move oversized loads across states?',
                      answer:
                        'We conduct route surveys, arrange escort vehicles, and secure permits for inter/intra-state heavy transport.'
                    },
                    {
                      question: 'How do you protect sensitive machinery?',
                      answer:
                        'We use anti-static wraps, moisture barriers, shock-absorbing bases, and vibration control during transit.'
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

      {/* Split Feature + Metric section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-80">
              <Image src="/img/hero/transport_man.jpg" alt="Rigging operations" fill className="object-cover rounded-xl shadow-lg" />
              <div className="absolute -bottom-4 -right-4 bg-green-500/80 text-white px-4 py-3 rounded-lg shadow-lg animate-bounceIn">
                <div className="text-sm">Trusted Customers</div>
                <div className="text-2xl font-bold">6k+</div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-blue-900 text-white rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Premium transport rentals at competitive rates</h3>
              <p className="text-blue-100 mb-8">We provide transparent pricing without compromising on quality. Get best value for your investment with flexible hire plans.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{label:'Happy Customers',val:'6k+'},{label:'Team Members',val:'2k+'},{label:'Client Reviews',val:'8k+'}].map((m,idx)=> (
                  <div key={idx} className="bg-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">{m.val}</div>
                    <div className="text-sm text-blue-100">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">Get Free Quote</Link>
                <a href="tel:+917550016167" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"><PhoneIcon className="w-5 h-5"/>Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['jcb.jpg', 'Lorry_Tripper.jpg', 'jcb_earthbreak.jpg', 'crane.png', 'forklift.jpg','car_transport.webp'].map((img, idx) => (
              <div key={idx} className="relative h-56">
                <Image src={`/img/vechical/${img}`} alt="Industrial move" fill className="object-cover rounded-lg shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Move Your Plant?</h2>
          <p className="text-xl text-gray-800 mb-8">Consult our specialists for a safe, efficient industrial relocation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105">
              Get Free Quote
            </Link>
            <a href="tel:+917550016167" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


