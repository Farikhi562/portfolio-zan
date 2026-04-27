import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-(family-name:--font-syne) font-black text-lg" style={{ color: 'var(--text)' }}>
                Fauzan<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-3)' }}>
              Tech Lead & AI Engineer. Founder @NEXA Tech Labs.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://github.com/Farikhi562', label: 'GH', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg> },
                { href: 'https://linkedin.com/in/fauzan-farikhi', label: 'LI', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: 'mailto:fauzan@nexatechlabs.id', label: 'EM', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-xl flex items-center justify-center border transition-all hover:border-blue-300 hover:text-blue-600 hover:scale-105"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-(family-name:--font-syne) font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text)' }}>Pages</h4>
            <ul className="space-y-2">
              {['/', '/about', '/projects', '/skills', '/blog', '/contact'].map((href, i) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-blue-600" style={{ color: 'var(--text-3)' }}>
                    {['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-(family-name:--font-syne) font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text)' }}>Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'AI Integration', 'Cloud & DevOps', 'Consulting'].map(s => (
                <li key={s}>
                  <Link href="/contact" className="text-sm transition-colors hover:text-blue-600" style={{ color: 'var(--text-3)' }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — hidden on small mobile, shown sm+ */}
          <div className="hidden sm:block">
            <h4 className="font-(family-name:--font-syne) font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text)' }}>Contact</h4>
            <div className="space-y-3">
              <a href="mailto:fauzan@nexatechlabs.id" className="flex items-start gap-2 text-sm hover:text-blue-600 transition-colors" style={{ color: 'var(--text-3)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="break-all">fauzan@nexatechlabs.id</span>
              </a>
              <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-3)' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Depok, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t px-4 sm:px-6 py-4" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          <p>© {year} Muhamad Fauzan Al Farikhi</p>
          <p>Built with Next.js & Tailwind CSS · NEXA Tech Labs</p>
        </div>
      </div>
    </footer>
  );
}