// components/Layout.js
import { useRouter } from 'next/router';
import Header from './Header';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';          // Header doar pe landing

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' /* fundal pagină alb */ }}>
      {isHome && <Header />}                 {/* NU mai afișăm header pe alte pagini */}
      <main>{children}</main>
    </div>
  );
}
