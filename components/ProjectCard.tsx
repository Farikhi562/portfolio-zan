import Link from 'next/link';

interface ProjectCardProps {
  slug?: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;
  category: string;
  status?: 'live' | 'in-progress' | 'completed';
  highlight?: boolean;
}

const statusConfig = {
  'live':        { label: 'Live',        color: 'bg-green-50 text-green-700 border-green-200' },
  'in-progress': { label: 'In Progress', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  'completed':   { label: 'Completed',   color: 'bg-slate-100 text-slate-600 border-slate-200' },
};

export default function ProjectCard({
  slug, title, role, description, techStack,
  linkUrl, category, status = 'completed', highlight = false,
}: ProjectCardProps) {
  const s = statusConfig[status];

  const card = (
    <div
      className={`group relative rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden card-hover h-full`}
      style={{
        background: 'var(--surface)',
        borderColor: highlight ? '#bfdbfe' : 'var(--border)',
        boxShadow: highlight ? '0 4px 24px rgba(37,99,235,0.08)' : undefined,
      }}
    >
      {/* Top bar */}
      <div className={`h-1 w-full ${highlight ? 'bg-linear-to-r from-blue-500 to-indigo-500' : 'bg-linear-to-r from-[var(--border)] to-[var(--border)] group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500'}`} />

      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              {category}
            </span>
            <h3 className="font-(family-name:--font-syne) text-base sm:text-lg font-bold leading-snug" style={{ color: 'var(--text)' }}>
              {title}
            </h3>
          </div>
          <span className={`shrink-0 text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full border whitespace-nowrap ${s.color}`}>
            {s.label}
          </span>
        </div>

        {/* Role */}
        <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
          Role: <span style={{ color: 'var(--text-3)' }}>{role}</span>
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none" style={{ color: 'var(--text-3)' }}>
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-lg border"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-3)' }}
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span
              className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-lg border"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-1">
          {slug && (
            <span className="text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Details →
            </span>
          )}
          {linkUrl && (
            <a
              href={linkUrl}
              target={linkUrl.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm font-bold transition-colors inline-flex items-center gap-1"
              style={{ color: 'var(--text-muted)' }}
              onClick={e => e.stopPropagation()}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (slug) return <Link href={`/projects/${slug}`} className="h-full block">{card}</Link>;
  return card;
}