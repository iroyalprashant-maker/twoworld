# Twofold

Two people. One little universe. A cozy, private couples home built with Next.js, TypeScript, Tailwind and Supabase.

## What works now

- Responsive landing and shared home for phone and desktop
- Local demo mode: world name, theme, and furniture persist in this browser
- Interactive decoration shelf, theme switching, small notes and creation journey
- Explicit non-functional placeholders for invitations and real photo uploads until Supabase is configured
- A Supabase migration with RLS, a two-member cap, and hashed invitation token design

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. When Supabase environment variables are absent, the app stays in honest demo mode and does not claim accounts or cross-device synchronization.

## Supabase setup

1. Create a Supabase project and a **private** `memories` storage bucket.
2. Run `supabase/migrations/20261027000000_initial.sql` in the SQL editor or apply it with Supabase CLI.
3. Copy `.env.example` to `.env.local`, then configure:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Keep the service-role secret server-only. Production invitation routes must generate raw tokens server-side, retain only a cryptographic hash, enforce expiration/single use, and resolve membership from the authenticated server session. Room writes should compare `worlds.revision` for optimistic concurrency then refetch on conflict.

## Deploy to Vercel

1. Push this directory to GitHub.
2. Import it into Vercel using the Next.js framework preset.
3. Add the three variables above in Project Settings → Environment Variables (do not expose service role to the client).
4. Deploy and add the Vercel URL to Supabase Auth redirect URLs.

`npm run build` is the deployment build command; no Vercel configuration file is needed.

## Security model

All exposed tables enable RLS. Browser policies require current-world membership; invitations are server-only. A database trigger prevents more than two active world members. Put photos only in private storage and issue short-lived signed URLs after server-side membership checks.
