'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import { techStackMarquee } from '@/data/skillsData';
import ProjectCard from '@/components/ProjectCard';

// ─── TYPEWRITER HOOK ────────────────────────────────────────
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

// ─── DATA ───────────────────────────────────────────────────
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
  { num: 6,   suffix: '+', label: 'Tim Engineers',     icon: '👥', raw: '6+' },
  { num: 389, suffix: '',  label: 'IPK × 100',         icon: '🎓', raw: '3.89' },
  { num: 4,   suffix: '',  label: 'Client Live',       icon: '🤝', raw: '4' },
  { num: 2,   suffix: '',  label: 'Juara Internasional',icon: '🏆', raw: 'Juara 2' },
];

const ACHIEVEMENTS = [
  {
    title: 'Juara 2 — ICBC 2026',
    subtitle: 'International Canvas Business Competition',
    org: 'Universitas Dian Nuswantoro (Udinus), Semarang',
    year: '2026',
    desc: 'Meraih Juara 2 dalam kompetisi bisnis internasional bergengsi. Mempresentasikan model bisnis B2B NEXA Tech Labs di hadapan juri dari industri dan akademisi internasional.',
    badge: '🏆',
    tags: ['B2B', 'AI', 'Business Model', 'Tech'],
    logo: '/images/udinus.png',
    img: '/images/icbc-2026.jpg',
    accent: 'amber',
  },
];

const EDUCATION = [
  {
    degree: 'S1 Sistem Informasi',
    school: 'Universitas Gunadarma',
    period: '2022 – Sekarang',
    gpa: '3.89',
    logo: '/images/gunadarma.png',
    city: 'Depok, Jawa Barat',
    desc: 'Fokus pada pengembangan sistem informasi, kecerdasan buatan, dan rekayasa perangkat lunak. Aktif di berbagai kompetisi teknologi dan organisasi kampus.',
    highlights: ['IPK 3.89 (Dean\'s List)', 'Kompetisi Bisnis Internasional', 'AI & Software Engineering'],
  },
];

const EXPERIENCE = [
  {
    role: 'Founder & CEO',
    company: 'NEXA Tech Labs',
    period: 'Feb 2024 – Sekarang',
    type: 'Startup',
    desc: 'Mendirikan dan memimpin B2B tech studio yang melayani UMKM dan enterprise Indonesia dengan solusi AI, Web Development, dan Cloud/DevOps.',
    tags: ['Leadership', 'Product', 'AI', 'B2B'],
    logo: '/images/nexa-logo.png',
    color: 'blue',
  },
  {
    role: 'Tech Lead & AI Engineer',
    company: 'Freelance Projects',
    period: '2023 – Sekarang',
    type: 'Freelance',
    desc: 'Mengerjakan 4+ proyek production — sistem POS enterprise, AI chatbot, dashboard bisnis, dan web app untuk klien nyata.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'MLOps'],
    logo: null,
    color: 'indigo',
  },
];

const CERTS = [
  { title: 'Juara 2 ICBC 2026',     org: 'Udinus Semarang',     year: '2026', icon: '🥈', color: 'amber' },
  { title: 'AI/ML Fundamentals',    org: 'Online Certification', year: '2024', icon: '🧠', color: 'violet' },
  { title: 'Cloud & DevOps Basics', org: 'Online Certification', year: '2024', icon: '☁️', color: 'sky'    },
  { title: 'Full-Stack Web Dev',    org: 'Online Certification', year: '2023', icon: '🌐', color: 'blue'   },
];

const TESTIMONIALS = [
  {
    quote: 'Fauzan dan tim NEXA membangun sistem POS kami dalam waktu sangat cepat dengan kualitas enterprise-grade. Hasilnya melebihi ekspektasi!',
    name: 'Client UMKM F&B',
    role: 'Pemilik Bisnis Kuliner',
    emoji: '☕',
  },
  {
    quote: 'Implementasi AI chatbot dari NEXA benar-benar mengubah cara kami melayani customer. Response time turun 70% dan kepuasan meningkat drastis.',
    name: 'Client Retail',
    role: 'Manager Operasional',
    emoji: '🛒',
  },
  {
    quote: 'Dashboard bisnis yang dibangun NEXA sangat intuitif. Tim kami langsung bisa pakai tanpa training panjang. Sangat direkomendasikan!',
    name: 'Client Enterprise',
    role: 'Direktur IT',
    emoji: '📊',
  },
];

