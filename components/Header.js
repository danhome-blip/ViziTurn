// components/Header.js
export default function Header() {
  const link = {
    padding:'8px 12px',
    border:'1px solid #ddd',
    borderRadius:'8px',
    color:'#0a0a0a',
    textDecoration:'none'
  };

  return (
    <header style={{position:'sticky', top:0, zIndex:10, background:'#fff', borderBottom:'1px solid #eee'}}>
      <div style={{maxWidth:960, margin:'0 auto', padding:'12px 20px',
                   display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <a href="/" style={{display:'flex', alignItems:'center', gap:10, textDecoration:'none'}}>
          <img src="/logo.png?v=2" alt="Viziturn" width="28" height="28" />
          <strong style={{fontSize:18, color:'#0a0a0a'}}>Viziturn</strong>
        </a>
        <nav style={{display:'flex', gap:12}}>
          <a href="/about" style={link}>Despre Viziturn</a>
          <a href="/rules" style={link}>Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
