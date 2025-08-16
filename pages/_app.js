import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  // Verifică sesiunea la încărcare
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    // Ascultă schimbările de autentificare
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Pasi user-ul ca prop la toate paginile
  return <Component {...pageProps} user={user} />;
}

export default MyApp;
