import PageSEO from "@/app/components/PageSEOClient";
import Link from "next/link";

export const dynamic = "force-static";

export default function MogappairLocationPage() {
  const title = "Packers and Movers in Mogappair | Local Shifting & Relocation Services";
  const description = "Trusted packers and movers in Mogappair for house shifting, office relocation, and local moving. Professional packing, safe handling, and timely delivery at affordable prices. Serving Mogappair East, Mogappair West, Padi Road, and nearby areas.";
  const keywords = [
    "packers and movers mogappair",
    "packers and movers near me mogappair",
    "local packers and movers mogappair",
    "house shifting mogappair",
    "office relocation mogappair",
    "trusted moving company mogappair",
    "best packers and movers mogappair",
    "affordable packers and movers mogappair"
  ];

  const faqs = [
    {
      q: "Do you provide same-day shifting services in Mogappair?",
      a: "Yes, for short-distance local moves within Mogappair and nearby areas, we can often arrange same-day service based on availability. We recommend booking 1-2 days in advance for better scheduling."
    },
    {
      q: "What areas near Mogappair do you serve?",
      a: "We serve Mogappair East, Mogappair West, Padi Road, Ayanavaram, and surrounding localities. Our team is familiar with the local routes and can provide efficient moving services across these areas."
    },
    {
      q: "Do you handle office relocation in Mogappair?",
      a: "Yes, we provide complete office relocation services in Mogappair including IT equipment handling, furniture disassembly, and minimal downtime moves. We work around your business schedule to minimize disruption."
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
      "@type": "Place",
      name: "Mogappair, Chennai"
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
        url="/locations/mogappair"
        image="/logo.png"
        type="webpage"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Packers and Movers in Mogappair</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Your trusted local moving partner in Mogappair. If you're searching for packers and movers near me in Mogappair or reliable local packers and movers near you in Mogappair for house and office shifting, we provide professional services across Mogappair East, Mogappair West, Padi Road, and Ayanavaram.
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us in Mogappair?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick local moves with same-day availability in Mogappair</p>
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
              <p className="text-gray-600 text-sm">Flexible scheduling including weekends for your convenience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Deep knowledge of Mogappair's layout and access points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services in Mogappair</h2>
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

      {/* Landmark-Based Local SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Packers and Movers Near Mogappair Landmarks</h2>
          <p className="text-gray-700 mb-4">
            Our team is well-acquainted with Mogappair's key areas and landmarks, which helps us plan efficient routes and coordinate moves smoothly. Whether you're located in Mogappair East near the main commercial areas, Mogappair West with its residential complexes, along Padi Road with its busy traffic, or in the Ayanavaram vicinity, we understand the local geography and access points.
          </p>
          <p className="text-gray-700 mb-4">
            This familiarity with Mogappair's layout means we can navigate narrow lanes, coordinate parking, and handle loading/unloading efficiently even during peak hours. Our experience with moves around these landmarks ensures timely service and reduces delays caused by traffic or access challenges.
          </p>
          <p className="text-gray-700">
            Whether you're moving within Mogappair East, Mogappair West, or between these areas and nearby localities like Padi Road or Ayanavaram, our local knowledge translates to a smoother, more reliable moving experience for your house shifting or office relocation needs.
          </p>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Areas We Serve in and Around Mogappair</h2>
          <p className="text-gray-700 mb-4">
            Our Mogappair team covers a wide local radius so that families and offices in neighbouring streets and sub-localities can also benefit from same-day or next-day shifting support. We handle local moves for apartments, independent houses, and commercial spaces across Mogappair and its surrounding areas.
          </p>
          <p className="text-gray-700 mb-4">
            Below are the main areas where we regularly provide packing, loading, transport, and unloading services:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li>Mogappair East</li>
            <li>Mogappair West</li>
            <li>Padi Road</li>
            <li>Ayanavaram</li>
            <li>Anna Nagar (nearby areas)</li>
            <li>Kilpauk</li>
            <li>Villivakkam</li>
            <li>Kolathur</li>
            <li>Perambur</li>
          </ul>
          <p className="text-gray-700">
            If you are planning a move within these areas or between Mogappair and other parts of Chennai, our nearby crew can usually schedule a quick site assessment and offer same-day or next-day moving slots, subject to availability.
          </p>
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

      {/* Pricing / Cost Intent Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Packers and Movers Charges in Mogappair</h2>
          <p className="text-gray-700 mb-4">
            Moving costs in Mogappair depend on factors like distance within Chennai, floor level, lift access, and the total volume of items. We follow a transparent pricing model and share all charges clearly before you confirm the booking.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>
              <strong>1BHK local shifting:</strong> typically starts from ₹3,500–₹6,500 for moves within Mogappair and nearby areas like Padi Road and Ayanavaram.
            </li>
            <li>
              <strong>2BHK local shifting:</strong> usually ranges from ₹6,500–₹12,000 depending on inventory size and access conditions in Mogappair East or Mogappair West.
            </li>
            <li>
              <strong>Office relocation:</strong> priced based on the number of workstations, equipment, and distance between old and new premises. We provide detailed quotes after a site survey.
            </li>
          </ul>
          <p className="text-gray-700">
            For an accurate quote tailored to your house or office in Mogappair, our team can quickly gather details over a call or arrange a short site visit in and around Mogappair East, Mogappair West, Padi Road, or Ayanavaram.
          </p>
        </div>
      </section>

      {/* Local Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">What Our Mogappair Customers Say</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              &quot;I was looking for the best packers and movers near me in Mogappair and KVT handled my 2BHK shift very smoothly. The team arrived on time, packed everything neatly, and completed the move from Mogappair East to Mogappair West without any damage. Highly recommended!&quot;
            </p>
            <p className="leading-relaxed">
              &quot;We used KVT for a small office move within Mogappair and were impressed by their reliable local shifting service in Mogappair. The staff were polite, efficient, and finished the relocation faster than we expected. Great service for businesses in the area.&quot;
            </p>
            <p className="leading-relaxed">
              &quot;Highly recommended for anyone planning a local move in and around Mogappair. Clear pricing, careful packing, and a professional crew that understands the locality very well. They made our move from Padi Road to Mogappair West stress-free.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Related Locations Internal Linking Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Related Locations We Serve</h2>
          <p className="text-gray-700 mb-4">
            If you are comparing options in nearby neighbourhoods, you can explore our other dedicated location pages for more details on services and coverage:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/locations/anna-nagar" className="text-green-700 font-semibold hover:underline">
                Packers and Movers in Anna Nagar
              </Link>
            </li>
            <li>
              <Link href="/locations/arumbakkam" className="text-green-700 font-semibold hover:underline">
                Packers and Movers in Arumbakkam
              </Link>
            </li>
            <li>
              <Link href="/locations/kilpauk" className="text-green-700 font-semibold hover:underline">
                Packers and Movers in Kilpauk
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move in Mogappair?</h2>
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

