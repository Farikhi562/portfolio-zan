import Link from 'next/link';

// Mendefinisikan struktur data yang akan diterima oleh komponen ini
export interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string; // Opsional, jaga-jaga kalau projectnya belum ada link
}

export default function ProjectCard({ title, role, description, techStack, linkUrl }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      
      {/* Header Card: Judul dan Role */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm font-semibold text-blue-600 mt-1">
          {role}
        </p>
      </div>

      {/* Body: Deskripsi Project */}
      <p className="text-slate-600 mb-6 text-sm leading-relaxed grow">
        {description}
      </p>

      {/* Footer: Tech Stack & Optional Link */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-semibold border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Render tombol link HANYA jika linkUrl tersedia */}
        {linkUrl && (
          <Link 
            href={linkUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Lihat Project
            {/* Inline SVG untuk icon panah external biar ga error Lucide */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Link>
        )}
      </div>
      
    </div>
  );
}