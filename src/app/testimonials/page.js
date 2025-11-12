'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ClientLogos from '../components/ClientLogos';
import PageStructuredData from '../components/PageSEO';
import { ArrowLeftIcon, StarIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function TestimonialsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Arumuga Sundaram",
      reviewCount: "1 review",
      timeAgo: "a month ago",
      rating: 5,
      content: "I used KVT Packers and Movers service to relocate within Chennai. I am very satisfied with the service. The team (Prabhakaran, Venkatesh, Ravi, Khaleel) did a very good job throughout the process.",
      avatar: "A",
      color: "blue"
    },
    {
      id: 2,
      name: "Vinuthna Reddim",
      reviewCount: "7 reviews • 8 photos",
      timeAgo: "a month ago",
      rating: 5,
      content: "KVT packers and movers helped us twice to move our house. They were really helpful even though we asked for service the previous day and guaranteed work without any damage.",
      avatar: "V",
      color: "green"
    },
    {
      id: 3,
      name: "janani gifts",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "I have shifted my home with KVT, they did their job perfectly, neatly and quickly, special thanks to Mr.Anand and team members, surely will prefer them to all.",
      avatar: "J",
      color: "teal"
    },
    {
      id: 4,
      name: "Eshwaran E",
      reviewCount: "2 reviews • 4 photos",
      timeAgo: "10 months ago",
      rating: 5,
      content: "Very happy for the service, kind and flexible service provided for us, they shifted our materials safely. Super professionals packers and movers services. ❤️",
      avatar: "E",
      color: "emerald"
    },
    {
      id: 5,
      name: "Nappinnai Srinivsan",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "I called them to pack and ship my couple of household Items and they packed it really well and delivered really quick and safe. Highly recommend them.",
      avatar: "N",
      color: "cyan"
    },
    {
      id: 6,
      name: "Vijay V",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Good team work really trustworthy company. Thanks to Anandan sir and KVT Team. I will surely recommend KVT to all. Keep it up 👍👍",
      avatar: "V",
      color: "amber"
    },
    {
      id: 7,
      name: "Elangovan Vani",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Perfect packing, good team work and affordable charges. Thanks for Kvt packers and movers Director Mr.Anandan sir",
      avatar: "E",
      color: "rose"
    },
    {
      id: 8,
      name: "Tamil Elakkiyan",
      reviewCount: "10 reviews",
      timeAgo: "a year ago",
      rating: 5,
      content: "Very good service by kvt Packers And Movers team!!!👍 Keep up your good work!!!👍 Wishing you all success....👍👍👍👍👍",
      avatar: "T",
      color: "lime"
    },
    {
      id: 9,
      name: "Munusamy Munusamy",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Professional services and affordable prices, Good workers Thanks for KVT packers and movers",
      avatar: "M",
      color: "violet"
    },
    {
      id: 10,
      name: "kandhaswami mudaliar",
      reviewCount: "6 reviews • 1 photo",
      timeAgo: "9 months ago",
      rating: 5,
      content: "Quick & good service provided, all materials safely reached destination. 👍👍👍",
      avatar: "K",
      color: "fuchsia"
    },
    {
      id: 11,
      name: "Shabana Azmi",
      reviewCount: "1 review",
      timeAgo: "10 months ago",
      rating: 5,
      content: "We used this packers for house shifting it's good, safe and economy",
      avatar: "S",
      color: "sky"
    },
    {
      id: 12,
      name: "mohan govindaraj",
      reviewCount: "3 reviews",
      timeAgo: "a year ago",
      rating: 5,
      content: "Very professional service, superb staffs, great handling, smooth shipment.... In all a best class service rendered at a affordable price.",
      avatar: "M",
      color: "stone"
    },
    {
      id: 13,
      name: "Balaji Masalas",
      reviewCount: "1 review",
      timeAgo: "9 months ago",
      rating: 5,
      content: "Excellent service at reasonable price, delivered what he promised.",
      avatar: "B",
      color: "zinc"
    },
    {
      id: 14,
      name: "Annadurai Guru",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Good service and friendly budget. I refer to KVT packers",
      avatar: "A",
      color: "neutral"
    },
    {
      id: 15,
      name: "Venkat M",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Good service I refer kvt packers",
      avatar: "V",
      color: "red"
    },
    {
      id: 16,
      name: "ARUMUGAM AZHAGAN",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Good service, affordable price experienced team",
      avatar: "A",
      color: "orange"
    },
    {
      id: 17,
      name: "RAHUMATH RAJA",
      reviewCount: "4 reviews",
      timeAgo: "10 months ago",
      rating: 5,
      content: "Service is very good and packed very safely",
      avatar: "R",
      color: "yellow"
    },
    {
      id: 18,
      name: "Ramalakshmi A",
      reviewCount: "2 reviews",
      timeAgo: "a year ago",
      rating: 5,
      content: "Thanks for your effort. Things are safe and reached at correct time.",
      avatar: "R",
      color: "green"
    },
    {
      id: 19,
      name: "Ramanathan M",
      reviewCount: "1 review",
      timeAgo: "a year ago",
      rating: 5,
      content: "Affordable price and good service",
      avatar: "R",
      color: "blue"
    },
    {
      id: 20,
      name: "dilli babu",
      reviewCount: "4 reviews",
      timeAgo: "a year ago",
      rating: 5,
      content: "Very Good Service",
      avatar: "D",
      color: "purple"
    },
    {
      id: 21,
      name: "vijay jai",
      reviewCount: "1 review • 1 photo",
      timeAgo: "11 months ago",
      rating: 5,
      content: "Nice work 💯",
      avatar: "V",
      color: "pink"
    }
  ];

  const testimonialVideos = [
    {
      id: 1,
      title: "Customer Testimonial - Residential Move",
      description: "See how we helped this family with their residential relocation",
      thumbnail: "/img/testimonial-video-1.jpg",
      videoUrl: "/videos/shifting2.mp4"
    },
    {
      id: 2,
      title: "Corporate Relocation Success",
      description: "Professional office relocation services in action",
      thumbnail: "/img/testimonial-video-2.jpg",
      videoUrl: "/videos/shifting.mp4"
    },
    {
      id: 3,
      title: "International Moving Experience",
      description: "Watch our international moving process",
      thumbnail: "/img/testimonial-video-3.jpg",
      videoUrl: "/videos/testimonial-3.mp4"
    },
    {
      id: 4,
      title: "Vehicle Transportation Service",
      description: "Safe and secure vehicle transportation",
      thumbnail: "/img/testimonial-video-4.jpg",
      videoUrl: "/videos/testimonial-4.mp4"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
      indigo: "from-indigo-500 to-indigo-600",
      teal: "from-teal-500 to-teal-600",
      emerald: "from-emerald-500 to-emerald-600",
      cyan: "from-cyan-500 to-cyan-600",
      amber: "from-amber-500 to-amber-600",
      slate: "from-slate-500 to-slate-600",
      rose: "from-rose-500 to-rose-600",
      lime: "from-lime-500 to-lime-600",
      violet: "from-violet-500 to-violet-600",
      fuchsia: "from-fuchsia-500 to-fuchsia-600",
      sky: "from-sky-500 to-sky-600",
      stone: "from-stone-500 to-stone-600",
      zinc: "from-zinc-500 to-zinc-600",
      neutral: "from-neutral-500 to-neutral-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600"
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  // Helper function to convert relative time to ISO date
  const getDateFromTimeAgo = (timeAgo) => {
    const now = new Date();
    const lowerTimeAgo = timeAgo.toLowerCase();
    
    // Extract number from string (e.g., "10 months ago" -> 10)
    const match = lowerTimeAgo.match(/(\d+)/);
    const number = match ? parseInt(match[1]) : 1;
    
    if (lowerTimeAgo.includes('month')) {
      now.setMonth(now.getMonth() - number);
    } else if (lowerTimeAgo.includes('year')) {
      now.setFullYear(now.getFullYear() - number);
    } else if (lowerTimeAgo.includes('day')) {
      now.setDate(now.getDate() - number);
    } else {
      // Default to 1 month ago if format is unclear
      now.setMonth(now.getMonth() - 1);
    }
    return now.toISOString().split('T')[0];
  };

  // Calculate aggregate rating
  const totalReviews = testimonials.length;
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews;
  const bestRating = 5;
  const worstRating = 1;

  // Generate Review schema for each testimonial
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KVT Packers and Movers",
    "url": "https://kvtpackersandmovers.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": bestRating,
      "worstRating": worstRating
    },
    "review": testimonials.map((testimonial) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "datePublished": getDateFromTimeAgo(testimonial.timeAgo),
      "reviewBody": testimonial.content,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": bestRating,
        "worstRating": worstRating
      }
    }))
  };

  return (
    <>
      <PageStructuredData
        title="Customer Reviews – KVT Packers and Movers Chennai"
        description="Read authentic customer reviews and testimonials for KVT Packers and Movers. 4.8/5 average rating from satisfied customers in Chennai. See why thousands trust us for their relocation needs."
        url="/testimonials"
        image="/img/review/01.png"
        type="website"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema, null, 2)
        }}
      />

      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Customer Testimonials
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real experiences from our satisfied customers who trusted KVT Packers and Movers for their relocation needs
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                <StarIcon className="w-5 h-5" />
                <span className="font-semibold">{testimonials.length} Reviews</span>
              </div>
              <div className="hidden sm:block text-white/60">•</div>
              <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos title="Trusted by these clients" />

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our customers share their experiences with KVT Packers and Movers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <PlayIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-900">{video.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Written Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read what our customers have to say about their moving experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.reviewCount} • {testimonial.timeAgo}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(testimonial.color)} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.avatar}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm text-gray-600">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px] bg-gray-900">
              <video
                src={selectedVideo.videoUrl}
                className="w-full h-full object-cover"
                controls
                muted
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <button
                  onClick={closeVideoModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
} 