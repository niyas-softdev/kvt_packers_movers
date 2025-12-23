'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClientLogos from '../components/ClientLogos';
import PageStructuredData from '../components/PageSEO';
import { CalendarIcon, ArrowRightIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Trusted Heavy Item Relocation Experts in Anna Nagar, Chennai",
      excerpt: "Looking for reliable packers and movers near you in Anna Nagar for heavy item relocation? KVT Packers & Movers specializes in moving steel lockers, industrial machinery, heavy equipment, and oversized furniture with professional care and precision. Our experienced team in Anna Nagar uses specialized equipment and techniques to ensure safe transportation of your valuable heavy items. Whether you need to relocate machinery from your factory, move heavy safes, or transport large furniture pieces, we provide door-to-door service with proper packing, loading, and unloading. Trusted by businesses and residents across Anna Nagar East, Anna Nagar West, and nearby areas for safe heavy item relocation services.",
      image: "/img/location/anna_nagar1.jpg",
      imageAlt: "Heavy item relocation services in Anna Nagar Chennai - KVT Packers and Movers",
      date: "Nov 04, 2024",
      author: "KVT Team",
      readTime: "5 min read",
      category: "Heavy Relocation",
      slug: "heavy-item-relocation-anna-nagar-chennai",
      keywords: ["heavy item relocation", "Anna Nagar", "Chennai", "packers and movers near me", "machinery movers"]
    },
    {
      id: 2,
      title: "House Shifting Services in Arumbakkam | Local Packers and Movers Near You",
      excerpt: "Complete house shifting services in Arumbakkam with professional packing, loading, and unloading. If you're searching for packers and movers near me in Arumbakkam, KVT Packers & Movers offers reliable local moving services trusted by thousands of families. Our team handles everything from 1BHK to 4BHK apartment shifts, independent house moves, and office relocations in Arumbakkam and nearby areas like CMBT, Anna Nagar, and Aminjikarai. We provide same-day shifting services, furniture disassembly and reassembly, safe packing with quality materials, and transparent pricing with no hidden charges. Experience stress-free house shifting with our door-to-door service and dedicated move coordinator.",
      image: "/img/location/arumbakkam.jpg",
      imageAlt: "House shifting services in Arumbakkam Chennai - Local packers and movers near you",
      date: "Nov 01, 2024",
      author: "KVT Team",
      readTime: "4 min read",
      category: "Local Moving",
      slug: "house-shifting-services-arumbakkam",
      keywords: ["house shifting", "Arumbakkam", "packers and movers near me", "local movers", "Chennai"]
    },
    {
      id: 3,
      title: "House Shifting from Chennai to Nagercoil | Intercity Moving Services",
      excerpt: "Reliable house shifting services from Chennai to Nagercoil with complete door-to-door service, professional packing, and unpacking assistance. Planning an intercity move from Chennai to Nagercoil? KVT Packers & Movers offers comprehensive relocation solutions including safe packing of all household items, secure transportation in specialized vehicles, insurance coverage, and unpacking services at your new home. Our experienced team ensures timely delivery and careful handling of your belongings throughout the journey. We handle everything from furniture disassembly to final setup, making your Chennai to Nagercoil move hassle-free and stress-free.",
      image: "/img/location/nagercoil.jpg",
      imageAlt: "House shifting from Chennai to Nagercoil - Intercity moving services",
      date: "Nov 01, 2024",
      author: "KVT Team",
      readTime: "6 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-to-nagercoil",
      keywords: ["Chennai to Nagercoil", "house shifting", "intercity moving", "packers and movers"]
    },
    {
      id: 4,
      title: "Medical Devices Relocation from Chennai to Bangalore | Specialist Moving",
      excerpt: "Specialized medical device relocation services from Chennai to Bangalore with temperature-controlled transportation and careful handling of sensitive equipment. Moving medical devices requires expertise, precision, and compliance with safety regulations. KVT Packers & Movers provides specialized relocation services for hospitals, clinics, and medical facilities, ensuring your sensitive medical equipment reaches Bangalore safely. Our team uses temperature-controlled vehicles, anti-static packaging, and follows strict protocols for handling medical devices. We coordinate with your facility management, handle documentation, and ensure timely delivery to minimize downtime.",
      image: "/img/location/bengalore.jpg",
      imageAlt: "Medical device relocation from Chennai to Bangalore - Specialist moving services",
      date: "Oct 31, 2024",
      author: "KVT Team",
      readTime: "7 min read",
      category: "Specialist Moving",
      slug: "medical-devices-relocation-chennai-bangalore",
      keywords: ["medical device relocation", "Chennai to Bangalore", "specialist moving", "temperature controlled"]
    },
    {
      id: 5,
      title: "Wooden Crate Packing for International Moves | Export Packing Services",
      excerpt: "Professional wooden crate packing services for international moves from Chennai. Custom crating solutions for fragile items, antiques, electronics, and valuable belongings. Planning to move abroad? KVT Packers & Movers offers expert wooden crate packing services designed to protect your items during long-distance international shipping. Our skilled craftsmen create custom wooden crates tailored to your specific items, ensuring maximum protection against damage, moisture, and handling. We follow international shipping standards, handle all export documentation, and coordinate with shipping lines. Whether you're relocating to the USA, UK, Australia, or any other country, our wooden crate packing ensures your belongings arrive safely.",
      image: "/img/location/abroad.jpg",
      imageAlt: "Wooden crate packing for international moves - Export packing services Chennai",
      date: "Oct 31, 2024",
      author: "KVT Team",
      readTime: "8 min read",
      category: "International Moving",
      slug: "wooden-crate-packing-abroad",
      keywords: ["wooden crate packing", "international moving", "export packing", "Chennai"]
    },
    {
      id: 6,
      title: "House Shifting from Chennai to Bangalore | 25 Years Experience",
      excerpt: "25 years of experience in house shifting from Chennai to Bangalore with complete end-to-end moving solutions and comprehensive insurance coverage. Moving from Chennai to Bangalore? KVT Packers & Movers has been helping families and professionals relocate safely for over two decades. Our Chennai to Bangalore house shifting service includes professional packing with quality materials, secure loading and transportation, real-time tracking, and unpacking assistance at your new home in Bangalore. We handle everything from furniture disassembly to final setup, ensuring a smooth transition. With transparent pricing, timely delivery, and dedicated customer support, we make your Chennai to Bangalore move stress-free.",
      image: "/img/location/bengalore1.jpg",
      imageAlt: "House shifting from Chennai to Bangalore - Experienced packers and movers",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "5 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-bangalore",
      keywords: ["Chennai to Bangalore", "house shifting", "intercity moving", "packers and movers"]
    },
    {
      id: 7,
      title: "House Shifting from Chennai to Vellore | Reliable Intercity Movers",
      excerpt: "Hassle-free house shifting services from Chennai to Vellore with professional team ensuring safe and timely delivery of your belongings. Planning a move from Chennai to Vellore? KVT Packers & Movers provides reliable intercity relocation services with complete packing, loading, transportation, and unloading assistance. Our experienced team handles all types of household items including furniture, appliances, electronics, and personal belongings with utmost care. We offer door-to-door service, insurance coverage options, and flexible scheduling to suit your needs. With transparent pricing and dedicated move coordinators, your Chennai to Vellore relocation will be smooth and stress-free.",
      image: "/img/location/vellore.png",
      imageAlt: "House shifting from Chennai to Vellore - Reliable intercity movers",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "4 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-vellore",
      keywords: ["Chennai to Vellore", "house shifting", "intercity moving"]
    },
    {
      id: 8,
      title: "House Shifting from Chennai to Kakinada | Complete Moving Solutions",
      excerpt: "Reliable house shifting services from Chennai to Kakinada. We handle everything from professional packing to final setup at your new home. Moving from Chennai to Kakinada? KVT Packers & Movers offers comprehensive house shifting services with end-to-end support. Our team provides expert packing using high-quality materials, secure loading and transportation in specialized vehicles, and complete unpacking and setup assistance at your new home in Kakinada. We handle furniture disassembly and reassembly, ensure proper labeling of all boxes, and provide real-time updates throughout the journey. With 25+ years of experience and transparent pricing, your Chennai to Kakinada move will be seamless.",
      image: "/img/location/kakinada1.jpg",
      imageAlt: "House shifting from Chennai to Kakinada - Complete moving solutions",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "6 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-kakinada",
      keywords: ["Chennai to Kakinada", "house shifting", "intercity moving"]
    },
    {
      id: 9,
      title: "Essential Packing Tips for a Smooth Move | Chennai Moving Guide",
      excerpt: "Learn essential packing tips and tricks for a smooth, stress-free moving experience in Chennai. Expert advice from KVT Packers & Movers professionals with 25+ years of experience. Whether you're moving locally in Chennai areas like Anna Nagar, Arumbakkam, or Koyambedu, or relocating to another city, proper packing is crucial for protecting your belongings. This comprehensive guide covers everything from choosing the right packing materials to organizing your items room by room. Discover professional techniques for packing fragile items, electronics, furniture, and valuable possessions. Follow our step-by-step checklist to ensure nothing is forgotten and everything arrives safely at your new home.",
      image: "/img/packing_truck.jpg",
      imageAlt: "Essential packing tips for smooth move - Chennai packers and movers guide",
      date: "Jan 24, 2023",
      author: "KVT Team",
      readTime: "10 min read",
      category: "Moving Tips",
      slug: "essential-packing-tips-smooth-move",
      keywords: ["packing tips", "moving guide", "Chennai", "packers and movers"]
    },
    {
      id: 10,
      title: "How to Choose the Right Movers for Your Needs | Chennai Guide",
      excerpt: "A comprehensive guide to choosing the right packers and movers in Chennai. Learn what to look for, questions to ask, and red flags to avoid before hiring movers. Whether you need local packers and movers near you in Anna Nagar, Arumbakkam, Koyambedu, or anywhere in Chennai, this guide helps you make an informed decision. Discover how to verify credentials, compare quotes, check reviews, and understand service inclusions. Learn about insurance coverage, hidden charges, and what to expect during the moving process. With tips from Chennai's trusted moving experts, you'll find reliable packers and movers who deliver quality service at fair prices.",
      image: "/img/team.jpg",
      imageAlt: "How to choose right movers - Chennai packers and movers guide",
      date: "Dec 24, 2023",
      author: "KVT Team",
      readTime: "12 min read",
      category: "Moving Tips",
      slug: "how-to-choose-right-movers",
      keywords: ["choose movers", "packers and movers", "Chennai", "moving guide"]
    },
    {
      id: 11,
      title: "What to Expect During a Long-Distance Move | Chennai to Anywhere",
      excerpt: "Everything you need to know about long-distance moves from Chennai. From planning to execution, we cover all aspects of interstate relocation including packing, transportation, tracking, and delivery. Planning a long-distance move from Chennai to Bangalore, Mumbai, Delhi, or any other city? This comprehensive guide explains the entire process step by step. Learn about pre-move planning, packing timelines, transportation methods, tracking your shipment, delivery schedules, and unpacking. Discover what to expect in terms of costs, timelines, and service quality. With insights from experienced Chennai movers, you'll be well-prepared for your interstate relocation journey.",
      image: "/img/truck.png",
      imageAlt: "What to expect during long distance move - Chennai to anywhere guide",
      date: "Jun 24, 2024",
      author: "KVT Team",
      readTime: "15 min read",
      category: "Long Distance Moving",
      slug: "what-to-expect-long-distance-move",
      keywords: ["long distance move", "interstate moving", "Chennai", "moving guide"]
    },
    {
      id: 12,
      title: "Corporate Relocation Services in Chennai | Office Moving Experts",
      excerpt: "Professional corporate relocation services for businesses in Chennai. We handle office moves, equipment relocation, and employee transfers with minimal downtime. Looking for reliable corporate movers in Chennai? KVT Packers & Movers specializes in office relocations across Chennai including Anna Nagar, Arumbakkam, T Nagar, OMR, and other business districts. Our corporate moving services include IT infrastructure handling, office furniture disassembly and reassembly, confidential document handling, and employee relocation assistance. We work around your business schedule, minimize downtime, and ensure a seamless transition. With 25+ years of experience serving Chennai's leading companies, we deliver professional, efficient corporate relocation services.",
      image: "/img/location/chennai.jpg",
      imageAlt: "Corporate relocation services in Chennai - Office moving experts",
      date: "Jun 20, 2024",
      author: "KVT Team",
      readTime: "8 min read",
      category: "Corporate Moving",
      slug: "corporate-relocation-services-chennai",
      keywords: ["corporate relocation", "office moving", "Chennai", "business relocation"]
    }
  ];

  const categories = [
    "All",
    "Local Moving",
    "Intercity Moving",
    "International Moving",
    "Heavy Relocation",
    "Specialist Moving",
    "Corporate Moving",
    "Moving Tips",
    "Long Distance Moving"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Helper function to convert date string to ISO format
  const convertDateToISO = (dateString) => {
    // Format: "Nov 04, 2024" -> "2024-11-04"
    const months = {
      'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
      'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
      'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    const parts = dateString.split(' ');
    if (parts.length === 3) {
      const month = months[parts[0]];
      const day = parts[1].replace(',', '').padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString().split('T')[0];
  };

  // Generate Blog JSON-LD schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "KVT Packers and Movers Blog",
    "description": "Expert moving tips, guides, and industry insights from Chennai's trusted packers and movers",
    "url": "https://kvtpackersandmovers.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "KVT Packers and Movers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kvtpackersandmovers.com/logo.png"
      }
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://kvtpackersandmovers.com/blog/${post.slug}`,
      "datePublished": convertDateToISO(post.date),
      "author": {
        "@type": "Organization",
        "name": post.author,
        "url": "https://kvtpackersandmovers.com"
      },
      "image": {
        "@type": "ImageObject",
        "url": `https://kvtpackersandmovers.com${post.image}`,
        "caption": post.title
      },
      "articleSection": post.category,
      "timeRequired": post.readTime,
      "keywords": post.keywords ? post.keywords.join(', ') : `${post.category}, packers and movers, Chennai`,
      "about": {
        "@type": "Service",
        "name": "Packers and Movers Services",
        "areaServed": {
          "@type": "City",
          "name": "Chennai"
        }
      }
    }))
  };

  return (
    <>
      <PageStructuredData
        title="Moving Tips & Guides – Packers and Movers Blog Chennai"
        description="Expert moving tips, guides, and industry insights from KVT Packers and Movers Chennai. Learn about packing, relocation, and choosing the right movers for your needs."
        url="/blog"
        image="/img/hero/hero_blog.jpg"
        type="website"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema, null, 2)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-400 to-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
              {/* Text Section */}
              <div className={`w-full md:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Packers and Movers Blog – Moving Tips & Guides
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-xl">
                  Discover expert tips, industry insights, and moving guides from Chennai's trusted packers and movers.
                </p>
                <div className="flex items-center text-gray-600 text-sm">
                  <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                  <span className="mx-2">›</span>
                  <span className="text-gray-900">Blog</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <Image
                  src="/img/hero/hero_blog.jpg"
                  alt="Packers and Movers Blog - Moving Tips and Guides"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>



      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden blog-card animate-slideInUp ${
                  hoveredCard === post.id ? 'ring-2 ring-green-500' : ''
                }`}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || `${post.title} - KVT Packers and Movers Blog Chennai`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover image-hover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">No posts found in this category.</div>
            </div>
          )}
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos title="Brands that trust our logistics" />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            24/7 Customer Support
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get help and answers to your questions anytime, day or night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
} 