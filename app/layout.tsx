import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Muhamad Fauzan Al Farikhi | Tech Lead & AI Engineer',
  description: 'Portfolio of Muhamad Fauzan Al Farikhi — Founder & CEO of NEXA Tech Labs, Tech Lead & AI Engineer building scalable digital solutions for Indonesian SMEs.',
  keywords: ['AI Engineer', 'Tech Lead', 'Next.js', 'Machine Learning', 'NEXA Tech Labs', 'Indonesia'],
  authors: [{ name: 'Muhamad Fauzan Al Farikhi' }],
  openGraph: {
    title: 'Muhamad Fauzan Al Farikhi | Tech Lead & AI Engineer',
    description: 'Founder & CEO of NEXA Tech Labs. Building AI-powered digital products for Indonesian businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-[family-name:var(--font-dm-sans)] antialiased">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
