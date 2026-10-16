-- Claim hardening (applied to project cchkcfhbpcvrkddmpzug on 2026-10-16 as
-- migration "pcf_owner_claims_hardening"). Kept here for the record.
-- Additive only: new nullable columns, and the status / verified_via checks
-- are widened (every value allowed before is still allowed).
alter table public.pcf_owner_claims add column if not exists verify_channel text;
alter table public.pcf_owner_claims add column if not exists verify_target text;
alter table public.pcf_owner_claims add column if not exists verify_sent_at timestamptz;
alter table public.pcf_owner_claims add column if not exists revoked_at timestamptz;

alter table public.pcf_owner_claims drop constraint if exists pcf_owner_claims_status_check;
alter table public.pcf_owner_claims add constraint pcf_owner_claims_status_check
  check (status in ('pending_manual','verified','rejected','revoked'));
alter table public.pcf_owner_claims drop constraint if exists pcf_owner_claims_verified_via_check;
alter table public.pcf_owner_claims add constraint pcf_owner_claims_verified_via_check
  check (verified_via in ('domain','manual','club_email'));

alter table public.pcf_listing_edits add column if not exists commit_sha text;
alter table public.pcf_listing_edits add column if not exists previous_values jsonb;
alter table public.pcf_listing_edits add column if not exists applied_values jsonb;
alter table public.pcf_listing_edits add column if not exists reverted_at timestamptz;
alter table public.pcf_listing_edits add column if not exists revert_commit text;

alter table public.pcf_listing_edits drop constraint if exists pcf_listing_edits_status_check;
alter table public.pcf_listing_edits add constraint pcf_listing_edits_status_check
  check (status in ('pending','approved','rejected','applied','reverted'));
