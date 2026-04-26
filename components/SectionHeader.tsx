interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-blue-600" />
          {eyebrow}
          {center && <span className="w-6 h-px bg-blue-600" />}
        </span>
      )}
      <h2 className={`font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-slate-500 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}