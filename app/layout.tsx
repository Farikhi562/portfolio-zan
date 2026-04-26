import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Pakai ../ untuk naik satu folder keluar dari 'app' menuju 'components'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhamad Fauzan Al Farikhi | Portfolio',
  description: 'Portfolio of Muhamad Fauzan Al Farikhi, Tech Lead & AI Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}