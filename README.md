# 🚀 Portfolio Muhamad Fauzan Al Farikhi

Portfolio profesional dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS v4**.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Buka browser
# http://localhost:3000
```

## 📁 Struktur Proyek

```
portfolio-fauzan/
├── app/
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About + Timeline
│   ├── projects/page.tsx    # Projects + Filter
│   ├── skills/page.tsx      # Skills + Tech Stack
│   ├── contact/page.tsx     # Contact Form
│   └── not-found.tsx        # 404 Page
├── components/
│   ├── Navbar.tsx           # Responsive Navbar
│   ├── Footer.tsx           # Footer
│   ├── ProjectCard.tsx      # Project Card Component
│   └── SectionHeader.tsx    # Reusable Section Header
├── data/
│   ├── projectsData.ts      # Project data (edit ini!)
│   └── skillsData.ts        # Skills data (edit ini!)
└── public/
    └── profile.jpg          # Tambahkan foto kamu di sini!
```

## 🛠 Customization

### Update Data
- Edit `data/projectsData.ts` untuk update projects
- Edit `data/skillsData.ts` untuk update skills & tech stack

### Tambah Foto Profile
- Tambahkan file `profile.jpg` ke folder `/public/`
- Update `app/about/page.tsx` — uncomment bagian `<Image />` component

### Update Resume
- Tambahkan file `cv-fauzan.pdf` ke folder `/public/`

### Update Info Kontak
- Update email dan social links di `components/Footer.tsx`
- Update social links di `app/contact/page.tsx`

## 🎨 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Syne (display) + DM Sans (body) |
| Deployment | Vercel (recommended) |

## 🚀 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau push ke GitHub dan connect ke Vercel dashboard.

---

Built with ❤️ by Muhamad Fauzan Al Farikhi — [NEXA Tech Labs](https://nexatechlabs.com)
