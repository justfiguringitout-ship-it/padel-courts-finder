/**
 * Next 16 proxy (formerly middleware): counts crawler visits for the AI
 * leaderboard (/ai-leaderboard). Leaderboard launched 2026-10-25T11:26:00Z.
 *
 * Cost for normal visitors is zero: the matcher below only invokes this proxy
 * when the user-agent header matches a known crawler token, so regular browser
 * requests never run it. Static files, /_next, /api and any path with a file
 * extension are excluded too, so only HTML page requests are counted.
 *
 * For a match we add 1 to today's count for that bot in pcf_crawler_daily,
 * after the response is on its way (waitUntil). User agents are self-reported,
 * so the leaderboard labels these counts that way. Nothing else is stored.
 *
 * Keep the user-agent list in the matcher in sync with CRAWLERS in
 * src/lib/ai-leaderboard/sources.ts (the matcher must be a literal string).
 */
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { classifyCrawler } from "@/lib/ai-leaderboard/sources";
import { bumpCrawler } from "@/lib/ai-leaderboard/store";

export function proxy(req: NextRequest, event: NextFetchEvent) {
  if (req.method !== "GET") return NextResponse.next();
  if (req.headers.get("rsc") || req.headers.get("next-router-prefetch")) return NextResponse.next();
  const bot = classifyCrawler(req.headers.get("user-agent"));
  if (bot) {
    event.waitUntil(
      bumpCrawler(bot.id, bot.operator).catch((err) => {
        console.error("ai-leaderboard crawler", err instanceof Error ? err.message : err);
      })
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api/|_next/|_vercel/|.*\\.[A-Za-z0-9]+$).*)",
      has: [
        {
          type: "header",
          key: "user-agent",
          value:
            ".*(GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-User|Claude-SearchBot|PerplexityBot|Perplexity-User|Googlebot|Google-InspectionTool|GoogleOther|[Bb]ingbot|Applebot|meta-externalagent|meta-externalfetcher|Amazonbot|DuckAssistBot|DuckDuckBot|MistralAI-User|Bytespider|CCBot|YandexBot).*",
        },
      ],
    },
  ],
};
