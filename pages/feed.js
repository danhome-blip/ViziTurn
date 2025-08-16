import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const [preferences, setPreferences] = useState([]);

  // Încarcă preferințele utilizatorului
  useEffect(() => {
    const loadPreferences = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('user_preferences')
        .select('categories')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setPreferences(data.categories);
      }
    };

    loadPreferences();
  }, [user]);

  // Încarcă postările active și filtrează după preferințe
  useEffect(() => {
    const loadPosts = async () => {
      if (!user || preferences.length === 0) return;

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .gte('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false });

      if (data) {
        // Filtrăm doar postările din categoriile alese
        const filtered = data.filter(post => preferences.includes(post.category));
        setPosts(filtered);
      }
    };

    // Așteaptă puțin pentru a da timp încărcării preferințelor
    const timer = setTimeout(loadPosts, 800);
    return () => clearTimeout(timer);
  }, [user, preferences]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedul tău</h2>
        
        {preferences.length === 0 ? (
          <p className="text-gray-600">
            Nu ai ales încă categoriile de interes. <br />
            <Link href="/post" className="text-primary font-medium hover:underline">
              Mergi la postare pentru a alege.
            </Link>
          </p>
        ) : (
          <p className="text-gray-600 mb-6">
            Vezi doar: <strong>{preferences.join(', ')}</strong>
          </p>
        )}

        <div className="space-y-5">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Niciun conținut disponibil acum.
            </p>
          ) : (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
