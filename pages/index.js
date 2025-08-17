import React from 'react';
export default function Home() {
  return (
    <div>
      <header className="border-b">
        <div className="container flex h-14 items-center justify-between">
          <a href="/" className="font-semibold">Viziturn</a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="/about" className="hover:underline">Despre</a>
            <a href="/rules" className="hover:underline">Reguli</a>
            <a href="/login" className="btn-primary">Intră în cont</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="container py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Postezi. <span className="text-blue-500">Toți văd.</span><br/> Fără algoritmi care te ascund.
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                Viziturn livrează fiecare postare către toți urmăritorii — pe rând, corect.
                Ai rapoarte reale: afișări și clickuri. Fără „vanity metrics”.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="/login" className="btn-primary">Începe gratuit</a>
                <a href="/about" className="btn-ghost">Cum funcționează</a>
              </div>
            </div>
            <div className="card">
              <div className="mb-3 text-sm text-zinc-500">Previzualizare rotație</div>
              <div className="grid grid-cols-3 gap-3">
                {['Tura 1','Tura 2','Tura 3','Tura 4','Tura 5','Tura 6'].map(x => (
                  <div key={x} className="rounded-lg bg-zinc-50 p-4 text-center">{x}</div>
                ))}
              </div>
              <p className="mt-4 text-xs text-zinc-500">Postările intră în rotație și primesc expunere egală.</p>
            </div>
          </div>
        </section>
        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Vizibilitate egală','Fiecare postare intră în rotație; nimeni nu e coborât de algoritm.'],
              ['Măsurare clară','Afișări reale și clickuri, nu doar impresii vagi.'],
              ['Fără spam','Reguli simple și moderare ca să păstrăm scena curată.'],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="text-lg font-medium">{t}</h3>
                <p className="mt-2 text-sm text-zinc-600">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="container py-16 text-center">
          <h2 className="text-3xl font-semibold">E rândul tău să fii văzut.</h2>
          <p className="mt-3 text-zinc-600">Creează-ți contul și publică prima postare în 60 de secunde.</p>
          <a href="/login" className="mt-6 inline-block btn-primary">Creează cont</a>
        </section>
      </main>
      <footer className="mt-20 border-t">
        <div className="container py-10 text-sm text-zinc-600">
          © {new Date().getFullYear()} Viziturn • <a className="hover:underline" href="/rules">Reguli &amp; Disclaimer</a>
        </div>
      </footer>
    </div>
  );
}
