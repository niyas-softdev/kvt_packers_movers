import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Car Transport Service | Industrial Machinery Movers',
  description: 'Safe and insured car transportation with door-to-door delivery.'
};

export default function CarTransportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services/industrial-machinery-movers" className="text-blue-100 hover:underline">Back</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Car Transport Service</h1>
          <p className="mt-4 text-blue-100 max-w-2xl">Doorstep pickup, secure loading and protected transit for your car. Transparent pricing and timely delivery.</p>
        </div>
        <div className="absolute left-6 top-6 w-24 h-24 bg-green-500/70 rounded-xl blur-xl" />
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Us</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Insured transit and professional handling</li>
              <li>Single car and multi-car carriers</li>
              <li>Real-time updates</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/quote" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Get Quote</Link>
              <a href="tel:+917550016167" className="bg-white border px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-50">Call</a>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <Image src="/img/vechical/car_transport.webp" alt="Car transport" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}


