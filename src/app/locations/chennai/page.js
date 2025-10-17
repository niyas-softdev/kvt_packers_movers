import PageSEO from "@/app/components/PageSEO";

export const dynamic = "force-static";

export default function ChennaiLocationPage() {
  const title = "Packers and Movers in Chennai | Trusted Local Shifting Services";
  const description = "Looking for trusted and affordable packers and movers in Chennai? We offer reliable house shifting, office relocation, and local moving services with safe packing, on-time delivery, and transparent pricing.";
  const keywords = [
    "packers and movers chennai",
    "packers and movers near me",
    "best packers and movers chennai",
    "local shifting services chennai",
    "house shifting chennai",
    "office relocation services chennai",
    "trusted moving company chennai",
    "affordable packers and movers chennai"
  ];

  const faqs = [
    {
      q: "How much do packers and movers cost in Chennai?",
      a: "Local shifting in Chennai typically starts from ₹3,000–₹6,000 for 1BHK, ₹5,000–₹10,000 for 2BHK, depending on distance, volume, and services like packing and unpacking."
    },
    {
      q: "How early should I book movers in Chennai?",
      a: "We recommend booking 2–5 days in advance for local moves and 5–10 days for intercity moves to ensure availability."
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes, we use high‑quality boxes, bubble wrap, stretch film, foam sheets, and tape to protect your belongings."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Packers and Movers",
    areaServed: {
      "@type": "City",
      name: "Chennai"
    },
    provider: {
      "@type": "LocalBusiness",
      name: "KVT Packers and Movers",
      url: "https://kvtpackersandmovers.com"
    }
  };

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        keywords={keywords}
        url="/locations/chennai"
        image="/logo.png"
        type="webpage"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Packers and Movers in Chennai</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Professional moving services with 25+ years of trusted experience
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏠 House Shifting</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏢 Office Relocation</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🚚 Local & Intercity</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">📦 Safe Packing</span>
          </div>
          <a 
            href="/contact" 
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose KVT Packers and Movers?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">End-to-End Service</h3>
              <p className="text-gray-600 text-sm">Complete packing, loading, transport, unloading, and setup</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-sm">Premium packing materials and labeled cartons for safety</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Coordinator</h3>
              <p className="text-gray-600 text-sm">Personal move coordinator with real-time updates</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden charges with free site survey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Chennai</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">House Shifting</h3>
              <p className="text-gray-600 text-sm">Complete apartment and independent house moves</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Office Relocation</h3>
              <p className="text-gray-600 text-sm">IT equipment and office furniture handling</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Vehicle Transport</h3>
              <p className="text-gray-600 text-sm">Car and bike transport services</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-800">Intercity Moves</h3>
              <p className="text-gray-600 text-sm">Long distance and interstate relocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-3 text-green-700">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
          <p className="text-xl mb-8 text-green-100">Get a free quote for your relocation needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+917550016167" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200"
            >
              Call +91 75500 16167
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


