import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectsData';

export const metadata = {
  title: 'Projects | Muhamad Fauzan Al Farikhi',
  description: 'Daftar proyek dan pengalaman profesional Muhamad Fauzan Al Farikhi.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <div className="mb-16 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Featured Projects.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Kumpulan eksekusi teknis dan solusi digital yang saya kembangkan. Fokus pada arsitektur sistem yang skalabel, inisiatif startup, hingga digitalisasi operasional bisnis UMKM.
        </p>
      </div>

      {/* Grid Layout untuk Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            role={project.role}
            description={project.description}
            techStack={project.techStack}
            linkUrl={project.linkUrl}
          />
        ))}
      </div>

    </div>
  );
}