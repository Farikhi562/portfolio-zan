'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import { techStackMarquee } from '@/data/skillsData';
import ProjectCard from '@/components/ProjectCard';

// ── TYPEWRITER ───────────────────────────────────────────
function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState('');
  const [wIdx, setWIdx]       = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const word = words[wIdx % words.length];
    timer.current = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, display.length + 1);
        setDisplay(next);
        if (next === word) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = word.slice(0, display.length - 1);
        setDisplay(next);
        if (next === '') { setDeleting(false); setWIdx(i => i + 1); }
      }
    }, deleting ? 40 : 100);
    return () => clearTimeout(timer.current);
  }, [display, deleting, wIdx, words]);

  return display;
}

// ── STATIC DATA ──────────────────────────────────────────
const ROLES = ['Mahasiswa Informatika', 'AI Enthusiast', 'Founder @NEXA', 'Full-Stack Builder', 'Problem Solver'];

const TECH_ICONS = [
  { name: 'Next.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',           dark: true  },
  { name: 'React',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',             dark: false },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',   dark: false },
  { name: 'Python',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',           dark: false },
  { name: 'FastAPI',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',         dark: false },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',   dark: false },
  { name: 'PyTorch',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',         dark: false },
  { name: 'Supabase',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',       dark: false },
  { name: 'Docker',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',           dark: false },
  { name: 'Tailwind',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', dark: false },
  { name: 'GitHub',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',           dark: true  },
  { name: 'Laravel',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',         dark: false },
];

const STATS = [
  { value: '3.89',  label: 'IPK Semester 1',   icon: '🎓' },
  { value: 'Top 6', label: 'ICBC 2026 Finalist',icon: '🏅' },
  { value: '3',     label: 'Medali Olimpiade',  icon: '🥇' },
  { value: '7',     label: 'Tim NEXA',          icon: '👥' },
];

const ACHIEVEMENTS = [
  { badge: '🏅', title: 'Top 6 Finalist — ICBC 2026', org: 'Udinus Semarang', year: '2026', note: 'Top 6 · Proposal', color: 'blue',   desc: 'Masuk Top 6 Finalist penilaian proposal ICBC 2026 dengan model bisnis NEXA Tech Labs.' },
  { badge: '🥇', title: 'Medali Emas — Olimpiade Fisika', org: 'Liga Olimpiade Nasional', year: '17 Sep 2022', note: 'Emas', color: 'yellow', desc: 'Medali Emas Olimpiade Fisika tingkat nasional.' },
  { badge: '🥈', title: 'Medali Perak — Sastra Indonesia', org: 'Liga Olimpiade Nasional', year: '11 Nov 2022', note: 'Perak', color: 'slate',  desc: 'Medali Perak Olimpiade Sastra Indonesia tingkat nasional.' },
  { badge: '🥉', title: 'Medali Perunggu — Olimpiade Fisika', org: 'Liga Olimpiade Nasional', year: '8 Mar 2022', note: 'Perunggu', color: 'orange', desc: 'Medali Perunggu Olimpiade Fisika tingkat nasional.' },
];

const MEDAL_COLOR: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200', yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  slate: 'bg-slate-100 text-slate-600 border-slate-200', orange: 'bg-orange-50 text-orange-700 border-orange-200',
};

// NEXA team — foto di /public/images/team/
const TEAM = [
  { name: 'Muhamad Fauzan Al Farikhi', role: 'CEO & Strategic Client',  photo: '/images/team/fauzan.jpg'  },
  { name: 'Mirza Danisywar N.W.',       role: 'BizDev & Hunter',         photo: '/images/team/mirza.jpg'   },
  { name: 'Mochammad Triandra A.',      role: 'CTO',                     photo: '/images/team/triandra.jpg'},
  { name: 'Rangga Dwi Prasetyo',        role: 'Quality Assurance',       photo: '/images/team/rangga.jpg'  },
  { name: 'Yusuf Maulana W.',           role: 'Sales & Social Media',    photo: '/images/team/yusuf.jpg'   },
  { name: 'Muhammad Iqbal Fajri',       role: 'Project Manager',         photo: '/images/team/iqbal.jpg'   },
  { name: 'Syawalludin Fitroh R.',      role: 'UI/UX Designer',          photo: '/images/team/syawal.jpg'  },
];

const SERVICES = [
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: 'Software Development', desc: 'Web app modern dengan Next.js, TypeScript, dan Supabase.', color: 'blue' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'AI Integration', desc: 'LLM, Computer Vision, dan ML pipeline untuk automasi bisnis.', color: 'indigo' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>, title: 'Cloud & DevOps', desc: 'CI/CD pipeline, Docker, dan deployment automation.', color: 'violet' },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>, title: 'Tech Consulting', desc: 'Strategy digitalisasi dan roadmap teknis untuk UMKM.', color: 'slate' },
];

// ── COMPONENT ────────────────────────────────────────────
export default function HomePage() {
  const featuredProjects = projectsData.filter(p => p.highlight);
  const role = useTypewriter(ROLES);

  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTesti, setActiveTesti]   = useState(0);
  const [profileErr, setProfileErr]     = useState(false);
  const [nexaErr, setNexaErr]           = useState(false);
  const [scrollPct, setScrollPct]       = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollPct(Math.round((window.scrollY / total) * 100));
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Stats — always show after 1s as fallback
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 1000);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); clearTimeout(t); } },
      { threshold: 0.05 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTesti(i => (i + 1) % TEAM.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-0.75 z-[200] bg-linear-to-r from-blue-500 via-indigo-500 to-violet-500 transition-[width] duration-100"
        style={{ width: `${scrollPct}%` }} />

      {/* ── HERO ── */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-14 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-gradient-radial from-blue-100/50 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            <div className="flex-1 text-center lg:text-left">
              <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                OPEN FOR VENTURES & COLLABORATION
              </div>

              <h1 className="animate-fade-up delay-100 font-(family-name:--font-syne) font-black tracking-tighter mb-4 leading-[0.9]"
                style={{ color: 'var(--text)', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}>
                BUILDING<br />
                <span className="gradient-text">TOMORROW</span><br />
                TODAY.
              </h1>

              <div className="animate-fade-up delay-150 flex items-center gap-2 justify-center lg:justify-start mb-3">
                <span className="text-sm sm:text-base font-medium" style={{ color: 'var(--text-3)' }}>Saya seorang —</span>
                <span className="text-blue-600 font-bold text-sm sm:text-base min-w-40">
                  {role}<span className="inline-block w-0.5 h-4 bg-blue-600 ml-0.5 align-middle animate-pulse" />
                </span>
              </div>

              <p className="animate-fade-up delay-200 text-sm sm:text-base leading-relaxed max-w-xl mb-6 mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Saya <strong style={{ color: 'var(--text)' }}>Muhamad Fauzan Al Farikhi</strong> — Mahasiswa Teknik Informatika Universitas Gunadarma angkatan 2025, dan Founder <strong className="text-blue-600">@NEXA Tech Labs</strong>.
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6">
                <Link href="/projects" className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group">
                  Explore Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-sm transition-all" style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                  Get In Touch
                </Link>
                <a href="/cv-fauzan.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm border transition-all" style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  CV
                </a>
              </div>

              <div className="animate-fade-up delay-400 flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Find me on</span>
                {[
                  { href: 'https://github.com/Farikhi562',           label: 'GitHub' },
                  { href: 'https://linkedin.com/in/fauzanalfarikhi', label: 'LinkedIn' },
                  { href: 'https://wa.me/6285811211505',             label: 'WhatsApp' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold hover:text-blue-600 underline underline-offset-2 transition-colors"
                    style={{ color: 'var(--text-3)' }}>{s.label}</a>
                ))}
              </div>
            </div>

            {/* Profile photo */}
            <div className="animate-fade-up delay-200 shrink-0">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400/25 to-indigo-400/25 blur-2xl scale-110" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl" style={{ background: 'var(--surface-raised)' }}>
                  {!profileErr ? (
                    <Image src="/images/profile.jpg" alt="Muhamad Fauzan Al Farikhi" fill className="object-cover" onError={() => setProfileErr(true)} priority />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg">NEXA CEO</div>
                <div className="absolute -top-2 -left-2 bg-white border border-slate-200 text-slate-800 text-xs font-black px-3 py-1.5 rounded-xl shadow-md">GPA 3.89 🎓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-4 overflow-hidden border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStackMarquee, ...techStackMarquee].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mx-7" style={{ color: 'var(--text-muted)' }}>
              <span className="w-1 h-1 rounded-full bg-blue-400" />{tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── TECH ICONS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-7">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
            <span className="w-6 h-px bg-blue-600" />Tech Stack<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Tools I Use Daily</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {TECH_ICONS.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1 p-3 rounded-2xl border card-hover cursor-default w-14 sm:w-18" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.src} alt={t.name} width={28} height={28} className={`w-7 h-7 object-contain ${t.dark ? 'dark-icon' : ''}`} loading="lazy" />
              <span className="text-[9px] font-bold text-center leading-tight" style={{ color: 'var(--text-muted)' }}>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="rounded-3xl p-5 sm:p-6 text-center border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="text-xl mb-1.5">{s.icon}</div>
              <p className={`font-(family-name:--font-syne) font-black mb-1 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ color: 'var(--text)', fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION (brief) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Education</span>
            <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Latar Belakang</h2>
          </div>
          <Link href="/about" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors hidden sm:block">Lihat semua →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { img: '/images/gunadarma.png', level: 'S1', school: 'Universitas Gunadarma', detail: 'Teknik Informatika · 2025–Sekarang', badge: 'IPK 3.89', bc: 'bg-blue-50 text-blue-600 border-blue-100' },
            { img: '/images/sma-taman-madya.jpg', level: 'SMA', school: 'SMA Taman Madya 1 Jakarta', detail: 'IPA · 2021–2024', badge: '3 Medali Olimpiade', bc: 'bg-amber-50 text-amber-700 border-amber-100' },
            { img: '/images/smpn4-jakarta.jpg', level: 'SMP', school: 'SMPN 4 Jakarta', detail: '2018–2021', badge: null, bc: '' },
          ].map((e, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <Image src={e.img} alt={e.school} width={44} height={44} className="object-cover w-full h-full"
                  onError={(ev) => { (ev.currentTarget as HTMLImageElement).src = ''; (ev.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block">{e.level}</span>
                <p className="font-(family-name:--font-syne) font-bold text-xs sm:text-sm leading-snug" style={{ color: 'var(--text)' }}>{e.school}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{e.detail}</p>
                {e.badge && <span className={`mt-1 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${e.bc}`}>{e.badge}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2"><span className="w-6 h-px bg-amber-500" />Achievements</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Prestasi</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <span className="text-2xl shrink-0 mt-0.5">{a.badge}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-1.5 mb-0.5">
                  <h3 className="font-(family-name:--font-syne) font-bold text-xs sm:text-sm" style={{ color: 'var(--text)' }}>{a.title}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${MEDAL_COLOR[a.color]}`}>{a.note}</span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.org} · {a.year}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-3)' }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEXA BRAND ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-slate-900 rounded-[2rem] p-7 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl noise">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl overflow-hidden bg-blue-600 shadow-lg shrink-0">
                  {!nexaErr ? (
                    <Image src="/images/nexa-logo.png" alt="NEXA" width={44} height={44} className="object-contain p-1" onError={() => setNexaErr(true)} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <span className="font-(family-name:--font-syne) text-xl font-black tracking-tighter text-white">NEXA</span>
                  <span className="text-blue-400 font-bold text-xs ml-2 uppercase tracking-widest">Tech Labs</span>
                </div>
              </div>
              <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                B2B Tech Studio untuk<br /><span className="text-blue-400">UMKM Indonesia.</span>
              </h2>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                Berdiri <strong className="text-slate-300">19 Maret 2026</strong> — tim 7 orang yang fokus membantu UMKM Indonesia bertransformasi digital dengan solusi AI, Web Development, dan Cloud/DevOps.
              </p>
              <div className="flex items-center gap-5 mb-6">
                {[{ v: '7', l: 'Engineers' }, { v: 'B2B', l: 'Focus' }, { v: 'AI', l: 'Powered' }].map((s, i) => (
                  <div key={i}>
                    <p className="font-(family-name:--font-syne) text-xl font-black text-white">{s.v}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.l}</p>
                  </div>
                ))}
              </div>
              <Link href="/about#team" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Meet the Team →
              </Link>
            </div>

            {/* Team grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Our Team</p>
              <div className="grid grid-cols-4 gap-2">
                {TEAM.map((member, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
                      <Image src={member.photo} alt={member.name} width={48} height={48} className="object-cover w-full h-full"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = ''; (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <div className="text-center">
                      <p className="text-[9px] font-bold text-white leading-tight line-clamp-1">{member.name.split(' ')[0]}</p>
                      <p className="text-[8px] text-slate-500 leading-tight line-clamp-1">{member.role.split(' ')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />What I Do<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Core Expertise</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((s, i) => (
            <div key={i} className={`group p-4 sm:p-6 rounded-3xl border card-hover`} style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-${s.color}-50 text-${s.color}-600 group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                {s.icon}
              </div>
              <h3 className="font-(family-name:--font-syne) font-bold text-xs sm:text-sm mb-1.5" style={{ color: 'var(--text)' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-end justify-between mb-7">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Featured Work</span>
            <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Selected Projects</h2>
          </div>
          <Link href="/projects" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
        <div className="mt-4 text-center sm:hidden">
          <Link href="/projects" className="text-sm font-bold text-blue-600">View All Projects →</Link>
        </div>
      </section>

      {/* ── TEAM CAROUSEL ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Team</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text)' }}>Tim NEXA Tech Labs</h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border p-6 sm:p-8" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border shrink-0" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
              <Image src={TEAM[activeTesti % TEAM.length].photo} alt={TEAM[activeTesti % TEAM.length].name}
                width={80} height={80} className="object-cover w-full h-full"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = ''; }}
              />
            </div>
            <div>
              <h3 className="font-(family-name:--font-syne) font-bold text-base sm:text-lg" style={{ color: 'var(--text)' }}>
                {TEAM[activeTesti % TEAM.length].name}
              </h3>
              <p className="text-sm text-blue-600 font-semibold">{TEAM[activeTesti % TEAM.length].role}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>NEXA Tech Labs · Berdiri 19 Mar 2026</p>
            </div>
          </div>
          <div className="flex gap-1.5 mt-5">
            {TEAM.map((_, i) => (
              <button key={i} onClick={() => setActiveTesti(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === activeTesti % TEAM.length ? 'bg-blue-600 w-5' : 'w-1 bg-slate-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENTLY LEARNING ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-[2rem] p-7 sm:p-12 relative overflow-hidden border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">📚 Always Learning</span>
            <h2 className="font-(family-name:--font-syne) text-xl sm:text-2xl font-bold" style={{ color: 'var(--text)' }}>Currently Exploring</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { name: 'Rust Programming',              p: 25, e: '🦀' },
              { name: 'Kubernetes (K8s)',               p: 35, e: '☸️' },
              { name: 'MLflow & Experiment Tracking',  p: 55, e: '📈' },
              { name: 'System Design at Scale',        p: 60, e: '🏗️' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl border" style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.e}</span>
                    <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text)' }}>{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600">{item.p}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                  <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${item.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <h2 className="font-(family-name:--font-syne) font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 4rem)' }}>
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Punya proyek atau ide? Saya dan tim NEXA siap bantu dari ideasi sampai deployment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black text-sm sm:text-base hover:bg-blue-50 transition-all shadow-2xl">
              Let&apos;s Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="https://wa.me/6285811211505?text=Halo%20Fauzan!" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all">
              WhatsApp Langsung
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      </section>
    </div>
  );
}