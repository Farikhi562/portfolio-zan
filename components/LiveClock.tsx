'use client';

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      };
      const dateOpts: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        weekday: 'short', day: 'numeric', month: 'short',
      };
      setTime(new Intl.DateTimeFormat('id-ID', opts).format(now));
      setDate(new Intl.DateTimeFormat('id-ID', dateOpts).format(now));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  if (!time) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono"
      style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)', color: 'var(--text-3)' }}>
      <span className="text-blue-500">🕐</span>
      <span className="font-bold" style={{ color: 'var(--text-2)' }}>{time}</span>
      <span>WIB</span>
      <span className="hidden sm:block" style={{ color: 'var(--text-muted)' }}>· {date}</span>
    </div>
  );
}