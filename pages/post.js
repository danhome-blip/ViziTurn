import Header from '../components/Header';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function PostPage({ user }) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState(1); // 1, 3 sau 7 zile

  // Dacă nu e logat, redirect la home
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Trebuie să fii autentificat pentru a posta.</p>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Autentificare
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculează data expirării
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + duration);

    // Obține URL-ul imaginii (mai târziu o vom salva în Supabase Storage)
    const imageUrl = image ? URL.createObjectURL(image) : null;

    // Salvează în tabela `posts`
    const { error } = await supabase
      .from('posts')
      .insert([
        {
          creator_id: user.id,
          title,
          link,
          category,
          image_url: imageUrl,
          expires_at: expiresAt.toISOString(),
        }
      ]);

    if (error) {
      alert('Eroare la postare: ' + error.message);
    } else {
      alert('Postare creată cu succes!');
      window.location.href = '/feed';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Publică o postare</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titlu
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Ex: Concert AC/DC cover"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categorie
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Alege o categorie</option>
              <option value="muzica">Muzică</option>
              <option value="literatura">Literatură</option>
              <option value="food">Food</option>
              <option value="arta">Artă</option>
              <option value="educatie">Educație</option>
              <option value="stiri">Știri</option>
              <option value="evenimente">Evenimente</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link de redirecționare
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://tusite.ro"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Imagine (opțional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Durată afișare
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value={1}>1 zi (2€)</option>
              <option value={3}>3 zile (5€)</option>
              <option value={7}>7 zile (15€)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Plătește și postează
          </button>
        </form>
      </main>
    </div>
  );
}
