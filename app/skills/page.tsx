import { skillsData, techStackMarquee } from '@/data/skillsData';

export const metadata = {
  title: 'Skills & Tech Stack | Muhamad Fauzan Al Farikhi',
  description: 'Keahlian teknis dan tech stack Muhamad Fauzan Al Farikhi — AI Engineering, Full-Stack Development, dan lebih.',
};

const colorMap: Record<string, { bg: string; text: string; bar: string; border: string }> = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',    bar: 'from-blue-500 to-blue-600',       border: 'border-blue-200' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  bar: 'from-indigo-500 to-indigo-600',   border: 'border-indigo-200' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-600',  bar: 'from-violet-500 to-violet-600',   border: 'border-violet-200' },
  sky:     { bg: 'bg-sky-50',     text: 'text-sky-600',     bar: 'from-sky-500 to-sky-600',         border: 'border-sky-200' },
  slate:   { bg: 'bg-slate-50',   text: 'text-slate-700',   bar: 'from-slate-400 to-slate-600',     border: 'border-slate-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', bar: 'from-emerald-500 to-emerald-600', border: 'border-emerald-200' },
};

const ALL_TECH = [
  'Next.js','React','TypeScript','JavaScript','Python','HTML5','CSS3','Tailwind CSS',
  'FastAPI','Node.js','PostgreSQL','Supabase','MySQL','PyTorch','TensorFlow','Scikit-learn',
  'OpenCV','LangChain','Pandas','NumPy','Matplotlib','Seaborn','Claude API','OpenAI API',
  'Jupyter','Docker','Git','GitHub','GitHub Actions','Vercel','Linux','Bash','Nginx',
  'Postman','Figma','VS Code','Notion',
];

const learningNow = [
  { name: 'Rust Programming',             progress: 25, emoji: '🦀' },
  { name: 'Kubernetes (K8s)',              progress: 35, emoji: '☸️' },
  { name: 'MLflow & Experiment Tracking', progress: 55, emoji: '📈' },
  { name: 'System Design at Scale',       progress: 60, emoji: '🏗️' },
];

export default function SkillsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />Tech Stack
          </span>
          <h1 className="font-(family-name:--font-syne) text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Skills &<br />
            <span className="gradient-text">Expertise.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Teknologi yang saya gunakan membangun produk digital — dari fondasi 
            matematika yang kuat hingga implementasi AI production-ready.
          </p>
        </div>
      </section>

      {/* ── SKILL CATEGORIES ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, i) => {
            const colors = colorMap[category.color] ?? colorMap.blue;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="font-(family-name:--font-syne) text-xl font-bold text-slate-900">{category.title}</h2>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                        {skill.level && (
                          <span className={`text-xs font-bold ${colors.text}`}>{skill.level}%</span>
                        )}
                      </div>
                      {skill.level && (
                        <div className="skill-bar">
                          <div className={`skill-bar-fill bg-linear-to-r ${colors.bar}`} style={{ width: `${skill.level}%` }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CURRENTLY LEARNING ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-4xl p-10 md:p-14 relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">📚 Always Learning</span>
              <h2 className="font-(family-name:--font-syne) text-3xl font-bold text-white">Currently Exploring</h2>
              <p className="text-slate-400 mt-2 text-sm">Teknologi yang sedang aktif saya pelajari dan eksplor saat ini.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {learningNow.map((item, i) => (
                <div key={i} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <span className="text-sm font-bold text-white">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-400">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-10 top-10 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </section>

      {/* ── FULL TECH BADGE CLOUD ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white border border-slate-200 rounded-4xl p-10">
          <h2 className="font-(family-name:--font-syne) text-2xl font-bold text-slate-900 mb-2">Full Tech Stack</h2>
          <p className="text-slate-400 text-sm mb-8">Semua teknologi yang pernah saya gunakan dalam proyek nyata.</p>
          <div className="flex flex-wrap gap-3">
            {ALL_TECH.map((tech, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}