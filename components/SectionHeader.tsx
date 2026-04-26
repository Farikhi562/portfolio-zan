interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, description, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : '';

  return (
    <div className={`flex flex-col ${alignClass} mb-14`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
          <span className="w-6 h-px bg-blue-600"></span>
          {label}
          <span className="w-6 h-px bg-blue-600"></span>
        </span>
      )}
      <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-lg leading-relaxed mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
