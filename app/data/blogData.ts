// Mendefinisikan tipe data agar TypeScript tidak error (mengatasi TS7006)
export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  content: string;
  comingSoon?: boolean;
};

// Mengaplikasikan tipe data BlogPost[] ke dalam array
export const blogPosts: BlogPost[] = [
  {
    slug: 'membangun-ai-chatbot-umkm',
    title: 'Membangun AI Chatbot untuk UMKM di daerah Jakarta Pusat dengan LangChain & Claude API',
    category: 'AI Engineering',
    date: '13 Apr 2026',
    readTime: '12 min',
    emoji: '🤖',
    content: `
      <p>Banyak UMKM di Jakarta Pusat yang kewalahan membalas chat pelanggan di jam sibuk. Di artikel ini, saya akan membedah bagaimana NEXA Tech Labs membangun AI Chatbot murah meriah namun cerdas menggunakan LangChain dan Claude API.</p>
      
      <h2>1. Mengidentifikasi Masalah (Discovery Phase)</h2>
      <p>Klien kami, sebuah toko F&B (Dimsum Mentai), menghabiskan hampir 4 jam sehari hanya untuk membalas pertanyaan repetitif seperti "Menu yang ready apa?", "Bisa kirim ke Sudirman?", atau "Ada promo hari ini?". Waktu yang seharusnya bisa dipakai untuk ekspansi bisnis habis untuk <em>customer service</em> dasar.</p>
      
      <h2>2. Mengapa Claude API dan LangChain?</h2>
      <p>Awalnya kami mempertimbangkan OpenAI (GPT-4), namun dari hasil testing kami, <strong>Claude 3 Haiku (Anthropic)</strong> jauh lebih natural dalam merespons bahasa gaul dan singkatan khas Indonesia (seperti "yg", "bsk", "klo"). Selain itu, harganya jauh lebih masuk akal untuk skala UMKM.</p>
      <ul>
        <li><strong>LangChain:</strong> Kami gunakan sebagai <em>framework</em> untuk menghubungkan data menu (RAG - Retrieval-Augmented Generation) ke LLM.</li>
        <li><strong>Claude API:</strong> Otak utama untuk membalas pesan.</li>
        <li><strong>FastAPI & Python:</strong> Backend ringan untuk menerima <em>webhook</em> dari WhatsApp.</li>
      </ul>
      
      <h2>3. Arsitektur Sederhana</h2>
      <p>Alurnya cukup sederhana:</p>
      <ol>
        <li>Pelanggan chat ke nomor WA Business UMKM.</li>
        <li>Webhook mengirim payload ke server FastAPI kami.</li>
        <li>LangChain mengekstrak <em>intent</em> (maksud) pelanggan dan mencari konteks di database (misal: cek stok di Supabase).</li>
        <li>Claude merangkai jawaban yang sopan dan <em>sales-driven</em>.</li>
        <li>Pesan dikirim balik via API WhatsApp.</li>
      </ol>

      <h2>4. Hasil di Production</h2>
      <p>Hasilnya sangat memuaskan. Beban admin turun hingga <strong>70% di minggu pertama</strong>. Chatbot tidak hanya menjawab pertanyaan, tapi juga di-<em>prompt</em> untuk melakukan <em>upselling</em> secara halus. Ini adalah bukti bahwa AI tidak harus mahal untuk bisa memberikan dampak nyata pada bisnis skala kecil.</p>
    `
  },
  {
    slug: 'nexa-journey-0-to-6-engineers',
    title: 'Dari Solo Developer ke Tim 7 Engineer: Pelajaran Membangun NEXA Tech Labs',
    category: 'Startup',
    date: '19 Mar 2026',
    readTime: '8 min',
    emoji: '🚀',
    content: `
      <p>Membangun tim dari nol adalah fase paling menantang sekaligus paling memuaskan dalam karir saya sejauh ini. Berawal dari <em>solo freelancing</em>, kini NEXA Tech Labs berdiri kokoh dengan 7 orang inti.</p>

      <h2>Fase Solo: Limitasi Waktu & Burnout</h2>
      <p>Di awal kuliah, saya mengambil proyek pembuatan web dan sistem kasir sendirian. Mengurus UI/UX, database, API, hingga negosiasi harga ke klien. Uangnya lumayan, tapi saya cepat menyadari satu hal: <strong>waktu saya terbatas</strong>. Saya tidak bisa mengambil 3 proyek sekaligus tanpa mengorbankan kualitas atau jam tidur (dan IPK kuliah!).</p>

      <h2>Membangun "The Dream Team"</h2>
      <p>Pada 19 Maret 2026, saya memutuskan untuk merealisasikan NEXA Tech Labs secara profesional. Saya mulai mengajak teman-teman yang tidak hanya punya <em>skill</em>, tapi punya visi yang sama:</p>
      <ul>
        <li><strong>Mirza:</strong> Dipercaya mengurus BizDev dan mencari prospek klien baru.</li>
        <li><strong>Triandra:</strong> Memegang peran CTO untuk memastikan arsitektur teknis berjalan rapi.</li>
        <li><strong>Rangga & Yusuf:</strong> Menjaga Quality Assurance dan lini Sales/Social Media.</li>
        <li><strong>Iqbal & Syawal:</strong> Bertanggung jawab di Project Management dan UI/UX yang memanjakan mata.</li>
      </ul>

      <h2>Pelajaran Terbesar: Ownership</h2>
      <p>Pelajaran terbesar saya sebagai Founder adalah: Jangan cari orang yang cuma "jago coding". Carilah orang yang memiliki <strong>ownership</strong> (rasa memiliki) terhadap proyek yang mereka kerjakan. Tim NEXA solid karena setiap anggotanya merasa bertanggung jawab penuh atas hasil akhir produk klien, bukan sekadar menyelesaikan <em>task Jira</em> lalu pulang.</p>
      <p>Perjalanan masih panjang, tapi dengan fondasi tim ini, saya yakin NEXA bisa membawa transformasi digital yang masif untuk UMKM Indonesia.</p>
    `
  },
  {
    slug: 'nextjs-15-tips',
    title: '10 Tips Next.js 15 yang Wajib Kamu Tahu Sebagai Fullstack Developer',
    category: 'Web Dev',
    date: '15 Mar 2026',
    readTime: '10 min',
    emoji: '⚡',
    content: `
      <p>Next.js terus berevolusi. Di versi terbarunya, banyak fitur yang mempermudah hidup kita sebagai Fullstack Developer. Berikut adalah tips esensial yang selalu saya terapkan di proyek NEXA Tech Labs.</p>

      <h2>1. Maksimalkan Server Actions</h2>
      <p>Lupakan membuat folder <code>/api</code> untuk form submission sederhana. Server Actions memungkinkan kita memanggil fungsi backend langsung dari komponen React. Ini menghemat ratusan baris <em>boilerplate code</em>.</p>
      <pre><code>// Contoh Server Action
export async function createOrder(formData: FormData) {
  'use server';
  const data = Object.fromEntries(formData);
  await db.insert(orders).values(data);
}</code></pre>

      <h2>2. Gunakan Partial Prerendering (PPR)</h2>
      <p>PPR adalah game changer. Kamu bisa menggabungkan komponen statis (cepat dimuat) dan dinamis (data real-time) di satu halaman yang sama tanpa harus mengorbankan SEO atau Time to First Byte (TTFB).</p>

      <h2>3. Optimasi Image Component</h2>
      <p>Jangan pernah memakai tag <code>&lt;img&gt;</code> biasa. Gunakan <code>&lt;Image&gt;</code> dari Next.js dan pastikan kamu menggunakan property <code>priority</code> pada gambar LCP (Largest Contentful Paint) seperti gambar hero di halaman utama untuk skor Lighthouse yang sempurna.</p>

      <h2>4. Supabase & Next.js: Perfect Match</h2>
      <p>Untuk backend, kami sangat merekomendasikan integrasi Next.js dengan Supabase (PostgreSQL). Gunakan Supabase SSR package untuk mengatur <em>authentication cookies</em> langsung dari server component. Sangat aman dan cepat!</p>
    `
  },
  {
    slug: 'icbc-2026-story',
    title: 'Cerita di Balik ICBC 2026 di Udinus Semarang',
    category: 'Story',
    date: '19 Apr 2026',
    readTime: '6 min',
    emoji: '🏆',
    content: `
      <p>Bulan ini memberikan salah satu pencapaian yang paling berkesan bagi tim NEXA: masuk sebagai <strong>Top 6 Finalist di ajang ICBC 2026</strong> yang diselenggarakan di Universitas Dian Nuswantoro (Udinus) Semarang.</p>

      <h2>Persiapan yang Singkat tapi Padat</h2>
      <p>Kami melihat pengumuman lomba ini cukup mepet. Namun, karena kami di NEXA sudah terbiasa dengan ritme kerja <em>agile</em>, kami memutuskan untuk menyusun proposal bisnis berdasarkan apa yang selama ini kami kerjakan: <strong>B2B Tech Studio untuk UMKM Indonesia</strong>.</p>
      
      <p>Kami merumuskan model bisnis, strategi akuisisi klien (seperti integrasi AI Chatbot dan POS System), serta proyeksi finansial (ARR). Kak Theo selaku panitia di sana sangat suportif selama proses administrasi.</p>

      <h2>Hari Penjurian</h2>
      <p>Menghadapi para juri yang ahli di bidang bisnis dan teknologi tentu membuat gugup. Pertanyaan mereka tajam, berkisar dari "Bagaimana kalian memvalidasi market UMKM?" hingga "Apa <em>moat</em> (keunggulan yang sulit ditiru) dari arsitektur <em>software</em> kalian?".</p>
      
      <p>Alhamdulillah, karena kami memang terjun langsung menangani klien asli (seperti Dimsum Mentai dan Kue Pie di Pasar Senen), kami bisa menjawabnya berdasarkan data nyata di lapangan, bukan sekadar teori.</p>

      <h2>Takeaway</h2>
      <p>Gagal juara 1 bukan masalah besar. Validasi ide dari praktisi industri, <em>networking</em> dengan tim hebat lain dari seluruh Indonesia, dan status Top 6 Finalist ini sudah menjadi bahan bakar yang sangat cukup untuk nge-gas NEXA Tech Labs lebih kencang lagi tahun ini!</p>
    `
  },
  {
    slug: 'mlops-untuk-pemula',
    title: 'MLOps untuk Pemula: Deploy Model AI ke Production Tanpa Ribet',
    category: 'AI Engineering',
    date: '13 Mar 2026',
    readTime: '15 min',
    emoji: '🔧',
    content: `
      <p>Banyak mahasiswa AI/Data Science yang jago bikin model dengan akurasi 99% di Jupyter Notebook, tapi bingung setengah mati saat ditanya: <em>"Terus cara aplikasinya bisa dipakai user gimana?"</em>. Selamat datang di dunia MLOps.</p>

      <h2>Apa itu MLOps?</h2>
      <p>Machine Learning Operations (MLOps) adalah proses mengambil model AI eksperimental kamu dan membuatnya stabil, bisa diakses via API, dan bisa menangani <em>traffic</em> (permintaan) yang banyak tanpa nge-<em>crash</em>.</p>

      <h2>Langkah 1: Wrap Model dengan FastAPI</h2>
      <p>Tinggalkan script <code>.ipynb</code> kamu. Export modelnya (misal ke format <code>.pt</code> untuk PyTorch atau <code>.pkl</code> untuk Scikit-Learn), lalu buat file <code>main.py</code> menggunakan FastAPI.</p>
      <pre><code>from fastapi import FastAPI
import torch

app = FastAPI()
model = torch.load('model.pt')

@app.post("/predict")
def predict_sales(data: list):
    # Proses data...
    return {"prediction": result}</code></pre>

      <h2>Langkah 2: Containerization dengan Docker</h2>
      <p>Agar model kamu bisa jalan di server mana pun (AWS, GCP, VPS murah), bungkus dia pakai Docker. Buat <code>Dockerfile</code> sederhana yang meng-install Python, library yang dibutuhkan (jangan lupa <code>requirements.txt</code>), lalu jalankan FastAPI-nya.</p>

      <h2>Langkah 3: CI/CD Pipeline</h2>
      <p>Gunakan GitHub Actions. Buat script agar setiap kali kamu nge-<em>push</em> perbaikan model ke GitHub, sistem otomatis membangun image Docker baru dan nge-<em>deploy</em> ulang server kamu. <em>Zero downtime!</em></p>

      <p>Di NEXA, pipeline ini memungkinkan kami memperbaiki model prediksi inventori UMKM klien dalam hitungan menit tanpa mengganggu operasional kasir mereka.</p>
    `
  },
  {
    slug: 'sistem-pos-architecture',
    title: 'Arsitektur Sistem POS Enterprise yang Saya Bangun untuk Klien F&B',
    category: 'Architecture',
    date: '15 Feb 2026',
    readTime: '18 min',
    emoji: '🏗️',
    comingSoon: true,
    content: `
      <p><em>Draft sedang diselesaikan oleh tim NEXA Tech Labs. Artikel ini akan membahas secara teknis bagaimana kami merancang struktur database PostgreSQL (Supabase) untuk menangani sinkronisasi transaksi secara real-time antar cabang, menangani offline-mode, dan integrasi dengan printer thermal via web.</em></p>
      <h3>Stay tuned!</h3>
    `
  },
  {
    slug: 'dark-side-of-freelancing',
    title: 'Sisi Gelap Freelancing yang Jarang Dibicarakan',
    category: 'Story',
    date: '1 Feb 2026',
    readTime: '7 min',
    emoji: '😅',
    comingSoon: true,
    content: `
      <p><em>Tulisan ini masih dalam tahap penyuntingan. Saya akan berbagi cerita jujur mengenai pengalaman pahit: menghadapi scope creep (klien minta nambah fitur terus tanpa nambah bayaran), ditipu klien yang kabur, hingga mengatasi burnout akademik di tengah deadline project.</em></p>
      <h3>Akan segera dirilis.</h3>
    `
  }
];