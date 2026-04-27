'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACTS = [
  { icon: '✉️', label: 'Email Utama',  value: 'fauzanalfa36@gmail.com',  href: 'mailto:fauzanalfa36@gmail.com' },
  { icon: '🏢', label: 'Email CEO',    value: 'ceo@nexatechlabs.my.id',  href: 'mailto:ceo@nexatechlabs.my.id' },
  { icon: '💬', label: 'WhatsApp',     value: '+62 858-1121-1505',       href: 'https://wa.me/6285811211505?text=Halo%20Fauzan!' },
  { icon: '💼', label: 'LinkedIn',     value: 'fauzanalfarikhi',         href: 'https://linkedin.com/in/fauzanalfarikhi' },
  { icon: '🐱', label: 'GitHub',       value: 'Farikhi562',              href: 'https://github.com/Farikhi562' },
  { icon: '📍', label: 'Lokasi',       value: 'Jakarta, Indonesia',      href: null },
];

const SERVICES = ['Web Development', 'AI / Machine Learning', 'Cloud & DevOps', 'Tech Consulting', 'Kolaborasi Riset', 'Lainnya'];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm]     = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())                                e.name    = 'Nama wajib diisi';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email   = 'Email tidak valid';
    if (!form.message.trim())                             e.message = 'Pesan wajib diisi';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', subject: `[Portfolio] Pesan dari ${form.name}`, from_name: form.name, ...form }),
      });
      const data = await res.json();
      if (data.success) { setStatus('success'); setForm({ name: '', email: '', service: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 rounded-xl text-sm border form-input ${errors[field] ? 'border-red-400' : 'border-[var(--border)]'}`;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />Contact
          </span>
          <h1 className="font-(family-name:--font-syne) text-4xl sm:text-6xl font-black tracking-tighter mb-4 leading-[0.92]" style={{ color: 'var(--text)' }}>
            Let&apos;s<br /><span className="gradient-text">Connect.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-3)' }}>
            Mau kolaborasi, punya proyek, atau sekadar diskusi soal tech? Saya aktif dan biasanya balas dalam 24 jam.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-green-50 text-green-700 border-green-200">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" /></span>
              Available for new projects
            </div>

            {CONTACTS.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0" style={{ background: 'var(--bg)' }}>{c.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold truncate block hover:text-blue-600 transition-colors" style={{ color: 'var(--text-2)' }}>{c.value}</a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-2)' }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a href="https://wa.me/6285811211505?text=Halo%20Fauzan!" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ background: '#25D366', color: 'white' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Langsung
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl p-5 sm:p-8 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3 className="font-(family-name:--font-syne) text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Pesan Terkirim!</h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-3)' }}>Saya akan balas secepatnya!</p>
                  <button onClick={() => setStatus('idle')} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">Kirim Lagi</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-(family-name:--font-syne) text-base font-bold mb-4" style={{ color: 'var(--text)' }}>Kirim Pesan 💬</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>Nama *</label>
                      <input type="text" placeholder="Nama kamu" value={form.name} onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }} className={inputCls('name')} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>Email *</label>
                      <input type="email" placeholder="email@example.com" value={form.email} onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }} className={inputCls('email')} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>Kebutuhan</label>
                    <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))} className={`${inputCls('service')} cursor-pointer`} style={{ color: form.service ? 'var(--text)' : 'var(--text-muted)' }}>
                      <option value="">Pilih layanan...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>Pesan *</label>
                    <textarea rows={4} placeholder="Ceritakan kebutuhan kamu..." value={form.message} onChange={e => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: '' })); }} className={`${inputCls('message')} resize-none`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  {status === 'error' && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">❌ Gagal kirim. Coba WA langsung ya!</div>}
                  <button type="submit" disabled={status === 'loading'} className="w-full btn-glow inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-60">
                    {status === 'loading' ? <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Mengirim...</> : <>Kirim Pesan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}