import PageSEO from "@/app/components/PageSEO";

export const dynamic = "force-static";

export default function ArumbakkamLocationPage() {
  const title = "Packers and Movers in Arumbakkam | Nearby Local Shifting Services";
  const description = "Reliable packers and movers in Arumbakkam for local house shifting and office relocation. Professional packing, careful handling, and transparent pricing for stress‑free moves.";
  const keywords = [
    "packers and movers arumbakkam",
    "packers and movers near me",
    "best packers and movers arumbakkam",
    "local shifting services arumbakkam",
    "house shifting arumbakkam",
    "office relocation services arumbakkam",
    "trusted moving company arumbakkam",
    "affordable packers and movers arumbakkam"
  ];

  const faqs = [
    {
      q: "Can you do a site survey in Arumbakkam?",
      a: "Yes, we offer free site surveys to assess inventory, access, and packing needs for accurate quotations."
    },
    {
      q: "What items do you not move?",
      a: "We avoid hazardous materials, perishable goods, and items prohibited by transport regulations."
    },
    {
      q: "Do you provide insurance options?",
      a: "Yes, transit insurance is available on request for added peace of mind."
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
      name: "Arumbakkam"
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
        url="/locations/arumbakkam"
        image="/logo.png"
        type="webpage"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Packers and Movers in Arumbakkam</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Reliable local shifting services in and around Arumbakkam
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏠 1BHK to 4BHK</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🏢 Office Moves</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🚗 Vehicle Transport</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">🛡️ Insurance Options</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us in Arumbakkam?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Site Survey</h3>
              <p className="text-gray-600 text-sm">Accurate quotations with detailed site assessment</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe Handling</h3>
              <p className="text-gray-600 text-sm">We avoid hazardous materials and follow safety protocols</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transit Insurance</h3>
              <p className="text-gray-600 text-sm">Optional insurance coverage for added peace of mind</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Proper disposal of packing waste and materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Arumbakkam</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">House Shifting</h3>
              <p className="text-gray-600 text-sm">1BHK to 4BHK apartment and independent house moves</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Office Relocation</h3>
              <p className="text-gray-600 text-sm">IT equipment and office furniture moving</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🏍️</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-800">Vehicle Transport</h3>
              <p className="text-gray-600 text-sm">Two-wheeler and car transport services</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">♻️</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-800">Waste Disposal</h3>
              <p className="text-gray-600 text-sm">Packing, unpacking, and disposal of packing waste</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Move in Arumbakkam?</h2>
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


