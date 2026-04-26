import Link from 'next/link';

const footerLinks = {
  Pages: [
    { href: '/',         label: 'Home'     },
    { href: '/about',    label: 'About'    },
    { href: '/projects', label: 'Projects' },
    { href: '/skills',   label: 'Skills'   },
    { href: '/contact',  label: 'Contact'  },
  ],
  Connect: [
    { href: 'https://github.com/fauzanfauzan',      label: 'GitHub'    },
    { href: 'https://linkedin.com/in/fauzanfauzan', label: 'LinkedIn'  },
    { href: 'https://instagram.com/fauzanfauzan',   label: 'Instagram' },
    { href: 'mailto:email-fauzan@gmail.com',        label: 'Email'     },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-[family-name:var(--font-syne)] font-bold text-sm">F</span>
              </div>
              <span className="font-[family-name:var(--font-syne)] font-bold text-lg">
                Fauzan<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Tech Lead & AI Engineer. Founder of NEXA Tech Labs. 
              Building scalable digital solutions for Indonesian businesses.
            </p>
            {/* Status */}
            <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open for Ventures & Collaboration
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Muhamad Fauzan Al Farikhi. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Built with</span>
            <span className="text-blue-500 font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-blue-500 font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
