'use client';

import { useState, useEffect, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import { techStackMarquee } from '@/data/skillsData';
import ProjectCard from '@/components/ProjectCard';

// ── TYPEWRITER HOOK ──────────────────────────────────────
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
        if (next === word) setTimeout(() => setDeleting(true), 2000);
      } else {
        const next = word.slice(0, display.length - 1);
        setDisplay(next);
        if (next === '') { setDeleting(false); setWIdx(i => i + 1); }
      }
    }, deleting ? 30 : 80);
    return () => clearTimeout(timer.current);
  }, [display, deleting, wIdx, words]);

  return display;
}

// ── DATA STATIC ──────────────────────────────────────────
const ROLES = ['Mahasiswa Informatika', 'Founder @NEXA', 'AI & IoT Enthusiast', 'Full-Stack Engineer', 'Tech Consultant'];

const TECH_ICONS = [
  { name: 'Next.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',          dark: true  },
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
  { value: 'Top 4', label: 'ICBC 2026 Finalist',icon: '🏅' },
  { value: '3',     label: 'Medali Olimpiade',  icon: '🥇' },
  { value: '7+',    label: 'Client Terbantu',   icon: '🤝' },
];

const ACHIEVEMENTS = [
  { badge: '🏅', title: 'Top 4 Finalist — ICBC 2026', org: 'Udinus Semarang', year: '2026', note: 'Top 6 · Proposal', color: 'blue',   desc: 'Masuk Top 4 Finalist penilaian proposal ICBC 2026 dengan model bisnis NEXA Tech Labs.' },
  { badge: '🥇', title: 'Medali Emas — Olimpiade Fisika', org: 'Liga Olimpiade Nasional', year: '17 Sep 2022', note: 'Emas', color: 'yellow', desc: 'Medali Emas Olimpiade Fisika tingkat nasional.' },
  { badge: '🥈', title: 'Medali Perak — Sastra Indonesia', org: 'Liga Olimpiade Nasional', year: '11 Nov 2022', note: 'Perak', color: 'slate',  desc: 'Medali Perak Olimpiade Sastra Indonesia tingkat nasional.' },
  { badge: '🥉', title: 'Medali Perunggu — Olimpiade Fisika', org: 'Liga Olimpiade Nasional', year: '8 Mar 2022', note: 'Perunggu', color: 'orange', desc: 'Medali Perunggu Olimpiade Fisika tingkat nasional.' },
];

const MEDAL_COLOR: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200', yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  slate: 'bg-slate-100 text-slate-600 border-slate-200', orange: 'bg-orange-50 text-orange-700 border-orange-200',
};

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
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: 'Software Development', desc: 'Web app enterprise-grade dengan Next.js, TypeScript, dan Supabase.', color: 'blue' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'AI & IoT Integration', desc: 'Pipeline ML, prediksi time-series, dan integrasi sensor IoT untuk automasi.', color: 'indigo' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>, title: 'Cloud & DevOps', desc: 'Infrastruktur skalabel, CI/CD, Docker, dan arsitektur database.', color: 'violet' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>, title: 'B2B Tech Consulting', desc: 'Strategi digitalisasi, ERP, dan pemerataan teknologi untuk UMKM.', color: 'slate' },
];

const TESTIMONIALS = [
  {
    name: 'Syahrul Ramadhan',
    role: 'Owner, Dimsum Mentai Kmyrn',
    text: '"Sistem POS dan manajemen inventori dari NEXA bener-bener ngebantu kita mantau stok secara real-time. Operasional harian jadi jauh lebih rapi, terekam jelas, dan pesanan masuk lebih terkontrol."',
    avatar: '🥟',
  },
  {
    name: 'Pak Ijul',
    role: 'Owner Kue Pie, Pasar Senen',
    text: '"Konsultasi teknologi dari Mas Fauzan dan tim bikin toko saya punya pencatatan yang lebih modern. Solutif banget buat UMKM yang baru mau go-digital dan ningkatin efisiensi bisnis."',
    avatar: '🥧',
  },
  {
    name: 'Kak Theo',
    role: 'Panitia ICBC 2026 UDINUS',
    text: '"Proposal bisnis dari NEXA Tech Labs punya fundamental teknis dan pasar yang kuat. Visi Fauzan soal integrasi AI untuk UMKM sangat aplikatif dan pantas masuk Top 4 Finalist."',
    avatar: '👨‍💼',
  },
];

const FAQS = [
  { q: 'Apakah NEXA Tech Labs menerima pembuatan aplikasi custom untuk UMKM?', a: 'Ya, kami fokus pada pengembangan solusi B2B dan UMKM, mulai dari Point of Sales (POS), sistem inventori, hingga dashboard analitik berbasis AI.' },
  { q: 'Tech stack apa yang biasanya digunakan?', a: 'Untuk frontend kami mengandalkan ekosistem React (Next.js) dengan TypeScript dan Tailwind. Backend menggunakan Node.js atau Python (FastAPI), serta Supabase/PostgreSQL untuk database.' },
  { q: 'Bagaimana proses konsultasi awalnya?', a: 'Kita akan mulai dari fase "Discovery Call" untuk memahami bottleneck bisnis Anda. Setelah itu, tim NEXA akan merumuskan solusi teknis dan timeline pengerjaan yang transparan.' },
];

