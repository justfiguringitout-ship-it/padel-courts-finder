# Claim your listing

Club owners claim a listing at `/claim`, sign in with an emailed link, and suggest
changes at `/owner`. Nothing goes live until Dito approves it.

## Flow

1. `/claim` (or `/claim?club=<slug>`, linked from every club page): pick the club, name, role, work email.
   `POST /api/claim/start`.
2. Email domain = the club website's (or club email's) registrable domain: verified at once, sign-in
   link sent. Free mail, booking/social sites or a mismatch: `pending_manual`, Dito gets Approve /
   Reject links (signed, 7 days). Approve sends the sign-in link.
3. Sign-in link (`/owner/signin?token=`, 30 minutes, single use per instance) -> button POSTs to
   `/api/owner/signin` -> `pcf_owner` cookie (httpOnly, Secure, SameSite=Lax, 30 days).
4. `/owner`: current listing, edit form, diff preview, past submissions. Photos go to
   `/api/owner/photos` (resized to 1600px WebP with sharp, private bucket). `POST /api/owner/edits`
   stores the edit as `pending` and emails Dito the diff.
5. `/claim/verify?token=` shows the claim or edit; Approve / Reject POST to `/api/claim/review`.
   With `GITHUB_TOKEN`, approve commits the change to main (data + photos, then a changelog commit).
   Without it, the edit stays `approved`: run `npm run owner:apply -- --apply`.

## Storage (Supabase project padel-directory, cchkcfhbpcvrkddmpzug)

Tables `pcf_owner_claims`, `pcf_listing_edits` and private bucket `pcf-owner-photos`
(see `supabase/migrations/20261015_pcf_owner_claims.sql`). RLS on, no policies: server only.

## Environment variables (Vercel, Production)

| Name | Where to get it |
| --- | --- |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase dashboard, project padel-directory, Project Settings, API, `service_role` secret. Server only, never `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_SUPABASE_URL` | Already set. |
| `CLAIM_SECRET` | Any random string of 32+ characters, e.g. `openssl rand -base64 48`. Changing it signs everyone out and voids open links. |
| `GMAIL_ADDRESS`, `GMAIL_APP_PASSWORD` | Already set for the other site mail. |
| `GITHUB_TOKEN` (optional) | Fine-grained PAT, repo justfiguringitout-ship-it/padel-courts-finder only, Contents: read and write. Turns on auto-publish. |
| `GITHUB_REPO`, `GITHUB_BRANCH` (optional) | Defaults `justfiguringitout-ship-it/padel-courts-finder`, `main`. |

Local testing only: `PCF_OWNER_DEV_DIR=/some/dir` (ignored on Vercel) keeps claims, edits and photos
in files there and writes every email to `<dir>/outbox/` instead of sending it.

## Commands

- `npm run test:owner`: unit tests (domain matcher, tokens, form validation, data patcher, changelog).
- `npm run owner:apply`: list approved edits. Add `-- --pending` to see pending ones, `-- --apply` to
  write, commit (two path-scoped commits, never pushes) and mark applied.
