import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Padel Glossary: 100+ Terms Defined | Learn the Language of Padel',
  description: 'Complete A-Z padel glossary with 100+ terms defined. From bandeja to víbora, learn every padel term with pronunciations, examples, and video tutorials.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/get-started/glossary',
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
