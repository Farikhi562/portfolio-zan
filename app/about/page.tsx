'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EDUCATION = [
  {
    id: 's1', level: 'S1 / Sarjana', degree: 'Teknik Informatika',
    school: 'Universitas Gunadarma', period: '2025 – Sekarang', city: 'Depok, Jawa Barat',
    img: '/images/gunadarma.png', isLogo: true,
    gpa: '3.89', gpaPeriod: 'Semester 1',
    desc: 'Fokus pada pengembangan perangkat lunak, kecerdasan buatan, dan rekayasa sistem.',
    highlights: ['IPK 3.89 (Semester 1)', 'Aktif membangun NEXA Tech Labs', 'Fokus AI & Software Engineering'],
  },
  {
    id: 'sma', level: 'SMA', degree: 'IPA',
    school: 'SMA Taman Madya 1 Jakarta', period: '2021 – 2024', city: 'Jakarta',
    img: '/images/sma-taman-madya.jpg', isLogo: false,
    gpa: null, gpaPeriod: null,
    desc: 'Aktif di olimpiade sains tingkat nasional — Fisika dan Sastra Indonesia.',
    highlights: ['Medali Emas Olimpiade Fisika', 'Medali Perak Sastra Indonesia', 'Medali Perunggu Olimpiade Fisika'],
  },
  {
    id: 'smp', level: 'SMP', degree: '',
    school: 'SMPN 4 Jakarta', period: '2018 – 2021', city: 'Jakarta',
    img: '/images/smpn4-jakarta.jpg', isLogo: false,
    gpa: null, gpaPeriod: null,
    desc: 'Sekolah menengah pertama negeri di Jakarta Pusat.',
    highlights: [],
  },
];

const ACHIEVEMENTS = [
  { id: 'icbc', badge: '🏅', title: 'Top 6 Finalist — ICBC 2026', subtitle: 'International Canvas Business Competition', org: 'Universitas Dian Nuswantoro (Udinus), Semarang', year: '2026', note: 'Top 6 Finalist', color: 'blue', tags: ['B2B', 'AI', 'Nasional'], desc: 'Masuk Top 6 Finalist penilaian proposal ICBC 2026. Mempresentasikan model bisnis NEXA Tech Labs.', img: '/images/icbc-2026.jpg' },
  { id: 'fisika-emas', badge: '🥇', title: 'Medali Emas — Olimpiade Fisika', subtitle: 'Liga Olimpiade Nasional', org: 'Liga Olimpiade', year: '17 Sep 2022', note: 'Medali Emas', color: 'yellow', tags: ['Fisika', 'Nasional'], desc: 'Medali Emas Olimpiade Fisika tingkat nasional yang diselenggarakan Liga Olimpiade.', img: null },
  { id: 'sastra-perak', badge: '🥈', title: 'Medali Perak — Sastra Indonesia', subtitle: 'Liga Olimpiade Nasional', org: 'Liga Olimpiade', year: '11 Nov 2022', note: 'Medali Perak', color: 'slate', tags: ['Sastra Indonesia', 'Nasional'], desc: 'Medali Perak Olimpiade Sastra Indonesia tingkat nasional.', img: null },
  { id: 'fisika-perunggu', badge: '🥉', title: 'Medali Perunggu — Olimpiade Fisika', subtitle: 'Liga Olimpiade Nasional', org: 'Liga Olimpiade', year: '8 Mar 2022', note: 'Medali Perunggu', color: 'orange', tags: ['Fisika', 'Nasional'], desc: 'Medali Perunggu Olimpiade Fisika tingkat nasional.', img: null },
  { id: 'telkom', badge: '🎖️', title: 'Peserta — Olimpiade Fisika Nasional', subtitle: 'Telkom University', org: 'Telkom University', year: '11 Okt 2021', note: 'Peserta Nasional', color: 'red', tags: ['Fisika', 'Nasional'], desc: 'Berpartisipasi dalam Olimpiade Fisika Nasional yang diselenggarakan Telkom University.', img: null },
];

const TEAM = [
  { name: 'Muhamad Fauzan Al Farikhi', role: 'CEO & Strategic Client',  photo: '/images/team/fauzan.jpg'   },
  { name: 'Mirza Danisywar N.W.',       role: 'BizDev & Hunter',         photo: '/images/team/mirza.jpg'    },
  { name: 'Mochammad Triandra A.',      role: 'CTO',                     photo: '/images/team/triandra.jpg' },
  { name: 'Rangga Dwi Prasetyo',        role: 'Quality Assurance',       photo: '/images/team/rangga.jpg'   },
  { name: 'Yusuf Maulana W.',           role: 'Sales & Social Media',    photo: '/images/team/yusuf.jpg'    },
  { name: 'Muhammad Iqbal Fajri',       role: 'Project Manager',         photo: '/images/team/iqbal.jpg'    },
  { name: 'Syawalludin Fitroh R.',      role: 'UI/UX Designer',          photo: '/images/team/syawal.jpg'   },
];

