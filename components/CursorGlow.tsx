'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const rafRef  = useRef<number>();

  useEffect(() => {
    // Only on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = `${current.current.x}px`;
        glowRef.current.style.top  = `${current.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Large soft glow — follows with lag */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[1] hidden lg:block"
        style={{
          width: 400, height: 400,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'opacity 0.3s',
        }}
      />
      {/* Small precise dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[2] hidden lg:block"
        style={{
          width: 6, height: 6,
          transform: 'translate(-50%, -50%)',
          background: '#2563eb',
          borderRadius: '50%',
          opacity: 0.6,
          transition: 'transform 0.1s, opacity 0.3s',
        }}
      />
    </>
  );
}