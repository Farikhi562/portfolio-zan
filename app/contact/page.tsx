'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACTS = [
  { icon: '✉️', label: 'Email',    value: 'fauzanalfa36@gmail.com',      href: 'mailto:fauzanalfa36@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/fauzanalfarikhi', href: 'https://linkedin.com/in/fauzanalfarikhi' },
  { icon: '🐱', label: 'GitHub',   value: 'github.com/Farikhi562',        href: 'https://github.com/Farikhi562' },
  { icon: '📍', label: 'Location', value: 'Senen, Jakarta Pusat, Indonesia', href: null },
];

const SERVICES = [
  'Web Development', 'AI / Machine Learning', 'Cloud & DevOps',
  'Tech Consulting', 'Mobile App', 'Other',
];

export default function ContactPage() {
  const [status, setStatus]   = useState<Status>('idle');
  const [form, setForm]       = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors]   = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())                 e.name    = 'Nama wajib diisi';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email tidak valid';
    if (!form.message.trim())              e.message = 'Pesan wajib diisi';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      // Web3Forms — daftar gratis di https://web3forms.com untuk dapat access_key
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // ← ganti dengan access key kamu
          subject: `[Portfolio] Pesan dari ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl text-sm border form-input transition-all ${errors[field] ? 'border-red-400 bg-red-50 dark:bg-red-900/10' : 'border-[var(--border)] bg-[var(--bg)]'}`;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── HEADER ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />Contact
          </span>
          <h1 className="font-(family-name:--font-syne) text-5xl md:text-7xl font-black tracking-tighter mb-5 leading-[0.9]" style={{ color: 'var(--text)' }}>
            Let&apos;s<br /><span className="gradient-text">Connect.</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-3)' }}>
            Punya proyek, pertanyaan, atau sekedar ingin ngobrol soal teknologi? 
            Saya selalu terbuka. Balas biasanya dalam 24 jam.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── LEFT: Contact Info ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-green-50 text-green-700 border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new projects
            </div>

            {/* Contact cards */}
            {CONTACTS.map((c, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border card-hover" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--bg)' }}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold truncate block hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--text-2)' }}
                    >{c.value}</a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-2)' }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Response time */}
            <div className="p-5 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <p className="font-(family-name:--font-syne) font-bold mb-2 text-sm" style={{ color: 'var(--text)' }}>⏱ Response Time</p>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>Biasanya saya balas dalam <strong className="text-blue-600">24 jam</strong> di hari kerja. Untuk urgent, DM langsung di LinkedIn.</p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl p-8 md:p-10 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-(family-name:--font-syne) text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Pesan Terkirim!</h3>
                  <p className="mb-6" style={{ color: 'var(--text-3)' }}>Terima kasih sudah menghubungi. Saya akan balas secepatnya.</p>
                  <button onClick={() => setStatus('idle')} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-(family-name:--font-syne) text-xl font-bold mb-6" style={{ color: 'var(--text)' }}>Kirim Pesan 💬</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Nama *</label>
                      <input
                        type="text"
                        placeholder="Nama lengkap"
                        value={form.name}
                        onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }}
                        className={inputClass('name')}
                        style={{ color: 'var(--text)' }}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Email *</label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }}
                        className={inputClass('email')}
                        style={{ color: 'var(--text)' }}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Jenis Layanan</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                      className={`${inputClass('service')} cursor-pointer`}
                      style={{ color: form.service ? 'var(--text)' : 'var(--text-muted)' }}
                    >
                      <option value="">Pilih layanan yang dibutuhkan...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Pesan *</label>
                    <textarea
                      rows={5}
                      placeholder="Ceritakan kebutuhan kamu — proyek apa, timeline, dan ekspektasi..."
                      value={form.message}
                      onChange={e => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: '' })); }}
                      className={`${inputClass('message')} resize-none`}
                      style={{ color: 'var(--text)' }}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      ❌ Gagal mengirim pesan. Coba lagi atau hubungi via email langsung.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn-glow inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    Dengan mengirim pesan, kamu setuju untuk dihubungi kembali via email.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}