import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="font-extrabold text-xl tracking-tighter text-slate-900">
          Fauzan<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/skills" className="hover:text-blue-600 transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">
            Projects
          </Link>
        </div>

        {/* Mobile Menu Button (Opsional untuk dikembangkan nanti) */}
        <div className="md:hidden flex items-center">
          <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}