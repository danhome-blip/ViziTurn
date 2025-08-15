// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div style={{ maxWidth: 860, margin: '28px auto', padding: '0 8px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#0b6b61' }}>← Înapoi</a>

        <h1 style={{ marginTop: 16 }}>Despre Viziturn</h1>
        <p>ViziTurn este o scenă echitabilă. Postările se rotesc pe rând, astfel încât fiecare are momentul să fie văzut — fără algoritmi care te coboară.</p>
        <ul>
          <li>Vizibilitate egală: intri în rotație.</li>
          <li>Raport clar: afișări & clickuri.</li>
          <li>Fără spam: reguli simple și moderare.</li>
        </ul>

        <h2>About (EN)</h2>
        <p>ViziTurn is a fair stage. Posts rotate turn-by-turn so everyone gets a moment in the spotlight — no burying algorithms.</p>
      </div>
    </Layout>
  );
}
