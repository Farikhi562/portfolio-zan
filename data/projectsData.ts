export interface Project {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  linkUrl?: string;
  category: string;
  categorySlug: 'all' | 'web' | 'ai-ml' | 'business' | 'system';
  status: 'live' | 'in-progress' | 'completed';
  highlight?: boolean;
}

export const projectsData: Project[] = [
  {
    title: 'Dimsum Mentai POS System',
    role: 'Tech Lead & Full-Stack Engineer',
    description:
      'Sistem Point of Sale, manajemen inventori, akuntansi otomatis, dan owner dashboard real-time untuk chain F&B 4 outlet. Dibangun dengan arsitektur multi-outlet yang scalable, laporan keuangan otomatis, dan manajemen stok lintas cabang.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    category: 'Web System',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: true,
  },
  {
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
  },
  {
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
  },
  {
    title: 'Canvas Business Model — Intl. Competition',
    role: 'CEO & Lead Strategist',
    description:
      'Business plan & canvas model yang meraih Juara 2 International Canvas Business Competition. Mencakup market analysis mendalam, financial projection, go-to-market strategy, dan pitch deck untuk NEXA Tech Labs.',
    techStack: ['Business Strategy', 'Market Analysis', 'Financial Modeling', 'Pitch Deck'],
    category: 'Business',
    categorySlug: 'business',
    status: 'completed',
    highlight: false,
  },
  {
    title: 'Computer Vision Pipeline',
    role: 'AI Engineer',
    description:
      'Pipeline deteksi objek dan klasifikasi gambar menggunakan YOLO dan ResNet. Digunakan untuk proof-of-concept quality control otomatis pada sektor manufaktur UMKM. Akurasi mencapai 94.2% pada test dataset.',
    techStack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
    linkUrl: 'https://github.com/fauzanfauzan',
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
  },
  {
    title: 'Personal Portfolio Website',
    role: 'Designer & Full-Stack Developer',
    description:
      'Portfolio profesional yang sedang kamu lihat sekarang. Dibangun dengan Next.js App Router, Tailwind CSS v4, TypeScript, dan desain custom. Menampilkan proyek, keahlian teknis, dan journey profesional.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vercel'],
    category: 'Web Development',
    categorySlug: 'web',
    status: 'live',
    highlight: false,
  },
  {
    title: 'SME Chatbot Integration',
    role: 'AI Engineer',
    description:
      'Chatbot berbasis LLM terintegrasi WhatsApp untuk UMKM — menjawab pertanyaan produk, menerima order, dan mengkategorikan keluhan pelanggan secara otomatis. Menggunakan RAG pattern untuk knowledge base bisnis.',
    techStack: ['Python', 'LangChain', 'Claude API', 'WhatsApp Business API', 'FastAPI', 'PostgreSQL'],
    category: 'AI / ML',
    categorySlug: 'ai-ml',
    status: 'completed',
    highlight: false,
  },
  {
    title: 'Cloud DevOps Infrastructure',
    role: 'DevOps Engineer',
    description:
      'Setup CI/CD pipeline, containerization, dan deployment automation untuk beberapa proyek NEXA. Mencakup Docker, GitHub Actions workflow, environment management, dan monitoring sederhana menggunakan Vercel Analytics.',
    techStack: ['Docker', 'GitHub Actions', 'Vercel', 'Nginx', 'Linux', 'Bash Scripting'],
    category: 'DevOps',
    categorySlug: 'system',
    status: 'in-progress',
    highlight: false,
  },
];
