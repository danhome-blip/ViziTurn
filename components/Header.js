// components/Header.js
export default function Header() {
  const link = {
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    color: '#0a0a0a',
    textDecoration: 'none'
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#F0EDEB',   // alb murdar
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
        rowGap: '8px'
      }}>
        {/* Brand */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <img src="/logo.png?v=3" alt="ViziTurn" width="28" height="28" style={{ objectFit: 'contain' }} />
          <strong style={{ fontSize: 18, color: '#0a0a0a' }}>ViziTurn</strong>
        </a>

        {/* Navigație */}
        <nav style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
          <a href="/about" style={{ ...link, whiteSpace: 'nowrap' }}>Despre Viziturn</a>
          <a href="/rules" style={{ ...link, whiteSpace: 'nowrap' }}>Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
