import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center max-w-md relative z-10">
        <p className="font-(family-name:--font-syne) text-[10rem] font-black text-slate-100 mb-0 leading-none select-none">
          404
        </p>
        <div className="-mt-4 mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            <span className="w-4 h-px bg-red-400" />
            Page Not Found
            <span className="w-4 h-px bg-red-400" />
          </span>
        </div>
        <h1 className="font-(family-name:--font-syne) text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Sepertinya halaman yang kamu cari sudah dipindahkan, dihapus, atau URL-nya salah ketik.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:border-blue-300 transition-all"
          >
            See Projects
          </Link>
        </div>
      </div>
    </div>
  );
}