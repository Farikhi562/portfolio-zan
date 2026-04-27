'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/projects', label: 'Projects' },
  { href: '/skills',   label: 'Skills'   },
  { href: '/blog',     label: 'Blog'     },
  { href: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm shadow-black/5 py-3' : 'bg-transparent py-4'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="font-(family-name:--font-syne) font-black text-base sm:text-lg tracking-tight" style={{ color: 'var(--text)' }}>
              Fauzan<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                      active ? 'text-blue-600 bg-blue-50' : 'hover:bg-[var(--surface-raised)]'
                    }`}
                    style={{ color: active ? undefined : 'var(--text-3)' }}
                  >
                    {link.label}
                    {active && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Dark mode */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-3)' }}
            >
              {isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            {/* CTA — desktop only */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
            >
              Hire Me
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

            {/* Hamburger — only show on tablet (sm-md), hidden on mobile because FloatingDock handles it */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5 border transition-all"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text)' }} />
              <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} style={{ background: 'var(--text)' }} />
              <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text)' }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile panel — slides from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] z-50 md:hidden transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex justify-between items-center mb-8">
            <span className="font-(family-name:--font-syne) font-black text-base" style={{ color: 'var(--text)' }}>Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 rounded-xl flex items-center justify-center border"
              style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>

          <ul className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="animate-slide-right" style={{ animationDelay: `${i * 0.04}s` }}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${active ? 'bg-blue-50 text-blue-600' : ''}`}
                    style={{ color: active ? undefined : 'var(--text-2)' }}
                  >
                    {link.label}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="space-y-2 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
              Let&apos;s Work Together
            </Link>
            <a href="/cv-fauzan.pdf" download className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border transition-all" style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}