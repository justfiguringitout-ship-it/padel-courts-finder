"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CloudSun, Moon } from "lucide-react";
import { nowInTimeZone, timeZoneLabel, tonightStatus, type TonightStatus } from "@/lib/club-page";
import type { TonightClub, TonightData } from "@/lib/play-tonight";
import { trackPlausibleEvent } from "@/lib/analytics";

type Filter = "all" | "now" | "tonight" | "late" | "indoor";

/** Rows shown in the "All" view before "Show all"; filters always show every match. */
const COLLAPSED_ROWS = 8;

const isIndoor = (c: TonightClub) => c.setting === "indoor" || c.setting === "both";

const SETTING_LABEL: Record<string, string | undefined> = {
  indoor: "Indoor",
  outdoor: "Outdoor",
  both: "Indoor and outdoor",
};

/* Chip colors are chosen for at least 4.5:1 text contrast. */
const STATE_CHIP: Record<TonightStatus["state"], string> = {
  open: "bg-[#DCFCE7] text-[#166534]",
  later: "bg-amber-100 text-amber-900",
  done: "bg-stone-100 text-stone-700",
  closed: "bg-stone-100 text-stone-700",
  unknown: "bg-stone-100 text-stone-700",
};

function FactChips({ club }: { club: TonightClub }) {
  const setting = SETTING_LABEL[club.setting];
  const chipBase = "inline-flex items-center h-6 px-2 rounded-full border text-xs";
  const chip = `${chipBase} border-stone-200 bg-white text-stone-700`;
  return (
    <ul className="flex flex-wrap gap-1.5 mt-1.5" aria-label="Details">
      {setting && <li className={chip}>{setting}</li>}
      {club.lit && (
        <li className={`${chipBase} border-amber-200 bg-amber-50 text-amber-900`}>
          <Moon className="w-3 h-3 mr-1" aria-hidden />
          Lit for night play
        </li>
      )}
      {club.price && (
        <li className={`${chip} tabular-nums`}>
          {club.price} per player/hr{club.pricePeak ? " (peak)" : ""}
        </li>
      )}
      {club.membersOnly && <li className={`${chip} border-stone-300 bg-stone-100 text-stone-800`}>Members only</li>}
    </ul>
  );
}

function ActionLink({ club, city }: { club: TonightClub; city: string }) {
  if (!club.action) return null;
  return (
    <a
      href={club.action.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackPlausibleEvent("Tonight book click", { club: club.name, city, kind: club.action!.label })}
      className="shrink-0 inline-flex items-center justify-center h-10 px-3.5 rounded-lg bg-[#15803D] text-white text-sm font-semibold hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
    >
      {club.action.label}
      <span className="sr-only"> at {club.name} (opens in a new tab)</span>
    </a>
  );
}

/* ---------------------------------------------------------------- weather */

interface Forecast {
  utc_offset_seconds: number;
  hourly: {
    time: string[];
    temperature_2m: (number | null)[];
    precipitation_probability: (number | null)[];
    wind_speed_10m: (number | null)[];
  };
}

interface WeatherLine {
  text: string;
  suggestIndoor: boolean;
}

const WX_TTL = 30 * 60 * 1000;

/** Plain, conservative read of 6 PM to 11 PM local. Null when there is nothing left of tonight. */
export function describeTonight(f: Forecast, city: string, hasIndoor: boolean, nowMs = Date.now()): WeatherLine | null {
  const local = new Date(nowMs + f.utc_offset_seconds * 1000);
  const date = local.toISOString().slice(0, 10);
  const startHour = Math.max(18, local.getUTCHours());
  if (startHour > 23) return null;
  const idx: number[] = [];
  f.hourly.time.forEach((t, i) => {
    const h = Number(t.slice(11, 13));
    if (t.startsWith(date) && h >= startHour && h <= 23) idx.push(i);
  });
  const pick = (arr: (number | null)[]) => idx.map((i) => arr[i]).filter((v): v is number => typeof v === "number");
  const temps = pick(f.hourly.temperature_2m);
  const rains = pick(f.hourly.precipitation_probability);
  const winds = pick(f.hourly.wind_speed_10m);
  if (!temps.length) return null;

  const lo = Math.round(Math.min(...temps));
  const hi = Math.round(Math.max(...temps));
  const avg = Math.round(temps.reduce((s, v) => s + v, 0) / temps.length);
  const rain = rains.length ? Math.round(Math.max(...rains)) : null;
  const wind = winds.length ? Math.round(Math.max(...winds)) : null;

  const parts = [hi - lo <= 3 ? `${avg}°F` : `${lo} to ${hi}°F`];
  if (rain !== null) parts.push(`${rain}% chance of rain`);
  if (wind !== null) parts.push(wind < 8 ? "light wind" : `wind up to ${wind} mph`);

  const bad = (rain ?? 0) >= 50 || (wind ?? 0) >= 20;
  const reasons: string[] = [];
  if ((rain ?? 0) >= 30) reasons.push("wet");
  if ((wind ?? 0) >= 13) reasons.push("windy");
  if (lo < 40) reasons.push("cold");
  if (hi > 95) reasons.push("very hot");

  let verdict: string;
  if (bad) {
    verdict = hasIndoor
      ? "Indoor courts are the safer bet."
      : "Outdoor play may be called off, so check with the club before you go.";
  } else if (reasons.length) {
    verdict = `Outdoor play looks possible, but it could be ${reasons.join(" and ")}.`;
  } else {
    verdict = "Outdoor courts look good.";
  }
  return { text: `Tonight in ${city}: ${parts.join(", ")}. ${verdict}`, suggestIndoor: bad && hasIndoor };
}

