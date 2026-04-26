export interface Skill {
  name: string;
  level?: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  color: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: '⚡',
    description: 'Membangun UI yang responsif, cepat, dan estetis.',
    color: 'blue',
    skills: [
      { name: 'Next.js',      level: 88 },
      { name: 'React',        level: 85 },
      { name: 'TypeScript',   level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML & CSS',   level: 92 },
      { name: 'Framer Motion',level: 70 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: '🗄️',
    description: 'Merancang API dan infrastruktur data yang handal.',
    color: 'indigo',
    skills: [
      { name: 'Node.js',      level: 75 },
      { name: 'Python',       level: 90 },
      { name: 'FastAPI',      level: 78 },
      { name: 'PostgreSQL',   level: 80 },
      { name: 'Supabase',     level: 82 },
      { name: 'REST API',     level: 85 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🧠',
    description: 'Implementasi model ML dan pipeline AI untuk produksi.',
    color: 'violet',
    skills: [
      { name: 'PyTorch',           level: 78 },
      { name: 'Scikit-learn',      level: 82 },
      { name: 'OpenCV',            level: 75 },
      { name: 'LangChain',         level: 80 },
      { name: 'Prompt Engineering',level: 88 },
      { name: 'Pandas & NumPy',    level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Deploy, monitoring, dan automasi infrastructure.',
    color: 'sky',
    skills: [
      { name: 'Git & GitHub',       level: 88 },
      { name: 'Docker',             level: 72 },
      { name: 'Vercel',             level: 85 },
      { name: 'GitHub Actions',     level: 75 },
      { name: 'Linux / Bash',       level: 78 },
      { name: 'CI/CD Pipelines',    level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    description: 'Ekosistem tools untuk produktivitas dan kolaborasi.',
    color: 'slate',
    skills: [
      { name: 'VS Code',     level: 92 },
      { name: 'Figma',       level: 72 },
      { name: 'Postman',     level: 80 },
      { name: 'Jupyter',     level: 88 },
      { name: 'Notion',      level: 85 },
      { name: 'Slack',       level: 88 },
    ],
  },
  {
    title: 'Foundations (Math & Science)',
    icon: '📐',
    description: 'Landasan ilmiah yang membentuk cara berpikir analitis.',
    color: 'emerald',
    skills: [
      { name: 'Calculus',          level: 90 },
      { name: 'Linear Algebra',    level: 88 },
      { name: 'Statistics',        level: 85 },
      { name: 'Applied Physics',   level: 80 },
      { name: 'Probability',       level: 82 },
      { name: 'Discrete Math',     level: 78 },
    ],
  },
];

export const techStackMarquee = [
  'Next.js', 'React', 'TypeScript', 'Python', 'PyTorch',
  'LangChain', 'Supabase', 'PostgreSQL', 'Docker', 'Vercel',
  'FastAPI', 'Tailwind CSS', 'OpenCV', 'Scikit-learn', 'Git',
  'Node.js', 'Claude API', 'OpenAI API', 'Figma', 'Linux',
];
