# Claim your listing

Club owners claim a listing at `/claim`, sign in with an emailed link, and suggest
changes at `/owner`. Nothing goes live until Dito approves it.

## Flow

1. `/claim` (or `/claim?club=<slug>`, linked from every club page): pick the club, name, role, work email.
   `POST /api/claim/start`.
2. Email domain = the club website's (or club email's) registrable domain, and nobody else has ever
   been verified for that club: verified at once, sign-in link sent, Dito gets an FYI.
   Everything else is `pending_manual`: free mail, booking/social sites, a mismatch, and every
   second claim (see below). Dito gets Approve / Reject links (signed, 7 days). Approve sends the
   sign-in link.
   - Club public-email confirmation: for a manual claim we email the club's published address
     (`email` in padel-courts.ts, or `membershipEmail` only when it is on the club's own website
     domain): "<Name> (<email>) asked to manage <Club>'s listing ... confirm here". The Confirm link
     (`/claim/confirm?token=`, 7 days, button POSTs to `/api/claim/confirm`) verifies the claim with
     `verified_via = 'club_email'` and sends the claimant their sign-in link; Dito gets an FYI. At most
     3 of these per club per 24 hours. Dito's email says whether it was sent, or, when there is no
     public club email, "No public club email on file: call <public phone> before approving."
     Tracked in `verify_channel` (`domain` / `club_email` / `dito`), `verify_target`, `verify_sent_at`.
   - Second claims: once a club has (or had) a verified owner with another email, a new claim is
     never auto-verified, even on a matching domain. It goes to manual plus the club email
     confirmation, and every current verified owner gets "<Name> (<email>) asked for access to
     <Club>'s listing. If you do not know them, reply to this email and we will remove them."
     (reply-to info@). The first claim for a club still auto-verifies on a domain match.
   - Someone whose access was removed cannot get back in by claiming again with the same email.
3. Sign-in link (`/owner/signin?token=`, 30 minutes, single use per instance) -> button POSTs to
   `/api/owner/signin` -> `pcf_owner` cookie (httpOnly, Secure, SameSite=Lax, 30 days).
4. `/owner`: current listing, edit form, diff preview, past submissions. Photos go to
   `/api/owner/photos` (resized to 1600px WebP with sharp, private bucket). `POST /api/owner/edits`
   stores the edit as `pending` and emails Dito the diff.
5. `/claim/verify?token=` shows the claim or edit; Approve / Reject POST to `/api/claim/review`.
   Changes to website, booking link, phone and membership email come first in a highlighted
   "Check these" block (email and page): current value, new value, "Confirm on the club's own site
   before approving", and "Different domain" when a new website or booking link is on a domain the
   club does not use today. The full diff follows.
   With `GITHUB_TOKEN`, approve commits the change to main (data + photos, then a changelog commit),
   stores the commit sha, the previous values and the written values on the edit, and emails Dito
   "Published: <Club>" with an Undo link. Without it, the edit stays `approved`: run
   `npm run owner:apply -- --apply` (which also records the undo data).
6. Remove access: every claim and edit email Dito gets has a signed "Remove access" link
   (`/claim/admin?token=`, 90 days, confirmation page, POST `/api/claim/admin`). It sets the claim
   to `revoked`, marks that owner's pending edits `rejected`, and signs them out at once: every owner
   page and API call re-checks the claim status, and a revoked session gets a 401 and its cookie
   cleared. Live edits stay live. Nobody is emailed.
7. Undo: the "Published" email has a signed "Undo this change" link (same admin page). POST puts the
   previous values back through the same GitHub path ("Undo owner edit: <Club>", then a changelog
   entry "<Club> owner update reverted") and marks the edit `reverted`. If any field the edit wrote
   has changed again since, nothing is committed and the page names the fields. Photos the edit
   added stay in public/images/courts but are no longer referenced.

## Storage (Supabase project padel-directory, cchkcfhbpcvrkddmpzug)

Tables `pcf_owner_claims`, `pcf_listing_edits` and private bucket `pcf-owner-photos`
(see `supabase/migrations/20261015_pcf_owner_claims.sql` and
`20261016_pcf_owner_claims_hardening.sql`, which adds the verify/revoke/undo columns and widens the
status checks to `revoked` and `reverted`). RLS on, no policies: server only.

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
`PCF_OWNER_DRY_GITHUB_DIR=/other/dir` (also ignored on Vercel) turns on auto-publish with a dry-run
client that "commits" to the copies of `src/data/padel-courts.ts` and `changelog.ts` in that folder
and logs to `<dir>/.dry-git/log.json`, so approve and undo can be tested without GitHub.

## Commands

- `npm run test:owner`: unit tests (domain matcher, tokens, form validation, data patcher, changelog,
  second-claim rule, club confirmation token, revoked sessions, risky fields, apply + undo through the
  dry-run client on a copy of padel-courts.ts).
- `npm run owner:apply`: list approved edits. Add `-- --pending` to see pending ones, `-- --apply` to
  write, commit (two path-scoped commits, never pushes) and mark applied.