function readCache(key: string): Forecast | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return null;
    const { at, data } = JSON.parse(raw) as { at: number; data: Forecast };
    if (typeof at !== "number" || Date.now() - at > WX_TTL || Date.now() < at) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(key: string, data: Forecast) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* storage full or blocked: skip the cache */
  }
}

function useTonightWeather(center: TonightData["center"], city: string, hasIndoor: boolean, enabled: boolean) {
  const [line, setLine] = useState<WeatherLine | null>(null);
  useEffect(() => {
    if (!enabled || !center) return;
    let cancelled = false;
    const key = `pcf-tonight-wx:${center.lat},${center.lng}`;
    const show = (data: Forecast) => {
      try {
        const l = describeTonight(data, city, hasIndoor);
        if (!cancelled) setLine(l);
      } catch {
        /* unexpected shape: show nothing */
      }
    };
    const cached = readCache(key);
    if (cached) {
      show(cached);
      return () => {
        cancelled = true;
      };
    }
    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 5000);
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${center.lat}&longitude=${center.lng}` +
      `&hourly=temperature_2m,precipitation_probability,wind_speed_10m` +
      `&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=2`;
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: Forecast) => {
        if (!data?.hourly?.time) return;
        writeCache(key, data);
        show(data);
      })
      .catch(() => {
        /* offline, blocked or slow: show nothing */
      })
      .finally(() => window.clearTimeout(timer));
    return () => {
      cancelled = true;
      ctrl.abort();
      window.clearTimeout(timer);
    };
  }, [center, city, hasIndoor, enabled]);
  return line;
}

/* ------------------------------------------------------------------- list */

export function PlayTonight({ data, city }: { data: TonightData; city: string }) {
  const [now, setNow] = useState<number | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const collapsed = filter === "all" && !expanded && data.clubs.length > COLLAPSED_ROWS + 2;

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Each club's status uses the club's own time zone, never the visitor's.
  const statuses = useMemo(() => {
    const map = new Map<string, TonightStatus>();
    if (now === null) return map;
    for (const c of data.clubs) {
      const zoned = c.timeZone ? nowInTimeZone(c.timeZone, new Date(now)) : null;
      if (zoned && c.days) map.set(c.slug, tonightStatus(c.days, zoned));
    }
    return map;
  }, [now, data.clubs]);

  const weather = useTonightWeather(data.center, city, data.hasIndoor, data.hasOutdoor);

  const ready = now !== null;
  const count = (fn: (s: TonightStatus) => boolean) =>
    ready ? data.clubs.filter((c) => { const s = statuses.get(c.slug); return s ? fn(s) : false; }).length : null;
  const counts: Record<Filter, number | null> = {
    all: data.clubs.length + data.noHours.length,
    now: count((s) => s.state === "open"),
    tonight: count((s) => s.tonight),
    late: count((s) => s.late),
    indoor: [...data.clubs, ...data.noHours].filter(isIndoor).length,
  };

  const matches = (c: TonightClub): boolean => {
    if (filter === "all") return true;
    if (filter === "indoor") return isIndoor(c);
    const s = statuses.get(c.slug);
    if (!s) return false;
    if (filter === "now") return s.state === "open";
    if (filter === "tonight") return s.tonight;
    return s.late;
  };

  const filters: Array<{ key: Filter; label: string }> = [
    { key: "all", label: "All" },
    { key: "now", label: "Open now" },
    { key: "tonight", label: "Open after 6 PM" },
    { key: "late", label: "Open past 9 PM" },
  ];
  if (data.hasIndoor && data.hasOutdoor) filters.push({ key: "indoor", label: "Indoor" });

  const tzLabel = timeZoneLabel(data.timeZone);
  const visibleClubs = data.clubs.filter(matches);
  const visibleNoHours = filter === "all" || filter === "indoor" ? data.noHours.filter(matches) : [];

  return (
    <div>
      <p className="min-h-[1.75rem] text-lg font-semibold text-stone-900" aria-live="polite">
        {ready
          ? counts.now === 0 && counts.late === 0
            ? "Nothing open right now or late tonight. Check the hours below for tomorrow."
            : `${counts.now} ${counts.now === 1 ? "club" : "clubs"} open now, ${counts.late} open past 9 PM tonight.`
          : ""}
      </p>
      <p className="text-sm text-muted-foreground max-w-2xl">
        Live status for {counts.all} open {counts.all === 1 ? "club" : "clubs"}, worked out from each club&apos;s
        published hours{tzLabel ? ` in ${tzLabel}` : ""}.
      </p>

      {data.hasOutdoor && data.center && (
        <div className="mt-3 min-h-[4.25rem] sm:min-h-[2.75rem] text-sm" data-testid="tonight-weather">
          <div aria-live="polite" className="flex items-start gap-2">
            {weather && (
              <>
                <CloudSun className="w-5 h-5 mt-px shrink-0 text-[#15803D]" aria-hidden />
                <p className="text-stone-800">
                  {weather.text}
                  {weather.suggestIndoor && filter !== "indoor" && data.hasOutdoor && (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => setFilter("indoor")}
                        className="inline-flex items-center min-h-10 font-semibold text-[#15803D] underline underline-offset-2"
                      >
                        Show indoor courts
                      </button>
                    </>
                  )}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div role="group" aria-label="Filter clubs" className="mt-3 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`inline-flex items-center gap-1.5 h-10 px-3 rounded-full border text-sm font-medium transition-colors ${
              filter === f.key
                ? "bg-[#0f1b2d] border-[#0f1b2d] text-white"
                : "bg-white border-stone-300 text-stone-800 hover:border-stone-500"
            }`}
          >
            {f.label}
            <span className="inline-block min-w-[2ch] text-center tabular-nums text-xs opacity-80" data-count={f.key}>
              {counts[f.key] ?? ""}
            </span>
          </button>
        ))}
      </div>

      <ul className="mt-4 divide-y rounded-xl border bg-background" data-testid="tonight-list">
        {data.clubs.map((c, i) => {
          const s = statuses.get(c.slug);
          return (
            <li key={c.slug} hidden={!matches(c) || (collapsed && i >= COLLAPSED_ROWS)} className="p-3 sm:p-4" data-state={s?.state ?? ""}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link href={`/courts/${c.slug}`} className="font-semibold text-foreground hover:text-[#15803D] hover:underline">
                    {c.name}
                  </Link>
                  <div className="mt-1 h-7 flex items-center gap-2 overflow-hidden whitespace-nowrap text-sm">
                    {s ? (
                      <>
                        <span className={`inline-flex items-center h-6 px-2.5 rounded-full text-xs font-semibold ${STATE_CHIP[s.state]}`}>
                          {s.text}
                        </span>
                        {s.today && (
                          <span className="hidden sm:inline text-stone-600 truncate">Today {s.today}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-stone-600 truncate">{c.summary ?? "Hours change by day"}</span>
                    )}
                  </div>
                  <FactChips club={c} />
                </div>
                <ActionLink club={c} city={city} />
              </div>
            </li>
          );
        })}
        {ready && visibleClubs.length === 0 && visibleNoHours.length === 0 && (
          <li className="p-4 text-sm text-stone-700">No clubs match right now. Try another filter.</li>
        )}
      </ul>

      {collapsed && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-3 inline-flex items-center h-10 px-4 rounded-lg border border-stone-300 bg-white text-sm font-semibold text-stone-800 hover:border-stone-500"
        >
          Show all {data.clubs.length} clubs with hours
        </button>
      )}

      {data.noHours.length > 0 && (
        <div hidden={visibleNoHours.length === 0} className="mt-6">
          <h3 className="text-base font-semibold">Hours not published</h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            These clubs do not list regular hours we can check. Their club pages have phone and website details.
          </p>
          <ul className="mt-3 divide-y rounded-xl border bg-background" data-testid="tonight-nohours">
            {data.noHours.map((c) => (
              <li key={c.slug} hidden={!matches(c)} className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <Link href={`/courts/${c.slug}`} className="font-semibold text-foreground hover:text-[#15803D] hover:underline">
                      {c.name}
                    </Link>
                    <FactChips club={c} />
                  </div>
                  <ActionLink club={c} city={city} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-4 text-xs text-stone-600">
        Holidays, private events and league nights can change a club&apos;s hours. Check with the club before you go.
      </p>
    </div>
  );
}
