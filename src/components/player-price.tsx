import { Users } from "lucide-react";
import {
  formatPlayerPrice,
  playerPriceSummaryLine,
  type PlayerPrice,
  type PlayerPriceSummary,
} from "@/lib/player-price";
import { cn } from "@/lib/utils";

/** Price block on a club card: "$20 / per player / hour". Renders a quiet
 *  "Price not published" when we could not read a rate with confidence. */
export function PlayerPriceTag({ price, comingSoon }: { price: PlayerPrice | null; comingSoon?: boolean }) {
  if (!price) {
    if (comingSoon) return <div />;
    return <div className="pcf-pp-unknown text-xs text-muted-foreground">Price not published</div>;
  }
  const courtNote =
    price.source === "court" && price.courtHourly
      ? `Court ${price.isFrom ? "from " : ""}$${price.courtHourly}/hr, split four ways`
      : null;
  return (
    <div className="pcf-pp-tag">
      <div className="text-2xl font-bold text-primary tabular-nums leading-tight">{formatPlayerPrice(price)}</div>
      <div className="text-xs text-muted-foreground">
        per player / hour{price.basis === "peak" ? " (peak)" : ""}
      </div>
      {courtNote && <div className="text-[11px] text-muted-foreground/80">{courtNote}</div>}
    </div>
  );
}

/** Inline variant for compact cards: "from $10/player/hr". */
export function PlayerPriceInline({ price }: { price: PlayerPrice | null }) {
  if (!price) return null;
  return (
    <span className="font-medium text-foreground tabular-nums">
      {formatPlayerPrice(price)}/player/hr{price.basis === "peak" ? " (peak)" : ""}
    </span>
  );
}

/** One-line summary for city and state pages. */
export function PlayerPriceSummaryLine({
  summary,
  place,
  tone = "light",
  className,
}: {
  summary: PlayerPriceSummary;
  place: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "pcf-pp-summary flex items-start gap-2 text-base",
        tone === "dark" ? "text-stone-200" : "text-muted-foreground",
        className
      )}
    >
      <Users className={cn("w-5 h-5 mt-0.5 shrink-0", tone === "dark" ? "text-turf" : "text-primary")} aria-hidden />
      <span>
        {playerPriceSummaryLine(summary, place)}{" "}
        <span className={tone === "dark" ? "text-stone-400" : "text-muted-foreground/80"}>
          Four players sharing one court.
        </span>
      </span>
    </p>
  );
}
