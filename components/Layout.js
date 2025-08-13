export default function Layout({ children }) {
  return (
    <div style={{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',minHeight:'100dvh',display:'flex',flexDirection:'column'}}>
      <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'14px 16px',borderBottom:'1px solid #eee'}}>
        <a href="/" style={{textDecoration:'none',color:'#111'}}><strong>Helpick Social</strong></a>
        <nav style={{display:'flex',gap:10}}>
          <a href="/feed">Feed</a>
          <a href="/post">Postează</a>
          <a href="/login">Autentificare</a>
        </nav>
      </header>
      <main style={{maxWidth:920,margin:'0 auto',padding:16,flex:1}}>{children}</main>
      <footer style={{borderTop:'1px solid #eee',padding:'12px 16px',fontSize:12,opacity:.7}}>
        © {new Date().getFullYear()} Helpick Social • <a href="/legal/disclaimer">Disclaimer</a>
      </footer>
    </div>
  );
}