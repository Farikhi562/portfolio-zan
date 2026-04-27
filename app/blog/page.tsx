import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Muhamad Fauzan Al Farikhi',
  description: 'Tulisan tentang AI, software engineering, startup, dan pengalaman membangun produk digital.',
};

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  featured?: boolean;
  comingSoon?: boolean;
};

const ARTICLES: Article[] = [
  {
    slug: 'membangun-ai-chatbot-umkm',
    title: 'Membangun AI Chatbot untuk UMKM di daerah Jakarta Pusat dengan LangChain & Claude API',
    excerpt: 'Panduan lengkap dari ideasi hingga deployment — bagaimana saya membangun chatbot AI yang benar-benar berguna untuk bisnis kecil dengan budget terbatas.',
    category: 'AI Engineering',
    date: '13 Apr 2026',
    readTime: '12 min',
    emoji: '🤖',
    featured: true,
  },
  {
    slug: 'nexa-journey-0-to-6-engineers',
    title: 'Dari Solo Developer ke Tim 7 Engineer: Pelajaran Membangun NEXA Tech Labs',
    excerpt: 'Jujur soal tantangan, kegagalan, dan hal-hal yang saya pelajari saat scale-up dari freelancer ke founder tech studio B2B.',
    category: 'Startup',
    date: '19 Mar 2026',
    readTime: '8 min',
    emoji: '🚀',
    featured: true,
  },
  {
    slug: 'nextjs-15-tips',
    title: '10 Tips Next.js 15 yang Wajib Kamu Tahu Sebagai Fullstack Developer',
    excerpt: 'Dari server actions, caching strategy, sampai deployment optimization — tips praktis yang langsung bisa dipakai.',
    category: 'Web Dev',
    date: '15 Mar 2026',
    readTime: '10 min',
    emoji: '⚡',
  },
  {
    slug: 'icbc-2026-story',
    title: 'Cerita di Balik ICBC 2026 di Udinus Semarang',
    excerpt: 'Bagaimana kami menyiapkan presentasi bisnis NEXA dalam waktu singkat dan menghadapi juri internasional untuk pertama kali.',
    category: 'Story',
    date: '19 Apr 2026',
    readTime: '6 min',
    emoji: '🏆',
  },
  {
    slug: 'mlops-untuk-pemula',
    title: 'MLOps untuk Pemula: Deploy Model AI ke Production Tanpa Ribet',
    excerpt: 'Dari Jupyter notebook ke API yang bisa diakses ribuan pengguna. Step-by-step dengan FastAPI, Docker, dan GitHub Actions.',
    category: 'AI Engineering',
    date: '13 Maret 2026',
    readTime: '15 min',
    emoji: '🔧',
  },
  {
    slug: 'sistem-pos-architecture',
    title: 'Arsitektur Sistem POS Enterprise yang Saya Bangun untuk Klien F&B',
    excerpt: 'Deep dive ke technical decisions: kenapa PostgreSQL, bagaimana handle concurrent transactions, dan real-time sync antar cabang.',
    category: 'Architecture',
    date: '15 Feb 2026',
    readTime: '18 min',
    emoji: '🏗️',
    comingSoon: true,
  },
  {
    slug: 'dark-side-of-freelancing',
    title: 'Sisi Gelap Freelancing yang Jarang Dibicarakan',
    excerpt: 'Burnout, scope creep, klien yang ghosting, dan bagaimana saya survive sambil tetap menjaga kualitas kerja.',
    category: 'Story',
    date: '1 Feb 2026',
    readTime: '7 min',
    emoji: '😅',
    comingSoon: true,
  },
];

const CATEGORIES = ['All', 'AI Engineering', 'Web Dev', 'Startup', 'Architecture', 'Story'];

const catColors: Record<string, string> = {
  'AI Engineering': 'bg-violet-50 text-violet-700 border-violet-200',
  'Web Dev':        'bg-blue-50 text-blue-700 border-blue-200',
  'Startup':        'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Architecture':   'bg-sky-50 text-sky-700 border-sky-200',
  'Story':          'bg-amber-50 text-amber-700 border-amber-200',
};

function ArticleCard({ article }: { article: Article }) {
  const inner = (
    <div className={`group rounded-3xl border p-6 card-hover h-full flex flex-col transition-all ${article.comingSoon ? 'opacity-60' : 'hover:border-blue-200'}`}
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="text-3xl mb-4">{article.emoji}</div>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${catColors[article.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
          {article.category}
        </span>
        {article.comingSoon && (
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">Coming Soon</span>
        )}
      </div>
      <h3 className="font-(family-name:--font-syne) font-bold text-base leading-snug mb-3 group-hover:text-blue-600 transition-colors flex-1" style={{ color: 'var(--text)' }}>
        {article.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-3)' }}>{article.excerpt}</p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{article.date}</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>·</span>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{article.readTime} read</span>
        </div>
        {!article.comingSoon && (
          <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-block">Read →</span>
        )}
      </div>
    </div>
  );

  if (article.comingSoon) return <div>{inner}</div>;
  return <Link href={`/blog/${article.slug}`}>{inner}</Link>;
}

export default function BlogPage() {
  const featured = ARTICLES.filter(a => a.featured);
  const rest     = ARTICLES.filter(a => !a.featured);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HEADER ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />Blog
          </span>
          <h1 className="font-(family-name:--font-syne) text-5xl md:text-7xl font-black tracking-tighter mb-5 leading-[0.9]" style={{ color: 'var(--text)' }}>
            Tulisan &<br /><span className="gradient-text">Pemikiran.</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-3)' }}>
            AI, software engineering, startup, dan pengalaman nyata membangun produk digital. 
            Tidak ada teori kosong — semuanya dari pengalaman langsung.
          </p>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-blue-600" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Featured Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-blue-600" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">All Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* ── NEWSLETTER TEASER ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-[2.5rem] p-10 text-center border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="text-4xl mb-4">📬</div>
          <h2 className="font-(family-name:--font-syne) text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text)' }}>Mau Dapat Notifikasi Artikel Baru?</h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--text-3)' }}>
            Subscribe newsletter saya — tidak ada spam, hanya artikel berkualitas tentang AI dan tech.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-700 transition-all text-sm">
            Hubungi untuk Subscribe
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}