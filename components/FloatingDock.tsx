'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ITEMS = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    href: '/skills',
    label: 'Skills',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    href: '/about',
    label: 'About',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function FloatingDock() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY]     = useState(0);

  // Hide dock when scrolling down, show when scrolling up
  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [lastY]);

  return (
    // Only visible on mobile (md and below)
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div
        className="mx-3 mb-2 rounded-2xl px-2 py-2 flex items-center justify-around shadow-2xl"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        {ITEMS.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`dock-item flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[52px] ${
                active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-[var(--text-3)] hover:text-blue-600 active:scale-90'
              }`}
              style={{ color: active ? undefined : 'var(--text-3)' }}
            >
              <span className={`transition-transform duration-200 ${active ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold leading-none ${active ? 'text-blue-600' : ''}`}>
                {item.label}
              </span>
              {active && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-blue-600" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}