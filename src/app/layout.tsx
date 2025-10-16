import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

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
  metadataBase: new URL("https://padelcourtsfinder.com"),
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
