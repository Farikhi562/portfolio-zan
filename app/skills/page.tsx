import { skillsData } from '@/data/skillsData';

export const metadata = {
  title: 'Skills & Tech Stack | Muhamad Fauzan Al Farikhi',
  description: 'Keahlian teknis dan tech stack yang dikuasai Muhamad Fauzan Al Farikhi.',
};

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <div className="mb-16 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Tech Stack & Skills.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Kumpulan teknologi dan fondasi keilmuan yang saya gunakan untuk merancang dan mengeksekusi solusi digital, dari pengembangan web modern hingga integrasi AI.
        </p>
      </div>

      {/* Grid Layout untuk Kategori Skills */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Judul Kategori dengan Aksen Garis Biru */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
              {category.title}
            </h2>
            
            {/* Daftar Skill */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}