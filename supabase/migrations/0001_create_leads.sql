create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  address text not null,
  city text not null,
  state text not null,
  zip text not null,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
