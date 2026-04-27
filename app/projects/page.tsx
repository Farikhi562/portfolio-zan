'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectsData'; // Pastikan path ini benar

type FilterSlug = 'all' | 'web' | 'ai-ml' | 'business' | 'system';

const filters: { slug: FilterSlug; label: string; emoji: string }[] = [
  { slug: 'all',      label: 'All Projects',     emoji: '🚀' },
  { slug: 'web',      label: 'Web Development',  emoji: '🌐' },
  { slug: 'ai-ml',    label: 'AI / ML',          emoji: '🧠' },
  { slug: 'system',   label: 'Systems & DevOps', emoji: '⚙️' },
  { slug: 'business', label: 'Business',         emoji: '📊' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterSlug>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Logika Filter & Search (Upgrade Maksimal)
  const filtered = projectsData.filter(p => {
    const matchesCategory = active === 'all' || p.categorySlug === active;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const liveCount    = projectsData.filter(p => p.status === 'live').length;
  const aiCount      = projectsData.filter(p => p.categorySlug === 'ai-ml').length;
  const totalCount   = projectsData.length;

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />
            Portfolio
          </span>
          <h1 className="font-(family-name:--font-syne) text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Featured<br />
            <span className="gradient-text">Projects.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Eksekusi teknis dari sistem POS enterprise, pipeline AI, 
            hingga web app production-ready yang digunakan klien nyata.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { value: `${totalCount}`, label: 'Total Projects',   icon: '📁' },
              { value: `${liveCount}`,  label: 'Live in Prod',     icon: '🚀' },
              { value: `${aiCount}`,    label: 'AI/ML Projects',   icon: '🧠' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm">
                <span className="text-2xl">{s.icon}</span>
                <div className="flex flex-col">
                  <span className="font-(family-name:--font-syne) text-xl font-black text-blue-600 leading-none">{s.value}</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER & SEARCH BAR (UPGRADED) ──────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-8 z-20 relative">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => {
              const count = f.slug === 'all' ? totalCount : projectsData.filter(p => p.categorySlug === f.slug).length;
              return (
                <button
                  key={f.slug}
                  onClick={() => setActive(f.slug)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    active === f.slug
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  <span>{f.emoji}</span>
                  {f.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    active === f.slug ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input 
              type="text" 
              placeholder="Cari proyek..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

        </div>
      </section>

      {/* ── PROJECT GRID ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-white border border-slate-200 border-dashed rounded-3xl text-slate-400">
            <p className="text-6xl mb-4 opacity-50">🔭</p>
            <p className="font-bold text-slate-700 text-xl">Proyek tidak ditemukan.</p>
            <p className="text-sm mt-2 text-slate-500">Coba ganti kata kunci pencarian atau filter kategori.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActive('all'); }}
              className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Punya ide eksekusi selanjutnya?
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto">
            Tim NEXA siap membantu dari discovery, ideasi, hingga deployment production. Praktis dan minim hambatan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 btn-glow bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Mulai Diskusi
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}