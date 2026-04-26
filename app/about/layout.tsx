import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Muhamad Fauzan Al Farikhi',
  description: 'Tentang Muhamad Fauzan Al Farikhi — Tech Lead, AI Engineer, dan Founder NEXA Tech Labs.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}