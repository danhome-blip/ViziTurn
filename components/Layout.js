// components/Layout.js
import { useRouter } from 'next/router';
import Header from './Header';

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F5EFEA' // alb murdar uniform pe TOT ecranul
      }}
    >
      {isHome && <Header />} {/* Header DOAR pe landing */}
      <main>{children}</main>
    </div>
  );
}
