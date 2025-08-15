// components/Layout.js
import { useRouter } from 'next/router';
import Header from './Header';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/'; // afișăm Header doar pe landing

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0EDEB', // alb murdar (stil WhatsApp)
      }}
    >
      {isHome && <Header />}   {/* Header DOAR pe / */}
      <main>{children}</main>
    </div>
  );
}
