import Image from 'next/image';

export const metadata = {
  title: 'About | Muhamad Fauzan Al Farikhi',
  description: 'Kenali lebih jauh tentang Muhamad Fauzan Al Farikhi, Tech Lead dan AI Engineer.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
        About Me.
      </h1>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        
        {/* Main Content (Left Side) */}
        <div className="md:col-span-2 space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Halo, saya <span className="font-bold text-slate-900">Muhamad Fauzan Al Farikhi</span>. 
            Saat ini saya sedang menempuh pendidikan di program studi Teknik Informatika, Universitas Gunadarma. 
            Fokus utama saya berada di persimpangan antara rekayasa perangkat lunak (Software Engineering) dan Kecerdasan Buatan (AI/MLOps).
          </p>
          <p>
            Sebagai Founder dan Tech Lead di <strong>NEXA Tech Labs</strong>, saya memimpin tim dalam merancang infrastruktur digital yang <em>scalable</em>. Saya memiliki *passion* yang besar untuk memanfaatkan teknologi—khususnya AI—untuk memecahkan masalah nyata, seperti digitalisasi operasional bisnis dan UMKM.
          </p>
          <p>
            Latar belakang saya sebagai mantan kompetitor Olimpiade Sains Nasional (OSN) di bidang Fisika dan Matematika membentuk cara berpikir saya yang analitis. Saya terbiasa memecahkan masalah kompleks, mulai dari kalkulus tingkat lanjut hingga mekanika klasik, yang kini sangat relevan dalam pemahaman mendalam saya terhadap algoritma <em>Machine Learning</em>.
          </p>
          <p>
            Visi jangka panjang saya adalah membangun karir profesional sebagai AI Engineer, tidak hanya di Indonesia, tetapi juga membidik peluang di Singapura hingga Amerika Serikat.
          </p>
        </div>

        {/* Sidebar (Right Side) */}
        <div className="space-y-8">
          
          {/* Photo Profile */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <Image 
              src="/profile.jpg" 
              alt="Fauzan" 
              width={400} 
              height={400} 
              className="object-cover w-full aspect-square"
            />
          </div>

          {/* Quick Stats / Info */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              {/* Icon Book */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              Pendidikan & Pencapaian
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <strong>Universitas Gunadarma</strong><br/>
                S1 Teknik Informatika (IPK: 3.89)
              </li>
              <li>
                <strong>NEXA Tech Labs</strong><br/>
                Juara 2 - International Canvas Business Competition
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              {/* Icon Award */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              Sertifikasi
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <strong>AI For Business Specialization</strong><br/>
                Coursera (April 2026)
              </li>
              <li>
                <strong>Data Analysis with Python</strong><br/>
                Google (Februari 2026)
              </li>
              <li>
                <strong>Relational Database Admin with GenAI</strong><br/>
                IBM (Februari 2026)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}