const CODE_FILES = [
  {
    name: 'pos_predictor.py',
    lang: 'python',
    code: `import torch\nimport torch.nn as nn\n\nclass DimsumSalesPredictor(nn.Module):\n    """AI Time-Series Model for UMKM Sales Prediction"""\n    def __init__(self, input_dim=10, hidden_dim=64):\n        super().__init__()\n        self.lstm = nn.LSTM(input_dim, hidden_dim, batch_first=True)\n        self.fc = nn.Linear(hidden_dim, 1)\n\n    def forward(self, x):\n        # x shape: (batch_size, seq_length, input_dim)\n        lstm_out, _ = self.lstm(x)\n        \n        # Ambil prediksi dari time-step terakhir\n        last_time_step = lstm_out[:, -1, :]\n        prediction = self.fc(last_time_step)\n        \n        return prediction\n\n# Initialize model\nmodel = DimsumSalesPredictor()\nprint("Model ready for NEXA POS integration.")`
  },
  {
    name: 'dashboard.tsx',
    lang: 'typescript',
    code: `import { useState, useEffect } from 'react';\nimport { supabase } from '@/lib/supabase';\n\nexport default function PosDashboard() {\n  const [orders, setOrders] = useState([]);\n\n  useEffect(() => {\n    // Fetch active orders (Adaptive Layout & Left-aligned)\n    const fetchOrders = async () => {\n      const { data, error } = await supabase\n        .from('active_orders')\n        .select('*')\n        .order('created_at', { ascending: false });\n      \n      if (!error) setOrders(data);\n    };\n    fetchOrders();\n  }, []);\n\n  return (\n    <div className="flex flex-col md:flex-row w-full adaptive-container">\n      <div className="w-full md:w-1/3 text-left">\n        <h2 className="font-bold">Pesanan Aktif</h2>\n        {orders.map(o => <OrderCard key={o.id} data={o} />)}\n      </div>\n      {/* Main Dashboard Content */}\n    </div>\n  );\n}`
  }
];

