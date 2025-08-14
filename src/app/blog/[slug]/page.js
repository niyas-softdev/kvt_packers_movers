import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

// Single source of truth for posts
const POSTS = [
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
        slug: "essential-packing-tips-smooth-move",
        content: `
          <p>Packing is one of the most important steps in ensuring a smooth and stress-free move. With the right approach and materials, you can protect your belongings and make unpacking much easier.</p>
          <h2>Start Early and Stay Organized</h2>
          <ul>
            <li>Begin packing well in advance of your move date.</li>
            <li>Label each box with its contents and destination room.</li>
            <li>Keep an inventory list to track your items.</li>
          </ul>
          <h2>Use Quality Packing Materials</h2>
          <ul>
            <li>Invest in sturdy boxes, bubble wrap, packing paper, and strong tape.</li>
            <li>Use specialty boxes for fragile items like dishes and glassware.</li>
          </ul>
          <h2>Pack Room by Room</h2>
          <ul>
            <li>Focus on one room at a time to stay organized.</li>
            <li>Pack heavier items at the bottom and lighter items on top.</li>
          </ul>
          <h2>Protect Fragile Items</h2>
          <ul>
            <li>Wrap fragile items individually and fill empty spaces with packing material.</li>
            <li>Mark boxes containing fragile items clearly.</li>
          </ul>
          <h2>Don’t Overpack Boxes</h2>
          <ul>
            <li>Keep boxes at a manageable weight to prevent breakage and injury.</li>
          </ul>
          <h2>Final Tips</h2>
          <ul>
            <li>Pack an essentials box with items you’ll need right away at your new home.</li>
            <li>Double-check closets, cabinets, and storage areas before leaving.</li>
          </ul>
          <p>By following these tips, you can ensure your move is efficient and your belongings arrive safely. For professional packing services, contact KVT Packers and Movers.</p>
        `
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
        slug: "how-to-choose-right-movers",
        content: `
          <p>Choosing the right moving company is crucial for a successful and stress-free relocation. Here’s how to make an informed decision:</p>
          <h2>Research and Recommendations</h2>
          <ul>
            <li>Ask friends, family, and colleagues for recommendations.</li>
            <li>Read online reviews and testimonials.</li>
          </ul>
          <h2>Verify Credentials</h2>
          <ul>
            <li>Ensure the company is licensed and insured.</li>
            <li>Check for membership in professional moving associations.</li>
          </ul>
          <h2>Get Multiple Quotes</h2>
          <ul>
            <li>Request detailed written estimates from at least three companies.</li>
            <li>Be wary of unusually low quotes.</li>
          </ul>
          <h2>Ask the Right Questions</h2>
          <ul>
            <li>What services are included in the quote?</li>
            <li>Are there any additional fees?</li>
            <li>What is the company’s claims process for damaged or lost items?</li>
          </ul>
          <h2>Review the Contract</h2>
          <ul>
            <li>Read the contract carefully before signing.</li>
            <li>Ensure all services and costs are clearly listed.</li>
          </ul>
          <p>By following these steps, you can choose a reputable moving company that meets your needs. KVT Packers and Movers is always here to help with your relocation.</p>
        `
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
        slug: "what-to-expect-long-distance-move",
        content: `
          <p>Long-distance moves require careful planning and coordination. Here’s what you can expect during the process:</p>
          <h2>Pre-Move Planning</h2>
          <ul>
            <li>Schedule your move well in advance.</li>
            <li>Take inventory of your belongings and decide what to take.</li>
            <li>Arrange for utilities and address changes at your new location.</li>
          </ul>
          <h2>Packing and Loading</h2>
          <ul>
            <li>Use quality packing materials to protect your items.</li>
            <li>Label boxes clearly for easy unpacking.</li>
            <li>Professional movers will load your belongings securely.</li>
          </ul>
          <h2>Transportation</h2>
          <ul>
            <li>Your items will be transported in specialized moving vehicles.</li>
            <li>Track your shipment and stay in touch with your moving coordinator.</li>
          </ul>
          <h2>Delivery and Unpacking</h2>
          <ul>
            <li>Movers will unload and place your items in the designated rooms.</li>
            <li>Unpack essentials first and check for any damages.</li>
          </ul>
          <p>With the right preparation, your long-distance move can be smooth and hassle-free. Contact KVT Packers and Movers for expert interstate relocation services.</p>
        `
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
        slug: "corporate-relocation-services-chennai",
        content: `
          <p>Corporate relocations require efficiency, confidentiality, and minimal disruption to business operations. Here’s how we ensure a seamless office move:</p>
          <h2>Comprehensive Planning</h2>
          <ul>
            <li>We assess your requirements and create a detailed relocation plan.</li>
            <li>Coordinate with your team to minimize downtime.</li>
          </ul>
          <h2>Specialized Equipment Handling</h2>
          <ul>
            <li>Safe packing and transport of office equipment, IT systems, and documents.</li>
            <li>Disassembly and reassembly of office furniture.</li>
          </ul>
          <h2>Employee Relocation</h2>
          <ul>
            <li>Assistance with employee moves, including housing and settling-in services.</li>
          </ul>
          <h2>Post-Move Support</h2>
          <ul>
            <li>Unpacking, setup, and support to ensure your business is up and running quickly.</li>
          </ul>
          <p>Trust KVT Packers and Movers for your next corporate relocation in Chennai. We deliver professional, reliable, and confidential moving services for businesses of all sizes.</p>
        `
      }
];

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }) {
  const slug = params?.slug;
  const post = POSTS.find(p => p.slug === slug);
  if (!post) {
    notFound();
  }
  const relatedPosts = POSTS.filter(p => p.id !== post.id).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors sticky top-4 z-20 bg-blue-900/80 px-3 py-1 rounded-full shadow-lg backdrop-blur"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="text-center">
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-blue-200 text-sm">
                <span className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover rounded-b-2xl shadow-lg"
                priority
              />
            </div>
            {/* Article Content */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                  <p>{post.excerpt}</p>
                )}
              </div>
              {/* Article Actions */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors" aria-label="Share this post">
                      <ShareIcon className="w-5 h-5" />
                      Share
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors" aria-label="Save this post">
                      <BookmarkIcon className="w-5 h-5" />
                      Save
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors" aria-label="Comment on this post">
                      <ChatBubbleLeftIcon className="w-5 h-5" />
                      Comment
                    </button>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              {/* About Our Work Section */}
              <section className="mt-16 bg-green-50 rounded-xl p-8 shadow-inner border border-green-100">
                <h2 className="text-2xl font-bold text-green-800 mb-4">About Our Work at KVT Packers and Movers</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At KVT Packers and Movers, we pride ourselves on delivering reliable, professional, and customer-focused relocation services across Chennai and beyond. With over 25 years of experience, our team handles every move—big or small—with the utmost care and attention to detail.
                </p>
                <h3 className="text-xl font-semibold text-green-700 mb-2">What Sets Us Apart:</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Experienced and trained professionals</li>
                  <li>Modern equipment and safe packing materials</li>
                  <li>Transparent pricing and no hidden charges</li>
                  <li>Timely delivery and real-time tracking</li>
                  <li>Comprehensive insurance coverage</li>
                  <li>24/7 customer support</li>
                </ul>
                <p className="text-lg text-gray-700">
                  Whether you’re moving locally, across cities, or internationally, we ensure a smooth, stress-free experience from start to finish. <span className="font-semibold text-green-800">Trust KVT Packers and Movers for your next move!</span>
                </p>
              </section>
            </div>
          </div>
          {/* Read More Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Read More</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover rounded-t-xl"
                        sizes="(max-width: 640px) 100vw, 400px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium shadow">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                        <span>{relatedPost.date}</span>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free quote for your moving needs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 