# Local Laundry Rent

Marketing site for a washer/dryer rental company. Built with Next.js (App Router). The hero "Check Availability" form posts to `/api/leads`, which inserts submissions into a Supabase `leads` table.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup

1. Copy `.env.local.example` to `.env.local` and fill in:
   - `SUPABASE_URL` — your project's API URL
   - `SUPABASE_ANON_KEY` — the anon/publishable key
2. Apply the migrations in `supabase/migrations/` to your Supabase project (creates the `leads` table and an insert-only RLS policy for the `anon` role).

## Deploying

Import this repo in the [Vercel dashboard](https://vercel.com/new), then add `SUPABASE_URL` and `SUPABASE_ANON_KEY` as project environment variables before deploying.
