// components/Layout.js
export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F7EFEA', // fundal principal (cald, tip WhatsApp)
        padding: '0 12px'
      }}
    >
      <main>{children}</main>
    </div>
  );
}
