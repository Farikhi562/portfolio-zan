import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/app/data/blogData';

// Di Next.js 15, params berbentuk Promise, jadi kita sesuaikan tipenya
type Props = {
  params: Promise<{ slug: string }>;
};

// Generate Metadata dinamis untuk SEO
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return { title: 'Artikel Tidak Ditemukan | NEXA' };
  
  return {
    title: `${post.title} | Muhamad Fauzan Al Farikhi`,
    description: post.content.substring(0, 150).replace(/<[^>]+>/g, '') + '...',
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  // Kalau slug nggak ada di data, lempar otomatis ke halaman 404 Next.js
  if (!post) {
    notFound();
  }

  // URL Encode untuk fitur Share
  const shareUrl = `https://nexatechlabs.my.id/blog/${post.slug}`;
  const shareText = encodeURIComponent(`Baca artikel keren dari Muhamad Fauzan: ${post.title}`);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <article className="max-w-3xl mx-auto px-6 relative">
        
        {/* ── TOMBOL KEMBALI ── */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-12 hover:-translate-x-1 transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Kembali ke Blog
        </Link>

        {/* ── HEADER ARTIKEL ── */}
        <header className="mb-14 border-b border-slate-200 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl shadow-sm bg-white p-2 rounded-2xl border border-slate-100">{post.emoji}</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-200">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-(family-name:--font-syne) text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              {post.date}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {post.readTime}
            </div>
          </div>
        </header>

        {/* ── ISI ARTIKEL (TYPOGRAPHY) ── */}
        {/* Class prose di-tweak agar tampilan HTML dari blogData.ts jadi sangat rapi, blockquote dan pre/code block jadi profesional */}
        <div 
          className="prose prose-slate prose-lg md:prose-xl max-w-none 
                     prose-headings:font-(family-name:--font-syne) prose-headings:font-black prose-headings:tracking-tight
                     prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                     prose-img:rounded-3xl prose-img:border prose-img:border-slate-200
                     prose-pre:bg-slate-900 prose-pre:text-slate-300 prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
                     prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-medium prose-blockquote:text-slate-700
                     prose-li:marker:text-blue-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ── FOOTER ARTIKEL (AUTHOR & SHARE) ── */}
        <footer className="mt-20 pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            
            {/* Author Info */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Muhamad Fauzan Al Farikhi" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Ditulis Oleh</p>
                <h4 className="font-(family-name:--font-syne) font-black text-xl text-slate-900">Muhamad Fauzan</h4>
                <p className="text-sm text-slate-500 mt-1">Founder @NEXA Tech Labs | Web & AI Enthusiast</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto">
              <a 
                href={`https://wa.me/?text=${shareText}%0A${shareUrl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center bg-slate-100 hover:bg-green-100 text-slate-700 hover:text-green-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
              >
                Share WA
              </a>
              <a 
                href="https://nexatechlabs.my.id" 
                target="_blank" 
                className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md shadow-blue-200"
              >
                Hire NEXA
              </a>
            </div>

          </div>
        </footer>

      </article>
    </div>
  );
}