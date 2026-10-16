import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club owner dashboard",
  robots: { index: false, follow: false, nocache: true },
};

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}
