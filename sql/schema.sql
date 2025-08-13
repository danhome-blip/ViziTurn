create extension if not exists pgcrypto;

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  link_url text not null,
  country text not null,
  category text not null,
  duration_days int not null check (duration_days in (1,3,7)),
  published_at timestamptz default now(),
  expires_at timestamptz not null,
  status text not null check (status in ('active','expired')) default 'active',
  clicks_count int default 0,
  publisher text,                 -- numele afisat al autorului
  type text check (type in ('standard','ong','media')) default 'standard',
  created_at timestamptz default now()
);

create index if not exists idx_posts_feed on posts (status, expires_at desc, published_at desc);
create index if not exists idx_posts_filter on posts (country, category);