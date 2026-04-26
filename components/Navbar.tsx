'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about',    label: 'About'    },
  { href: '/projects', label: 'Projects' },
  { href: '/skills',   label: 'Skills'   },
  { href: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
            <span className="text-white font-[family-name:var(--font-syne)] font-bold text-sm">F</span>
          </div>
          <span className="font-[family-name:var(--font-syne)] font-bold text-slate-900 hidden sm:block">
            Fauzan<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cv-fauzan.pdf"
            download
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Resume
          </a>
          <Link
            href="/contact"
            className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-sm shadow-blue-200 btn-glow"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-4 space-y-1">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="/cv-fauzan.pdf"
              download
              className="block text-center px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="block text-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Hire Me →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