const EXPERIENCE = [
  { id: 'nexa', role: 'Founder & CEO', company: 'NEXA Tech Labs', period: '19 Mar 2026 – Sekarang', type: 'Startup', color: 'blue', logo: '/images/nexa-logo.png', desc: 'Mendirikan B2B tech studio yang fokus membantu UMKM Indonesia dengan AI, Web Development, dan Cloud/DevOps. Operasional aktif, belum berbadan hukum resmi.', tags: ['Leadership', 'AI', 'B2B', 'Web Dev'], note: 'Operasional aktif · Belum legal entity' },
  { id: 'freelance', role: 'Freelance Developer', company: 'Independent', period: '29 Mar 2026 – Sekarang', type: 'Freelance', color: 'indigo', logo: null, desc: 'Mengerjakan proyek web development dan AI untuk klien sambil membangun portofolio nyata.', tags: ['Next.js', 'Python', 'AI', 'Web Dev'], note: null },
];

const VALUES = [
  { icon: '🧠', title: 'Belajar dari Realita', desc: 'Proyek nyata mengajarkan hal yang tidak ada di kurikulum.' },
  { icon: '🚀', title: 'Build & Ship', desc: 'Lebih baik launch 0.1 yang berjalan daripada rencana sempurna.' },
  { icon: '🤝', title: 'Tim Dulu', desc: 'Satu orang bisa coding, tapi tim solid bisa bangun produk.' },
  { icon: '📈', title: 'Data-Driven', desc: 'Gut feeling itu perlu, tapi data itu wajib.' },
];

const FUN_FACTS = [
  { emoji: '⚛️', text: 'Medali Emas Olimpiade Fisika Nasional pas SMA' },
  { emoji: '☕', text: 'Kopi hitam tanpa gula, tiap pagi sebelum ngoding' },
  { emoji: '🌙', text: 'Paling produktif antara jam 10 malam sampai subuh' },
  { emoji: '🎮', text: 'Strategy game addict — RTS dan city builder' },
  { emoji: '📱', text: 'Dark mode everywhere, tidak ada kompromi' },
  { emoji: '🏗️', text: 'Mulai bangun startup dari semester 1 kuliah' },
];

const MEDAL_COLOR: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200', yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  slate: 'bg-slate-100 text-slate-600 border-slate-200', orange: 'bg-orange-50 text-orange-700 border-orange-200',
  red: 'bg-red-50 text-red-700 border-red-200',
};

function SafeImage({ src, alt, width, height, fill, className, onErr }: {
  src: string; alt: string; width?: number; height?: number;
  fill?: boolean; className?: string; onErr?: () => void;
}) {
  const [err, setErr] = useState(false);
  if (err) return null;
  if (fill) return <Image src={src} alt={alt} fill className={className} onError={() => { setErr(true); onErr?.(); }} />;
  return <Image src={src} alt={alt} width={width!} height={height!} className={className} onError={() => { setErr(true); onErr?.(); }} />;
}

