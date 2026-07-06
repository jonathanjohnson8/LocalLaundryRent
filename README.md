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

## Email setup (optional)

New leads trigger two emails via [Resend](https://resend.com): a notification to your inbox and a confirmation to the submitter. If `RESEND_API_KEY` is unset, the lead still saves to Supabase — emails are just skipped.

1. Create a Resend account and API key, add it as `RESEND_API_KEY`.
2. Set `LEAD_NOTIFY_EMAIL` to the address that should receive new-lead notifications (defaults to `jonathanjohnson8@gmail.com`).
3. Set `RESEND_FROM_EMAIL` once you've verified a sending domain in Resend (e.g. `Local Laundry Rent <hello@yourdomain.com>`). Until then it falls back to Resend's shared `onboarding@resend.dev` address, which Resend only allows sending **to the account's own verified email** — confirmation emails to other submitters will fail silently until a domain is verified.

## Deploying

Import this repo in the [Vercel dashboard](https://vercel.com/new), then add `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and (optionally) `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_NOTIFY_EMAIL` as project environment variables before deploying.
