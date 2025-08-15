// pages/index.js
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: '120px auto 80px',
        padding: '0 20px',
        textAlign: 'center',
      }}
    >
      {/* Card cu logo + titlu */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          padding: '24px 28px',
          background: '#ffffff',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}
      >
        <img
          src="/logo.png"
          alt="ViziTurn"
          width="56"
          height="56"
          style={{ display: 'block', borderRadius: 8 }}
        />
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(28px, 6vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: 0.2,
            color: '#17333a',
            fontWeight: 800,
          }}
        >
          ViziTurn
        </h1>
      </div>

      {/* Buton Sign in */}
      <div>
        <a
          href="/login"
          style={{
            display: 'inline-block',
            marginTop: 32,
            padding: '12px 28px',
            background: '#0f6b60',
            color: '#fff',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Sign in
        </a>
      </div>
    </main>
  );
}
