'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const COMMANDS = [
  { id: 'home',     label: 'Go to Home',          group: 'Navigation', icon: '🏠', action: '/'        },
  { id: 'about',    label: 'Go to About',          group: 'Navigation', icon: '👤', action: '/about'   },
  { id: 'projects', label: 'Go to Projects',       group: 'Navigation', icon: '💼', action: '/projects'},
  { id: 'skills',   label: 'Go to Skills',         group: 'Navigation', icon: '⚡', action: '/skills'  },
  { id: 'blog',     label: 'Go to Blog',           group: 'Navigation', icon: '📝', action: '/blog'    },
  { id: 'contact',  label: 'Contact Me',           group: 'Navigation', icon: '✉️', action: '/contact' },
  { id: 'cv',       label: 'Download CV',          group: 'Actions',    icon: '📄', action: 'download-cv' },
  { id: 'github',   label: 'Open GitHub',          group: 'Social',     icon: '🐱', action: 'https://github.com/Farikhi562' },
  { id: 'linkedin', label: 'Open LinkedIn',        group: 'Social',     icon: '💼', action: 'https://linkedin.com/in/fauzan-farikhi' },
  { id: 'email',    label: 'Send Email',           group: 'Social',     icon: '📧', action: 'mailto:fauzan@nexatechlabs.id' },
  { id: 'dark',     label: 'Toggle Dark Mode',     group: 'Actions',    icon: '🌙', action: 'toggle-theme' },
  { id: 'top',      label: 'Scroll to Top',        group: 'Actions',    icon: '⬆️', action: 'scroll-top' },
];

export default function CommandPalette() {
  const [open, setOpen]     = useState(false);
  const [query, setQuery]   = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router   = useRouter();

  const filtered = COMMANDS.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.group.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback((cmd: typeof COMMANDS[0]) => {
    setOpen(false);
    setQuery('');
    if (cmd.action === 'download-cv') {
      const a = document.createElement('a');
      a.href = '/cv-fauzan.pdf'; a.download = 'CV-Fauzan.pdf'; a.click();
    } else if (cmd.action === 'toggle-theme') {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    } else if (cmd.action === 'scroll-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cmd.action.startsWith('http') || cmd.action.startsWith('mailto')) {
      window.open(cmd.action, '_blank');
    } else {
      router.push(cmd.action);
    }
  }, [router]);

  // Keyboard shortcut
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(v => !v); }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  // Arrow navigation
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(v => Math.min(v + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(v => Math.max(v - 1, 0)); }
      if (e.key === 'Enter' && filtered[selected]) execute(filtered[selected]);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [open, filtered, selected, execute]);

  useEffect(() => { if (open) { setSelected(0); setTimeout(() => inputRef.current?.focus(), 50); } }, [open]);
  useEffect(() => { setSelected(0); }, [query]);

  if (!open) return null;

  // Group commands
  const groups = filtered.reduce<Record<string, typeof COMMANDS>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  let globalIdx = 0;

  return (
    <div
      className="cmd-backdrop fixed inset-0 z-[500] flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'var(--border)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 text-sm font-medium outline-none bg-transparent"
            style={{ color: 'var(--text)' }}
          />
          <kbd className="hidden sm:flex items-center gap-1 text-xs px-2 py-1 rounded-lg border font-mono" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg)' }}>
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="text-center py-8 text-sm" style={{ color: 'var(--text-muted)' }}>No results for &quot;{query}&quot;</p>
          ) : (
            Object.entries(groups).map(([group, cmds]) => (
              <div key={group}>
                <p className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{group}</p>
                {cmds.map(cmd => {
                  const idx = globalIdx++;
                  return (
                    <button
                      key={cmd.id}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${idx === selected ? 'bg-blue-50 text-blue-600' : 'hover:bg-[var(--surface-raised)]'}`}
                      style={{ color: idx === selected ? undefined : 'var(--text-2)' }}
                      onClick={() => execute(cmd)}
                      onMouseEnter={() => setSelected(idx)}
                    >
                      <span className="text-base">{cmd.icon}</span>
                      {cmd.label}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2.5 border-t flex items-center gap-4 text-[11px]" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
          <span className="ml-auto">⌘K to open</span>
        </div>
      </div>
    </div>
  );
}