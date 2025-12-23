import Link from "next/link";
import PageSEO from "@/app/components/PageSEOClient";

export const dynamic = "force-static";

export default function KoyambeduLocationPage() {
  const title = "Packers and Movers in Koyambedu Chennai | Near You – KVT Packers";
  const description =
    "Looking for reliable packers and movers near you in Koyambedu? KVT Packers & Movers offers safe house shifting and office relocation services in Koyambedu and nearby areas.";
  const keywords = [
    "packers and movers koyambedu",
    "packers and movers in koyambedu chennai",
    "packers and movers near me in koyambedu",
    "house shifting koyambedu",
    "office relocation koyambedu",
    "local packers and movers koyambedu",
    "packers and movers near cmbt",
    "packers and movers near koyambedu metro",
    "packers and movers near koyambedu market",
    "trusted movers koyambedu",
    "affordable packers and movers koyambedu",
  ];

  const faqs = [
    {
      q: "Are you the best packers and movers near me in Koyambedu?",
      a: "KVT Packers & Movers is a highly rated moving company serving Koyambedu and nearby areas in Chennai. Our local team knows the roads around CMBT Bus Stand, Koyambedu Wholesale Market, and Koyambedu Metro Station, so your house shifting or office move is planned safely and completed on time.",
    },
    {
      q: "Do you provide local shifting services near CMBT?",
      a: "Yes. We regularly handle local shifting requests around CMBT Bus Stand, Arumbakkam, MMDA Colony, Anna Nagar West, Aminjikarai, and Nerkundram. Our crew can manage everything from packing and loading to transport, unloading, and basic placement at your new home or office.",
    },
    {
      q: "How much does house shifting cost in Koyambedu?",
      a: "House shifting charges in Koyambedu typically start from ₹3,500–₹6,500 for 1BHK and ₹6,500–₹12,000 for 2BHK, depending on floor access, lift availability, distance within Chennai, and the volume of items. We provide a clear quote after understanding your exact requirements.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kvtpackersandmovers.com/packers-and-movers-in-koyambedu#localbusiness",
    name: "KVT Packers and Movers – Koyambedu Service Area",
    url: "https://kvtpackersandmovers.com/packers-and-movers-in-koyambedu",
    telephone: "+91-75500-16167",
    email: "kvtpackersandmovers@gmail.com",
    image: "https://kvtpackersandmovers.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd floor, 5/11, Anna Avenue, Opp CMBT, Near Tamil Nadu Election Commission",
      addressLocality: "Koyambedu",
      addressRegion: "Chennai",
      addressCountry: "IN",
      postalCode: "600106",
    },
    areaServed: [
      {
        "@type": "Neighborhood",
        name: "Koyambedu",
        containedInPlace: {
          "@type": "City",
          name: "Chennai",
        },
      },
      { "@type": "Neighborhood", name: "Arumbakkam" },
      { "@type": "Neighborhood", name: "Anna Nagar West" },
      { "@type": "Neighborhood", name: "MMDA Colony" },
      { "@type": "Neighborhood", name: "Aminjikarai" },
      { "@type": "Neighborhood", name: "Nerkundram" },
    ],
    serviceOffered: [
      {
        "@type": "Service",
        name: "House Shifting in Koyambedu",
        serviceType: "House Shifting",
        areaServed: {
          "@type": "Neighborhood",
          name: "Koyambedu",
        },
      },
      {
        "@type": "Service",
        name: "Office Relocation in Koyambedu",
        serviceType: "Office Relocation",
        areaServed: {
          "@type": "Neighborhood",
          name: "Koyambedu",
        },
      },
    ],
  };

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        keywords={keywords}
        url="/packers-and-movers-in-koyambedu"
        image="/logo.png"
        type="webpage"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted Packers and Movers in Koyambedu – Near You
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Move safely within Koyambedu and across Chennai with a local team that
            understands the busy roads around CMBT Bus Stand, Koyambedu Wholesale
            Market, and Koyambedu Metro Station.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🏠 House Shifting
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🏢 Office Relocation
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🚚 Local & Intercity
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              📦 Safe Packing
            </span>
          </div>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* Intro & Context Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <p className="text-lg text-gray-700">
            If you are searching for{" "}
            <strong>packers and movers near me in Koyambedu</strong>, KVT Packers
            &amp; Movers offers a dedicated local moving team that covers apartment
            blocks, individual houses, and commercial spaces around CMBT, the
            Koyambedu Wholesale Market, and adjoining main roads. We handle full
            packing, loading, safe transport, unloading, and basic setup so your
            move within Koyambedu or to other parts of Chennai feels simple and
            well-organised.
          </p>
          <p className="text-gray-700">
            Our crew regularly serves nearby areas such as{" "}
            <strong>Arumbakkam</strong>, <strong>Anna Nagar West</strong>,{" "}
            <strong>MMDA Colony</strong>, <strong>Aminjikarai</strong>, and{" "}
            <strong>Nerkundram</strong>. Whether you are shifting a family home,
            a small office near Koyambedu Metro Station, or a shop close to the{" "}
            Koyambedu Market, we plan your move carefully with clear communication
            and transparent pricing.
          </p>
        </div>
      </section>

      {/* House Shifting Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            House Shifting Services in Koyambedu
          </h2>
          <p className="text-gray-700 mb-4">
            House shifting in Koyambedu often involves narrow streets, peak-hour
            traffic near CMBT Bus Stand, and apartments with limited lift access.
            Our team plans your move around these realities – from choosing the
            right vehicle size to arranging early-morning or off-peak loading
            slots to minimise delays and disturbance to neighbours.
          </p>
          <p className="text-gray-700 mb-4">
            We bring high-quality cartons, bubble wrap, stretch film, and
            protective coverings for furniture, kitchenware, electronics, and
            fragile décor. Beds, wardrobes, and modular storage are dismantled and
            reassembled carefully at your new address in Koyambedu, Arumbakkam, or
            any other part of Chennai.
          </p>
          <p className="text-gray-700">
            Whether you are moving from an apartment near Koyambedu Metro Station
            or an independent house closer to Nerkundram, our crew ensures that
            every box is labelled clearly and placed in the right room so you can
            settle in faster.
          </p>
        </div>
      </section>

      {/* Office Relocation Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Office Relocation Services in Koyambedu
          </h2>
          <p className="text-gray-700 mb-4">
            Koyambedu is a busy hub for offices, logistics companies, and trading
            businesses. Our office relocation services focus on minimising
            downtime so your team can get back to work quickly. We create a
            sequence for packing workstations, computers, files, and equipment so
            that essential items are available first at the new location.
          </p>
          <p className="text-gray-700 mb-4">
            Sensitive electronics are packed with anti-static materials and
            labelled by department or cabin. Chairs, workstations, racks, and
            storage units are dismantled where required and re-assembled at your
            new office in or around Koyambedu, Anna Nagar West, Aminjikarai, or
            other nearby commercial zones.
          </p>
          <p className="text-gray-700">
            If your office is close to CMBT Bus Stand or the Koyambedu Wholesale
            Market, we plan loading and unloading timings to avoid congestion and
            coordinate with building management to follow access and safety
            rules.
          </p>
        </div>
      </section>

      {/* Local Packers and Movers Near Koyambedu */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Local Packers and Movers near Koyambedu
          </h2>
          <p className="text-gray-700 mb-4">
            When you look for{" "}
            <strong>packers &amp; movers near you</strong>, you want a team that
            can reach your location quickly, understands local parking rules, and
            brings the right manpower for the job. Our operations base is close to
            Koyambedu, which allows us to attend last-minute local moves and same
            day shifting requests whenever possible.
          </p>
          <p className="text-gray-700 mb-4">
            We serve residential streets and main roads across Koyambedu,
            including routes that connect to Arumbakkam, MMDA Colony, Nerkundram,
            and Anna Nagar West. From small single-room shifts to full 3BHK
            relocations, we scale the team and vehicle size to suit your
            inventory and building access.
          </p>
          <p className="text-gray-700">
            For customers comparing options across Chennai, you can also explore
            our{" "}
            <Link
              href="/locations/anna-nagar"
              className="text-green-700 font-semibold hover:underline"
            >
              packers and movers in Anna Nagar
            </Link>{" "}
            and{" "}
            <Link
              href="/locations/arumbakkam"
              className="text-green-700 font-semibold hover:underline"
            >
              packers and movers in Arumbakkam
            </Link>{" "}
            pages to see how we support nearby neighbourhoods around Koyambedu.
          </p>
        </div>
      </section>

      {/* Why Choose KVT in Koyambedu */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose KVT Packers &amp; Movers in Koyambedu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Local Route Knowledge
              </h3>
              <p className="text-gray-700 text-sm">
                Our drivers and supervisors understand one-way routes, peak
                timings, and parking options around CMBT, Koyambedu Metro
                Station, and the Wholesale Market, reducing delays and last-minute
                surprises.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Safe Packing &amp; Handling
              </h3>
              <p className="text-gray-700 text-sm">
                From fragile glassware to heavy wardrobes and office equipment, we
                use quality packing materials and follow a clear loading order so
                items remain secure throughout the move within Chennai.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Transparent Local Pricing
              </h3>
              <p className="text-gray-700 text-sm">
                We explain how pricing works for local moves in Koyambedu –
                distance, floor access, labour, and packing – so you know exactly
                what you are paying for with no hidden charges.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Support Across Nearby Areas
              </h3>
              <p className="text-gray-700 text-sm">
                One team can handle moves that start in Koyambedu and end in
                places like Arumbakkam, Anna Nagar West, MMDA Colony, Aminjikarai,
                or Nerkundram, keeping coordination simple for your family or
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions – Koyambedu
          </h2>
          <div className="space-y-6">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-green-700">
                  {f.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Move in or from Koyambedu?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Tell us about your house shifting or office relocation plan in
            Koyambedu and get a clear, no-obligation quote from our team.
          </p>
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


