'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PERSONAL, EDUCATION, ACHIEVEMENTS, EXPERIENCE } from '@/data/siteInfo';

const VALUES = [
  { icon: '🧠', title: 'Belajar dari Realita',    desc: 'Buku itu penting, tapi proyek nyata mengajarkan hal yang tidak ada di kurikulum.' },
  { icon: '🚀', title: 'Build & Ship',             desc: 'Lebih baik launch versi 0.1 yang berjalan daripada rencana sempurna yang tidak pernah jadi.' },
  { icon: '🤝', title: 'Kolaborasi Dulu',          desc: 'Satu orang bisa coding, tapi tim yang solid bisa membangun produk.' },
  { icon: '📈', title: 'Data-Driven Thinking',     desc: 'Setiap keputusan harus ada angkanya. Gut feeling itu perlu, tapi data itu wajib.' },
];

const FUN_FACTS = [
  { emoji: '⚛️', text: 'Medali Emas Olimpiade Fisika Nasional pas SMA' },
  { emoji: '☕', text: 'Kopi hitam tanpa gula, tiap pagi sebelum ngoding' },
  { emoji: '🌙', text: 'Paling produktif antara jam 10 malam sampai subuh' },
  { emoji: '🎮', text: 'Strategy game addict — RTS dan city builder' },
  { emoji: '📱', text: 'Dark mode everywhere, tidak ada kompromi' },
  { emoji: '🏗️', text: 'Udah mulai bangun startup dari semester 1' },
];

const MEDAL_COLOR: Record<string, string> = {
  yellow:  'bg-yellow-50 text-yellow-700 border-yellow-200',
  slate:   'bg-slate-100 text-slate-700 border-slate-200',
  orange:  'bg-orange-50 text-orange-700 border-orange-200',
  red:     'bg-red-50    text-red-700    border-red-200',
  blue:    'bg-blue-50   text-blue-700   border-blue-200',
};

