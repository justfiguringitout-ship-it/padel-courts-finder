import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Padel Rules Explained: The Complete Guide to How Padel Scoring & Gameplay Works",
  description: "Learn the rules of padel in 5 minutes. Scoring (same as tennis), serving (underhand only), wall play, and the key rules every beginner needs to know before their first match.",
  keywords: [
    "padel rules",
    "padel regulations",
    "padel court dimensions",
    "padel scoring",
    "padel serve rules",
    "official padel rules",
    "padel gameplay",
  ],
  openGraph: {
    title: "Padel Rules Explained: The Complete Guide to How Padel Scoring & Gameplay Works",
    description: "Learn the rules of padel in 5 minutes. Scoring (same as tennis), serving (underhand only), wall play, and the key rules every beginner needs to know before their first match.",
    url: "https://www.padelcourtsfinder.com/rules",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Rules Explained: The Complete Guide to How Padel Scoring & Gameplay Works",
    description: "Learn the rules of padel in 5 minutes. Scoring (same as tennis), serving (underhand only), wall play, and the key rules every beginner needs to know before their first match.",
  },
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/rules",
  },
};

export default function RulesPage() {
  const filePath = path.join(process.cwd(), 'content', 'rules-and-regulations.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Rules</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Padel Rules: Everything You Need to Know
            </h1>
            <p className="text-xl text-muted-foreground">
              Official rules and guidelines to master the game
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-lg prose-gray dark:prose-invert max-w-4xl mx-auto
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:border-b prose-h2:pb-2
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-primary prose-strong:font-semibold
          prose-ul:my-6 prose-li:my-2
          prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-muted prose-pre:border
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
          prose-td:p-3 prose-td:border-t">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
        <div className="max-w-4xl mx-auto mt-12 border-t pt-8">
          <h2 className="text-lg font-semibold mb-4">Related</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/how-to-play" className="text-primary hover:underline">How to Play</Link>
            <Link href="/faq" className="text-primary hover:underline">FAQ</Link>
            <Link href="/equipment" className="text-primary hover:underline">Equipment Guide</Link>
            <Link href="/blog/best-padel-rackets-beginners" className="text-primary hover:underline">Best Beginner Rackets (2026)</Link>
            <Link href="/search" className="text-primary hover:underline">Find Courts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
