import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { techStackMarquee } from '@/data/skillsData';
import ProjectCard from '@/components/ProjectCard';

const stats = [
  { value: '6+',     label: 'Team Members'       },
  { value: '3.89',   label: 'GPA'                },
  { value: '4',      label: 'Client Outlets'     },
  { value: 'Juara 2',label: 'Intl. Competition'  },
];

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: 'Software Development',
    desc: 'Web app dan mobile-ready system dengan Next.js, TypeScript, dan Supabase.',
    color: 'blue',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'AI Integration',
    desc: 'Implementasi LLM, Computer Vision, dan MLOps untuk automasi bisnis yang cerdas.',
    color: 'indigo',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipeline, containerization, dan cloud deployment yang robust dan otomatis.',
    color: 'violet',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
    ),
    title: 'Tech Leadership',
    desc: 'Manajemen tim lintas fungsi, product strategy, dan technical mentoring.',
    color: 'slate',
  },
];

export default function HomePage() {
  const featuredProjects = projectsData.filter(p => p.highlight);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-gradient-radial from-blue-100/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              OPEN FOR VENTURES & COLLABORATION
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-(family-name:--font-syne) text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.88]">
              BUILDING<br/>
              <span className="gradient-text">TOMORROW</span><br/>
              TODAY.
            </h1>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed">
              Saya{' '}
              <span className="text-slate-900 font-bold">Muhamad Fauzan Al Farikhi</span>
              {' '}— Tech Lead & AI Engineer, Founder{' '}
              <span className="text-blue-600 font-bold">@NEXA Tech Labs</span>.
              Mengubah logika kompleks menjadi produk digital yang skalabel.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                Explore Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-sm hover:border-blue-300 hover:shadow-md transition-all"
              >
                Get In Touch
              </Link>
              <a
                href="/cv-fauzan.pdf"
                download
                className="inline-flex items-center gap-2 text-slate-500 px-6 py-4 font-semibold text-sm hover:text-slate-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TECH STACK ───────────────────────────── */}
      <section className="py-6 overflow-hidden border-y border-slate-200 bg-white">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStackMarquee, ...techStackMarquee].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mx-8"
            >
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all card-hover"
            >
              <p className="font-(family-name:--font-syne) text-3xl md:text-4xl font-black text-slate-900 mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEXA BRAND SECTION ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl noise">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* NEXA Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <span className="font-(family-name:--font-syne) text-2xl font-black tracking-tighter text-white">NEXA</span>
                  <span className="text-blue-400 font-bold text-sm ml-2 uppercase tracking-widest">Tech Labs</span>
                </div>
              </div>

              <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                B2B Tech Studio untuk<br />
                <span className="text-blue-400">UMKM Indonesia.</span>
              </h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Sebagai Founder & CEO, saya memimpin 6 talenta berbakat untuk memberikan 
                solusi AI, Web Development, dan Cloud/DevOps bagi UMKM dan enterprise client 
                Indonesia. Juara 2 International Canvas Business Competition.
              </p>

              <div className="flex items-center gap-8 mb-8">
                {[
                  { v: '6+',   l: 'Engineers'     },
                  { v: 'B2B',  l: 'Focus'         },
                  { v: 'AI',   l: 'Powered'       },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-(family-name:--font-syne) text-2xl font-black text-white">{s.v}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.l}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More About NEXA
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Software Dev',   desc: 'Web app, POS system, dan dashboard bisnis berbasis cloud.', accent: 'blue' },
                { label: 'AI Integration', desc: 'LLM chatbot, Computer Vision, dan MLOps untuk efisiensi.', accent: 'indigo', offset: true },
                { label: 'Cloud & DevOps', desc: 'CI/CD, Docker, dan deployment automation yang scalable.', accent: 'violet' },
                { label: 'Consulting',     desc: 'Tech strategy dan roadmap digitalisasi untuk UMKM.', accent: 'sky', offset: true },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`bg-slate-800/50 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 transition-colors ${card.offset ? 'translate-y-4' : ''}`}
                >
                  <p className={`text-${card.accent}-400 font-bold mb-2 text-xs uppercase tracking-widest`}>
                    {card.label}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -left-10 top-10 w-60 h-60 bg-indigo-600/5 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />
            What I Do
            <span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">
            Core Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl card-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 bg-${s.color}-50 text-${s.color}-600 group-hover:bg-${s.color === 'slate' ? 'slate-900' : s.color+'-600'} group-hover:text-white`}>
                {s.icon}
              </div>
              <h3 className="font-(family-name:--font-syne) text-lg font-bold mb-3 text-slate-900">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              <span className="w-6 h-px bg-blue-600" />
              Featured Work
            </span>
            <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              <span className="w-6 h-px bg-blue-600" />
              How I Work
              <span className="w-6 h-px bg-blue-600" />
            </span>
            <h2 className="font-(family-name:--font-syne) text-4xl md:text-5xl font-bold text-slate-900">
              My Process
            </h2>
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
                  <span className="font-(family-name:--font-syne) text-5xl font-black text-slate-100">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-(family-name:--font-syne) text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 py-28">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-(family-name:--font-syne) text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Jangan biarkan teknologi jadi penghambat bisnismu. 
            Saya dan tim NEXA siap bantu digitalisasi operasional kamu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Let&apos;s Talk
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              About My Journey
            </Link>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-[60px] pointer-events-none" />
      </section>
    </div>
  );
}