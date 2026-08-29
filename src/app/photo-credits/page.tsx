import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Attribution for city photography used on Padel Courts Finder.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/photo-credits" },
  robots: { index: false, follow: true },
};

const CREDITS = [
  { city: "Miami, FL", file: "Miami, Florida skyline.jpg", author: "Wilfredor", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/" },
  { city: "New York, NY", file: "Lower Manhattan from Jersey City September 2020 panorama.jpg", author: "King of Hearts", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Los Angeles, CA", file: "Los Angeles skyline 2022.jpg", author: "dconvertini", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  { city: "Houston, TX", file: "Downtown Houston, TX Skyline - 2018.jpg", author: "David Daniel Turner", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" },
  { city: "Austin, TX", file: "Austin Texas skyline, December 2023 - Evening.jpg", author: "Steve", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  { city: "Dallas, TX", file: "Dallas Skyline at Dusk.jpg", author: "Matthew T Rader", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Chicago, IL", file: "Chicago-skyline-lake-burnham.jpg", author: "Marie Miller", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Atlanta, GA", file: "Atlanta skyline from Jackson Street Bridge 2020.jpg", author: "Marc Merlin", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Phoenix, AZ", file: "Downtown Phoenix Skyline Lights.jpg", author: "Alan Stark", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/" },
  { city: "San Francisco, CA", file: "Golden Gate Bridge and San Francisco skyline from Hawk Hill at Blue Hour dllu.jpg", author: "Daniel L. Lu (dllu)", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Boston, MA", file: "Boston skyline from Longfellow Bridge September 2017 panorama 2.jpg", author: "King of Hearts", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  { city: "Fort Lauderdale, FL", file: "Skyline of Fort Lauderdale, Nov-15.jpg", author: "KeanoManu", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
];

export default function PhotoCreditsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="h-1 bg-padel-green" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-3">Photo Credits</h1>
        <p className="text-stone-600 mb-8">
          City photography on Padel Courts Finder comes from Wikimedia Commons under the licenses
          below. Club photos are provided by the clubs themselves. Aerial padel footage licensed stock.
        </p>
        <div className="space-y-3">
          {CREDITS.map((c) => (
            <div key={c.city} className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm">
              <span className="font-semibold text-foreground">{c.city}</span>{" — "}
              <a href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(c.file)}`} className="text-padel-green hover:underline" rel="noopener noreferrer" target="_blank">
                &ldquo;{c.file}&rdquo;
              </a>{" by "}{c.author},{" "}
              <a href={c.licenseUrl} className="text-padel-green hover:underline" rel="noopener noreferrer" target="_blank">{c.license}</a>
              , via Wikimedia Commons. Resized and cropped.
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-sm mt-8">
          Questions or corrections: <a href="mailto:info@padelcourtsfinder.com" className="text-padel-green hover:underline">info@padelcourtsfinder.com</a>
        </p>
        <div className="mt-8"><Link href="/" className="text-padel-green hover:underline text-sm">&larr; Back to Padel Courts Finder</Link></div>
      </div>
    </div>
  );
}
