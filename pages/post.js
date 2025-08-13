import { useState } from 'react';

const COUNTRIES=['RO','IT','US','HK']; const CATS=['arta','muzica','carte','ong','eveniment','educatie'];
const TYPES=['standard','ong','media'];

export default function Post(){
  const [country,setCountry]=useState('RO'); const [category,setCategory]=useState('arta');
  const [type,setType]=useState('standard');
  const [form,setForm]=useState({title:'',link_url:'',duration:'3',publisher:''}); const [busy,setBusy]=useState(false);
  async function create(e){ e.preventDefault(); setBusy(true);
    const r=await fetch('/api/posts/create',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        title:form.title.trim(), link_url:form.link_url.trim(),
        publisher:form.publisher.trim(), type, country, category, duration_days:Number(form.duration)
      })
    });
    if(r.ok){ setForm({title:'',link_url:'',duration:'3',publisher:''}); alert('Publicat!'); }
    else { const j=await r.json().catch(()=>({})); alert(j.error||'Eroare'); }
    setBusy(false);
  }
  return (
    <form onSubmit={create} style={{display:'grid',gap:10,maxWidth:680}}>
      <h2>Postează</h2>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <select value={country} onChange={e=>setCountry(e.target.value)}>{COUNTRIES.map(c=><option key={c}>{c}</option>)}</select>
        <select value={category} onChange={e=>setCategory(e.target.value)}>{CATS.map(c=><option key={c}>{c}</option>)}</select>
        <select value={type} onChange={e=>setType(e.target.value)}>{TYPES.map(t=><option key={t}>{t}</option>)}</select>
      </div>
      <input required placeholder="Nume/Pseudonim (publisher)" value={form.publisher} onChange={e=>setForm(v=>({...v,publisher:e.target.value}))}/>
      <input required placeholder="Titlu" value={form.title} onChange={e=>setForm(v=>({...v,title:e.target.value}))}/>
      <input required placeholder="Link (https://...)" value={form.link_url} onChange={e=>setForm(v=>({...v,link_url:e.target.value}))}/>
      <label>Durată
        <select value={form.duration} onChange={e=>setForm(v=>({...v,duration:e.target.value}))}>
          <option value="1">1 zi</option><option value="3">3 zile</option><option value="7">7 zile</option>
        </select>
      </label>
      <button className="btn" disabled={busy}>{busy?'Public...':'Publică'}</button>
      <p style={{fontSize:12,opacity:.7}}>Tipul <b>media</b> va fi limitat la 24h, indiferent de selecție. Tipul <b>ong</b> este permis gratuit (în această versiune fără Stripe).</p>
    </form>
  );
}