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

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass dark:glass-dark shadow-sm shadow-black/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="font-(family-name:--font-syne) font-black text-lg tracking-tight" style={{ color: 'var(--text)' }}>
              Fauzan<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      active
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-500/10'
                        : 'hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                    style={{ color: active ? undefined : 'var(--text-3)' }}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-3)',
              }}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* CTA — desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 dark:shadow-blue-900/40"
            >
              Hire Me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5 border transition-all"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ color: 'var(--text)' }} />
              <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} style={{ background: 'var(--text)' }} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ color: 'var(--text)' }} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden transition-all duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close */}
          <div className="flex justify-between items-center mb-10">
            <span className="font-(family-name:--font-syne) font-black text-lg" style={{ color: 'var(--text)' }}>Menu</span>
            <button onClick={() => setMenuOpen(false)} className="w-9 h-9 rounded-xl flex items-center justify-center border" style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="animate-slide-right" style={{ animationDelay: `${i * 0.05}s` }}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50'}`}
                    style={{ color: active ? undefined : 'var(--text-2)' }}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA */}
          <div className="space-y-3 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
              Let&apos;s Work Together
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="/cv-fauzan.pdf" download className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border transition-all" style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}