import { supabase } from '../lib/supabase';

export default function Header({ user }) {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/feed',
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">ViziTurn</h1>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
