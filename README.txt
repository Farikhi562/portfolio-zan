PORTFOLIO — FAUZAN ALFA (@frikhiii)
====================================

CARA BUKA
---------
1. Ekstrak folder ini.
2. Buka "index.html" langsung di browser (double click) — ini halaman intro
   ala Instagram yang otomatis lanjut ke website utama.
3. Butuh koneksi internet saat dibuka, karena font, ikon 3D (Three.js),
   dan foto placeholder dimuat dari CDN/placehold.co.

Kalau mau upload online (disarankan), tinggal upload semua isi folder ini
ke hosting statis apa saja: GitHub Pages, Netlify, Vercel, dsb — tanpa
perlu build tool apa pun, semua sudah HTML/CSS/JS polos.

STRUKTUR FILE
-------------
index.html      -> Intro: splash > profil ala IG > post > DM (pilihan
                    bercabang) > lanjut ke website utama
home.html       -> Halaman utama (hero 3D, stats, preview about & proyek)
about.html      -> Halaman tentang (bio, skill, timeline)
projects.html   -> Halaman semua proyek (bisa difilter per kategori)
contact.html    -> Halaman kontak (email, github, instagram, form)

css/style.css   -> Semua style brand utama (warna, tipografi, layout)
css/intro.css   -> Style khusus layar intro ala Instagram

js/intro.js     -> Logika animasi & chat DM bercabang di intro
js/nav.js       -> Menu mobile, transisi antar halaman, animasi scroll
js/hero3d.js    -> Bola wireframe 3D di hero (pakai Three.js)
js/projects.js  -> Filter kategori di halaman proyek
js/contact.js   -> Form kontak (kirim lewat aplikasi email, tanpa backend)

DATA YANG MASIH KOSONG (cari tag "TODO")
-----------------------------------------
Semua teks placeholder ditandai dengan label kuning-oranye kecil
bertuliskan "TODO" di HTML, supaya gampang dicari (Ctrl+F "TODO" atau
cari class="todo"). Yang masih perlu diisi:

- Bio singkat di profil intro (index.html) & bio panjang (about.html)
- Caption post di intro (index.html)
- Jumlah followers/following/likes di intro — sekarang ditandai "—"
- Tagline di hero (home.html)
- Deskripsi tiap proyek + tech stack (home.html & projects.html)
- Nama & thumbnail proyek asli — sekarang pakai placehold.co
- Angka statistik (proyek selesai, tahun pengalaman, dsb) di home.html
- Skill di about.html
- Riwayat pengalaman/pendidikan di timeline about.html
- Kalimat pembuka di contact.html

GANTI FOTO PLACEHOLDER
------------------------
Semua foto sekarang pakai layanan placehold.co (kotak abu bertuliskan
teks). Cari "placehold.co" di semua file .html, lalu ganti src-nya
dengan path foto asli, contoh:
  src="https://placehold.co/700x900/16161D/4DE8C0?text=Foto"
menjadi:
  src="assets/foto-profil.jpg"
(taruh foto asli di folder assets/ yang bisa kamu buat sendiri).

DATA YANG SUDAH DIISI
------------------------
- Email      : fauzanalfa36@gmail.com
- GitHub     : https://github.com/Farikhi562
- Instagram  : @frikhiii

Selamat pakai! 🚀
