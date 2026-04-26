'use client';

import { useState } from 'react';
import Link from 'next/link';

const socials = [
  {
    name: 'Email',
    handle: 'email-fauzan@gmail.com',
    href: 'mailto:email-fauzan@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    color: 'blue',
    desc: 'Fastest response',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/fauzanfauzan',
    href: 'https://linkedin.com/in/fauzanfauzan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    color: 'indigo',
    desc: 'Professional network',
  },
  {
    name: 'GitHub',
    handle: 'github.com/fauzanfauzan',
    href: 'https://github.com/fauzanfauzan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
    color: 'slate',
    desc: 'Code & projects',
  },
  {
    name: 'Instagram',
    handle: '@fauzanfauzan',
    href: 'https://instagram.com/fauzanfauzan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    color: 'pink',
    desc: 'Personal & updates',
  },
];

const faqItems = [
  {
    q: 'Berapa lama estimasi pengerjaan proyek?',
    a: 'Tergantung scope. MVP web app bisa 2–4 minggu. Sistem kompleks multi-modul bisa 1–3 bulan. Kita akan diskusi dan buat timeline realistis di awal.',
  },
  {
    q: 'Apakah NEXA bisa handle proyek dari luar Jakarta?',
    a: 'Ya! Tim NEXA sudah terbiasa remote-first. Selama ada koneksi internet yang stabil, kita bisa kolaborasi dari mana saja di Indonesia bahkan luar negeri.',
  },
  {
    q: 'Teknologi apa yang biasa digunakan untuk proyek klien?',
    a: 'Stack utama kita: Next.js + TypeScript untuk frontend, FastAPI/Node.js untuk backend, Supabase/PostgreSQL untuk database, dan Vercel/Docker untuk deployment.',
  },
  {
    q: 'Apakah tersedia support setelah project selesai?',
    a: 'Ya, kita menyediakan post-launch support. Detail SLA dan maintenance contract bisa didiskusikan sesuai kebutuhan klien.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.name} — ${formData.company || 'Individual'}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\nPerusahaan: ${formData.company || '-'}\nBudget: ${formData.budget || '-'}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:email-fauzan@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />
            Get In Touch
          </span>
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            Let&apos;s Build<br />
            <span className="gradient-text">Something.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Punya project idea, ingin diskusi kolaborasi, atau sekadar mau say hello? 
            Saya respond dalam 24 jam.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* LEFT — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 md:p-10">
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-slate-900 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                Isi form di bawah. Saya akan balas via email secepat mungkin.
              </p>

              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-slate-900 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Email client kamu dibuka. Saya akan balas segera. Terima kasih!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Kirim pesan lain →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Nama <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Perusahaan / Bisnis
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="PT. XYZ / Freelance"
                        className="form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                        Estimasi Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium"
                      >
                        <option value="">Pilih range budget</option>
                        <option value="< Rp 5 juta">{'< Rp 5 juta'}</option>
                        <option value="Rp 5–15 juta">Rp 5–15 juta</option>
                        <option value="Rp 15–50 juta">Rp 15–50 juta</option>
                        <option value="Rp 50–150 juta">Rp 50–150 juta</option>
                        <option value="> Rp 150 juta">{'> Rp 150 juta'}</option>
                        <option value="Diskusi dulu">Diskusi dulu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Pesan <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Ceritakan proyek kamu — apa yang ingin dibangun, timeline, dan tantangan yang dihadapi..."
                      className="form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder-slate-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    Kirim Pesan
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Form ini akan membuka email client kamu. Atau langsung email ke{' '}
                    <a href="mailto:email-fauzan@gmail.com" className="text-blue-600 font-semibold">
                      email-fauzan@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability */}
            <div className="bg-blue-600 rounded-[1.5rem] p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">
                    Status
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-2">
                  Open for Projects
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Saat ini tersedia untuk proyek baru, kolaborasi, dan konsultasi teknis.
                  Jam kerja: Senin–Sabtu, 09.00–22.00 WIB.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            </div>

            {/* Social Links */}
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-8">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 mb-5">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {s.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-800">{s.name}</p>
                      <p className="text-xs text-slate-400 truncate">{s.handle}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-slate-200 rounded-[1.5rem] p-8">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 mb-4">
                Location
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Jakarta, Indonesia 🇮🇩</p>
                  <p className="text-xs text-slate-400 mt-1">
                    WIB (UTC+7) · Remote-friendly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-900 mb-2">
              Pertanyaan Umum
            </h2>
            <p className="text-slate-500 text-sm">Hal-hal yang sering ditanyakan sebelum kolaborasi.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="text-blue-600 font-black shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
