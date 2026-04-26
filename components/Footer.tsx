import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <Link href="/" className="font-extrabold text-2xl tracking-tighter text-white block mb-2">
            Fauzan<span className="text-blue-500">.</span>
          </Link>
          <p className="text-sm">
            © {new Date().getFullYear()} Muhamad Fauzan Al Farikhi. <br className="hidden md:block" />
            All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 items-center">
          <a 
            href="https://github.com/fauzan-lo" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/fauzan-lo" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a 
            href="mailto:email-lo@gmail.com" 
            className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}