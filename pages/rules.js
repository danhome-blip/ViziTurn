// pages/rules.js
import Layout from '../components/Layout';

export default function Rules() {
  return (
    <Layout>
      <div style={{ maxWidth: 860, margin: '28px auto', padding: '0 8px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#0b6b61' }}>← Înapoi</a>

        <h1>Reguli & Disclaimer</h1>
        <h3>Reguli</h3>
        <ul>
          <li>Fără ură, hărțuire, nuditate, doxing sau fraudă.</li>
          <li>Conținutul trebuie să fie legal și potrivit pentru public.</li>
          <li>Nu posta spam; respectă rotația și nu abuza butoanele.</li>
          <li>Moderatorii pot ascunde/șterge conținutul care încalcă regulile.</li>
        </ul>

        <h3>Disclaimer</h3>
        <p>ViziTurn este în dezvoltare. Serviciul este „as-is”, fără garanții; pot exista erori sau perioade de indisponibilitate. Prin folosire, accepți regulile și că datele aflate în pagină pot fi moderate.</p>
      </div>
    </Layout>
  );
}
