'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ClientLogos from '../components/ClientLogos';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PhotoIcon,
  TruckIcon,
  HomeIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const categories = [
    { id: 'all', name: 'All Photos', icon: PhotoIcon },
    { id: 'residential', name: 'Residential', icon: HomeIcon },
    { id: 'corporate', name: 'Corporate', icon: BuildingOfficeIcon },
    { id: 'international', name: 'International', icon: GlobeAltIcon },
    { id: 'vehicles', name: 'Vehicles', icon: TruckIcon },
    { id: 'team', name: 'Our Team', icon: UserGroupIcon }
  ];

  const galleryImages = [
    // Residential Moves
    { id: 1, src: '/img/packers.jpg', alt: 'Residential Moving Service', category: 'residential', title: 'Home Relocation Service' },
    { id: 2, src: '/img/gallery/19.jpg', alt: 'House Moving', category: 'residential', title: 'Complete House Moving' },
    { id: 3, src: '/img/gallery/27.jpg', alt: 'Packing Service', category: 'residential', title: 'Professional Packing' },
    { id: 4, src: '/img/gallery/02.jpg', alt: 'Local Moving', category: 'residential', title: 'Local Moving Service' },
    { id: 5, src: '/img/gallery/14.jpg', alt: 'Moving Team', category: 'residential', title: 'Expert Moving Team' },
    { id: 6, src: '/img/gallery/15.jpg', alt: 'Moving Truck', category: 'residential', title: 'Moving Truck Service' },

    // Corporate Moves
    { id: 7, src: '/img/gallery/30.jpg', alt: 'Office Relocation', category: 'corporate', title: 'Office Relocation Service' },
    { id: 8, src: '/img/gallery/31.jpg', alt: 'Corporate Moving', category: 'corporate', title: 'Corporate Moving' },
    { id: 9, src: '/img/gallery/33.jpg', alt: 'Business Moving', category: 'corporate', title: 'Business Relocation' },
    { id: 10, src: '/img/gallery/34.jpg', alt: 'Office Packing', category: 'corporate', title: 'Office Packing Service' },
    { id: 11, src: '/img/team.jpg', alt: 'Corporate Team', category: 'corporate', title: 'Corporate Moving Team' },
    { id: 12, src: '/img/gallery/35.jpg', alt: 'Corporate Transport', category: 'corporate', title: 'Corporate Transport' },

    // International Moves
    { id: 13, src: '/img/packers.jpg', alt: 'International Moving', category: 'international', title: 'International Moving' },
    { id: 14, src: '/img/shifting.jpg', alt: 'Global Relocation', category: 'international', title: 'Global Relocation' },
    { id: 15, src: '/img/packing_truck.jpg', alt: 'Overseas Moving', category: 'international', title: 'Overseas Moving' },
    { id: 16, src: '/img/van.jpg', alt: 'International Transport', category: 'international', title: 'International Transport' },
    { id: 17, src: '/img/gallery/37.jpg', alt: 'International Team', category: 'international', title: 'International Team' },
    { id: 18, src: '/img/truck.png', alt: 'Global Transport', category: 'international', title: 'Global Transport' },

    // Vehicles
    { id: 19, src: '/img/gallery/08.jpg', alt: 'Vehicle Transport', category: 'vehicles', title: 'Vehicle Transport' },
    { id: 20, src: '/img/gallery/11.jpg', alt: 'Car Moving', category: 'vehicles', title: 'Car Moving Service' },
    { id: 21, src: '/img/packing_truck.jpg', alt: 'Truck Fleet', category: 'vehicles', title: 'Truck Fleet' },
    { id: 22, src: '/img/van.jpg', alt: 'Van Service', category: 'vehicles', title: 'Van Moving Service' },
    { id: 23, src: '/img/gallery/12.jpg', alt: 'Vehicle Team', category: 'vehicles', title: 'Vehicle Moving Team' },
    { id: 24, src: '/img/gallery/13.jpg', alt: 'Truck Service', category: 'vehicles', title: 'Truck Moving Service' },

    // Team
    { id: 25, src: '/img/packers.jpg', alt: 'Professional Team', category: 'team', title: 'Professional Team' },
    { id: 26, src: '/img/gallery/36.jpg', alt: 'Moving Experts', category: 'team', title: 'Moving Experts' },
    { id: 27, src: '/img/gallery/34.jpg', alt: 'Packing Team', category: 'team', title: 'Packing Team' },
    { id: 28, src: '/img/gallery/33.jpg', alt: 'Transport Team', category: 'team', title: 'Transport Team' },
    { id: 29, src: '/img/team.jpg', alt: 'KVT Team', category: 'team', title: 'KVT Moving Team' },
    { id: 30, src: '/img/gallery/30.jpg', alt: 'Fleet Team', category: 'team', title: 'Fleet Management Team' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-[80vh] flex items-center" style={{ backgroundImage: 'url(/img/hero/front_view.jpg)' }}>
       
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col lg:flex-row justify-end items-center lg:items-start text-right transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="lg:w-1/2 lg:pl-12">
                <Link
                  href="/"
                  className="inline-flex items-center text-white-300 hover:text-white mb-8 transition-colors bg-black/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Our Gallery
                </h1>
                <p className="text-lg md:text-xl text-black m-10 leading-relaxed max-w-lg">
                  Explore our comprehensive collection of moving and packing services. 
                  See our team in action, our modern fleet, and successful relocations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 text-black/90">
                  <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                    <PhotoIcon className="w-5 h-5" />
                    <span className="font-semibold">{galleryImages.length} Photos</span>
                  </div>
                  <div className="hidden sm:block text-white/60">•</div>
                  <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">{categories.length - 1} Categories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos title="Our clients across industries" />


      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FunnelIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.alt}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <PhotoIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <PhotoIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={galleryImages.length}
                    duration={4}
                    useEasing={true}
                    start={0}
                    delay={0.2}
                  />
                )}
                {!startCount && galleryImages.length}+
              </div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <TruckIcon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {startCount && (
                  <CountUp
                    end={500}
                    duration={4}
                    useEasing={true}
                    start={0}
                    delay={0.4}
                  />
                )}
                {!startCount && '500'}+
              </div>
              <div className="text-gray-600">Successful Moves</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <UserGroupIcon className="w-8 h-8 mx-auto" />
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
                {!startCount && '25'}+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white p-6 rounded-xl shadow-lg mb-4">
                <StarIcon className="w-8 h-8 mx-auto" />
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
                {!startCount && '100'}%
              </div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to See Our Work in Action?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contact us today to experience the same quality service you see in our gallery
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

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedImage.alt}</p>
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.id === selectedImage.category)?.name}
                </span>
                <span className="text-sm text-gray-500">Photo #{selectedImage.id}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 