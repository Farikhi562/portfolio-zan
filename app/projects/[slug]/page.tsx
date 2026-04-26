import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData, type Project } from '@/data/projectsData';

interface Props {
  params: Promise<{ slug: string }>;
}

type StatusKey = 'live' | 'in-progress' | 'completed';

const statusConfig: Record<StatusKey, { label: string; classes: string }> = {
  'live':        { label: 'Live',        classes: 'bg-green-50 text-green-700 border-green-200' },
  'in-progress': { label: 'In Progress', classes: 'bg-amber-50 text-amber-700 border-amber-200' },
  'completed':   { label: 'Completed',   classes: 'bg-slate-50 text-slate-600 border-slate-200' },
};

export async function generateStaticParams() {
  return projectsData
    .filter((p: Project) => p.slug)
    .map((p: Project) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p: Project) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Muhamad Fauzan Al Farikhi`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p: Project) => p.slug === slug);
  if (!project) notFound();

  const statusKey = (project.status ?? 'completed') as StatusKey;
  const status    = statusConfig[statusKey];
  const related   = projectsData
    .filter((p: Project) => p.slug !== slug && p.categorySlug === project.categorySlug)
    .slice(0, 2);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── BACK NAV ── */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors"
          style={{ color: 'var(--text-3)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {project.category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${status.classes}`}>
            {status.label}
          </span>
        </div>

        <h1
          className="font-(family-name:--font-syne) text-4xl md:text-6xl font-black tracking-tighter mb-5 leading-tight"
          style={{ color: 'var(--text)' }}
        >
          {project.title}
        </h1>

        <p className="text-xl leading-relaxed max-w-3xl mb-8" style={{ color: 'var(--text-3)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap items-end gap-6 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Role</p>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-2)' }}>{project.role}</p>
          </div>
          {project.linkUrl && (
            <a
              href={project.linkUrl}
              target={project.linkUrl.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-glow bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              View Live Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-3xl p-8 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <h2 className="font-(family-name:--font-syne) text-xl font-bold mb-5" style={{ color: 'var(--text)' }}>
            🛠 Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string, i: number) => (
              <span
                key={i}
                className="text-sm font-semibold px-4 py-2 rounded-xl border hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-2)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="rounded-3xl p-8 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <h2 className="font-(family-name:--font-syne) text-xl font-bold mb-5" style={{ color: 'var(--text)' }}>
              ✨ Key Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── RELATED PROJECTS ── */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="font-(family-name:--font-syne) text-2xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            Related Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {related.map((p: Project, i: number) => (
              <Link
                key={i}
                href={`/projects/${p.slug}`}
                className="group flex gap-4 items-start p-5 rounded-2xl border card-hover hover:border-blue-200 transition-all"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{p.category}</p>
                  <h3
                    className="font-(family-name:--font-syne) font-bold text-sm group-hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--text)' }}
                  >
                    {p.title}
                  </h3>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}