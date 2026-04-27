// ─────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — semua data personal Fauzan
// Update file ini kalau ada perubahan data
// ─────────────────────────────────────────────────────────

export const PERSONAL = {
  name:       'Muhamad Fauzan Al Farikhi',
  nickname:   'Fauzan',
  title:      'Mahasiswa Informatika & Founder NEXA Tech Labs',
  taglines:   ['Mahasiswa Informatika', 'AI Enthusiast', 'Founder @NEXA', 'Problem Solver', 'Tech Builder'],
  bio:        'Mahasiswa Informatika semester 2 di Universitas Gunadarma yang passionate di bidang AI, software engineering, dan entrepreneurship. Pendiri NEXA Tech Labs — B2B tech studio untuk UMKM Indonesia.',
  bioLong:    'Saya Muhamad Fauzan Al Farikhi, mahasiswa Informatika angkatan 2025 di Universitas Gunadarma. Sejak SMA saya aktif di olimpiade sains dan mulai terjun ke dunia coding. Kini di semester 2, saya membangun NEXA Tech Labs — sebuah B2B tech studio yang bertujuan membantu UMKM Indonesia bertransformasi digital dengan solusi AI, Web Development, dan Cloud/DevOps.',

  contact: {
    email:    'fauzanalfa36@gmail.com',
    emailCeo: 'ceo@nexatechlabs.my.id',
    wa:       '+6285811211505',
    waLink:   'https://wa.me/6285811211505?text=Halo%20Fauzan%2C%20saya%20tertarik%20untuk%20berkolaborasi!',
    github:   'https://github.com/Farikhi562',
    linkedin: 'https://linkedin.com/in/fauzanalfarikhi',
    location: 'Jakarta, Indonesia',
  },

  cv: '/cv-fauzan.pdf',
};

// ── EDUCATION ─────────────────────────────────────────────
export const EDUCATION = [
  {
    id:       's1',
    level:    'S1 / Sarjana',
    degree:   'Teknik Informatika',
    school:   'Universitas Gunadarma',
    period:   '2025 – Sekarang',
    year:     '2025',
    status:   'active' as const,
    gpa:      '3.89',
    gpaPeriod:'Semester 1',
    city:     'Depok, Jawa Barat',
    logo:     '/images/gunadarma.png',
    desc:     'Fokus pada pengembangan perangkat lunak, kecerdasan buatan, dan rekayasa sistem. Aktif membangun proyek nyata sejak semester pertama.',
    highlights: ['IPK 3.89 (Semester 1)', 'Aktif membangun NEXA Tech Labs', 'Fokus AI & Software Engineering'],
  },
  {
    id:       'sma',
    level:    'SMA',
    degree:   'IPA',
    school:   'SMA Taman Madya 1 Jakarta',
    period:   '2021 – 2024',
    year:     '2021',
    status:   'done' as const,
    gpa:      null,
    gpaPeriod: null,
    city:     'Jakarta',
    logo:     null,
    desc:     'Aktif di olimpiade sains tingkat nasional — Fisika dan Sastra Indonesia. Meraih beberapa medali di Liga Olimpiade nasional.',
    highlights: ['Medali Emas Olimpiade Fisika', 'Medali Perak Sastra Indonesia', 'Medali Perunggu Olimpiade Fisika'],
  },
  {
    id:       'smp',
    level:    'SMP',
    degree:   '',
    school:   'SMPN 4 Jakarta',
    period:   '2018 – 2021',
    year:     '2018',
    status:   'done' as const,
    gpa:      null,
    gpaPeriod: null,
    city:     'Jakarta',
    logo:     null,
    desc:     'Sekolah menengah pertama negeri di Jakarta.',
    highlights: [],
  },
];

