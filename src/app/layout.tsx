import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteHeader } from "@/components/site-header";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader states={getStates().map(s => ({ name: s.name, slug: s.slug, code: s.code }))} />
        {children}
        <footer className="border-t bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-stone-900 mb-3">Directory</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><Link href="/search" className="hover:text-stone-900">Find Courts</Link></li>
                  <li><Link href="/blog" className="hover:text-stone-900">Blog</Link></li>
                  <li><Link href="/about" className="hover:text-stone-900">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><Link href="/rules" className="hover:text-stone-900">Padel Rules</Link></li>
                  <li><Link href="/how-to-play" className="hover:text-stone-900">How to Play</Link></li>
                  <li><Link href="/get-started" className="hover:text-stone-900">Get Started</Link></li>
                  <li><Link href="/get-started/glossary" className="hover:text-stone-900">Glossary</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-3">Gear</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><Link href="/equipment" className="hover:text-stone-900">Equipment Guide</Link></li>
                  <li><Link href="/blog/best-padel-rackets-beginners" className="hover:text-stone-900">Beginner Rackets</Link></li>
                  <li><Link href="/blog/best-padel-rackets-intermediate" className="hover:text-stone-900">Intermediate Rackets</Link></li>
                  <li><Link href="/faq" className="hover:text-stone-900">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-3">Top Cities</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li><Link href="/blog/best-padel-clubs-miami" className="hover:text-stone-900">Miami</Link></li>
                  <li><Link href="/blog/best-padel-clubs-houston" className="hover:text-stone-900">Houston</Link></li>
                  <li><Link href="/blog/best-padel-clubs-nyc" className="hover:text-stone-900">New York</Link></li>
                  <li><Link href="/blog/best-padel-clubs-los-angeles" className="hover:text-stone-900">Los Angeles</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-6 text-center text-xs text-stone-400">
              Padel Courts Finder
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
