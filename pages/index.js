export default function Landing(){
  return (
    <section>
      <h1 style={{marginTop:6}}>Vizibilitate echitabilă. Fără algoritmi ascunși.</h1>
      <p>Postările ajung la publicul relevant (Țară + Categorie) și expiră automat (1/3/7 zile), păstrând feed-ul curat.</p>
      <ul>
        <li>Targetare: Țară + Categorie</li>
        <li>Expirare automată</li>
        <li>Vizibilitate egală în feed</li>
        <li>Raport: Click-uri</li>
        <li>Filtru anti-irelevant</li>
      </ul>
      <p>
        <a href="/feed" style={{border:'1px solid #111',background:'#111',color:'#fff',padding:'10px 14px',borderRadius:10,textDecoration:'none'}}>Vezi feed</a>
        &nbsp;&nbsp;
        <a href="/post">Publică acum</a>
      </p>
    </section>
  );
}