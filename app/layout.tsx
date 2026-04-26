import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Muhamad Fauzan Al Farikhi | Tech Lead & AI Engineer',
  description: 'Portfolio Muhamad Fauzan Al Farikhi — Founder & CEO NEXA Tech Labs, Tech Lead & AI Engineer yang membangun solusi digital skalabel untuk UMKM Indonesia.',
  keywords: ['AI Engineer', 'Tech Lead', 'Next.js', 'Machine Learning', 'NEXA Tech Labs', 'Indonesia', 'Fullstack Developer'],
  authors: [{ name: 'Muhamad Fauzan Al Farikhi' }],
  openGraph: {
    title: 'Muhamad Fauzan Al Farikhi | Tech Lead & AI Engineer',
    description: 'Founder & CEO NEXA Tech Labs. Building AI-powered digital products.',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme — runs before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body
        className="flex flex-col min-h-screen font-(family-name:--font-dm-sans) antialiased"
        style={{ background: 'var(--bg)', color: 'var(--text)' }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}