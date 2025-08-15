// components/Header.js
export default function Header() {
  const link = {
    padding: '10px 14px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    color: '#0a0a0a',
    textDecoration: 'none'
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#F5EFEA',          // aceeași culoare ca pagina
        borderBottom: '1px solid #E8E0DB',
        padding: '10px 0',               // mai puțin înalt
        marginBottom: '12px'             // spațiu mic sub header
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none'
          }}
        >
          <img src="/logo.png?v=3" alt="ViziTurn" width="28" height="28" />
          <strong style={{ fontSize: 18, color: '#0a0a0a' }}>ViziTurn</strong>
        </a>

        <nav style={{ display: 'flex', gap: 12 }}>
          <a href="/about" style={link}>Despre Viziturn</a>
          <a href="/rules" style={link}>Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
