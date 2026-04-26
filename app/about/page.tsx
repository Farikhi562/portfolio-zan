'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VALUES = [
  { icon: '🚀', title: 'Ship Fast, Learn Faster',       desc: 'Iterasi cepat lebih baik dari perencanaan sempurna. Build, deploy, improve.' },
  { icon: '🧠', title: 'AI-First Thinking',              desc: 'Setiap solusi bisnis punya potensi AI di dalamnya. Saya selalu cari cara implementasinya.' },
  { icon: '🤝', title: 'Client Success = My Success',   desc: 'KPI klien adalah KPI saya. Kalau bisnis mereka tumbuh, saya ikut tumbuh.' },
  { icon: '📚', title: 'Always Learning',                desc: 'Teknologi berubah cepat. Berhenti belajar = tertinggal. Simple.' },
];

const TIMELINE = [
  { year: '2026', title: 'Juara 2 ICBC',              color: 'amber',  desc: 'Meraih Juara 2 International Canvas Business Competition di Udinus Semarang, membawa nama NEXA Tech Labs ke panggung internasional.' },
  { year: '2024', title: 'Mendirikan NEXA Tech Labs', color: 'blue',   desc: 'Meluncurkan B2B tech studio pertama — 6 engineer, fokus AI + Web + Cloud untuk UMKM Indonesia.' },
  { year: '2023', title: 'Mulai Freelance Tech Lead', color: 'indigo', desc: 'Mengerjakan proyek-proyek production pertama: sistem POS, AI chatbot, dan dashboard bisnis untuk klien nyata.' },
  { year: '2022', title: 'Kuliah di Gunadarma',       color: 'violet', desc: 'Mulai S1 Sistem Informasi di Universitas Gunadarma. Langsung terjun ke dunia teknologi, kompetisi, dan organisasi.' },
];

const FUN_FACTS = [
  { emoji: '☕', text: 'Kopi hitam tanpa gula, setiap hari' },
  { emoji: '🎮', text: 'Strategy game addict (RTS & Tycoon)' },
  { emoji: '🌙', text: 'Paling produktif jam 10 malam sampai 2 pagi' },
  { emoji: '🐍', text: 'Python adalah cinta pertama dalam coding' },
  { emoji: '📱', text: 'Dark mode di semua device, tanpa pengecualian' },
  { emoji: '🏔️', text: 'Mimpi: bangun startup yang IPO sebelum 30' },
];

export default function AboutPage() {
  const [profileErr, setProfileErr] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14">

            {/* Photo */}
            <div className="shrink-0 relative">
              <div className="w-56 h-56 md:w-72 md:h-72 relative">
                <div className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl scale-110" />
                <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-200 animate-spin-slow" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl" style={{ background: 'var(--surface-raised)' }}>
                  {!profileErr ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Muhamad Fauzan Al Farikhi"
                      fill
                      className="object-cover"
                      onError={() => setProfileErr(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">👨‍💻</div>
                  )}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
                <span className="w-6 h-px bg-blue-600" />About Me
              </span>
              <h1 className="font-(family-name:--font-syne) text-4xl md:text-6xl font-black tracking-tighter mb-5 leading-[0.9]" style={{ color: 'var(--text)' }}>
                Hai, saya<br /><span className="gradient-text">Fauzan.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Tech Lead, AI Engineer, dan Founder{' '}
                <strong className="text-blue-600">@NEXA Tech Labs</strong>.
                Saya percaya teknologi adalah leverage terbesar untuk mengubah bisnis dan kehidupan orang banyak.
              </p>
              <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Mahasiswa Sistem Informasi di Universitas Gunadarma dengan IPK 3.89.
                Di luar kuliah, saya memimpin tim engineering di NEXA, membangun produk digital untuk UMKM Indonesia,
                dan aktif berkompetisi di level internasional.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Let&apos;s Collaborate
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href="/cv-fauzan.pdf" download className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm border transition-all hover:border-blue-300" style={{ borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Core Values<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Yang Saya Percaya
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <div key={i} className="rounded-3xl p-6 border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3 className="font-(family-name:--font-syne) font-bold mb-2 text-sm" style={{ color: 'var(--text)' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Timeline
          </span>
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Perjalanan Saya
          </h2>
        </div>
        <div className="relative timeline-line pl-12">
          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute left-[-30px] top-5 w-4 h-4 rounded-full border-2 border-white shadow-md bg-${item.color}-500`} style={{ borderColor: 'var(--bg)' }} />
                <div className="rounded-2xl p-6 border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-black px-3 py-1 rounded-full bg-${item.color}-50 text-${item.color}-600`}>{item.year}</span>
                    <h3 className="font-(family-name:--font-syne) font-bold" style={{ color: 'var(--text)' }}>{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUN FACTS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-[2.5rem] p-10 md:p-14 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <h2 className="font-(family-name:--font-syne) text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>Fun Facts 👾</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-3)' }}>Hal-hal yang membuat saya, saya.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FUN_FACTS.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <span className="text-2xl shrink-0">{f.emoji}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--text-2)' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="font-(family-name:--font-syne) text-3xl md:text-5xl font-black text-white mb-5">
            Yuk, Berkolaborasi!
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
            Punya proyek menarik? Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar ngobrol soal teknologi.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl">
            Hubungi Saya
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
        </div>
      </section>
    </div>
  );
}