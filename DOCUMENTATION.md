# Portfolio Website - Dokumentasi Lengkap

Website portfolio dengan infinite canvas yang dapat di-drag ke segala arah, dibangun dengan React, Framer Motion, dan Lenis.

---

## Daftar Isi

1. [Tech Stack](#tech-stack)
2. [Struktur Folder](#struktur-folder)
3. [Cara Menjalankan](#cara-menjalankan)
4. [Halaman Website](#halaman-website)
5. [Komponen Utama](#komponen-utama)
6. [Cara Edit Komponen](#cara-edit-komponen)
7. [Styling & Warna](#styling--warna)
8. [Menambah Konten Baru](#menambah-konten-baru)
9. [Tips & Troubleshooting](#tips--troubleshooting)

---

## Tech Stack

| Library | Versi | Kegunaan |
|---------|-------|----------|
| React | 18.3.1 | UI Framework |
| Vite | 5.4.0 | Build Tool |
| Framer Motion | 11.3.8 | Animasi & Drag |
| Lenis | 1.1.9 | Smooth Scrolling |
| React Router DOM | 6.26.0 | Routing |

---

## Struktur Folder

```
portofolio/
├── public/
│   └── favicon.svg          # Icon website
├── src/
│   ├── components/          # Komponen reusable
│   │   ├── Navigation.jsx   # Navbar bawah
│   │   ├── Navigation.css
│   │   ├── HeroCard.jsx     # Card "Hi, I'm Nabhi"
│   │   ├── HeroCard.css
│   │   ├── ProjectCard.jsx  # Card project/case study
│   │   ├── ProjectCard.css
│   │   ├── FloatingBadge.jsx # Badge IL, NT, AA
│   │   ├── FloatingBadge.css
│   │   ├── PhotoStack.jsx   # Stack foto photography
│   │   └── PhotoStack.css
│   ├── pages/               # Halaman website
│   │   ├── Home.jsx         # Halaman utama (canvas)
│   │   ├── Work.jsx         # Halaman Work
│   │   ├── About.jsx        # Halaman About
│   │   └── Blog.jsx         # Halaman Blog
│   ├── styles/              # Global styles
│   │   ├── index.css        # CSS variabel & base
│   │   ├── canvas.css       # CSS untuk canvas
│   │   └── pages.css        # CSS untuk halaman
│   ├── App.jsx              # Root component & router
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite config
└── DOCUMENTATION.md         # File ini
```

---

## Cara Menjalankan

### Development
```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```
Website akan berjalan di `http://localhost:3000`

### Production Build
```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

---

## Halaman Website

### 1. Home (`/`)
Halaman utama dengan infinite canvas yang dapat di-drag.

**File:** `src/pages/Home.jsx`

**Komponen yang ada:**
- HeroCard (tengah)
- ProjectCard x4 (tersebar)
- FloatingBadge x3 (IL, NT, AA)
- PhotoStack (photography)

### 2. Work (`/work`)
Halaman portfolio/case studies.

**File:** `src/pages/Work.jsx`

### 3. About (`/about`)
Halaman tentang diri dengan ilustrasi tangan pixel art.

**File:** `src/pages/About.jsx`

### 4. Blog (`/blog`)
Halaman blog dengan grid artikel.

**File:** `src/pages/Blog.jsx`

---

## Komponen Utama

### Cara Cepat Edit di Home.jsx

Semua komponen bisa diedit langsung di `src/pages/Home.jsx`. Cari komentar `// EDIT ... DI SINI`:

```jsx
// ==========================================
// EDIT PROJECTS DI SINI
// ==========================================
const projects = [...]

// ==========================================
// EDIT BADGES DI SINI
// ==========================================
const badges = [...]

// ==========================================
// EDIT ARTWORK/ALBUM ART DI SINI
// ==========================================
const artworks = [...]

// ==========================================
// EDIT QUOTE DI SINI
// ==========================================
const quoteData = {...}

// ==========================================
// EDIT CONTACT POSITION DI SINI
// ==========================================
const contactPosition = {...}
```

---

### 1. HeroCard
Card utama "Hi, I'm Nabhi" dengan foto dan CTA.

**File:** `src/components/HeroCard.jsx`

```jsx
// Untuk mengubah teks
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Nabhi</span>
</h1>

// Untuk mengubah deskripsi
<p className="hero-description">
  Design engineer working across industries...
</p>
```

**Posisi:** Diatur di `HeroCard.css`
```css
.hero-card {
  position: absolute;
  top: 50%;      /* Vertikal */
  left: 45%;     /* Horizontal */
  transform: translate(-50%, -50%);
}
```

### 2. ProjectCard
Card untuk menampilkan project/case study.

**File:** `src/components/ProjectCard.jsx`

**Props:**
| Prop | Tipe | Deskripsi |
|------|------|-----------|
| id | string | ID unik project |
| title | string | Judul project |
| type | 'phone' \| 'wide' \| 'laptop' | Tipe mockup |
| gradient | string | CSS gradient background |
| position | {x, y} | Posisi di canvas |

**Contoh menambah project di Home.jsx:**
```jsx
const projects = [
  {
    id: 'new-project',
    title: 'My New Project',
    type: 'phone',
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #ff6b6b 100%)',
    position: { x: 500, y: 200 },
    image: 'new'
  },
  // ... project lainnya
]
```

### 3. FloatingBadge
Badge bulat dengan teks (IL, NT, AA).

**File:** `src/components/FloatingBadge.jsx`

**Props:**
| Prop | Tipe | Deskripsi |
|------|------|-----------|
| id | string | ID unik |
| text | string | Teks di badge |
| color | string | Warna background |
| position | {x, y} | Posisi di canvas |

**Contoh:**
```jsx
const badges = [
  { id: 'NEW', text: 'NEW', color: '#ff6b6b', position: { x: 300, y: 150 } },
]
```

### 4. PhotoStack
Stack foto photography.

**File:** `src/components/PhotoStack.jsx`

**Mengubah foto:**
```jsx
const photos = [
  { 
    id: 1, 
    title: 'Photo Title', 
    gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    rotation: -5,        // Rotasi dalam derajat
    offset: { x: 0, y: 0 }  // Offset posisi
  },
]
```

### 5. Navigation
Navbar fixed di bawah layar.

**File:** `src/components/Navigation.jsx`

**Menambah link:**
```jsx
const navItems = [
  { icon: 'home', label: 'Home', path: '/' },
  { icon: 'work', label: 'Work', path: '/work' },
  // Tambahkan di sini
]
```

---

## Cara Edit Komponen

### Mengubah Posisi Komponen di Canvas

Semua posisi diatur dengan properti `position: { x, y }` di `Home.jsx`:

```jsx
// Di src/pages/Home.jsx

// Posisi Project Cards
const projects = [
  {
    id: 'music',
    position: { x: 680, y: 80 },  // ← Ubah x dan y
    // ...
  },
]

// Posisi Badges
const badges = [
  { id: 'IL', position: { x: 420, y: 80 } },  // ← Ubah x dan y
]
```

**Catatan posisi:**
- `x` positif = ke kanan
- `x` negatif = ke kiri
- `y` positif = ke bawah
- `y` negatif = ke atas

### Mengubah Drag Constraints

Di `Home.jsx`, ubah `dragConstraints`:

```jsx
dragConstraints={{
  top: -1200,    // Seberapa jauh bisa drag ke atas
  left: -1000,   // Seberapa jauh bisa drag ke kiri
  right: 600,    // Seberapa jauh bisa drag ke kanan
  bottom: 800    // Seberapa jauh bisa drag ke bawah
}}
```

### Mengubah Ukuran Canvas

Di `src/styles/canvas.css`:

```css
.canvas {
  width: 2400px;   /* Lebar canvas */
  height: 2000px;  /* Tinggi canvas */
  transform: translate(-35%, -35%);  /* Posisi awal */
}
```

---

## Styling & Warna

### CSS Variables

Semua warna dan styling utama ada di `src/styles/index.css`:

```css
:root {
  /* Background */
  --bg-primary: #0a0a0f;      /* Background utama */
  --bg-secondary: #12121a;    /* Background sekunder */
  --bg-card: #16161f;         /* Background card */
  
  /* Text */
  --text-primary: #ffffff;    /* Teks utama */
  --text-secondary: #b4b4c0;  /* Teks sekunder */
  --text-tertiary: #6e6e80;   /* Teks tersier */
  
  /* Accent */
  --accent-blue: #3B5BDB;     /* Warna aksen utama */
  
  /* Border */
  --border-color: rgba(255, 255, 255, 0.08);
  
  /* Font */
  --font-primary: 'Inter', sans-serif;
  --font-display: 'Playfair Display', serif;
}
```

### Mengubah Tema Warna

1. Buka `src/styles/index.css`
2. Ubah nilai CSS variables sesuai keinginan
3. Simpan dan lihat perubahan

**Contoh mengubah warna aksen:**
```css
:root {
  --accent-blue: #10b981;  /* Hijau */
  /* atau */
  --accent-blue: #f59e0b;  /* Orange */
}
```

---

## Menambah Konten Baru

### Menambah Project Baru

1. Buka `src/pages/Home.jsx`
2. Tambahkan object baru di array `projects`:

```jsx
const projects = [
  // ... project yang ada
  {
    id: 'my-new-project',
    title: 'Nama Project Baru',
    type: 'phone',  // atau 'wide' atau 'laptop'
    gradient: 'linear-gradient(180deg, #warna1 0%, #warna2 100%)',
    position: { x: 400, y: 300 },
    image: 'new'
  }
]
```

3. Jika ingin custom mockup, edit `ProjectCard.jsx`

### Menambah Halaman Baru

1. Buat file baru di `src/pages/`, contoh `NewPage.jsx`:

```jsx
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import '../styles/pages.css'

function NewPage() {
  return (
    <div className="page">
      <div className="page-container">
        <motion.div 
          className="page-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="page-title">New Page</h1>
          {/* Konten di sini */}
        </motion.div>
      </div>
      <Navigation activePage="new" />
    </div>
  )
}

export default NewPage
```

2. Tambahkan route di `src/App.jsx`:

```jsx
import NewPage from './pages/NewPage'

// Di dalam Routes
<Route path="/new-page" element={<NewPage />} />
```

3. Tambahkan link di `src/components/Navigation.jsx`:

```jsx
const navItems = [
  // ... yang ada
  { icon: 'new', label: 'New', path: '/new-page' },
]
```

### Menambah Blog Post Baru

1. Buka `src/pages/Blog.jsx`
2. Tambahkan object baru di array `posts`:

```jsx
const posts = [
  // ... posts yang ada
  {
    id: 7,
    title: 'Judul Blog Baru',
    type: 'Case Study',  // atau 'Tutorial', 'Discussion'
    date: 'Apr 1, 2026',
    gradient: 'linear-gradient(135deg, #warna1 0%, #warna2 100%)',
    icon: 'heart'  // atau 'star', 'buttons', dll
  }
]
```

---

## Tips & Troubleshooting

### Komponen Tersangkut Saat Drag

1. Perluas `dragConstraints` di `Home.jsx`
2. Pastikan posisi komponen tidak di luar canvas
3. Perbesar ukuran canvas di `canvas.css`

### Animasi Tidak Smooth

1. Kurangi nilai `stiffness` di springConfig
2. Tingkatkan nilai `damping`

```jsx
const springConfig = { 
  damping: 30,      // Lebih tinggi = lebih smooth
  stiffness: 100,   // Lebih rendah = lebih smooth
  mass: 0.5 
}
```

### Menambah Foto Asli

Untuk mengganti gradient dengan foto asli:

1. Simpan foto di `public/images/`
2. Di komponen, ganti gradient dengan image:

```jsx
// Sebelum
<div style={{ background: 'linear-gradient(...)' }} />

// Sesudah
<img src="/images/foto.jpg" alt="Deskripsi" />
```

### Build Error

```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install

# Atau jika ada cache issue
npm run dev -- --force
```

---

## Kontak & Support

Jika ada pertanyaan atau butuh bantuan:
- Email: nabhishah@gmail.com
- Website: https://nabhi.site

---

*Dokumentasi ini dibuat untuk membantu Anda mengedit website portfolio dengan mudah. Simpan file ini sebagai referensi.*
