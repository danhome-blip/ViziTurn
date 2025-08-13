export default function Home() {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 0px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 24,
        padding: 24,
      }}
    >
      {/* Logo-ul din /public/logo.png  */}
      <img
        src="/logo.png"
        alt="hel pick social logo"
        width={240}
        height={240}
        style={{ display: 'block' }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <a
        href="/login"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          borderRadius: 8,
          background: '#0f6a6a',      // verde-albăstrui din logo
          color: 'white',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 16,
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
        }}
      >
        Sign in
      </a>
    </main>
  );
}
