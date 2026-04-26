// Mendefinisikan struktur tipe data untuk kategori skill
export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'AI & Data Engineering',
    skills: [
      'Python', 
      'Machine Learning', 
      'MLOps', 
      'Data Analysis', 
      'Generative AI Integration',
      'Business Analytics'
    ]
  },
  {
    title: 'Web Development (Frontend & Backend)',
    skills: [
      'Next.js (App Router)', 
      'React', 
      'Tailwind CSS', 
      'TypeScript',
      'System Architecture'
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      'PostgreSQL', 
      'Supabase', 
      'Relational Database Admin', 
      'Point of Sales (POS) Infrastructure'
    ]
  },
  {
    title: 'Core Fundamentals',
    skills: [
      'Calculus', 
      'Classical Mechanics', 
      'Complex Problem Solving',
      'Team Leadership'
    ]
  }
];