import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Fork Lift Hire | Industrial Machinery Movers',
  description: 'Reliable forklifts with trained operators for safe material handling.'
};

export default function ForkliftHirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services/industrial-machinery-movers" className="text-blue-100 hover:underline">Back</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Fork Lift Hire</h1>
          <p className="mt-4 text-blue-100 max-w-2xl">Electric and diesel forklifts for warehouses, factories and site handling. Short and long term rentals available.</p>
        </div>
        <div className="absolute left-6 top-6 w-24 h-24 bg-green-500/70 rounded-xl blur-xl" />
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Specifications</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>1.5–10 ton capacity</li>
              <li>Pallet forks, booms and attachments</li>
              <li>Experienced operators and quick dispatch</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/quote" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Get Quote</Link>
              <a href="tel:+917550016167" className="bg-white border px-6 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-50">Call</a>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <Image src="/img/vechical/forklift.jpg" alt="Forklift operations" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}


