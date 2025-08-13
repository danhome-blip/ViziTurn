# Helpick Social — MVP „loc minim” (Next.js + Supabase)

## Ce include
- Landing `/` (explică conceptul)
- Login `/login` (magic link Supabase)
- Feed `/feed` (filtrat pe Țară + Categorie)
- Postează `/post` (titlu, link, 1/3/7 zile, tip: standard/ong/media, publisher)
- Disclaimer `/legal/disclaimer`
- Layout global (Header, Footer)
- API:
  - `POST /api/posts/create` — creează postare + validări + blocklist
  - `GET  /api/posts/feed?country=RO&category=arta` — feed filtrat
  - `GET  /api/cron/expire` — marchează expiratele
  - `GET  /api/r/:id` — click-tracking + redirect
  - `GET  /api/health` — verificare rapidă
- SQL schema (Supabase): tabel `posts` + indexuri

## Variabile necesare (Vercel → Project → Settings → Environment Variables)
- `SUPABASE_URL` — Project URL
- `SUPABASE_SERVICE_ROLE_KEY` — service_role (server only)
- `NEXT_PUBLIC_SUPABASE_URL` — Project URL (public, pentru login)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon public key (pentru login)

## Pași
1) În Supabase → creezi proiect → **SQL Editor** → rulezi `sql/schema.sql`.
2) Pui variabilele de mediu în Vercel (Production).
3) Deploy din GitHub. Deschizi `/health` — răspuns JSON `{ok:true}`.
4) Intri la `/post` și publici o postare. O vezi în `/feed` la filtrul potrivit.
5) `Deschide` crește `clicks_count`. `/api/cron/expire` expiră cele trecute.

## Notă securitate
- În acest MVP, clientul **nu** accesează direct DB pentru scriere; scriem doar din API-urile serverului folosind `service_role`.
- Loginul este doar pentru UX (viitor); API-urile nu impun autentificare la creare (poți activa ușor ulterior).

## Extensii (fără rescriere)
- Adaugi tabel `profiles` + asociere user_id în `posts`.
- Stripe webhook care „aprinde” postările plătite.
- Notificare internă (badge „noutăți” din `last_seen_at`).
- Roluri ONG/Media impuse server-side pe baza profilului.