export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#fdfaf5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <img
        src="/logo.png"
        alt="Helpick Social"
        style={{ width: '120px', height: 'auto', marginBottom: '20px' }}
      />
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#005f63',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sign in
      </button>
    </div>
  );
}
