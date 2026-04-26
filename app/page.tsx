import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION - Ultra Modern */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-slate-600 text-xs font-bold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              OPEN FOR VENTURES & COLLABORATION
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              ENGINEERING <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">EXCELLENCE.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed">
              Saya <span className="text-slate-900 font-bold">Muhamad Fauzan Al Farikhi</span>. Tech Lead @NEXA Tech Labs & AI Engineer. Saya mengubah logika kompleks menjadi produk digital yang skalabel.
            </p>
            
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/projects" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group">
                Explore Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <a href="/cv-fauzan.pdf" download className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:border-slate-400 transition-all shadow-sm flex items-center gap-2">
                Get Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_65%)] from-blue-50/50 opacity-70"></div>
      </section>

      {/* 2. THE NEXA BRAND SECTION - NEW FEATURE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* NEXA LOGO SVG */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">NEXA <span className="text-blue-500 italic uppercase text-sm tracking-widest ml-1">Labs</span></span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Memimpin Tim <br /> Menuju Digitalisasi.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Sebagai Founder & CEO, saya memimpin 6 talenta berbakat di NEXA Tech Labs untuk memberikan solusi AI & Web bagi UMKM. Juara 2 International Canvas Business Competition adalah bukti eksekusi strategis kami.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-black text-white">6+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Engineers</p>
                </div>
                <div className="w-px h-10 bg-slate-800"></div>
                <div>
                  <p className="text-2xl font-black text-white">Intl.</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Scale</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                <p className="text-blue-500 font-bold mb-2 text-sm uppercase tracking-widest">Digitalization</p>
                <p className="text-white font-medium">Modernisasi operasional UMKM dengan sistem Cloud & POS.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 translate-y-6">
                <p className="text-indigo-400 font-bold mb-2 text-sm uppercase tracking-widest">AI Integration</p>
                <p className="text-white font-medium">Implementasi Machine Learning untuk efisiensi bisnis.</p>
              </div>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* 3. EXPERTISE GRID - Bento Style */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-slate-400 font-bold text-center uppercase tracking-[0.3em] text-xs mb-16">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-2xl">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Software Architecture</h3>
            <p className="text-slate-500 leading-relaxed">Merancang sistem yang skalabel menggunakan Next.js, PostgreSQL, dan Supabase dengan performa maksimal.</p>
          </div>
          {/* Card 2 */}
          <div className="group bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-indigo-500 transition-all duration-500 shadow-sm hover:shadow-2xl">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Engineering</h3>
            <p className="text-slate-500 leading-relaxed">Implementasi model Machine Learning dan MLOps untuk automasi proses bisnis yang cerdas.</p>
          </div>
          {/* Card 3 */}
          <div className="group bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl">
            <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Tech Leadership</h3>
            <p className="text-slate-500 leading-relaxed">Manajemen tim lintas fungsi dan strategi eksekusi produk mulai dari ideation hingga deployment.</p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">Ready to Scale?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
            Jangan biarkan teknologi jadi penghambat bisnismu. Mari berdiskusi tentang bagaimana saya dan NEXA bisa membantumu.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <Link href="mailto:email-fauzan@gmail.com" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-2xl">
               Contact Me
             </Link>
             <Link href="/about" className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all">
               About My Journey
             </Link>
          </div>
        </div>
        {/* Animated Background Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
}