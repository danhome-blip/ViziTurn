import Layout from '../components/Layout';

export default function Rules() {
  return (
    <Layout>
      <main style={{maxWidth:860, margin:'40px auto', padding:'0 20px'}}>
        <h1>Despre Viziturn</h1>
        <p>Viziturn este o scenă echitabilă. Postările se rotesc pe rând, astfel încât
           fiecare are momentul să fie văzut — fără algoritmi care te coboară.</p>
        <ul>
          <li>Vizibilitate egală: intri în rotație.</li>
          <li>Raport clar: afișări & clickuri.</li>
          <li>Fără spam: reguli simple și moderare.</li>
        </ul>

        <h2>About (EN)</h2>
        <p>Viziturn is a fair stage. Posts rotate turn-by-turn so everyone gets a
           moment in the spotlight — no burying algorithms.</p>
      </main>
    </Layout>
  );
}
