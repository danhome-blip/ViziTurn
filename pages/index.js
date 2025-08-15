// pages/index.js
export default function Home() {
  return (
    <section style={{ maxWidth: 960, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
      <div style={{
        display:'inline-flex', alignItems:'center', gap:14,
        padding:24, background:'#fff', borderRadius:12,
        boxShadow:'0 1px 3px rgba(0,0,0,0.06)'
      }}>
        <img src="/logo.png?v=7" alt="ViziTurn" width="56" height="56" style={{objectFit:'contain'}} />
        <h1 style={{ margin:0, fontSize:40, color:'#16323A', fontWeight:700 }}>ViziTurn</h1>
      </div>

      <div style={{ marginTop:36 }}>
        <a href="/login" style={{
          display:'inline-block', background:'#136a63', color:'#fff',
          padding:'12px 24px', borderRadius:12, textDecoration:'none', fontWeight:600
        }}>
          Sign in
        </a>
      </div>
    </section>
  );
}
