-- Club Spotlight attribution log (applied to project cchkcfhbpcvrkddmpzug on
-- 2026-10-21 as migration "pcf_spotlight_events"). Kept here for the record.
--
-- One row per spotlight event: article views, 30-second engaged reads, 75%
-- read-throughs, pinned-card impressions, clicks, and views of the club's own
-- /courts page during the spotlight window. Written only by
-- POST /api/spotlight/event with the service role key.
--
-- Privacy: no raw IP or user agent is ever stored. visitor_hash is
-- sha256(daily salt + ip + ua), so the same person hashes differently on
-- different days and the hash cannot be reversed to an IP.
--
-- RLS is on with NO policies, like pcf_owner_claims: only the server can read
-- or write this table.

create table if not exists public.pcf_spotlight_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  spotlight_slug text not null check (spotlight_slug ~ '^[a-z0-9-]{1,120}$'),
  event text not null check (event in ('view', 'impression', 'click', 'engaged', 'read')),
  kind text check (kind is null or kind ~ '^[a-z-]{1,24}$'),
  placement text not null check (placement in ('article', 'state-card', 'city-card', 'club-page')),
  path text check (path is null or char_length(path) <= 300),
  referrer_host text check (referrer_host is null or char_length(referrer_host) <= 253),
  utm_source text check (utm_source is null or char_length(utm_source) <= 100),
  utm_medium text check (utm_medium is null or char_length(utm_medium) <= 100),
  country text check (country is null or country ~ '^[A-Z]{2}$'),
  device text check (device is null or device in ('mobile', 'desktop')),
  visitor_hash text not null check (visitor_hash ~ '^[0-9a-f]{64}$')
);

create index if not exists pcf_spotlight_events_slug_time_idx
  on public.pcf_spotlight_events (spotlight_slug, created_at);
create index if not exists pcf_spotlight_events_visitor_time_idx
  on public.pcf_spotlight_events (visitor_hash, created_at);

alter table public.pcf_spotlight_events enable row level security;
revoke all on public.pcf_spotlight_events from anon, authenticated;
