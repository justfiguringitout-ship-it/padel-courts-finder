-- Claim your listing (applied to project cchkcfhbpcvrkddmpzug on 2026-10-15
-- as migration "pcf_owner_claims_and_edits"). Kept here for the record.
-- RLS is on with NO policies: only the server, using the service role key,
-- can read or write these tables and the bucket.

create table if not exists public.pcf_owner_claims (
  id uuid primary key default gen_random_uuid(),
  club_slug text not null,
  club_name text not null,
  email text not null,
  name text not null,
  role text not null check (role in ('Owner','Manager','Staff')),
  status text not null default 'pending_manual' check (status in ('pending_manual','verified','rejected')),
  verified_via text check (verified_via in ('domain','manual')),
  created_at timestamptz not null default now(),
  verified_at timestamptz
);
create index if not exists pcf_owner_claims_slug_idx on public.pcf_owner_claims (club_slug);
create index if not exists pcf_owner_claims_email_idx on public.pcf_owner_claims (lower(email));

create table if not exists public.pcf_listing_edits (
  id uuid primary key default gen_random_uuid(),
  claim_id uuid not null references public.pcf_owner_claims(id) on delete cascade,
  club_slug text not null,
  email text not null,
  changes jsonb not null default '{}'::jsonb,
  current jsonb not null default '{}'::jsonb,
  photo_paths text[] not null default '{}',
  note text,
  status text not null default 'pending' check (status in ('pending','approved','rejected','applied')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  applied_at timestamptz
);
create index if not exists pcf_listing_edits_claim_idx on public.pcf_listing_edits (claim_id);
create index if not exists pcf_listing_edits_status_idx on public.pcf_listing_edits (status);

alter table public.pcf_owner_claims enable row level security;
alter table public.pcf_listing_edits enable row level security;
revoke all on public.pcf_owner_claims from anon, authenticated;
revoke all on public.pcf_listing_edits from anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('pcf-owner-photos', 'pcf-owner-photos', false, 10485760, array['image/webp','image/jpeg','image/png'])
on conflict (id) do nothing;
