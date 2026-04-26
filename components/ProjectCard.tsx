import Link from 'next/link';

interface ProjectCardProps {
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
  'live':        { label: 'Live',        color: 'bg-green-50 text-green-700 border-green-200'  },
  'in-progress': { label: 'In Progress', color: 'bg-amber-50 text-amber-700 border-amber-200'  },
  'completed':   { label: 'Completed',   color: 'bg-slate-50 text-slate-600 border-slate-200'  },
};

export default function ProjectCard({
  title,
  role,
  description,
  techStack,
  linkUrl,
  category,
  status = 'completed',
  highlight = false,
}: ProjectCardProps) {
  const statusStyle = statusConfig[status];

  return (
    <div
      className={`group relative bg-white rounded-[1.5rem] border transition-all duration-500 flex flex-col overflow-hidden card-hover ${
        highlight
          ? 'border-blue-200 shadow-lg shadow-blue-100/50'
          : 'border-slate-200 shadow-sm hover:border-blue-200'
      }`}
    >
      {/* Top color bar */}
      <div
        className={`h-1 w-full ${
          highlight
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
            : 'bg-gradient-to-r from-slate-200 to-slate-100 group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500'
        }`}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              {category}
            </span>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-slate-900 leading-tight">
              {title}
            </h3>
          </div>
          <span
            className={`shrink-0 ml-3 mt-0.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${statusStyle.color}`}
          >
            {statusStyle.label}
          </span>
        </div>

        {/* Role */}
        <p className="text-xs font-semibold text-slate-500 mb-3">
          <span className="text-slate-400">Role:</span> {role}
        </p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map(tech => (
            <span
              key={tech}
              className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {linkUrl && (
          <Link
            href={linkUrl}
            target={linkUrl.startsWith('http') ? '_blank' : undefined}
            rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover/link:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
