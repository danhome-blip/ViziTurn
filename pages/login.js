import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = typeof window !== 'undefined'
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  : null;

export default function Login(){
  const [email,setEmail]=useState(''); const [sent,setSent]=useState(false); const [err,setErr]=useState('');
  async function send(e){ e.preventDefault(); setErr('');
    if(!supabase){ setErr('Client indisponibil'); return; }
    const { error } = await supabase.auth.signInWithOtp({
      email, options:{ emailRedirectTo: typeof window!=='undefined'? window.location.origin+'/feed': undefined }
    });
    if (error) setErr(error.message); else setSent(true);
  }
  return (
    <div style={{maxWidth:480}}>
      <h2>Autentificare</h2>
      <p>Primești un link pe email (magic link). Nu păstrăm parole.</p>
      <form onSubmit={send} style={{display:'grid',gap:10}}>
        <input type="email" required placeholder="email@exemplu.com" value={email} onChange={e=>setEmail(e.target.value)} />
        <button disabled={sent}>{sent?'Trimis':'Trimite linkul de login'}</button>
      </form>
      {err && <p style={{color:'crimson'}}>{err}</p>}
    </div>
  );
}