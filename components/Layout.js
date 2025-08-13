import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FBF6EF', // crem pe TOT ecranul
      }}
    >
      {/* NU afișăm header-ul pe pagina principală */}
      {!isHome && (
        <header style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
          <strong>Helpick Social</strong>{' '}
          <a href="/feed" style={{ marginLeft: 16 }}>Feed</a>
          <a href="/post" style={{ marginLeft: 12 }}>Postează</a>
          <a href="/login" style={{ marginLeft: 12 }}>Autentificare</a>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}

