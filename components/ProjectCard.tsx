import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug?: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;
  links?: { label: string; url: string; icon?: string }[]; // Ditambahkan untuk multi-link
  image?: string; // Ditambahkan untuk logo Udinus
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
  linkUrl, links, image, category, status = 'completed', highlight = false,
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

      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
        {/* Header: Title & Logo */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              {category}
            </span>
            <h3 className="font-(family-name:--font-syne) text-base sm:text-lg font-bold leading-snug" style={{ color: 'var(--text)' }}>
              {title}
            </h3>
          </div>
          
          {/* Logo & Status Container */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full border whitespace-nowrap ${s.color}`}>
              {s.label}
            </span>
            
            {/* Render Logo (Udinus) kalau ada */}
            {image && (
              <div className="relative w-12 h-12 bg-white rounded-xl border p-1 shadow-sm mt-1" style={{ borderColor: 'var(--border)' }}>
                <Image 
                  src={image} 
                  alt={`${title} logo`} 
                  fill 
                  className="object-contain p-1"
                />
              </div>
            )}
          </div>
        </div>

        {/* Role */}
        <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
          Role: <span style={{ color: 'var(--text-3)' }}>{role}</span>
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-3)' }}>
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

        {/* Action Buttons (Proposal, Dokumentasi, Live) - TANPA ICON */}
        <div className="flex flex-wrap items-center gap-3 pt-3 mt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          
          {slug && (
            <span className="text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform mr-auto">
              Details →
            </span>
          )}

          {/* Render Multi-Links kalau ada */}
          {links && links.length > 0 ? (
            links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold px-4 py-2 rounded-lg border transition-colors hover:bg-blue-600 hover:text-white hover:border-transparent"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-3)' }}
                onClick={e => e.stopPropagation()}
              >
                {link.label}
              </a>
            ))
          ) : linkUrl && (
            /* Render single linkUrl kalau links array tidak ada */
            <a
              href={linkUrl}
              target={linkUrl.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold px-4 py-2 rounded-lg border transition-colors hover:bg-blue-600 hover:text-white hover:border-transparent"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-3)' }}
              onClick={e => e.stopPropagation()}
            >
              Live Project
            </a>
          )}

        </div>
      </div>
    </div>
  );

  if (slug) return <Link href={`/projects/${slug}`} className="h-full block">{card}</Link>;
  return card;
}