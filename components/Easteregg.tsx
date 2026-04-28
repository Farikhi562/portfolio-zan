'use client';

import { useEffect, useState } from 'react';

// ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

function Confetti() {
  useEffect(() => {
    const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 3,
      d: Math.random() * 120,
      color: ['#2563eb','#6366f1','#f59e0b','#10b981','#f43f5e','#8b5cf6'][Math.floor(Math.random() * 6)],
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
    }));

    let angle = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.01;
      particles.forEach(p => {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += (Math.cos(angle + p.d) + 2 + p.r / 2) * 1.5;
        p.x += Math.sin(angle) * 1.5;
        p.tilt = Math.sin(p.tiltAngle - p.d / 3) * 15;
        if (p.y > canvas.height) { p.x = Math.random() * canvas.width; p.y = -10; }
      });
      raf = requestAnimationFrame(draw);
    };

    draw();
    const t = setTimeout(() => cancelAnimationFrame(raf), 4000);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, []);

  return <canvas id="confetti-canvas" className="fixed inset-0 z-[1000] pointer-events-none" />;
}

export default function EasterEgg() {
  const [seq, setSeq]     = useState<string[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      setSeq(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(',') === KONAMI.join(',')) {
          setActive(true);
          setTimeout(() => setActive(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  if (!active) return null;

  return (
    <>
      <Confetti />
      <div className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none">
        <div className="text-center animate-pop-in pointer-events-auto">
          <div className="text-6xl mb-4">🎉</div>
          <div className="bg-slate-900 text-white px-8 py-6 rounded-3xl shadow-2xl">
            <p className="font-(family-name:--font-syne) text-2xl font-black mb-2">You found it!</p>
            <p className="text-slate-400 text-sm mb-1">↑↑↓↓←→←→BA — Konami Code 🕹️</p>
            <p className="text-blue-400 font-bold text-sm">Semangat terus, Fauzan! 🚀</p>
          </div>
        </div>
      </div>
    </>
  );
}