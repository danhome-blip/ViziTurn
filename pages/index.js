// pages/index.js
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function Home() {
  return (
    <Layout>
      {/* Header-ul există DOAR pe landing */}
      <Header />

      <section
        style={{
          maxWidth: 680,
          margin: '48px auto 0',
          padding: '28px 32px',
          background: '#fff',
          borderRadius: 18,
          boxShadow: '0 2px 18px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 18
        }}
      >
        <img src="/logo.png?v=3" alt="ViziTurn" width="56" height="56" />
        <h1 style={{ margin: 0, fontWeight: 800, letterSpacing: 0.5, color: '#1c2a2f' }}>
          ViziTurn
        </h1>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28, marginBottom: 40 }}>
        <a
          href="/login"
          style={{
            background: '#0b6b61',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 12,
            textDecoration: 'none',
            fontWeight: 700,
            boxShadow: '0 2px 10px rgba(0,0,0,0.10)'
          }}
        >
          Sign in
        </a>
      </div>
    </Layout>
  );
}
