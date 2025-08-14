import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Bike Transport Service | Industrial Machinery Movers',
  description: 'Two-wheeler transport with secure packing and quick delivery.'
};

export default function BikeTransportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services/industrial-machinery-movers" className="text-blue-100 hover:underline">Back</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Bike Transport Service</h1>
          <p className="mt-4 text-blue-100 max-w-2xl">Door-to-door bike relocation with protective packing, careful handling and on-time delivery.</p>
        </div>
        <div className="absolute right-8 top-8 w-24 h-24 bg-yellow-400/70 rounded-full blur-xl" />
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <Image src="/img/vechical/bike_transport.jpg" alt="Bike transport" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Scratch-free packing and secure tie-downs</li>
              <li>Insurance support</li>
              <li>Intercity and interstate coverage</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/quote" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Get Quote</Link>
              <a href="tel:+917550016167" className="bg-white border px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-50">Call</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


