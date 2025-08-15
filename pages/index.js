// components/Header.js
export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#F0EDEB', // alb murdar (WhatsApp style)
        borderBottom: '1px solid #ddd', // linie discretă
      }}
    >
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
        }

        .brand img {
          height: 40px;
          width: auto;
        }

        .nav {
          display: flex;
          gap: 15px;
        }

        .nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .nav a:hover {
          color: #000;
        }
      `}</style>

      <div className="container">
        <div className="brand">
          <img src="/logo.png" alt="ViziTurn" />
        </div>
        <nav className="nav">
          <a href="/despre">Despre Viziturn</a>
          <a href="/reguli">Reguli & Disclaimer</a>
        </nav>
      </div>
    </header>
  );
}
