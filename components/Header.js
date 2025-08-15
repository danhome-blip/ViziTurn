// components/Header.js
export default function Header() {
  const link = {
    padding: '10px 14px',
    border: '1px solid #d9cdc7',
    borderRadius: '12px',
    color: '#2b2b2b',
    textDecoration: 'none'
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#ECE5DD', // alb murdar (doar header)
        borderBottom: '1px solid #e0d7d2'
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png?v=3" alt="ViziTurn" width="28" height="28" />
          <strong style={{ fontSize: 20, color: '#1b1f22' }}>ViziTurn</strong>
        </a>

        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="/about" style={link}>Despre Viziturn</a>
          <a href="/rules" style={link}>Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
