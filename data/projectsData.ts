export interface Project {
  slug: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;
  links?: { label: string; url: string; icon: string }[]; // Upgrade: Support multi-link (Proposal, Docs)
  image?: string; // Upgrade: Support logo (Udinus)
  category: string;
  categorySlug: 'web' | 'ai-ml' | 'business' | 'system';
  status: 'live' | 'in-progress' | 'completed';
  highlight?: boolean;
  highlights?: string[];
  year?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'dimsum-mentai-pos',
    title: 'Dimsum Mentai POS System',
    role: 'Tech Lead & Full-Stack Developer',
    description:
      'Sistem Point of Sale, manajemen inventori, akuntansi otomatis, dan owner dashboard real-time untuk chain F&B 4 outlet. Arsitektur multi-outlet yang scalable dengan laporan keuangan otomatis.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    category: 'Web System',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: true,
    year: '2026',
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
      'Website company profile NEXA Tech Labs. Showcase layanan AI, Web Development, dan Cloud/DevOps untuk UMKM Indonesia. Dilengkapi lead generation dan kontak langsung.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    linkUrl: '#',
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: true,
    year: '2026',
    highlights: [
      'Desain modern dan fully responsive',
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
    techStack: ['Python', 'PyTorch', 'OpenCV', 'Scikit-learn', 'LangChain', 'OpenAI API', 'Claude API'],
    linkUrl: 'https://github.com/Farikhi562',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'in-progress',
    highlight: false,
    year: '2026',
    highlights: [
      '20+ notebook siap pakai untuk berbagai ML use case',
      'Integrasi Claude API dan OpenAI untuk LLM experiments',
      'Pipeline Computer Vision end-to-end',
      'Prompt Engineering templates dengan few-shot learning',
    ],
  },
  {
    slug: 'nexa-sphere-icbc-2026',
    title: 'NEXA-Sphere: ICBC 2026',
    role: 'Founder & Lead Strategist',
    description:
      'Proposal NEXA-Sphere yang mengantarkan NEXA Tech Labs masuk Top 6 Finalist di International Canvas Business Competition (ICBC) 2026 di Udinus Semarang. Mencakup arsitektur sistem tingkat lanjut, business canvas, dan dokumentasi komprehensif.',
    techStack: ['Business Strategy', 'System Architecture', 'Market Analysis', 'Financial Modeling'],
    category: 'Business',
    categorySlug: 'business',
    status: 'completed',
    highlight: true,
    year: '2026',
    image: '/images/logo-udinus.png', // Pastikan logo ini ada di folder public/images/
    links: [
      { label: 'Baca NEXA-Sphere', url: '/docs/nexa-sphere-proposal.pdf', icon: '📄' },
      { label: 'Dokumentasi', url: '/docs/nexa-sphere-docs.pdf', icon: '📚' }
    ],
    highlights: [
      'Top 6 Finalist ICBC 2026 di Udinus Semarang',
      'Blueprint ekosistem arsitektur sistem NEXA',
      'Market analysis UMKM Indonesia — TAM/SAM/SOM',
      'Business model canvas lengkap untuk NEXA Tech Labs',
    ],
  },
  {
    slug: 'computer-vision-pipeline',
    title: 'Computer Vision Pipeline',
    role: 'AI Engineer',
    description:
      'Pipeline deteksi objek dan klasifikasi gambar menggunakan YOLOv8 dan ResNet. Proof-of-concept untuk quality control otomatis pada UMKM manufaktur. Akurasi 94.2% pada test dataset.',
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
    title: 'Portfolio Website',
    role: 'Designer & Full-Stack Developer',
    description:
      'Portfolio profesional ini. Dibangun dengan Next.js, Tailwind CSS v4, TypeScript. Dark mode, responsive, dan dilengkapi banyak fitur interaktif.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Vercel'],
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: false,
    year: '2026',
    highlights: [
      'Dark mode dengan no-flash implementation',
      'Fully responsive — mobile, tablet, desktop',
      'Command palette (Ctrl+K)',
      'Floating dock untuk mobile navigation',
    ],
  },
  {
    slug: 'sme-chatbot-whatsapp',
    title: 'SME AI Chatbot — WhatsApp',
    role: 'AI Engineer',
    description:
      'Chatbot berbasis LLM terintegrasi WhatsApp untuk UMKM. Menjawab pertanyaan produk, menerima order, dan kategorisasi keluhan otomatis menggunakan RAG pattern.',
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