// ── ACHIEVEMENTS / COMPETITIONS ───────────────────────────
export const ACHIEVEMENTS = [
  {
    id:       'icbc-2026',
    title:    'Top 6 Finalist — ICBC 2026',
    subtitle: 'International Canvas Business Competition',
    org:      'Universitas Dian Nuswantoro (Udinus), Semarang',
    year:     '2026',
    badge:    '🏅',
    color:    'blue',
    tags:     ['B2B', 'AI', 'Business Model', 'Tech', 'Nasional'],
    logo:     '/images/udinus.png',
    img:      '/images/icbc-2026.jpg',
    desc:     'Masuk Top 6 Finalist dalam penilaian proposal di International Canvas Business Competition. Mempresentasikan model bisnis NEXA Tech Labs — B2B tech studio berbasis AI untuk UMKM Indonesia.',
    note:     'Top 6 Finalist — Penilaian Proposal',
  },
  {
    id:       'fisika-emas-2022',
    title:    'Medali Emas — Olimpiade Fisika',
    subtitle: 'Liga Olimpiade Nasional',
    org:      'Liga Olimpiade',
    year:     '17 Sep 2022',
    badge:    '🥇',
    color:    'yellow',
    tags:     ['Fisika', 'Olimpiade', 'Nasional', 'SMA'],
    logo:     null,
    img:      null,
    desc:     'Meraih Medali Emas pada Olimpiade Fisika tingkat nasional yang diselenggarakan Liga Olimpiade.',
    note:     'Medali Emas',
  },
  {
    id:       'sastra-perak-2022',
    title:    'Medali Perak — Sastra Indonesia',
    subtitle: 'Liga Olimpiade Nasional',
    org:      'Liga Olimpiade',
    year:     '11 Nov 2022',
    badge:    '🥈',
    color:    'slate',
    tags:     ['Sastra Indonesia', 'Olimpiade', 'Nasional', 'SMA'],
    logo:     null,
    img:      null,
    desc:     'Meraih Medali Perak pada Olimpiade Sastra Indonesia tingkat nasional yang diselenggarakan Liga Olimpiade.',
    note:     'Medali Perak',
  },
  {
    id:       'fisika-perunggu-2022',
    title:    'Medali Perunggu — Olimpiade Fisika',
    subtitle: 'Liga Olimpiade Nasional',
    org:      'Liga Olimpiade',
    year:     '8 Mar 2022',
    badge:    '🥉',
    color:    'orange',
    tags:     ['Fisika', 'Olimpiade', 'Nasional', 'SMA'],
    logo:     null,
    img:      null,
    desc:     'Meraih Medali Perunggu pada Olimpiade Fisika tingkat nasional yang diselenggarakan Liga Olimpiade.',
    note:     'Medali Perunggu',
  },
  {
    id:       'telkom-fisika-2021',
    title:    'Peserta — Olimpiade Fisika Nasional',
    subtitle: 'Telkom University',
    org:      'Telkom University',
    year:     '11 Okt 2021',
    badge:    '🎖️',
    color:    'red',
    tags:     ['Fisika', 'Olimpiade', 'Nasional', 'SMA'],
    logo:     null,
    img:      null,
    desc:     'Berpartisipasi dalam Olimpiade Fisika Nasional yang diselenggarakan oleh Telkom University.',
    note:     'Peserta Nasional',
  },
];

// ── EXPERIENCE ────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id:      'nexa-founder',
    role:    'Founder & CEO',
    company: 'NEXA Tech Labs',
    period:  '2024 – Sekarang',
    type:    'Startup',
    color:   'blue',
    logo:    '/images/nexa-logo.png',
    desc:    'Mendirikan B2B tech studio yang fokus membantu UMKM Indonesia dengan solusi AI, Web Development, dan Cloud/DevOps. Operasional aktif, belum berbadan hukum resmi.',
    tags:    ['Leadership', 'Product', 'AI', 'B2B', 'Web Dev'],
    note:    'Operasional · Belum legal entity',
  },
  {
    id:      'freelance',
    role:    'Freelance Developer',
    company: 'Independent',
    period:  '2024 – Sekarang',
    type:    'Freelance',
    color:   'indigo',
    logo:    null,
    desc:    'Mengerjakan proyek web development dan AI untuk klien, sambil membangun skill dan portofolio nyata.',
    tags:    ['Next.js', 'Python', 'AI', 'Web Dev'],
    note:    null,
  },
];

// ── STATS ─────────────────────────────────────────────────
export const STATS = [
  { value: '3.89', label: 'IPK Sem. 1',       icon: '🎓', suffix: '' },
  { value: '3',    label: 'Medali Olimpiade',  icon: '🥇', suffix: '' },
  { value: '5',    label: 'Kompetisi',         icon: '🏆', suffix: '+' },
  { value: '2025', label: 'Angkatan',          icon: '📅', suffix: '' },
];

// ── SOCIAL LINKS ──────────────────────────────────────────
export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/Farikhi562',           icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/fauzanalfarikhi', icon: 'linkedin' },
  { label: 'Email',    href: 'mailto:fauzanalfa36@gmail.com',           icon: 'email'    },
  { label: 'WhatsApp', href: 'https://wa.me/6285811211505',             icon: 'whatsapp' },
];