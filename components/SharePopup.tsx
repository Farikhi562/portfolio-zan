'use client';

import { useState, useEffect } from 'react';

const PORTFOLIO_URL = 'https://frikhii.my.id';

export default function SharePopup() {
  const [open, setOpen]       = useState(false);
  const [copied, setCopied]   = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(!!navigator.share);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(PORTFOLIO_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = async () => {
    await navigator.share({
      title: 'Muhamad Fauzan Al Farikhi — Portfolio',
      text: 'Cek portfolio Fauzan — Mahasiswa Informatika & Founder NEXA Tech Labs!',
      url: PORTFOLIO_URL,
    });
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(PORTFOLIO_URL)}&bgcolor=ffffff&color=1d4ed8&margin=8`;

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        title="Share portfolio"
        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all hover:border-blue-300 hover:text-blue-600 hover:scale-105"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-3)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xs rounded-3xl p-6 animate-pop-in"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-(family-name:--font-syne) font-bold text-base" style={{ color: 'var(--text)' }}>Share Portfolio</h3>
              <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ color: 'var(--text-muted)', background: 'var(--bg)' }}>✕</button>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-5">
              <div className="p-2 bg-white rounded-2xl shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrUrl} alt="QR Code portfolio" width={180} height={180} className="rounded-xl" />
              </div>
            </div>

            <p className="text-xs text-center mb-5 font-mono" style={{ color: 'var(--text-muted)' }}>{PORTFOLIO_URL}</p>

            <div className="flex flex-col gap-2">
              <button onClick={copyLink}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {copied ? '✅ Link Tersalin!' : '📋 Copy Link'}
              </button>
              {canShare && (
                <button onClick={nativeShare}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border transition-all hover:border-blue-300"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-2)' }}>
                  📤 Share via...
                </button>
              )}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Twitter/X', href: `https://twitter.com/intent/tweet?text=Cek+portfolio+ini!&url=${PORTFOLIO_URL}`, emoji: '𝕏' },
                  { label: 'LinkedIn',  href: `https://linkedin.com/sharing/share-offsite/?url=${PORTFOLIO_URL}`, emoji: '💼' },
                  { label: 'WhatsApp',  href: `https://wa.me/?text=Cek+portfolio+Fauzan+${PORTFOLIO_URL}`, emoji: '💬' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 py-2.5 rounded-xl border text-xs font-bold transition-all hover:border-blue-300"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-3)', background: 'var(--bg)' }}>
                    <span className="text-base">{s.emoji}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}