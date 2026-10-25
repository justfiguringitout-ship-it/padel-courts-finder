-- AI leaderboard counters (applied to project cchkcfhbpcvrkddmpzug on
-- 2026-10-25 as migration "pcf_ai_leaderboard"). Kept here for the record.
--
-- Two tables of DAILY AGGREGATES for the public page /ai-leaderboard:
--   pcf_referral_daily  one row per (day, source): visits that arrived from an
--                       AI assistant, a search engine, or "other". Written by
--                       POST /api/ref (one browser beacon per session).
--   pcf_crawler_daily   one row per (day, bot): HTML page requests whose
--                       self-reported user agent matched a known AI or search
--                       crawler. Written by src/proxy.ts.
--
-- Privacy: no IP, no user agent, no URL, no referrer host is stored. Only a
-- source or bot name and a counter per day. "day" is the US Eastern calendar
-- day (America/New_York).
--
-- Each event is one upsert through pcf_bump_referral / pcf_bump_crawler.
-- RLS is on with NO policies, like pcf_owner_claims: only the server (service
-- role) can read or write, and only the service role may call the functions.

create table if not exists public.pcf_referral_daily (
  day date not null,
  source text not null check (source ~ '^[a-z0-9-]{1,40}$'),
  category text not null check (category in ('ai', 'search', 'other')),
  visits integer not null default 0 check (visits >= 0),
  primary key (day, source)
);

create table if not exists public.pcf_crawler_daily (
  day date not null,
  bot text not null check (bot ~ '^[A-Za-z0-9-]{1,40}$'),
  operator text not null check (operator ~ '^[A-Za-z0-9 .-]{1,40}$'),
  hits integer not null default 0 check (hits >= 0),
  primary key (day, bot)
);

alter table public.pcf_referral_daily enable row level security;
alter table public.pcf_crawler_daily enable row level security;
revoke all on public.pcf_referral_daily from anon, authenticated;
revoke all on public.pcf_crawler_daily from anon, authenticated;

create or replace function public.pcf_bump_referral(p_source text, p_category text)
returns void
language sql
security invoker
set search_path = public
as $$
  insert into public.pcf_referral_daily (day, source, category, visits)
  values ((now() at time zone 'America/New_York')::date, p_source, p_category, 1)
  on conflict (day, source) do update set visits = public.pcf_referral_daily.visits + 1;
$$;

create or replace function public.pcf_bump_crawler(p_bot text, p_operator text)
returns void
language sql
security invoker
set search_path = public
as $$
  insert into public.pcf_crawler_daily (day, bot, operator, hits)
  values ((now() at time zone 'America/New_York')::date, p_bot, p_operator, 1)
  on conflict (day, bot) do update set hits = public.pcf_crawler_daily.hits + 1;
$$;

revoke all on function public.pcf_bump_referral(text, text) from public, anon, authenticated;
revoke all on function public.pcf_bump_crawler(text, text) from public, anon, authenticated;
grant execute on function public.pcf_bump_referral(text, text) to service_role;
grant execute on function public.pcf_bump_crawler(text, text) to service_role;