export default function AboutPage() {
  const [profileErr, setProfileErr] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
                <div className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl scale-110" />
                <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-200 animate-spin-slow" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl" style={{ background: 'var(--surface-raised)' }}>
                  {!profileErr ? (
                    <Image src="/images/profile.jpg" alt="Fauzan" fill className="object-cover" onError={() => setProfileErr(true)} priority />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">👨‍💻</div>
                  )}
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg">Sem. 2 · 2025</div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                <span className="w-6 h-px bg-blue-600" />About Me
              </span>
              <h1 className="font-(family-name:--font-syne) font-black tracking-tighter mb-4 leading-[0.92]"
                style={{ color: 'var(--text)', fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
                Hai, saya<br /><span className="gradient-text">Fauzan.</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Mahasiswa <strong style={{ color: 'var(--text-2)' }}>Teknik Informatika Universitas Gunadarma</strong> angkatan 2025.
                Pendiri <strong className="text-blue-600">NEXA Tech Labs</strong> — berdiri 19 Maret 2026.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed mb-5 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Dari olimpiade fisika medali emas sampai nulis kode production — saya percaya logika sains dan engineering bisa solve masalah nyata.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
                {[{ icon: '🎓', label: 'IPK 3.89', sub: 'Semester 1' }, { icon: '🥇', label: '3 Medali', sub: 'Olimpiade Nasional' }, { icon: '🏢', label: 'NEXA', sub: 'Founder & CEO' }].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <span>{s.icon}</span>
                    <div>
                      <p className="font-bold text-xs leading-none" style={{ color: 'var(--text)' }}>{s.label}</p>
                      <p className="text-[10px] leading-none mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Let&apos;s Collaborate</Link>
                <a href="/cv-fauzan.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm border transition-all hover:border-blue-300" style={{ borderColor: 'var(--border)', color: 'var(--text-2)' }}>Download CV</a>
                <a href="https://wa.me/6285811211505?text=Halo%20Fauzan!" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm" style={{ background: '#25D366', color: 'white' }}>WA</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Education</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Latar Belakang Pendidikan</h2>
        </div>
        <div className="flex flex-col gap-3">
          {EDUCATION.map(edu => (
            <div key={edu.id} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border card-hover overflow-hidden" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              {/* Photo/Logo */}
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <SafeImage src={edu.img} alt={edu.school} width={64} height={64}
                  className={edu.isLogo ? 'object-contain p-1.5 w-full h-full' : 'object-cover w-full h-full'} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block">{edu.level}</span>
                    <h3 className="font-(family-name:--font-syne) font-bold text-sm sm:text-base" style={{ color: 'var(--text)' }}>{edu.school}</h3>
                    {edu.degree && <p className="text-xs" style={{ color: 'var(--text-3)' }}>{edu.degree}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{edu.period}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{edu.city}</p>
                  </div>
                </div>
                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">
                    <span className="text-xs font-black text-blue-600">{edu.gpa}</span>
                    <span className="text-[10px] text-blue-500">IPK · {edu.gpaPeriod}</span>
                  </div>
                )}
                <p className="text-xs mt-1.5 mb-2" style={{ color: 'var(--text-3)' }}>{edu.desc}</p>
                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((h, j) => <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>{h}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-2"><span className="w-6 h-px bg-amber-500" />Achievements</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Prestasi & Kompetisi</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map(a => (
            <div key={a.id} className="rounded-2xl border card-hover overflow-hidden" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              {/* Documentation photo if available */}
              {a.img && (
                <div className="w-full h-32 overflow-hidden">
                  <SafeImage src={a.img} alt={a.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex gap-3 p-4">
                <span className="text-2xl shrink-0 mt-0.5">{a.badge}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-1.5 mb-0.5">
                    <h3 className="font-(family-name:--font-syne) font-bold text-xs sm:text-sm" style={{ color: 'var(--text)' }}>{a.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${MEDAL_COLOR[a.color]}`}>{a.note}</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-600">{a.subtitle}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.org} · {a.year}</p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-3)' }}>{a.desc}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {a.tags.map((t, j) => <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Experience</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Pengalaman</h2>
        </div>
        <div className="flex flex-col gap-3">
          {EXPERIENCE.map(exp => (
            <div key={exp.id} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="shrink-0 w-11 h-11 rounded-xl overflow-hidden border flex items-center justify-center" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                {exp.logo ? <SafeImage src={exp.logo} alt={exp.company} width={44} height={44} className="object-contain p-1 w-full h-full" /> : <span className="text-lg">💼</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                  <div>
                    <h3 className="font-(family-name:--font-syne) font-bold text-sm sm:text-base" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                    <p className="text-xs font-bold text-blue-600">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${exp.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'}`}>{exp.type}</span>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{exp.period}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-1" style={{ color: 'var(--text-3)' }}>{exp.desc}</p>
                {exp.note && <p className="text-[10px] italic mb-1.5" style={{ color: 'var(--text-muted)' }}>*{exp.note}</p>}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t, j) => <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2"><span className="w-6 h-px bg-blue-600" />Tim</span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Tim NEXA Tech Labs</h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Berdiri 19 Maret 2026 · 7 orang</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {TEAM.map((member, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl border card-hover text-center" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <SafeImage src={member.photo} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-(family-name:--font-syne) font-bold text-xs sm:text-sm leading-tight" style={{ color: 'var(--text)' }}>{member.name}</p>
                <p className="text-[10px] sm:text-xs text-blue-600 font-semibold mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="text-center mb-7">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3"><span className="w-6 h-px bg-blue-600" />Mindset<span className="w-6 h-px bg-blue-600" /></span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-bold" style={{ color: 'var(--text)' }}>Yang Saya Percaya</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {VALUES.map((v, i) => (
            <div key={i} className="rounded-2xl p-4 sm:p-5 border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <span className="text-2xl mb-3 block">{v.icon}</span>
              <h3 className="font-(family-name:--font-syne) font-bold mb-1.5 text-xs sm:text-sm" style={{ color: 'var(--text)' }}>{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FUN FACTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl p-6 sm:p-10 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <h2 className="font-(family-name:--font-syne) text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>Fun Facts 👾</h2>
          <p className="text-sm mb-5" style={{ color: 'var(--text-3)' }}>Hal random tentang saya.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {FUN_FACTS.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <span className="text-xl shrink-0">{f.emoji}</span>
                <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-2)' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl font-black text-white mb-4">Yuk Ngobrol!</h2>
          <p className="text-blue-100 text-sm sm:text-base mb-7 max-w-md mx-auto">Mau kolaborasi, punya proyek, atau diskusi soal tech?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl">
              Kirim Pesan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href="https://wa.me/6285811211505?text=Halo%20Fauzan!" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all">
              WhatsApp Langsung
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
        </div>
      </section>
    </div>
  );
}