export default function AboutPage() {
  const [profileErr, setProfileErr] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 relative">
                <div className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl scale-110" />
                <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-blue-200 animate-spin-slow" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl" style={{ background: 'var(--surface-raised)' }}>
                  {!profileErr ? (
                    <Image
                      src="/images/profile.jpg"
                      alt={PERSONAL.name}
                      fill
                      className="object-cover"
                      onError={() => setProfileErr(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl sm:text-7xl">👨‍💻</div>
                  )}
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg">
                  Sem. 2 · 2025
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                <span className="w-6 h-px bg-blue-600" />About Me
              </span>
              <h1 className="font-(family-name:--font-syne) text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-[0.92]" style={{ color: 'var(--text)' }}>
                Hai, saya<br /><span className="gradient-text">Fauzan.</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Mahasiswa <strong style={{ color: 'var(--text-2)' }}>Teknik Informatika Universitas Gunadarma</strong> angkatan 2025. 
                Pendiri <strong className="text-blue-600">NEXA Tech Labs</strong> — B2B tech studio untuk UMKM Indonesia.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-3)' }}>
                Dari olimpiade fisika medali emas sampai nulis kode yang jalan di production — saya percaya 
                bahwa gabungan logika sains dan engineering bisa solve masalah nyata di masyarakat.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                {[
                  { icon: '🎓', label: 'IPK 3.89', sub: 'Semester 1' },
                  { icon: '🥇', label: '3 Medali', sub: 'Olimpiade Nasional' },
                  { icon: '🏢', label: 'NEXA Labs', sub: 'Founder & CEO' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <span>{s.icon}</span>
                    <div>
                      <p className="font-bold leading-none text-xs" style={{ color: 'var(--text)' }}>{s.label}</p>
                      <p className="text-[10px] leading-none mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="btn-glow inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Let&apos;s Collaborate
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a href={PERSONAL.cv} download className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm border transition-all hover:border-blue-300" style={{ borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download CV
                </a>
                <a href={PERSONAL.contact.waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all"
                  style={{ background: '#25D366', color: 'white' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Education
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Latar Belakang Pendidikan
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              {/* Logo / Icon */}
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border flex items-center justify-center" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                {edu.logo ? (
                  <Image src={edu.logo} alt={edu.school} width={56} height={56} className="object-contain p-1" />
                ) : (
                  <span className="text-xl">{edu.level === 'SMA' ? '🏫' : '🏛️'}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block">{edu.level}</span>
                    <h3 className="font-(family-name:--font-syne) font-bold text-sm sm:text-base" style={{ color: 'var(--text)' }}>
                      {edu.school}
                    </h3>
                    {edu.degree && <p className="text-xs" style={{ color: 'var(--text-3)' }}>{edu.degree}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{edu.period}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{edu.city}</p>
                  </div>
                </div>

                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">
                    <span className="text-xs font-black text-blue-600">{edu.gpa}</span>
                    <span className="text-[10px] text-blue-500">IPK · {edu.gpaPeriod}</span>
                  </div>
                )}

                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {edu.highlights.map((h, j) => (
                      <span key={j} className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS & COMPETITIONS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
            <span className="w-6 h-px bg-amber-500" />Achievements
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Prestasi & Kompetisi
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.id} className="flex gap-4 p-4 sm:p-5 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="text-2xl sm:text-3xl shrink-0 mt-0.5">{a.badge}</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-(family-name:--font-syne) font-bold text-sm leading-snug" style={{ color: 'var(--text)' }}>
                    {a.title}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${MEDAL_COLOR[a.color] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {a.note}
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-600 mb-0.5">{a.subtitle}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.org} · {a.year}</p>
                <p className="text-xs leading-relaxed mt-1.5" style={{ color: 'var(--text-3)' }}>{a.desc}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {a.tags.map((t, j) => (
                    <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Experience
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Pengalaman
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border flex items-center justify-center" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                {exp.logo ? (
                  <Image src={exp.logo} alt={exp.company} width={48} height={48} className="object-contain p-1" />
                ) : (
                  <span className="text-xl">💼</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-(family-name:--font-syne) font-bold text-sm sm:text-base" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                    <p className="text-xs font-bold text-blue-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${exp.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'}`}>
                      {exp.type}
                    </span>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{exp.period}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-2" style={{ color: 'var(--text-3)' }}>{exp.desc}</p>
                {exp.note && (
                  <p className="text-[10px] italic mb-2" style={{ color: 'var(--text-muted)' }}>*{exp.note}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t, j) => (
                    <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'var(--bg)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-6 h-px bg-blue-600" />Mindset<span className="w-6 h-px bg-blue-600" />
          </span>
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Yang Saya Percaya
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {VALUES.map((v, i) => (
            <div key={i} className="rounded-2xl p-4 sm:p-6 border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <span className="text-2xl sm:text-3xl mb-3 block">{v.icon}</span>
              <h3 className="font-(family-name:--font-syne) font-bold mb-1.5 text-xs sm:text-sm" style={{ color: 'var(--text)' }}>{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FUN FACTS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-3xl p-6 sm:p-10 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <h2 className="font-(family-name:--font-syne) text-xl sm:text-2xl font-bold mb-1.5" style={{ color: 'var(--text)' }}>Fun Facts 👾</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--text-3)' }}>Hal-hal random tentang saya.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FUN_FACTS.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                <span className="text-xl sm:text-2xl shrink-0">{f.emoji}</span>
                <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-2)' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-linear-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <h2 className="font-(family-name:--font-syne) text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Yuk Ngobrol!
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Mau kolaborasi, punya proyek, atau sekadar diskusi soal AI dan tech? DM langsung — saya aktif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl text-sm sm:text-base">
              Kirim Pesan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <a href={PERSONAL.contact.waLink} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-2xl font-bold hover:bg-white/20 transition-all text-sm sm:text-base">
              WhatsApp Langsung
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-[80px]" />
        </div>
      </section>
    </div>
  );
}