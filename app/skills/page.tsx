'use client';

import { useState, useEffect, useRef } from 'react';

// ── REAL SKILLS DATA ────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    id: 'frontend', title: 'Frontend Development', icon: '⚡', color: 'blue',
    desc: 'Membangun UI yang responsif, cepat, dan estetis.',
    skills: [
      { name: 'Next.js',      level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',           dark: true  },
      { name: 'React',        level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',             dark: false },
      { name: 'TypeScript',   level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',   dark: false },
      { name: 'JavaScript',   level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',   dark: false },
      { name: 'Vite.js',      level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',           dark: false },
      { name: 'Tailwind CSS', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', dark: false },
      { name: 'HTML5',        level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',             dark: false },
      { name: 'CSS3',         level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',               dark: false },
    ],
  },
  {
    id: 'backend', title: 'Backend & Database', icon: '🗄️', color: 'indigo',
    desc: 'Merancang API dan infrastruktur data yang handal.',
    skills: [
      { name: 'Python',      level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',       dark: false },
      { name: 'FastAPI',     level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',     dark: false },
      { name: 'Flask',       level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',         dark: true  },
      { name: 'Laravel',     level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',     dark: false },
      { name: 'PHP',         level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',             dark: false },
      { name: 'Java',        level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',           dark: false },
      { name: 'PostgreSQL',  level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', dark: false },
      { name: 'MySQL',       level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',         dark: false },
      { name: 'Supabase',    level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',   dark: false },
    ],
  },
  {
    id: 'ai', title: 'AI / Machine Learning', icon: '🧠', color: 'violet',
    desc: 'Implementasi model ML dan pipeline AI untuk produksi.',
    skills: [
      { name: 'PyTorch',       level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',         dark: false },
      { name: 'TensorFlow',    level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',   dark: false },
      { name: 'Scikit-learn',  level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', dark: false },
      { name: 'OpenCV',        level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',           dark: false },
      { name: 'Pandas',        level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',           dark: false },
      { name: 'NumPy',         level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',             dark: false },
      { name: 'Matplotlib',    level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',   dark: false },
      { name: 'LangChain',     level: 78, icon: null, emoji: '🦜' },
      { name: 'YOLO / ResNet', level: 75, icon: null, emoji: '👁️' },
      { name: 'Transformers',  level: 68, icon: null, emoji: '🤗' },
      { name: 'Claude API',    level: 85, icon: null, emoji: '🤖' },
      { name: 'OpenAI API',    level: 82, icon: null, emoji: '🔮' },
    ],
  },
  {
    id: 'devops', title: 'Cloud & DevOps', icon: '☁️', color: 'sky',
    desc: 'Deploy, monitoring, dan automasi infrastructure.',
    skills: [
      { name: 'Git',            level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',                   dark: false },
      { name: 'GitHub',         level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',             dark: true  },
      { name: 'GitLab',         level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',             dark: false },
      { name: 'Docker',         level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',             dark: false },
      { name: 'Vercel',         level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',             dark: true  },
      { name: 'GitHub Actions', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', dark: false },
      { name: 'Linux / Bash',   level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',               dark: false },
    ],
  },
  {
    id: 'tools', title: 'Tools & Workflow', icon: '🛠️', color: 'slate',
    desc: 'Ekosistem tools untuk produktivitas dan kolaborasi.',
    skills: [
      { name: 'VS Code',   level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',   dark: false },
      { name: 'Figma',     level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',     dark: false },
      { name: 'Jupyter',   level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', dark: false },
      { name: 'Postman',   level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', dark: false },
      { name: 'Notion',    level: 88, icon: null, emoji: '📝' },
      { name: 'IndexedDB', level: 65, icon: null, emoji: '💾' },
    ],
  },
  {
    id: 'math', title: 'Math & Science Foundation', icon: '📐', color: 'emerald',
    desc: 'Landasan ilmiah yang membentuk cara berpikir analitis — dari olimpiade fisika nasional.',
    skills: [
      { name: 'Calculus',       level: 90, icon: null, emoji: '∫' },
      { name: 'Linear Algebra', level: 88, icon: null, emoji: '⊗' },
      { name: 'Statistics',     level: 85, icon: null, emoji: '📊' },
      { name: 'Applied Physics',level: 92, icon: null, emoji: '⚛️' },
      { name: 'Probability',    level: 82, icon: null, emoji: '🎲' },
      { name: 'Discrete Math',  level: 78, icon: null, emoji: '∑' },
    ],
  },
];

const ALL_TECH = [
  'Next.js','React','TypeScript','JavaScript','Vite.js','Tailwind CSS','HTML5','CSS3',
  'Python','FastAPI','Flask','Laravel','PHP','Java','Node.js','PostgreSQL','MySQL','Supabase',
  'PyTorch','TensorFlow','Scikit-learn','OpenCV','LangChain','Pandas','NumPy','Matplotlib',
  'Seaborn','Claude API','OpenAI API','YOLO','ResNet','Transformers','Jupyter',
  'Docker','Git','GitHub','GitLab','GitHub Actions','Vercel','Linux','Bash','Nginx',
  'Postman','Figma','VS Code','Notion','IndexedDB',
];

const LEARNING = [
  { name: 'Rust Programming',             p: 25, e: '🦀' },
  { name: 'Kubernetes (K8s)',              p: 35, e: '☸️' },
  { name: 'MLflow & Experiment Tracking', p: 55, e: '📈' },
  { name: 'System Design at Scale',       p: 60, e: '🏗️' },
];

const COLOR_MAP: Record<string, { bg: string; text: string; bar: string }> = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',    bar: 'from-blue-500 to-blue-600'     },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  bar: 'from-indigo-500 to-indigo-600' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-600',  bar: 'from-violet-500 to-violet-600' },
  sky:     { bg: 'bg-sky-50',     text: 'text-sky-600',     bar: 'from-sky-500 to-sky-600'       },
  slate:   { bg: 'bg-slate-50',   text: 'text-slate-700',   bar: 'from-slate-400 to-slate-600'   },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', bar: 'from-emerald-500 to-emerald-600'},
};

// Animated skill bar
function SkillBar({ level, bar, trigger }: { level: number; bar: string; trigger: boolean }) {
  return (
    <div className="skill-bar">
      <div
        className={`skill-bar-fill bg-linear-to-r ${bar}`}
        style={{ width: trigger ? `${level}%` : '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
      />
    </div>
  );
}

export default function SkillsPage() {
  const [query, setQuery]   = useState('');
  const [active, setActive] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger bars when visible
  useEffect(() => {
    const t = setTimeout(() => setTrigger(true), 600);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTrigger(true); clearTimeout(t); } }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  const filtered = SKILL_CATEGORIES.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => s.name.toLowerCase().includes(query.toLowerCase())),
  })).filter(cat => cat.skills.length > 0 || !query);

  const activeFilter = active
    ? SKILL_CATEGORIES.filter(c => c.id === active)
    : filtered;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* HEADER */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />Tech Stack
          </span>
          <h1 className="font-(family-name:--font-syne) font-black tracking-tighter mb-4 leading-[0.92]"
            style={{ color: 'var(--text)', fontSize: 'clamp(2rem, 8vw, 5rem)' }}>
            Skills &<br /><span className="gradient-text">Expertise.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--text-3)' }}>
            Teknologi yang saya gunakan — dari fondasi matematika olimpiade nasional hingga implementasi AI production-ready.
          </p>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Cari skill... (Next.js, Python, Laravel...)"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-3 text-sm rounded-xl border form-input"
                style={{ borderColor: 'var(--border)' }}
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-lg" style={{ color: 'var(--text-muted)' }}>×</button>
              )}
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActive(null)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${!active ? 'bg-blue-600 text-white' : 'border hover:border-blue-300'}`}
              style={!active ? {} : { borderColor: 'var(--border)', color: 'var(--text-3)', background: 'var(--surface)' }}
            >
              All
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button key={cat.id}
                onClick={() => setActive(active === cat.id ? null : cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${active === cat.id ? 'bg-blue-600 text-white' : 'border hover:border-blue-300'}`}
                style={active === cat.id ? {} : { borderColor: 'var(--border)', color: 'var(--text-3)', background: 'var(--surface)' }}
              >
                {cat.icon} {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SKILL CATEGORIES */}
      <section ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-5">
          {activeFilter.map(cat => {
            const c = COLOR_MAP[cat.color] ?? COLOR_MAP.blue;
            const skillsToShow = query
              ? cat.skills.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))
              : cat.skills;
            if (skillsToShow.length === 0) return null;
            return (
              <div key={cat.id} className="rounded-3xl p-6 sm:p-8 border card-hover"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center text-xl shrink-0`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="font-(family-name:--font-syne) font-bold text-base" style={{ color: 'var(--text)' }}>{cat.title}</h2>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{cat.desc}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {skillsToShow.map((skill, j) => (
                    <div key={j}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          {skill.icon ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={skill.icon} alt={skill.name} width={16} height={16}
                              className={`w-4 h-4 object-contain ${'dark' in skill && skill.dark ? 'dark-icon' : ''}`}
                              loading="lazy" />
                          ) : (
                            <span className="text-sm leading-none">{'emoji' in skill ? skill.emoji : '•'}</span>
                          )}
                          <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-2)' }}>{skill.name}</span>
                        </div>
                        <span className={`text-xs font-bold ${c.text}`}>{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} bar={c.bar} trigger={trigger} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CURRENTLY LEARNING */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-4xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-2 block">📚 Always Learning</span>
              <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold text-white">Currently Exploring</h2>
              <p className="text-slate-400 text-sm mt-1">Yang lagi aktif dipelajari sekarang.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {LEARNING.map((item, i) => (
                <div key={i} className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{item.e}</span>
                      <span className="text-sm font-bold text-white">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-400">{item.p}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                      style={{ width: trigger ? `${item.p}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-10 top-10 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </section>

      {/* FULL TECH STACK BADGE CLOUD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-4xl p-7 sm:p-10 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <h2 className="font-(family-name:--font-syne) text-xl sm:text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>Full Tech Stack</h2>
          <p className="text-xs sm:text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Semua teknologi yang pernah digunakan dalam proyek nyata.</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {ALL_TECH.map((tech, i) => (
              <span key={i}
                className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl border cursor-default transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-3)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}