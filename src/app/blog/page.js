'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClientLogos from '../components/ClientLogos';
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
      excerpt: "Professional heavy item relocation services in Anna Nagar, Chennai. We specialize in moving steel lockers, machinery, and heavy equipment with care and precision.",
      image: "/img/location/anna_nagar1.jpg",
      date: "Nov 04, 2024",
      author: "KVT Team",
      readTime: "5 min read",
      category: "Heavy Relocation",
      slug: "heavy-item-relocation-anna-nagar-chennai"
    },
    {
      id: 2,
      title: "House shifting services in Arumbakkam",
      excerpt: "Complete house shifting services in Arumbakkam with professional packing, loading, and unloading. Trusted by thousands of families.",
      image: "/img/location/arumbakkam.jpg",
      date: "Nov 01, 2024",
      author: "KVT Team",
      readTime: "4 min read",
      category: "Local Moving",
      slug: "house-shifting-services-arumbakkam"
    },
    {
      id: 3,
      title: "House shifting from Chennai to Nagercoil",
      excerpt: "Reliable house shifting services from Chennai to Nagercoil. Door-to-door service with complete packing and unpacking assistance.",
      image: "/img/location/nagercoil.jpg",
      date: "Nov 01, 2024",
      author: "KVT Team",
      readTime: "6 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-to-nagercoil"
    },
    {
      id: 4,
      title: "Medical devices Relocation from Chennai to Bangalore",
      excerpt: "Specialized medical device relocation services with temperature-controlled transportation and careful handling of sensitive equipment.",
      image: "/img/location/bengalore.jpg",
      date: "Oct 31, 2024",
      author: "KVT Team",
      readTime: "7 min read",
      category: "Specialist Moving",
      slug: "medical-devices-relocation-chennai-bangalore"
    },
    {
      id: 5,
      title: "Wooden Crate Packing To Abroad",
      excerpt: "Professional wooden crate packing services for international moves. Custom crating solutions for fragile and valuable items.",
      image: "/img/location/abroad.jpg",
      date: "Oct 31, 2024",
      author: "KVT Team",
      readTime: "8 min read",
      category: "International Moving",
      slug: "wooden-crate-packing-abroad"
    },
    {
      id: 6,
      title: "House shifting from Chennai to Bangalore",
      excerpt: "25 years of experience in house shifting from Chennai to Bangalore. Complete end-to-end moving solutions with insurance coverage.",
      image: "/img/location/bengalore1.jpg",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "5 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-bangalore"
    },
    {
      id: 7,
      title: "House shifting from Chennai to Vellore",
      excerpt: "Hassle-free house shifting from Chennai to Vellore. Professional team ensures safe and timely delivery of your belongings.",
      image: "/img/location/vellore.png",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "4 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-vellore"
    },
    {
      id: 8,
      title: "House shifting from Chennai to Kakinada",
      excerpt: "Reliable house shifting services from Chennai to Kakinada. We handle everything from packing to final setup at your new home.",
      image: "/img/location/kakinada1.jpg",
      date: "Oct 29, 2024",
      author: "KVT Team",
      readTime: "6 min read",
      category: "Intercity Moving",
      slug: "house-shifting-chennai-kakinada"
    },
    {
      id: 9,
      title: "Essential Packing Tips for a Smooth Move",
      excerpt: "Learn the essential packing tips and tricks for a smooth and stress-free moving experience. Expert advice from our moving professionals.",
      image: "/img/packing_truck.jpg",
      date: "Jan 24, 2023",
      author: "KVT Team",
      readTime: "10 min read",
      category: "Moving Tips",
      slug: "essential-packing-tips-smooth-move"
    },
    {
      id: 10,
      title: "How to Choose the Right Movers for Your Needs",
      excerpt: "A comprehensive guide to choosing the right moving company. Learn what to look for and questions to ask before hiring movers.",
      image: "/img/team.jpg",
      date: "Dec 24, 2023",
      author: "KVT Team",
      readTime: "12 min read",
      category: "Moving Tips",
      slug: "how-to-choose-right-movers"
    },
    {
      id: 11,
      title: "What to Expect During a Long-Distance Move",
      excerpt: "Everything you need to know about long-distance moves. From planning to execution, we cover all aspects of interstate relocation.",
      image: "/img/truck.png",
      date: "Jun 24, 2024",
      author: "KVT Team",
      readTime: "15 min read",
      category: "Long Distance Moving",
      slug: "what-to-expect-long-distance-move"
    },
    {
      id: 12,
      title: "Corporate Relocation Services in Chennai",
      excerpt: "Professional corporate relocation services for businesses in Chennai. We handle office moves, equipment relocation, and employee transfers.",
      image: "/img/location/chennai.jpg",
      date: "Jun 20, 2024",
      author: "KVT Team",
      readTime: "8 min read",
      category: "Corporate Moving",
      slug: "corporate-relocation-services-chennai"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
          Our Blog
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
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/img/hero/hero_blog.jpg"
          alt="Happy couple moving boxes"
          className="max-w-full h-auto rounded-lg shadow-lg"
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
                    alt={post.title}
                    fill
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
              href="/quote"
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
  );
} 