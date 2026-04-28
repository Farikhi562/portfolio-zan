export interface Project {
  slug: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;       // live website URL
  repoUrl?: string;       // github repo
  category: string;
  categorySlug: 'web' | 'ai-ml' | 'business' | 'system';
  status: 'live' | 'in-progress' | 'completed';
  highlight?: boolean;
  highlights?: string[];
  year?: string;
  images?: string[];      // screenshot files in /public/images/projects/
}

export const projectsData: Project[] = [
  {
    slug: 'dimsum-mentai-pos',
    title: 'Dimsum Mentai POS System',
    role: 'Tech Lead & Full-Stack Developer',
    description:
      'Sistem Point of Sale, manajemen inventori, akuntansi otomatis, dan owner dashboard real-time untuk chain F&B 4 outlet. Arsitektur multi-outlet yang scalable dengan laporan keuangan otomatis.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    // Ganti URL ini dengan URL live sistem POS kalau sudah ada
    linkUrl: undefined,
    category: 'Web System',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: true,
    year: '2026',
    images: ['/images/projects/pos-dashboard.jpg', '/images/projects/pos-inventory.jpg'],
    highlights: [
      'Multi-outlet dashboard — satu tampilan untuk 4 cabang sekaligus',
      'Real-time inventory sync antar cabang dengan Supabase Realtime',
      'Laporan keuangan otomatis: daily, weekly, monthly',
      'Role-based access: Owner, Manager, Kasir',
      'Export laporan ke PDF dan Excel',
    ],
  },
  {
    slug: 'nexa-tech-labs-platform',
    title: 'NEXA Tech Labs — Company Website',
    role: 'Founder & Lead Developer',
    description:
      'Website company profile NEXA Tech Labs. Showcase layanan AI, Web Development, dan Cloud/DevOps untuk UMKM Indonesia.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    linkUrl: 'https://nexatechlabs.my.id',
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: true,
    year: '2026',
    highlights: [
      'Company profile modern dan fully responsive',
      'Lead generation terintegrasi',
      'SEO-optimized dengan Next.js App Router',
    ],
  },
  {
    slug: 'ai-ml-jupyter-toolkit',
    title: 'AI/ML Jupyter Toolkit',
    role: 'AI Engineer & Author',
    description:
      'Koleksi Jupyter Notebook untuk Computer Vision, Classic ML, LLM/Prompt Engineering, dan Data Wrangling. Terintegrasi dengan Claude API dan OpenAI API.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'Scikit-learn', 'LangChain', 'Claude API', 'YOLO', 'ResNet'],
    linkUrl: 'https://github.com/Farikhi562',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'in-progress',
    highlight: false,
    year: '2026',
    highlights: [
      '20+ notebook untuk berbagai ML use case',
      'Pipeline Computer Vision end-to-end (YOLO + ResNet)',
      'LLM experiments dengan Claude API dan OpenAI',
    ],
  },
  {
    slug: 'icbc-2026-business-canvas',
    title: 'ICBC 2026 — Business Canvas NEXA',
    role: 'Founder & Lead Strategist',
    description:
      'Business canvas dan proposal yang mengantarkan NEXA Tech Labs masuk Top 6 Finalist di International Canvas Business Competition 2026, Udinus Semarang.',
    techStack: ['Business Strategy', 'Market Analysis', 'Financial Modeling', 'Pitch Deck'],
    // PDF proposal bisa diakses langsung
    linkUrl: '/docs/nexa-icbc-2026-proposal.pdf',
    category: 'Business',
    categorySlug: 'business',
    status: 'completed',
    highlight: false,
    year: '2026',
    images: ['/images/icbc-2026.jpg'],
    highlights: [
      'Top 6 Finalist ICBC 2026 — penilaian proposal',
      'Market analysis UMKM Indonesia — TAM/SAM/SOM',
      'Business model canvas lengkap untuk NEXA Tech Labs',
    ],
  },
  {
    slug: 'computer-vision-pipeline',
    title: 'Computer Vision Pipeline',
    role: 'AI Engineer',
    description:
      'Pipeline deteksi objek dan klasifikasi gambar menggunakan YOLOv8 dan ResNet. Proof-of-concept quality control otomatis untuk UMKM manufaktur. Akurasi 94.2%.',
    techStack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
    linkUrl: 'https://github.com/Farikhi562',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
    year: '2026',
    highlights: [
      'Akurasi 94.2% pada test dataset',
      'Real-time inference 30+ FPS di CPU standar',
      'REST API dengan FastAPI + Docker',
    ],
  },
  {
    slug: 'personal-portfolio',
    title: 'Portfolio Website — frikhii.my.id',
    role: 'Designer & Full-Stack Developer',
    description:
      'Portfolio profesional ini. Next.js 15, Tailwind CSS v4, TypeScript. Dark mode, floating dock mobile, command palette (Ctrl+K), dan banyak fitur interaktif.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vercel'],
    linkUrl: 'https://frikhii.my.id',
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: false,
    year: '2025',
    highlights: [
      'Dark mode dengan no-flash implementation',
      'Floating dock untuk mobile navigation',
      'Command palette (Ctrl+K)',
      'Fully responsive — mobile, tablet, desktop',
    ],
  },
  {
    slug: 'sme-chatbot-whatsapp',
    title: 'SME AI Chatbot — WhatsApp',
    role: 'AI Engineer',
    description:
      'Chatbot LLM terintegrasi WhatsApp untuk UMKM. Menjawab pertanyaan produk, menerima order, dan kategorisasi keluhan otomatis menggunakan RAG pattern.',
    techStack: ['Python', 'LangChain', 'Claude API', 'WhatsApp Business API', 'FastAPI', 'PostgreSQL'],
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
    year: '2026',
    highlights: [
      'RAG untuk knowledge base produk klien',
      'Response time rata-rata < 2 detik',
      'Kategorisasi keluhan otomatis 89% akurasi',
    ],
  },
];