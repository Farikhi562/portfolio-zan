// Gunakan relative path untuk menghindari error path alias (@/)
import { ProjectCardProps } from '../components/ProjectCard';

export const projectsData: ProjectCardProps[] = [
  {
    title: 'NEXA Tech Labs',
    role: 'Founder, CEO & Tech Lead',
    description: 'Memimpin startup digital beranggotakan 6 orang dalam mengembangkan solusi teknologi inovatif. Berhasil meraih Juara 2 dalam International Canvas Business Competition melalui perancangan model bisnis dan arsitektur teknis yang solid.',
    techStack: ['Project Management', 'System Architecture', 'Leadership', 'Strategic Planning'],
    // linkUrl: 'https://nexa-techlabs.id' // Tambahkan link jika sudah live
  },
  {
    title: 'Dimsum Mentai - POS System',
    role: 'Tech Lead & Fullstack Developer',
    description: 'Digitalisasi operasional UMKM melalui pengembangan sistem Point of Sales (POS) mandiri. Mencakup manajemen inventaris real-time, pencatatan transaksi otomatis, dan infrastruktur database yang aman.',
    techStack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
    linkUrl: 'https://github.com/fauzan-lo/pos-dimsum' 
  },
  {
    title: 'AI Business Intelligence Engine',
    role: 'AI Engineer',
    description: 'Implementasi model analitik berbasis AI untuk mengekstraksi insight dari data bisnis tidak terstruktur. Fokus pada optimalisasi pengambilan keputusan menggunakan integrasi GenAI dan basis data relasional.',
    techStack: ['Python', 'Machine Learning', 'SQL', 'OpenAI API', 'Data Visualization'],
  },
  {
    title: 'Professional Developer Portfolio',
    role: 'Frontend Developer',
    description: 'Membangun platform portofolio multi-page modern dengan performa tinggi. Mengimplementasikan fitur routing dinamis, optimasi aset gambar, dan desain responsif menggunakan standar industri terbaru.',
    techStack: ['Next.js (App Router)', 'TypeScript', 'Lucide Icons', 'Vercel Deployment'],
    linkUrl: 'https://fauzan-dev.vercel.app'
  },
  {
    title: 'Automated Data Pipeline (MLOps)',
    role: 'AI Engineer',
    description: 'Eksperimen pengembangan jalur pipa data otomatis untuk proses ETL (Extract, Transform, Load) data mentah menjadi dataset siap latih untuk model Machine Learning.',
    techStack: ['Python', 'Pandas', 'GitHub Actions', 'MLOps Fundamentals'],
  }
];