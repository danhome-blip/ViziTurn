import Header from '../components/Header';
import Link from 'next/link';

export default function Home({ user }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ViziTurn</h1>
          <p className="text-xl text-gray-600">
            Vizibilitate garantată pentru creatori.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/feed">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-lg transition text-center cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Vezi conținut</h3>
              <p className="text-gray-500 text-sm">Doar ce alegi tu. Fără spam.</p>
            </div>
          </Link>

          <Link href="/post">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-lg transition text-center cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Postează</h3>
              <p className="text-gray-500 text-sm">Oferă-ți visibilitate doar celor interesați.</p>
            </div>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow border border-gray-100 text-center opacity-80">
            <h3 className="text-lg font-semibold mb-2">Fără cont?</h3>
            <p className="text-gray-500 text-sm">Autentifică-te cu Google – e rapid și sigur.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
