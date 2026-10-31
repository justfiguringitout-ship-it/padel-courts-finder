import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Padel Glossary: 32 Terms Defined | Learn the Language of Padel',
  description: 'A-Z padel glossary with 32 terms defined. From bandeja to víbora, learn every padel term with pronunciations and examples.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/get-started/glossary',
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
