'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import { techStackMarquee } from '@/data/skillsData';
import ProjectCard from '@/components/ProjectCard';

// ─── HOOKS ───────────────────────────────────────────────
function useTypewriter(words: string[], speed = 90, deleteSpeed = 45, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef(false);
  useEffect(() => {
    if (pauseRef.current) return;
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          pauseRef.current = true;
          setTimeout(() => { pauseRef.current = false; setIsDeleting(true); }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') { setIsDeleting(false); setWordIndex(i => i + 1); }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);
  return text;
}

// ─── DATA & ASSETS (UPGRADED TO IMAGES) ─────────────────
const ROLES = ['Tech Lead', 'AI Engineer', 'Founder @NEXA', 'Full-Stack Dev', 'Problem Solver'];

const TECH_ICONS = [
  { name: 'Next.js',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',          dark: true  },
  { name: 'React',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',            dark: false },
  { name: 'TypeScript',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',  dark: false },
  { name: 'Python',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',          dark: false },
  { name: 'FastAPI',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',        dark: false },
  { name: 'PostgreSQL',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',  dark: false },
  { name: 'Docker',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',          dark: false },
  { name: 'PyTorch',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',        dark: false },
  { name: 'Supabase',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',      dark: false },
  { name: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',dark: false },
  { name: 'GitHub',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',          dark: true  },
  { name: 'Linux',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',            dark: false },
];

const STATS = [
  { num: 6,   suffix: '+', label: 'Tim Engineers', img: '/images/stats-team.jpg', raw: '7' },
  { num: 389, suffix: '',  label: 'IPK × 100',     img: '/images/stats-gpa.jpg',  raw: '3.89' },
  { num: 4,   suffix: '',  label: 'Client Live',   img: '/images/stats-client.jpg', raw: '5' },
  { num: 2,   suffix: '',  label: 'Juara Kompetisi',img: '/images/stats-award.jpg', raw: '4' },
];

const ACHIEVEMENTS = [
  {
    title: 'Matematika - Telkom University',
    subtitle: 'Kompetisi Matematika nasional yang diadakan oleh Telkom',
    org: 'Universitas Telekomunikasi, Bandung',
    year: '2022',
    desc: 'Meraih Juara 2 dalam kompetisi Matematika bergengsi. Mengerjakan soal matematika tingkat lanjut.',
    badge: 'Juara 2',
    tags: ['Math', 'Logic', 'Competition'],
    logo: '/images/telkom.png',
    img: '/images/study.jpg',
    accent: 'amber',
  },
];

const EDUCATION = [
  {
    degree: 'S1 Sistem Informasi',
    school: 'Universitas Gunadarma',
    period: '2025 – Sekarang',
    gpa: '3.89',
    logo: '/images/gunadarma.png',
    city: 'Depok, Jawa Barat',
    desc: 'Fokus pada pengembangan sistem informasi, kecerdasan buatan, dan rekayasa perangkat lunak. Aktif di berbagai kompetisi teknologi.',
    highlights: ['IPK 3.89 (Dean\'s List)', 'Kompetisi Bisnis Internasional', 'AI & Software Engineering'],
  },
];

const EXPERIENCE = [
  {
    role: 'Founder & CEO',
    company: 'NEXA Tech Labs',
    period: 'Mar 2026 – Sekarang',
    type: 'Startup',
    desc: 'Mendirikan dan memimpin B2B tech studio yang melayani UMKM dan enterprise Indonesia dengan solusi AI, Web Development, dan Cloud/DevOps.',
    tags: ['Leadership', 'Product', 'AI', 'B2B'],
    logo: '/images/nexa-logo.png',
    color: 'blue',
  },
  {
    role: 'Tech Lead & AI Engineer',
    company: 'Freelance Projects',
    period: '2025 – Sekarang',
    type: 'Freelance',
    desc: 'Mengerjakan 4+ proyek production — sistem POS enterprise, AI chatbot, dashboard bisnis, dan web app untuk klien nyata.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'MLOps'],
    logo: null,
    color: 'indigo',
  },
];

const CERTS = [
  { title: 'Juara 2 Matematika',    org: 'Telkom University',    year: '2022', img: '/images/cert-math.jpg' },
  { title: 'AI/ML Fundamentals',    org: 'Online Certification', year: '2026', img: '/images/cert-ai.jpg' },
  { title: 'Cloud & DevOps Basics', org: 'Online Certification', year: '2026', img: '/images/cert-cloud.jpg' },
  { title: 'Full-Stack Web Dev',    org: 'Online Certification', year: '2026', img: '/images/cert-web.jpg' },
];

const TESTIMONIALS = [
  {
    quote: 'Fauzan dan tim NEXA membangun sistem POS kami dalam waktu sangat cepat dengan kualitas enterprise-grade. Hasilnya melebihi ekspektasi!',
    name: 'Syahrul Ramadhan',
    role: 'Pemilik Dimsum Mentai Kmyrn',
    img: '/images/client-1.jpg',
  },
  {
    quote: 'Implementasi AI chatbot dari NEXA benar-benar mengubah cara kami melayani customer. Response time turun 70% dan kepuasan meningkat drastis.',
    name: 'Bapak Setyo Budi',
    role: 'Pemilik Kedai Pasar Senen',
    img: '/images/client-2.jpg',
  },
  {
    quote: 'Dashboard bisnis yang dibangun NEXA sangat intuitif. Tim kami langsung bisa pakai tanpa training panjang. Sangat direkomendasikan!',
    name: 'Ibu Lintang',
    role: 'Kaprodi Informatika Univ. Gunadarma',
    img: '/images/client-3.jpg',
  },
];

const SERVICES = [
  {
    img: '/images/service-web.jpg',
    title: 'Software Development',
    desc: 'Web app dan mobile-ready system dengan Next.js, TypeScript, dan Supabase.',
  },
  {
    img: '/images/service-ai.jpg',
    title: 'AI Integration',
    desc: 'Implementasi LLM, Computer Vision, dan MLOps untuk automasi bisnis cerdas.',
  },
  {
    img: '/images/service-cloud.jpg',
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipeline, containerization, dan cloud deployment yang robust.',
  },
  {
    img: '/images/service-lead.jpg',
    title: 'Tech Leadership',
    desc: 'Manajemen tim lintas fungsi, product strategy, dan technical mentoring.',
  },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────
export default function HomePage() {
  const featuredProjects = projectsData.filter(p => p.highlight);
  const role = useTypewriter(ROLES);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTesti, setActiveTesti] = useState(0);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const statsRef = useRef<HTMLDivElement>(null);

  // Scroll & Intersection
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTesti(i => (i + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const handleImgErr = (key: string) => setImgError(p => ({ ...p, [key]: true }));

  // ⚡ FITUR CANGGIH: Mouse Spotlight Effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* GLOBAL STYLES FOR ADVANCED EFFECTS */}
      <style dangerouslySetInnerHTML={{__html: `
        .spotlight-card {
          position: relative;
        }
        .spotlight-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          background: radial-gradient(
            800px circle at var(--mouse-x, 0) var(--mouse-y, 0), 
            rgba(59, 130, 246, 0.06),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          z-index: 10;
        }
        .spotlight-card:hover::before { opacity: 1; }
      `}} />

      {/* Progress & BackToTop */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-[200]" style={{ width: `${scrollProgress}%` }} />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      {/* ─── HERO ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* LEFT — TEXT */}
            <div className="flex-1">
              <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                SYSTEM ONLINE
              </div>
              <h1 className="animate-fade-up delay-100 font-(family-name:--font-syne) text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-4 leading-[0.9]">
                BUILDING<br />
                <span className="text-blue-600">TOMORROW</span><br />
                TODAY.
              </h1>
              <div className="animate-fade-up delay-200 flex items-center gap-2 mb-4">
                <span className="text-slate-400 font-medium">Identity:</span>
                <span className="text-blue-600 font-bold min-w-[200px]">{role}<span className="animate-pulse">_</span></span>
              </div>
              <p className="animate-fade-up delay-200 text-slate-500 max-w-xl mb-8 leading-relaxed">
                Saya <span className="text-slate-900 font-bold">Muhamad Fauzan Al Farikhi</span> — Mengubah logika kompleks menjadi produk digital yang skalabel untuk UMKM Indonesia bersama NEXA Tech Labs.
              </p>
              <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
                <Link href="/projects" className="bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Explore Architecture
                </Link>
                <a href="/cv-fauzan.pdf" download className="bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all">
                  Extract Profile (CV)
                </a>
              </div>
            </div>

            {/* RIGHT — TERMINAL SIMULATOR (FITUR CANGGIH) */}
            <div className="animate-fade-up delay-200 shrink-0 w-full lg:w-[450px]">
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                {/* Mac style header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">root@nexa-tech:~</span>
                </div>
                {/* Terminal Body */}
                <div className="p-5 font-mono text-sm text-green-400 h-[280px] flex flex-col gap-2">
                  <p className="text-slate-300">$ initialize_nexa_core</p>
                  <p className="animate-pulse">Loading AI modules... [OK]</p>
                  <p>Connecting to Supabase DB... [OK]</p>
                  <p>Starting Next.js Server... [OK]</p>
                  <br />
                  <p className="text-blue-300"># Founder Data Detected:</p>
                  <p>Name: Muhamad Fauzan Al Farikhi</p>
                  <p>Age: 20</p>
                  <p>GPA: 3.89 (Gunadarma Univ)</p>
                  <p>Status: <span className="bg-green-500/20 text-green-400 px-1">Deploying to Production</span></p>
                  <p className="mt-auto animate-pulse">_</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES (IMAGE BASED) ────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-(family-name:--font-syne) text-4xl font-bold text-slate-900">Core Architecture</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} onMouseMove={handleMouseMove} className="spotlight-card bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group">
              <div className="h-40 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                {!imgError[`svc-${i}`] ? (
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={() => handleImgErr(`svc-${i}`)} />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{s.title} Module</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-(family-name:--font-syne) text-lg font-bold mb-2 text-slate-900">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STATS (IMAGE DRIVEN) ──────────────────── */}
      <section ref={statsRef} className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <div key={i} onMouseMove={handleMouseMove} className="spotlight-card bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                {!imgError[`stat-${i}`] && <Image src={s.img} alt="bg" fill className="object-cover" onError={() => handleImgErr(`stat-${i}`)} />}
              </div>
              <div className="relative z-10">
                <p className="font-(family-name:--font-syne) text-4xl font-black text-blue-600 mb-1">
                  {statsVisible ? s.raw : '—'}<span className="text-2xl">{s.suffix}</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-(family-name:--font-syne) text-4xl font-bold text-slate-900">Deployed Systems</h2>
          <Link href="/projects" className="hidden md:block text-sm font-bold text-blue-600 hover:text-blue-700">View Registry →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </section>

      {/* ─── CERTS (IMAGE GRID) ────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="font-(family-name:--font-syne) text-3xl font-bold text-slate-900">Validations & Awards</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((c, i) => (
            <div key={i} onMouseMove={handleMouseMove} className="spotlight-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="h-32 bg-slate-100 relative">
                {!imgError[`cert-${i}`] ? (
                  <Image src={c.img} alt={c.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" onError={() => handleImgErr(`cert-${i}`)} />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400 font-mono">IMG_NOT_FOUND</span>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white z-10 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{c.title}</h4>
                <p className="text-xs text-slate-400">{c.org} — <span className="font-bold text-blue-600">{c.year}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEXA BRAND SECTION ────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center relative overflow-hidden">
                  {!imgError['nexa'] ? (
                    <Image src="/images/nexa-logo.png" alt="NEXA" fill className="object-contain p-2" onError={() => handleImgErr('nexa')} />
                  ) : (
                    <span className="font-black text-blue-600">NX</span>
                  )}
                </div>
                <div>
                  <span className="font-(family-name:--font-syne) text-2xl font-black text-white">NEXA</span>
                  <span className="text-blue-400 font-bold text-sm ml-2 tracking-widest">Tech Labs</span>
                </div>
              </div>
              <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Architecting the Future of<br />
                <span className="text-blue-400">Indonesian SME.</span>
              </h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Memimpin skuad beranggotakan 6 engineer untuk mendeploy solusi AI dan Cloud mutakhir. Juara 2 ICBC 2026.
              </p>
              <Link href="/about" className="text-sm font-bold text-blue-400 hover:text-blue-300">Access NEXA Profile →</Link>
            </div>
            
            {/* Terminal Style Stack View */}
            <div className="bg-black/50 p-6 rounded-2xl border border-slate-700 font-mono text-sm text-slate-300">
              <p className="text-blue-400 mb-2">{'// Core Competencies'}</p>
              <p>{'>'} const stack = [</p>
              <p className="pl-4">"Next.js App Router",</p>
              <p className="pl-4">"PostgreSQL + Supabase",</p>
              <p className="pl-4">"Python + FastAPI",</p>
              <p className="pl-4">"PyTorch / YOLOv8"</p>
              <p>{'];'}</p>
              <p className="mt-4 animate-pulse">_</p>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full" />
        </div>
      </section>

    </div>
  );
}