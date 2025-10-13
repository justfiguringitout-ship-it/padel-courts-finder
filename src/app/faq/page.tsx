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
  title: "Padel FAQ - Frequently Asked Questions | Padel Courts Finder",
  description: "Answers to the most common questions about padel tennis including rules, equipment, court locations, pricing, and how to get started.",
  keywords: [
    "padel FAQ",
    "padel questions",
    "padel answers",
    "padel help",
    "padel information",
    "padel tennis questions",
    "padel for beginners FAQ",
  ],
  openGraph: {
    title: "Padel FAQ - Frequently Asked Questions",
    description: "Answers to the most common questions about padel tennis including rules, equipment, court locations, pricing, and how to get started.",
    url: "https://padelcourtsfinder.com/faq",
    siteName: "Padel Courts Finder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel FAQ - Frequently Asked Questions",
    description: "Answers to the most common questions about padel tennis including rules, equipment, court locations, pricing, and how to get started.",
  },
  alternates: {
    canonical: "https://padelcourtsfinder.com/faq",
  },
};

export default function FAQPage() {
  const filePath = path.join(process.cwd(), 'content', 'faq.md');
  const content = fs.readFileSync(filePath, 'utf8');

  // Common FAQs for schema markup
  const faqs = [
    {
      question: "What is padel tennis?",
      answer: "Padel is a racquet sport that combines elements of tennis and squash. It's played on an enclosed court about one-third the size of a tennis court, with walls that players can use during play."
    },
    {
      question: "How do I find padel courts near me?",
      answer: "Use our search feature to find padel courts by city, state, or zip code. We have listings for over 135 clubs across 23 states in the USA."
    },
    {
      question: "How much does it cost to play padel?",
      answer: "Court rental typically costs between $45-$75 per hour depending on the facility and time of day. Off-peak hours are usually less expensive than prime time slots."
    },
    {
      question: "Do I need my own equipment to play padel?",
      answer: "Most facilities offer equipment rental including padel rackets and balls. However, if you play regularly, investing in your own equipment is recommended."
    },
    {
      question: "Can beginners play padel?",
      answer: "Absolutely! Padel is very beginner-friendly. Most clubs offer lessons and coaching for players of all skill levels, from complete beginners to advanced players."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }),
        }}
      />

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
                <BreadcrumbPage>FAQ</BreadcrumbPage>
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
              Padel FAQ
            </h1>
            <p className="text-xl text-muted-foreground">
              Your questions answered - everything you need to know about padel
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
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-primary
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
