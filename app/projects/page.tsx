'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectsData';

type FilterSlug = 'all' | 'web' | 'ai-ml' | 'business' | 'system';

const filters: { slug: FilterSlug; label: string; emoji: string }[] = [
  { slug: 'all',      label: 'All Projects',    emoji: '🚀' },
  { slug: 'web',      label: 'Web Development', emoji: '🌐' },
  { slug: 'ai-ml',    label: 'AI / ML',         emoji: '🧠' },
  { slug: 'system',   label: 'Systems & DevOps', emoji: '⚙️' },
  { slug: 'business', label: 'Business',         emoji: '📊' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterSlug>('all');

  const filtered = active === 'all'
    ? projectsData
    : projectsData.filter(p => p.categorySlug === active);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />
            Portfolio
          </span>
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Featured<br />
            <span className="gradient-text">Projects.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Kumpulan eksekusi teknis mulai dari sistem POS enterprise, pipeline AI, 
            hingga web app production-ready yang digunakan klien nyata.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { value: `${projectsData.length}`, label: 'Total Projects' },
              { value: `${projectsData.filter(p => p.status === 'live').length}`, label: 'Live in Production' },
              { value: `${projectsData.filter(p => p.categorySlug === 'ai-ml').length}`, label: 'AI/ML Projects' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-syne)] text-2xl font-black text-blue-600">{s.value}</span>
                <span className="text-sm text-slate-500 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f.slug}
              onClick={() => setActive(f.slug)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                active === f.slug
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              <span>{f.emoji}</span>
              {f.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                active === f.slug
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {f.slug === 'all' ? projectsData.length : projectsData.filter(p => p.categorySlug === f.slug).length}
              </span>
            </button>
          ))}
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
          <div className="text-center py-24 text-slate-400">
            <p className="text-4xl mb-4">🔭</p>
            <p className="font-semibold">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Punya proyek yang ingin dibangun?
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto">
            Saya dan tim NEXA siap membantu dari ideasi hingga deployment production.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 btn-glow bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Diskusi Proyek
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
