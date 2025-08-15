// components/Layout.js
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FBF6EF' // păstrez culoarea ta de fundal
      }}
    >
      {/* Header-ul apare pe TOATE paginile, inclusiv Landing */}
      <Header />

      {/* Aici se inserează conținutul paginii curente (index, about, rules, etc.) */}
      <main>{children}</main>
    </div>
  );
}
