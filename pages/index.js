// pages/index.js
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Helpick Social</title>
        <meta name="description" content="Helpick Social" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FBF8F1', // fundal deschis
          padding: '24px',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          {/* Logo din /public/logo.png */}
          <Image
            src="/logo.png"
            alt="helpick social"
            width={120}
            height={120}
            priority
          />

          {/* Numele sub logo */}
          <h1 style={{
            marginTop: 16,
            fontSize: 28,
            lineHeight: 1.2,
            color: '#0F6A6F', // teal închis
            fontWeight: 700,
            letterSpacing: '0.2px'
          }}>
            helpick social
          </h1>

          {/* Buton Autentificare */}
          <a
            href="/login"
            style={{
              display: 'inline-block',
              marginTop: 24,
              padding: '10px 18px',
              borderRadius: 10,
              background: '#0F6A6F',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Autentificare
          </a>
        </div>
      </main>
    </>
  );
}
