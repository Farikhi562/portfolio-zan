export interface Project {
  slug: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;
  category: string;
  categorySlug: 'all' | 'web' | 'ai-ml' | 'business' | 'system';
  status: 'live' | 'in-progress' | 'completed';
  highlight?: boolean;
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'dimsum-mentai-pos',
    title: 'Dimsum Mentai POS System',
    role: 'Tech Lead & Full-Stack Engineer',
    description:
      'Sistem Point of Sale, manajemen inventori, akuntansi otomatis, dan owner dashboard real-time untuk chain F&B 4 outlet. Dibangun dengan arsitektur multi-outlet yang scalable, laporan keuangan otomatis, dan manajemen stok lintas cabang.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    category: 'Web System',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: true,
    highlights: [
      'Arsitektur multi-outlet — satu dashboard untuk 4 cabang sekaligus',
      'Real-time inventory sync antar cabang dengan Supabase Realtime',
      'Laporan keuangan otomatis: daily, weekly, monthly revenue report',
      'Owner dashboard dengan chart interaktif dan export Excel/PDF',
      'Role-based access: Owner, Manager, Kasir dengan permission berbeda',
    ],
  },
  {
    slug: 'nexa-tech-labs-platform',
    title: 'NEXA Tech Labs Platform',
    role: 'Founder & Lead Developer',
    description:
      'Company profile & client portal NEXA Tech Labs. Showcase layanan AI Integration, Cloud/DevOps, dan Software Development untuk UMKM Indonesia. Dilengkapi dengan service calculator dan lead generation system.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    linkUrl: '#',
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: true,
    highlights: [
      'Service calculator interaktif untuk estimasi harga proyek',
      'Lead generation system terintegrasi dengan CRM sederhana',
      'SEO-optimized dengan Next.js App Router dan metadata API',
      'Animasi halus dengan Framer Motion untuk UX yang premium',
    ],
  },
  {
    slug: 'ai-ml-jupyter-toolkit',
    title: 'AI/ML Jupyter Toolkit',
    role: 'AI Engineer & Author',
    description:
      'Toolkit Jupyter Notebook komprehensif mencakup Computer Vision, Classic ML, LLM/Prompt Engineering, dan Data Wrangling. Diintegrasikan dengan Anthropic Claude dan OpenAI API untuk pipeline AI yang production-ready.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'Scikit-learn', 'LangChain', 'OpenAI API', 'Claude API'],
    linkUrl: 'https://github.com/fauzanfauzan',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'in-progress',
    highlight: false,
    highlights: [
      '20+ notebook siap pakai untuk berbagai use case ML',
      'Integrasi Claude API dan OpenAI untuk LLM experiments',
      'Pipeline Computer Vision end-to-end dari preprocessing ke inference',
      'Prompt Engineering templates dengan few-shot dan chain-of-thought',
    ],
  },
  {
    slug: 'icbc-2026-business-canvas',
    title: 'Canvas Business Model — Intl. Competition',
    role: 'CEO & Lead Strategist',
    description:
      'Business plan & canvas model yang meraih Juara 2 International Canvas Business Competition di Udinus Semarang 2026. Mencakup market analysis mendalam, financial projection, go-to-market strategy, dan pitch deck untuk NEXA Tech Labs.',
    techStack: ['Business Strategy', 'Market Analysis', 'Financial Modeling', 'Pitch Deck'],
    category: 'Business',
    categorySlug: 'business',
    status: 'completed',
    highlight: false,
    highlights: [
      'Juara 2 International Canvas Business Competition 2026 di Udinus',
      'Market analysis UMKM Indonesia dengan TAM/SAM/SOM framework',
      'Financial projection 3 tahun dengan berbagai skenario',
      'Pitch deck 15 slide yang dipresentasikan ke juri internasional',
    ],
  },
  {
    slug: 'computer-vision-pipeline',
    title: 'Computer Vision Pipeline',
    role: 'AI Engineer',
    description:
      'Pipeline deteksi objek dan klasifikasi gambar menggunakan YOLO dan ResNet. Digunakan untuk proof-of-concept quality control otomatis pada sektor manufaktur UMKM. Akurasi mencapai 94.2% pada test dataset.',
    techStack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
    linkUrl: 'https://github.com/farikhi562',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
    highlights: [
      'Akurasi 94.2% pada test dataset quality control manufaktur',
      'Real-time inference dengan YOLOv8 — 30+ FPS pada CPU standar',
      'REST API dengan FastAPI + Docker untuk deployment mudah',
      'Custom dataset labeling pipeline dengan Roboflow',
    ],
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    role: 'Designer & Full-Stack Developer',
    description:
      'Portfolio profesional yang sedang kamu lihat sekarang. Dibangun dengan Next.js App Router, Tailwind CSS v4, TypeScript, dan desain custom. Menampilkan proyek, keahlian teknis, dan journey profesional.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vercel'],
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: false,
    highlights: [
      'Dark mode dengan no-flash implementation menggunakan localStorage',
      'Fully responsive — mobile, tablet, dan desktop',
      'SEO optimized dengan Next.js metadata API',
      'Performance score 95+ di Lighthouse',
    ],
  },
  {
    slug: 'sme-chatbot-whatsapp',
    title: 'SME Chatbot Integration',
    role: 'AI Engineer',
    description:
      'Chatbot berbasis LLM terintegrasi WhatsApp untuk UMKM — menjawab pertanyaan produk, menerima order, dan mengkategorikan keluhan pelanggan secara otomatis. Menggunakan RAG pattern untuk knowledge base bisnis.',
    techStack: ['Python', 'LangChain', 'Claude API', 'WhatsApp Business API', 'FastAPI', 'PostgreSQL'],
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
    highlights: [
      'RAG (Retrieval-Augmented Generation) untuk knowledge base produk',
      'Integrasi WhatsApp Business API untuk notifikasi real-time',
      'Response time rata-rata < 2 detik untuk query umum',
      'Kategorisasi keluhan otomatis dengan 89% akurasi',
      'Dashboard admin untuk monitoring conversation dan analytics',
    ],
  },
  {
    slug: 'cloud-devops-infrastructure',
    title: 'Cloud DevOps Infrastructure',
    role: 'DevOps Engineer',
    description:
      'Setup CI/CD pipeline, containerization, dan deployment automation untuk beberapa proyek NEXA. Mencakup Docker, GitHub Actions workflow, environment management, dan monitoring sederhana menggunakan Vercel Analytics.',
    techStack: ['Docker', 'GitHub Actions', 'Vercel', 'Nginx', 'Linux', 'Bash Scripting'],
    category: 'DevOps',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: false,
    highlights: [
      'CI/CD pipeline otomatis: push → test → build → deploy dalam < 3 menit',
      'Docker containerization untuk konsistensi dev/staging/production',
      'Zero-downtime deployment dengan Vercel edge network',
      'Bash scripting untuk automated backup dan environment setup',
    ],
  },
];