import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Muhamad Fauzan Al Farikhi',
  description: 'Kenali lebih jauh tentang Muhamad Fauzan Al Farikhi — Tech Lead, AI Engineer, dan Founder NEXA Tech Labs.',
};

const timeline = [
  {
    year: '2026',
    title: 'NEXA Tech Labs — First Client',
    subtitle: 'Founder & CEO',
    desc: 'Menutup deal pertama NEXA dengan Dimsum Mentai untuk sistem POS, inventori, akuntansi, dan owner dashboard 4 outlet. Milestone bersejarah minggu pertama operasional.',
    tag: 'Milestone',
    tagColor: 'bg-green-50 text-green-700 border-green-200',
    current: true,
  },
  {
    year: '2026',
    title: 'Juara 2 — International Canvas Business Competition',
    subtitle: 'NEXA Tech Labs Team',
    desc: 'Meraih posisi runner-up di kompetisi business model internasional dengan proposal digitalisasi UMKM berbasis AI. Validasi eksternal pertama untuk visi NEXA.',
    tag: 'Achievement',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    year: '2025',
    title: 'Mendirikan NEXA Tech Labs',
    subtitle: 'Founder & CEO',
    desc: 'Co-founded B2B tech studio dengan 6 member yang berfokus pada Software Development, Cloud/DevOps, dan AI Integration untuk UMKM dan enterprise Indonesia.',
    tag: 'Venture',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    year: '2025',
    title: 'AI & ML Engineering Deep Dive',
    subtitle: 'Self-Directed',
    desc: 'Fokus intensif pada implementasi PyTorch, Computer Vision, LangChain, dan Prompt Engineering. Membangun toolkit Jupyter komprehensif dan mengintegrasikan Claude & OpenAI API ke dalam pipeline produksi.',
    tag: 'Learning',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    year: '2024',
    title: 'Universitas Gunadarma — Teknik Informatika',
    subtitle: 'S1 — IPK 3.89',
    desc: 'Memulai perjalanan akademik di Teknik Informatika. Menggabungkan fondasi matematika dari OSN dengan dunia software engineering, database, dan pemrograman modern.',
    tag: 'Education',
    tagColor: 'bg-slate-50 text-slate-600 border-slate-200',
  },
  {
    year: '2023',
    title: 'Olimpiade Sains Nasional — Fisika & Matematika',
    subtitle: 'Kompetitor OSN',
    desc: 'Berkompetisi di OSN bidang Fisika dan Matematika. Pengalaman ini membentuk cara berpikir analitis dan problem-solving yang kini menjadi fondasi pemahaman algoritma Machine Learning.',
    tag: 'Achievement',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

const certifications = [
  {
    title: 'AI For Business Specialization',
    issuer: 'Coursera',
    date: 'April 2026',
    icon: '🎓',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'Google',
    date: 'Februari 2026',
    icon: '📊',
  },
  {
    title: 'Relational Database Admin with GenAI',
    issuer: 'IBM',
    date: 'Februari 2026',
    icon: '🗄️',
  },
];

const values = [
  {
    title: 'Executional Precision',
    desc: 'Ide tanpa eksekusi adalah ilusi. Saya percaya pada delivery yang tepat waktu dengan kualitas yang terukur.',
    emoji: '⚡',
  },
  {
    title: 'Curiosity-Driven Learning',
    desc: 'Dari kalkulus ke LLM, saya selalu mencari pemahaman mendalam — bukan sekedar hafalan syntax.',
    emoji: '🔭',
  },
  {
    title: 'Impact at Scale',
    desc: 'Teknologi paling bermakna ketika membantu orang nyata. UMKM Indonesia adalah battlefield saya.',
    emoji: '🌏',
  },
  {
    title: 'Team Before Self',
    desc: 'Sebagai Tech Lead, kesuksesan tim adalah kesuksesan saya. Mentoring dan kolaborasi adalah investasi jangka panjang.',
    emoji: '🤝',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            <span className="w-6 h-px bg-blue-600" />
            About Me
          </span>
          <h1 className="font-[family-name:var(--font-syne)] text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[0.9]">
            The Story<br />
            <span className="gradient-text">Behind the Code.</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
            Dari kompetisi OSN sampai memimpin tim tech startup — perjalanan yang membentuk 
            seorang engineer yang berpikir seperti ilmuwan dan bergerak seperti founder.
          </p>
        </div>
      </section>

      {/* ── MAIN BIO + SIDEBAR ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Main Bio */}
          <div className="md:col-span-2 space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Halo, saya{' '}
              <span className="font-bold text-slate-900">Muhamad Fauzan Al Farikhi</span>.
              Saat ini saya sedang menempuh S1 Teknik Informatika di Universitas Gunadarma 
              (semester 2, IPK 3.89) sekaligus memimpin{' '}
              <strong className="text-slate-900">NEXA Tech Labs</strong> sebagai Founder & CEO.
            </p>
            <p>
              Fokus saya ada di persimpangan{' '}
              <em>Software Engineering</em> dan{' '}
              <em>Artificial Intelligence</em>. Saya percaya bahwa engineer terbaik 
              adalah yang bisa menjembatani kedalaman teknis dengan pemahaman bisnis —  
              dan itulah yang saya bangun setiap hari.
            </p>
            <p>
              Latar belakang sebagai{' '}
              <strong className="text-slate-900">mantan kompetitor OSN</strong> di bidang 
              Fisika dan Matematika membentuk fondasi analitis yang kuat. Cara saya 
              memecahkan bug, merancang arsitektur sistem, atau men-debug model ML 
              sangat dipengaruhi oleh kebiasaan berpikir matematis ini.
            </p>
            <p>
              Visi jangka panjang saya:{' '}
              <strong className="text-slate-900">
                membangun karir AI Engineering di level global
              </strong>{' '}
              — Indonesia dulu, kemudian Singapura, lalu Amerika Serikat. 
              NEXA Tech Labs adalah batu loncatan dan proving ground untuk itu.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8">
              <p className="text-slate-900 font-semibold italic text-xl">
                &ldquo;Saya tidak hanya menulis kode — saya merancang sistem yang 
                memecahkan masalah nyata untuk orang nyata.&rdquo;
              </p>
            </blockquote>

            {/* Interests */}
            <div className="pt-2">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Interests & Philosophy</p>
              <div className="flex flex-wrap gap-3">
                {['AI/MLOps', 'Islamic Philosophy', 'System Design', 'Podcast Learning', 'OSN Mathematics', 'Applied Physics', 'Startup Building', 'Microlearning'].map(tag => (
                  <span key={tag} className="bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo */}
            <div className="relative">
              <div className="rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-lg">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="font-[family-name:var(--font-syne)] text-white text-4xl font-black">F</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Add profile.jpg to /public</p>
                  </div>
                </div>
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                AI Engineer 🧠
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white p-6 rounded-[1.25rem] border border-slate-200 shadow-sm">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 mb-4">Quick Info</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Location',   value: 'Jakarta, Indonesia 🇮🇩' },
                  { label: 'University', value: 'Universitas Gunadarma' },
                  { label: 'Major',      value: 'Teknik Informatika' },
                  { label: 'GPA',        value: '3.89 / 4.00' },
                  { label: 'Company',    value: 'NEXA Tech Labs' },
                  { label: 'Role',       value: 'Founder & Tech Lead' },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-slate-400 font-medium">{item.label}</span>
                    <span className="text-slate-800 font-semibold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-[1.25rem] border border-slate-200 shadow-sm">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-xl shrink-0">{cert.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{cert.title}</p>
                      <p className="text-xs text-slate-400">{cert.issuer} · {cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="btn-glow flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Let&apos;s Collaborate
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            <span className="w-6 h-px bg-blue-600" />
            Journey
          </span>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold text-slate-900">
            The Timeline
          </h2>
        </div>

        <div className="relative timeline-line pl-12 space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className={`absolute -left-12 top-1 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                item.current
                  ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200'
                  : 'bg-white border-slate-200'
              }`}>
                <div className={`w-3 h-3 rounded-full ${item.current ? 'bg-white' : 'bg-slate-300'}`} />
              </div>

              {/* Content */}
              <div className={`bg-white p-7 rounded-[1.25rem] border transition-all hover:shadow-md card-hover ${
                item.current ? 'border-blue-200 shadow-sm' : 'border-slate-200'
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 text-lg mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">{item.subtitle}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────── */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              <span className="w-6 h-px bg-blue-600" />
              Principles
              <span className="w-6 h-px bg-blue-600" />
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold text-slate-900">
              What I Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all card-hover">
                <span className="text-4xl block mb-5">{v.emoji}</span>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
