import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-[family-name:var(--font-syne)] text-9xl font-black text-slate-100 mb-4">404</p>
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 mb-8">
          Halaman yang kamu cari tidak ada. Mungkin sudah dipindahkan atau URL-nya salah.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
