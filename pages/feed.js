import { useEffect, useState } from 'react';

const COUNTRIES=['RO','IT','US','HK','DE','FR','ES','UK'];
const CATS=['arta','muzica','carte','ong','eveniment','educatie'];

export default function Feed(){
  const [country,setCountry]=useState('RO'); const [category,setCategory]=useState('arta');
  const [posts,setPosts]=useState([]); const [loading,setLoading]=useState(false);

  async function load(){ setLoading(true);
    const r=await fetch(`/api/posts/feed?country=${country}&category=${category}`); const j=await r.json();
    setPosts(j.posts||[]); setLoading(false);
  }
  useEffect(()=>{ load(); },[country,category]);

  return (
    <div>
      <h2>Feed</h2>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'8px 0 16px'}}>
        <select value={country} onChange={e=>setCountry(e.target.value)}>{COUNTRIES.map(c=><option key={c}>{c}</option>)}</select>
        <select value={category} onChange={e=>setCategory(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
        <button onClick={load} disabled={loading}>{loading?'...':'Actualizează'}</button>
      </div>
      {!posts.length && <p style={{opacity:.7}}>Nu sunt postări pentru filtrul ales.</p>}
      <ul style={{listStyle:'none',padding:0,display:'grid',gap:12}}>
        {posts.map(p=>(
          <li key={p.id} style={{border:'1px solid #eee',borderRadius:12,padding:12}}>
            <div style={{fontSize:12,opacity:.7}}>
              {p.country} • {p.category} • {p.type || 'standard'}{p.publisher?` • ${p.publisher}`:''} • publicat {new Date(p.published_at).toLocaleString()} • expiră {new Date(p.expires_at).toLocaleString()}
            </div>
            <h3 style={{margin:'6px 0 10px'}}>{p.title}</h3>
            <a className="btn" href={`/api/r/${p.id}`} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>Deschide</a>
            <div style={{fontSize:12,opacity:.7,marginTop:6}}>Clicks: {p.clicks_count}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}