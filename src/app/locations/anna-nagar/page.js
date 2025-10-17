import PageSEO from "@/app/components/PageSEO";

export const dynamic = "force-static";

export default function AnnaNagarLocationPage() {
  const title = "Packers and Movers in Anna Nagar | Local Shifting & Relocation";
  const description = "Top-rated packers and movers in Anna Nagar for house shifting, office relocation, and local moving. Safe packing, careful handling, and on-time delivery at affordable prices.";
  const keywords = [
    "packers and movers anna nagar",
    "packers and movers near me",
    "best packers and movers anna nagar",
    "local shifting services anna nagar",
    "house shifting anna nagar",
    "office relocation services anna nagar",
    "trusted moving company anna nagar",
    "affordable packers and movers anna nagar"
  ];

  const faqs = [
    {
      q: "Do you provide same-day shifting in Anna Nagar?",
      a: "Yes, for short-distance local moves, we can often arrange same-day service based on availability."
    },
    {
      q: "Will you dismantle and reassemble furniture?",
      a: "Yes, our team can dismantle beds, wardrobes, and modular furniture and reassemble them at the destination."
    },
    {
      q: "Are there additional charges for weekends?",
      a: "Pricing is transparent. Weekend surcharges may apply during peak demand; we confirm all costs upfront."
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
      "@type": "District",
      name: "Anna Nagar"
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
        url="/locations/anna-nagar"
        image="/logo.png"
        type="webpage"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Packers and Movers in Anna Nagar</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Your trusted local moving partner in Anna Nagar
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏠 Local Shifting</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏢 Office Moves</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🚗 Vehicle Transport</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">⚡ Same Day Service</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us in Anna Nagar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick local moves with same-day availability</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Furniture Assembly</h3>
              <p className="text-gray-600 text-sm">Dismantle and reassemble beds, wardrobes, and modular furniture</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Weekend Service</h3>
              <p className="text-gray-600 text-sm">Flexible scheduling including weekends</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Deep knowledge of Anna Nagar's layout and access points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Anna Nagar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">Door-to-Door Shifting</h3>
              <p className="text-gray-600 text-sm">Complete house shifting with pickup and delivery</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Office Relocation</h3>
              <p className="text-gray-600 text-sm">Minimal downtime office moves</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Vehicle Transport</h3>
              <p className="text-gray-600 text-sm">Car and bike transport services</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-800">Packing & Unpacking</h3>
              <p className="text-gray-600 text-sm">Professional packing and placement services</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Move in Anna Nagar?</h2>
          <p className="text-xl mb-8 text-green-100">Get a free quote for your local relocation needs</p>
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


