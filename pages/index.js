import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div style={{ maxWidth: 880, margin: '16px auto 0', padding: '0 16px' }}>
        {/* CARD LOGO + TITLU */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            padding: 24
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src="/logo.png?v=3" alt="ViziTurn" width="56" height="56" />
            <h1 style={{ margin: 0, fontSize: 48, lineHeight: 1.1, color: '#16333A' }}>
              ViziTurn
            </h1>
          </div>
        </div>

        {/* BUTON SIGN IN */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a
            href="/login"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#126E64',
              color: '#fff',
              borderRadius: 12,
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Sign in
          </a>
        </div>
      </div>
    </Layout>
  );
}
