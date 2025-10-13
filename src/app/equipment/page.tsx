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
  title: "Padel Equipment Guide - Rackets, Balls & Gear | Find Padel Near Me",
  description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
  keywords: [
    "padel equipment",
    "padel racket",
    "padel racquet",
    "padel balls",
    "padel shoes",
    "padel gear",
    "padel accessories",
    "best padel racket",
  ],
  openGraph: {
    title: "Padel Equipment Guide - Rackets, Balls & Gear",
    description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
    url: "https://findpadelnearme.com/equipment",
    siteName: "Find Padel Near Me",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Equipment Guide - Rackets, Balls & Gear",
    description: "Everything you need to know about padel equipment including racket selection, balls, shoes, bags, and accessories for players of all levels.",
  },
  alternates: {
    canonical: "https://findpadelnearme.com/equipment",
  },
};

export default function EquipmentPage() {
  const filePath = path.join(process.cwd(), 'content', 'equipment-guide.md');
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
                <BreadcrumbPage>Equipment</BreadcrumbPage>
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
              Padel Equipment Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about rackets, balls, shoes, and gear
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
      </div>
    </div>
  );
}
