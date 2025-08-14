import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Tipper Lorry Hire | Industrial Machinery Movers',
  description: 'Tipper lorries for bulk material transport and debris removal.'
};

export default function TipperLorryHirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services/industrial-machinery-movers" className="text-blue-100 hover:underline">Back</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Tipper Lorry Hire</h1>
          <p className="mt-4 text-blue-100 max-w-2xl">On-demand fleet for sand, aggregates, debris and muck shifting with reliable drivers.</p>
        </div>
        <div className="absolute left-8 bottom-8 w-24 h-24 bg-green-500/70 rounded-xl blur-xl" />
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Prompt dispatch and GPS-tracked fleet</li>
              <li>Per-load and per-day pricing</li>
              <li>Experienced drivers with safety focus</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Get Quote</Link>
              <a href="tel:+917550016167" className="bg-white border px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-50">Call</a>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <Image src="/img/vechical/Lorry_Tripper.jpg" alt="Tipper lorry" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}


