// components/Header.js
export default function Header() {
  const link = {
    padding: '10px 14px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    color: '#0a0a0a',
    textDecoration: 'none',
    fontWeight: 500,
    whiteSpace: 'nowrap'
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#F0EDEB',     // alb murdar (stil WhatsApp)
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        rowGap: 10
      }}>
        {/* Brand */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png?v=4" alt="ViziTurn" width="28" height="28" style={{ objectFit: 'contain' }} />
          <strong style={{ fontSize: 18, color: '#0a0a0a' }}>ViziTurn</strong>
        </a>

        {/* Navigație */}
        <nav style={{ display: 'flex', gap: 12, marginLeft: 'auto', flexWrap: 'wrap' }}>
          <a href="/about" style={link}>Despre Viziturn</a>
          <a href="/rules" style={link}>Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