const SERVICES = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Software Development',
    desc: 'Web app dan mobile-ready system dengan Next.js, TypeScript, dan Supabase.',
    color: 'blue',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'AI Integration',
    desc: 'Implementasi LLM, Computer Vision, dan MLOps untuk automasi bisnis yang cerdas.',
    color: 'indigo',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>,
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipeline, containerization, dan cloud deployment yang robust dan otomatis.',
    color: 'violet',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>,
    title: 'Tech Leadership',
    desc: 'Manajemen tim lintas fungsi, product strategy, dan technical mentoring.',
    color: 'slate',
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

  // Scroll progress + back-to-top
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTesti(i => (i + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const handleImgErr = (key: string) => setImgError(p => ({ ...p, [key]: true }));

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">

      {/* ① SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-0.75 bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500 z-200 transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ② BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

      {/* ③ SOCIAL SIDEBAR (desktop) */}
      <aside className="fixed left-5 bottom-0 z-40 hidden xl:flex flex-col items-center gap-3 pb-8">
        {[
          { href: 'https://github.com/Farikhi562', label: 'GitHub', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg> },
          { href: 'https://linkedin.com/in/fauzan-farikhi', label: 'LinkedIn', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          { href: 'mailto:fauzan@nexatechlabs.id', label: 'Email', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
            className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:scale-110 transition-all shadow-sm"
          >{s.svg}</a>
        ))}
        <div className="w-px h-16 bg-linear-to-b from-slate-300 to-transparent mt-1" />
      </aside>

      {/* ─────────────────────────────────────────── */}
      {/* ④ HERO ──────────────────────────────────── */}
      {/* ─────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-gradient-radial from-blue-100/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT — text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status badge */}
              <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                OPEN FOR VENTURES & COLLABORATION
              </div>

              {/* Headline */}
              <h1 className="animate-fade-up delay-100 font-(family-name:--font-syne) text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-4 leading-[0.9]">
                BUILDING<br />
                <span className="gradient-text">TOMORROW</span><br />
                TODAY.
              </h1>

              {/* Typewriter role */}
              <div className="animate-fade-up delay-200 flex items-center gap-2 justify-center lg:justify-start mb-4">
                <span className="text-slate-400 text-base md:text-lg font-medium">Saya seorang —</span>
                <span className="text-blue-600 font-bold text-base md:text-lg min-w-40">
                  {role}<span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="animate-fade-up delay-200 text-base md:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
                Saya{' '}
                <span className="text-slate-900 font-bold">Muhamad Fauzan Al Farikhi</span>
                {' '}— Founder{' '}
                <span className="text-blue-600 font-bold">@NEXA Tech Labs</span>.
                Mengubah logika kompleks menjadi produk digital yang skalabel untuk UMKM Indonesia.
              </p>

              {/* CTA buttons */}
              <div className="animate-fade-up delay-300 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/projects"
                  className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
                >
                  Explore Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-7 py-3.5 rounded-2xl font-bold text-sm hover:border-blue-300 hover:shadow-md transition-all"
                >
                  Get In Touch
                </Link>
                {/* ⑤ CV DOWNLOAD */}
                <a
                  href="/cv-fauzan.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download CV
                </a>
              </div>

              {/* Mini social row */}
              <div className="animate-fade-up delay-400 flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <span className="text-xs text-slate-400 font-medium">Find me on</span>
                {[
                  { href: 'https://github.com/Farikhi562', label: 'GitHub' },
                  { href: 'https://linkedin.com/in/fauzan-farikhi', label: 'LinkedIn' },
                  { href: 'mailto:fauzan@nexatechlabs.id', label: 'Email' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 hover:text-blue-600 underline underline-offset-2 transition-colors"
                  >{s.label}</a>
                ))}
              </div>
            </div>

            {/* RIGHT — ⑥ PROFILE PHOTO */}
            <div className="animate-fade-up delay-200 shrink-0 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400/30 to-indigo-400/30 blur-2xl scale-110" />
                {/* Rotating dashed border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow" />
                {/* Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                  {!imgError['profile'] ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Muhamad Fauzan Al Farikhi"
                      fill
                      className="object-cover"
                      onError={() => handleImgErr('profile')}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-100 to-indigo-100">
                      <span className="text-7xl">👨‍💻</span>
                    </div>
                  )}
                </div>
                {/* Floating badge — NEXA */}
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg shadow-blue-300">
                  NEXA CEO
                </div>
                {/* Floating badge — GPA */}
                <div className="absolute -top-2 -left-3 bg-white border border-slate-200 text-slate-800 text-xs font-black px-3 py-1.5 rounded-xl shadow-md">
                  GPA 3.89 🎓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ MARQUEE TECH STACK */}
      <section className="py-5 overflow-hidden border-y border-slate-200 bg-white">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStackMarquee, ...techStackMarquee].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mx-8">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ⑧ TECH STACK ICONS ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            Tech Stack
            <span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Tools I Use Daily</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_ICONS.map((t, i) => (
            <div key={i} className="group flex flex-col items-center gap-2 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 w-20 card-hover cursor-default">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.src}
                alt={t.name}
                width={36}
                height={36}
                className={`w-9 h-9 object-contain ${t.dark ? 'dark-icon' : ''}`}
                loading="lazy"
              />
              <span className="text-[10px] font-bold text-slate-500 text-center leading-tight">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ⑨ ANIMATED STATS ───────────────────────────────── */}
      <section ref={statsRef} className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all card-hover">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="font-(family-name:--font-syne) text-3xl md:text-4xl font-black text-slate-900 mb-1">
                {statsVisible ? s.raw : '—'}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⑩ EDUCATION ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            Education
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Latar Belakang Akademik</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-6">
          {EDUCATION.map((e, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-4xl p-8 md:p-10 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Logo */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center shadow-sm">
                    {!imgError['gunadarma'] ? (
                      <Image
                        src={e.logo}
                        alt={e.school}
                        width={80}
                        height={80}
                        className="object-contain p-2"
                        onError={() => handleImgErr('gunadarma')}
                      />
                    ) : (
                      <span className="text-3xl">🎓</span>
                    )}
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-(family-name:--font-syne) text-xl font-bold text-slate-900">{e.degree}</h3>
                      <p className="text-blue-600 font-bold">{e.school}</p>
                      <p className="text-slate-400 text-sm">{e.city} · {e.period}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-center">
                      <p className="font-(family-name:--font-syne) text-2xl font-black text-blue-600">{e.gpa}</p>
                      <p className="text-xs text-blue-500 font-bold">IPK</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.highlights.map((h, j) => (
                      <span key={j} className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⑪ ACHIEVEMENT — ICBC 2026 ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
            <span className="w-6 h-px bg-amber-500" />
            Achievements
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Prestasi & Penghargaan</h2>
        </div>
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="relative bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-4xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-72 lg:w-96 shrink-0 relative min-h-50 md:min-h-70 bg-amber-100">
                {!imgError['icbc'] ? (
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover"
                    onError={() => handleImgErr('icbc')}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
                    <span className="text-6xl">🏆</span>
                    <span className="text-amber-700 font-bold text-center text-sm">ICBC 2026 Documentation</span>
                  </div>
                )}
                {/* Overlay badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow">
                  🥈 Juara 2
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 p-8 md:p-10">
                <div className="flex items-start gap-4 mb-4">
                  {/* Udinus logo */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-amber-200 bg-white flex items-center justify-center shadow-sm shrink-0">
                    {!imgError['udinus'] ? (
                      <Image
                        src={a.logo}
                        alt="Udinus"
                        width={56}
                        height={56}
                        className="object-contain p-1"
                        onError={() => handleImgErr('udinus')}
                      />
                    ) : (
                      <span className="text-xl">🏫</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-(family-name:--font-syne) text-2xl font-black text-slate-900">{a.title}</h3>
                    <p className="text-amber-600 font-bold text-sm">{a.subtitle}</p>
                    <p className="text-slate-500 text-sm">{a.org} · {a.year}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((t, j) => (
                    <span key={j} className="text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ⑫ EXPERIENCE TIMELINE ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />
            Experience
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Perjalanan Karir</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 via-indigo-300 to-slate-100 hidden md:block" />
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Dot */}
                <div className={`absolute left-3.5 top-8 w-3 h-3 rounded-full border-2 border-white shadow-md hidden md:block ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-indigo-500'}`} />
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      {/* Company logo */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0">
                        {exp.logo && !imgError[`exp-${i}`] ? (
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="object-contain p-1"
                            onError={() => handleImgErr(`exp-${i}`)}
                          />
                        ) : (
                          <span className="text-xl">{exp.color === 'blue' ? '🚀' : '💼'}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-(family-name:--font-syne) font-bold text-slate-900 text-lg">{exp.role}</h3>
                        <p className={`font-bold text-sm ${exp.color === 'blue' ? 'text-blue-600' : 'text-indigo-600'}`}>{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-black px-3 py-1 rounded-full ${exp.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'}`}>{exp.type}</span>
                      <p className="text-xs text-slate-400 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t, j) => (
                      <span key={j} className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑬ NEXA BRAND SECTION ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl noise">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* NEXA Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 overflow-hidden rounded-xl flex items-center justify-center bg-blue-600 shadow-lg shadow-blue-500/30">
                  {!imgError['nexa'] ? (
                    <Image src="/images/nexa-logo.png" alt="NEXA" width={56} height={56} className="object-contain p-1" onError={() => handleImgErr('nexa')} />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  )}
                </div>
                <div>
                  <span className="font-(family-name:--font-syne) text-2xl font-black tracking-tighter text-white">NEXA</span>
                  <span className="text-blue-400 font-bold text-sm ml-2 uppercase tracking-widest">Tech Labs</span>
                </div>
              </div>
              <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                B2B Tech Studio untuk<br />
                <span className="text-blue-400">UMKM Indonesia.</span>
              </h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Sebagai Founder & CEO, saya memimpin 6 talenta berbakat untuk memberikan 
                solusi AI, Web Development, dan Cloud/DevOps bagi UMKM dan enterprise client Indonesia.
              </p>
              <div className="flex items-center gap-8 mb-8">
                {[{ v: '6+', l: 'Engineers' }, { v: 'B2B', l: 'Focus' }, { v: 'AI', l: 'Powered' }].map((s, i) => (
                  <div key={i}>
                    <p className="font-(family-name:--font-syne) text-2xl font-black text-white">{s.v}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.l}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Learn More About NEXA
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Software Dev',   desc: 'Web app, POS system, dan dashboard bisnis berbasis cloud.',  accent: 'blue' },
                { label: 'AI Integration', desc: 'LLM chatbot, Computer Vision, dan MLOps untuk efisiensi.',    accent: 'indigo', offset: true },
                { label: 'Cloud & DevOps', desc: 'CI/CD, Docker, dan deployment automation yang scalable.',     accent: 'violet' },
                { label: 'Consulting',     desc: 'Tech strategy dan roadmap digitalisasi untuk UMKM.',          accent: 'sky', offset: true },
              ].map((card, i) => (
                <div key={i} className={`bg-slate-800/50 p-5 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors ${card.offset ? 'translate-y-4' : ''}`}>
                  <p className={`text-${card.accent}-400 font-bold mb-2 text-xs uppercase tracking-widest`}>{card.label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -left-10 top-10 w-60 h-60 bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* ⑭ SERVICES ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />What I Do<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">Core Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className={`group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl card-hover`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 bg-${s.color}-50 text-${s.color}-600 group-hover:bg-${s.color === 'slate' ? 'slate-900' : s.color + '-600'} group-hover:text-white`}>
                {s.icon}
              </div>
              <h3 className="font-(family-name:--font-syne) text-lg font-bold mb-3 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⑮ FEATURED PROJECTS ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              <span className="w-6 h-px bg-blue-600" />Featured Work
            </span>
            <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">Selected Projects</h2>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">View All Projects →</Link>
        </div>
      </section>

      {/* ⑯ CERTIFICATES & AWARDS ──────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Certificates
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Sertifikasi & Penghargaan</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((c, i) => (
            <div key={i} className={`bg-white border border-${c.color}-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-${c.color}-200 transition-all card-hover`}>
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h4 className={`font-(family-name:--font-syne) font-bold text-slate-900 mb-1`}>{c.title}</h4>
              <p className="text-xs text-slate-400">{c.org}</p>
              <span className={`mt-3 inline-block text-xs font-bold bg-${c.color}-50 text-${c.color}-600 px-2 py-0.5 rounded-full`}>{c.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ⑰ PROCESS ─────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              <span className="w-6 h-px bg-blue-600" />How I Work<span className="w-6 h-px bg-blue-600" />
            </span>
            <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">My Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discovery',    desc: 'Deep dive ke problem space dan business requirements klien.' },
              { num: '02', title: 'Architecture', desc: 'Merancang sistem yang scalable, maintainable, dan cost-effective.' },
              { num: '03', title: 'Execution',    desc: 'Iterasi cepat dengan feedback loop pendek dan dokumentasi jelas.' },
              { num: '04', title: 'Delivery',     desc: 'Deploy ke production dengan monitoring, QA, dan post-launch support.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="mb-4">
                  <span className="font-(family-name:--font-syne) text-5xl font-black text-slate-100">{step.num}</span>
                </div>
                <h3 className="font-(family-name:--font-syne) text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-slate-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑱ TESTIMONIALS ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />Testimonials<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-slate-900">Kata Mereka</h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white border border-slate-200 rounded-4xl p-8 md:p-12 shadow-sm min-h-50 transition-all duration-500">
            <div className="text-5xl text-blue-100 font-black mb-4 leading-none">"</div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
              {TESTIMONIALS[activeTesti].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                {TESTIMONIALS[activeTesti].emoji}
              </div>
              <div>
                <p className="font-bold text-slate-900">{TESTIMONIALS[activeTesti].name}</p>
                <p className="text-sm text-slate-400">{TESTIMONIALS[activeTesti].role}</p>
              </div>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTesti(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeTesti ? 'bg-blue-600 w-6' : 'bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ⑲ CURRENTLY LEARNING ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-4xl p-10 md:p-14 relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">📚 Always Learning</span>
              <h2 className="font-(family-name:--font-syne) text-3xl font-bold text-white">Currently Exploring</h2>
              <p className="text-slate-400 mt-2 text-sm">Teknologi yang sedang aktif saya pelajari sekarang.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'Rust Programming',             progress: 25, emoji: '🦀' },
                { name: 'Kubernetes (K8s)',              progress: 35, emoji: '☸️' },
                { name: 'MLflow & Experiment Tracking', progress: 55, emoji: '📈' },
                { name: 'System Design at Scale',       progress: 60, emoji: '🏗️' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <span className="text-sm font-bold text-white">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-400">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-10 top-10 w-60 h-60 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </section>

      {/* ⑳ CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 py-28">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <h2 className="font-(family-name:--font-syne) text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Jangan biarkan teknologi jadi penghambat bisnismu. 
            Saya dan tim NEXA siap bantu digitalisasi operasional kamu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl">
              Let&apos;s Talk
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="/cv-fauzan.pdf" download className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-[60px] pointer-events-none" />
      </section>
    </div>
  );
}