// ── KOMPONEN KECIL ───────────────────────────────────────
const MouseGlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.05), transparent 40%)' }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// ── KOMPONEN UTAMA ───────────────────────────────────────
export default function HomePage() {
  const featuredProjects = projectsData.filter(p => p.highlight);
  const role = useTypewriter(ROLES);

  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTesti, setActiveTesti]   = useState(0);
  const [activeClient, setActiveClient] = useState(0);
  const [activeCodeFile, setActiveCodeFile] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrollPct, setScrollPct]       = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Scroll Progress
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollPct(Math.round((window.scrollY / total) * 100));
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Intersection Observer for Stats
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 1000);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); clearTimeout(t); } },
      { threshold: 0.1 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  // Auto-play Carousels
  useEffect(() => {
    const t1 = setInterval(() => setActiveTesti(i => (i + 1) % TEAM.length), 4000);
    const t2 = setInterval(() => setActiveClient(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 z-[20 bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-[width] duration-150 ease-out"
           style={{ width: `${scrollPct}%` }} />

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-800px h-400px bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                OPEN FOR VENTURES & COLLABORATION
              </div>

              <h1 className="font-(family-name:--font-syne) font-black tracking-tighter mb-6 leading-[0.95]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                BUILDING<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">TOMORROW</span><br />
                TODAY.
              </h1>

              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4 text-lg">
                <span className="font-medium text-slate-500">Saya seorang —</span>
                <span className="text-blue-600 font-bold min-w-[200px text-left">
                  {role}<span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 align-middle animate-pulse" />
                </span>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Saya <strong>Muhamad Fauzan Al Farikhi</strong> — Mahasiswa Teknik Informatika Universitas Gunadarma, dan Founder <span className="text-blue-600 font-bold">@NEXA Tech Labs</span>. Fokus membangun ekosistem digital dan pemerataan teknologi untuk UMKM Indonesia.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link href="/projects" className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-200 group">
                  Explore Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Profile Hero Image */}
            <div className="shrink-0 relative">
              <div className="relative w-64 h-64 md:w-87.5 md:h-87.5">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400/30 to-cyan-400/30 blur-3xl scale-110" />
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-300 animate-spin-slow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-slate-100">
                  <Image src="/images/profile.jpg" alt="Muhamad Fauzan Al Farikhi" fill className="object-cover" priority />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-10 -left-6 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Founder</p>
                    <p className="text-sm font-black text-slate-800">NEXA Tech</p>
                  </div>
                </div>
                <div className="absolute bottom-10 -right-6 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Gunadarma</p>
                    <p className="text-sm font-black text-white">GPA 3.89</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ──────────────────────────────────────── */}
      <section className="py-5 bg-white border-y border-slate-200 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...techStackMarquee, ...techStackMarquee, ...techStackMarquee].map((tech, i) => (
            <span key={i} className="mx-8 text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <MouseGlowCard key={i} className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <p className={`font-(family-name:--font-syne) font-black text-4xl text-slate-900 mb-2 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                {s.value}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
            </MouseGlowCard>
          ))}
        </div>
      </section>

      {/* ── SERVICES & EXPERTISE ──────────────────────────────── */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black font-(family-name:--font-syne) text-slate-900">Spesialisasi Teknis</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <MouseGlowCard key={i} className="bg-white border border-slate-200 p-8 rounded-4xl hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${s.color}-50 text-${s.color}-600`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-(family-name:--font-syne)">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </MouseGlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CODE SHOWCASE ─────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Behind The Scenes</span>
            <h2 className="text-4xl md:text-5xl font-black font-(family-name:--font-syne) text-slate-900 mb-6">Membangun Sistem Skalabel.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Dari memproses pipeline AI untuk prediksi penjualan, hingga merancang antarmuka dashboard kasir (POS) yang responsif. Semuanya ditulis dengan kode yang *clean*, modular, dan adaptif untuk berbagai *device*.
            </p>
            <div className="flex gap-4">
              {CODE_FILES.map((file, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveCodeFile(idx)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-sm font-bold transition-all ${activeCodeFile === idx ? 'bg-slate-900 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  {file.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-4xl blur opacity-20"></div>
            <div className="relative bg-[#0d1117] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#161b22]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 flex gap-4">
                  {CODE_FILES.map((file, idx) => (
                    <span key={idx} className={`text-xs font-mono cursor-pointer transition-colors ${activeCodeFile === idx ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`} onClick={() => setActiveCodeFile(idx)}>
                      {file.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Code Body */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-slate-300 leading-relaxed">
                  <code>{CODE_FILES[activeCodeFile].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS ───────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-transparent.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-(family-name:--font-syne) mb-4">Apa Kata Partner Kami?</h2>
            <p className="text-slate-400 text-lg">Dampak nyata dari pemerataan teknologi yang kami bangun.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-8 rounded-4xl hover:bg-slate-800 transition-colors flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6">{t.avatar}</div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">{t.text}</p>
                </div>
                <div className="border-t border-slate-700 pt-4 mt-auto">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-blue-400 mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXA BRAND & TEAM ─────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="team">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 w-full">
            <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-200 p-8 sm:p-12 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-[80px]"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg text-white font-black text-xl">
                  N
                </div>
                <div>
                  <h3 className="text-3xl font-black font-(family-name:--font-syne) text-slate-900">NEXA Tech Labs</h3>
                  <p className="text-blue-600 font-bold text-sm tracking-widest uppercase">Est. 2026</p>
                </div>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                Studio teknologi B2B yang digerakkan oleh 7 pemuda dengan satu visi: <strong>membawa transformasi digital yang mudah dan adaptif untuk UMKM</strong>. Kami merancang arsitektur yang <em>scalable</em> tanpa fitur yang berlebihan (<em>no over-engineering</em>), sesuai dengan kebutuhan pasar.
              </p>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[{ v: '100%', l: 'In-House Dev' }, { v: 'B2B', l: 'Core Focus' }].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl">
                    <p className="text-3xl font-black text-blue-600 font-(family-name:--font-syne)">{item.v}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase">{item.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Brains</span>
            <h2 className="text-4xl font-black font-(family-name:--font-syne) text-slate-900 mb-8">Tim Inti NEXA.</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TEAM.map((member, i) => (
                <div key={i} className="group bg-white border border-slate-200 p-4 rounded-3xl flex flex-col items-center text-center hover:border-blue-300 transition-colors">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-slate-100 group-hover:border-blue-400 transition-colors">
                     <Image src={member.photo} alt={member.name} width={64} height={64} className="object-cover w-full h-full" onError={(e) => { (e.currentTarget as HTMLImageElement).src = ''; }} />
                  </div>
                  <p className="text-xs font-bold text-slate-900 line-clamp-1 w-full">{member.name}</p>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black font-(family-name:--font-syne) text-slate-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-slate-500">Hal-hal yang sering ditanyakan oleh klien sebelum berkolaborasi.</p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 font-bold text-slate-900 flex justify-between items-center focus:outline-none"
                >
                  {faq.q}
                  <span className={`text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / FOOTER ──────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-cyan-500/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-(family-name:--font-syne) font-black text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Siap Merealisasikan<br />Ide Bisnis Anda?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Mari jadwalkan <em>discovery call</em>. Bersama NEXA Tech Labs, kita bangun sistem yang adaptif, presisi, dan siap <em>scale up</em>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
              Mulai Diskusi <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="https://wa.me/6285811211505?text=Halo%20Fauzan!" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              WhatsApp Langsung
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}