import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteHeader } from "@/components/site-header";
import { CursorGlow } from "@/components/cursor-glow";
import { getStates } from "@/lib/site-structure";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-85F1NDMHLH";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Find Padel Courts Near Me | Book Padel Courts Across the USA",
    template: "%s | Padel Courts Finder",
  },
  description: "Discover and book padel courts across the United States. Find courts in your city, compare prices, read reviews, and book online. 45+ verified padel facilities nationwide.",
  metadataBase: new URL("https://www.padelcourtsfinder.com"),
  keywords: [
    "padel courts",
    "padel near me",
    "book padel court",
    "padel facilities",
    "padel USA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics */}
        <script async src="https://plausible.io/js/pa-hXW20NfPRc_ogxgRkigEC.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <SiteHeader states={getStates().map(s => ({ name: s.name, slug: s.slug, code: s.code }))} />
        <CursorGlow />
        {children}
        <footer className="grain bg-court text-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="font-display font-bold text-white text-lg mb-3">Padel Courts Finder</div>
                <p className="text-sm leading-relaxed">
                  Every padel court in America — hours, pricing, and reviews for {new Date().getFullYear()} and beyond.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Directory</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/search" className="hover:text-turf transition-colors">Find Courts</Link></li>
                  <li><Link href="/blog" className="hover:text-turf transition-colors">Blog</Link></li>
                  <li><Link href="/about" className="hover:text-turf transition-colors">About</Link></li>
                  <li><Link href="/list-your-court" className="hover:text-turf transition-colors">List Your Club</Link></li>
                  <li><Link href="/advertise" className="hover:text-turf transition-colors">Advertise</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/rules" className="hover:text-turf transition-colors">Padel Rules</Link></li>
                  <li><Link href="/how-to-play" className="hover:text-turf transition-colors">How to Play</Link></li>
                  <li><Link href="/get-started" className="hover:text-turf transition-colors">Get Started</Link></li>
                  <li><Link href="/get-started/glossary" className="hover:text-turf transition-colors">Glossary</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Gear</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/equipment" className="hover:text-turf transition-colors">Equipment Guide</Link></li>
                  <li><Link href="/blog/best-padel-rackets-beginners" className="hover:text-turf transition-colors">Beginner Rackets</Link></li>
                  <li><Link href="/blog/best-padel-rackets-intermediate" className="hover:text-turf transition-colors">Intermediate Rackets</Link></li>
                  <li><Link href="/faq" className="hover:text-turf transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Top Cities</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog/best-padel-clubs-miami" className="hover:text-turf transition-colors">Miami</Link></li>
                  <li><Link href="/blog/best-padel-clubs-houston" className="hover:text-turf transition-colors">Houston</Link></li>
                  <li><Link href="/blog/best-padel-clubs-nyc" className="hover:text-turf transition-colors">New York</Link></li>
                  <li><Link href="/blog/best-padel-clubs-los-angeles" className="hover:text-turf transition-colors">Los Angeles</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
              <span>© {new Date().getFullYear()} Padel Courts Finder. All rights reserved.</span>
              <div className="flex gap-5">
                <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
                <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
