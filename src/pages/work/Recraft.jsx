import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { BarChart, DonutChart } from './Charts'

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'fitur', label: 'Fitur Unggulan' },
  { id: 'dampak', label: 'Dampak' },
  { id: 'tech', label: 'Tech Stack' },
]

const TAGS = [
  { label: 'recraft.id', primary: true },
  { label: 'Full-Stack Web' },
  { label: 'Sustainability' },
  { label: 'AI Chatbot' },
]

const ACCENT = '#10b981'

const impactData = [
  { label: 'Produk', value: 85 },
  { label: 'Sampah', value: 67 },
  { label: 'Carbon', value: 100 },
  { label: 'Organik', value: 33 },
]

const layananSegments = [
  { label: 'Jual Sampah', value: 35, color: ACCENT },
  { label: 'Bio-Sub Maggot', value: 20, color: '#0d7377' },
  { label: 'Produk Recycle', value: 25, color: '#3B5BDB' },
  { label: 'Edukasi', value: 12, color: '#7c3aed' },
  { label: 'Donasi', value: 8, color: '#e67e22' },
]

const TECH = [
  { label: 'PHP / Laravel', color: '#ef4444' },
  { label: 'React', color: '#61dafb' },
  { label: 'MySQL', color: '#f59e0b' },
  { label: 'Gemini AI', color: '#4285f4' },
  { label: 'Leaflet Maps', color: ACCENT },
  { label: 'TailwindCSS', color: '#38bdf8' },
]

export default function Recraft() {
  return (
    <CaseStudyLayout
      title="Recraft — Platform Daur Ulang & Pengelolaan Sampah"
      tags={TAGS}
      navItems={NAV}
      accentColor={ACCENT}
    >
      {/* ── HERO ── */}
      <motion.div
        className="cs-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(160deg, #022c22 0%, #064e3b 60%, #065f46 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        <RecraftHero accent={ACCENT} />
      </motion.div>

      {/* ── LIVE LINK ── */}
      <motion.div
        className="cs-live-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="cs-live-dot" />
        <span className="cs-live-url">recraft.id — Platform aktif di Balikpapan</span>
        <a href="https://recraft.id" target="_blank" rel="noopener noreferrer" className="cs-live-link">
          Kunjungi →
        </a>
      </motion.div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" label="Overview" title="Sampah Jadi Bermanfaat di Recraft">
        <Prose>
          <p>
            <strong>Recraft</strong> adalah platform digital berbasis web yang berkomitmen
            mengubah cara masyarakat Balikpapan mengelola sampah — dari sekadar buang ke
            tempat sampah, menjadi ekosistem ekonomi sirkular yang nyata dan menguntungkan.
          </p>
          <p>
            Platform ini menggabungkan marketplace produk daur ulang, layanan jual sampah
            terpilah terjadwal, program Bio-Sub Maggot untuk sampah organik, hingga AI
            chatbot bernama <strong>Reca</strong> yang membantu pengguna menavigasi semua
            layanan — semuanya dalam satu platform.
          </p>
          <Highlight>
            Recraft berhasil mengumpulkan 2 ton+ sampah terpilah, menyelamatkan 3 ton+ emisi
            karbon, dan menjual 500+ produk recycle sejak diluncurkan.
          </Highlight>
        </Prose>

        <div className="cs-meta-rows">
          <MetaRow label="Role">
            {['Full-Stack Developer', 'UI/UX Design', 'AI Integration'].map((t) => (
              <span key={t} className="cs-contrib-tag">{t}</span>
            ))}
          </MetaRow>
          <MetaRow label="Status">
            <span className="cs-contrib-tag" style={{ color: ACCENT, borderColor: ACCENT }}>
              🟢 Live — recraft.id
            </span>
          </MetaRow>
          <MetaRow label="Lokasi">
            <span className="cs-date">📍 Balikpapan, Kalimantan Timur</span>
          </MetaRow>
        </div>
      </Section>

      {/* ── LAYANAN ── */}
      <Section id="layanan" label="Layanan" title="Ekosistem Pengelolaan Sampah Lengkap">
        <Prose>
          <p>
            Recraft bukan sekadar marketplace — ini adalah ekosistem lengkap yang menutup
            semua aspek siklus hidup sampah, dari pengumpulan, pengolahan, hingga penjualan
            produk jadi. Setiap layanan dirancang untuk saling mendukung.
          </p>
        </Prose>
        <div className="cs-card-grid-3">
          {[
            { icon: '♻️', title: 'Jual Sampah', desc: 'Layanan jual beli sampah anorganik terpilah (plastik, kertas, logam) dengan sistem penjemputan terjadwal dan harga transparan.' },
            { icon: '🪲', title: 'Bio-Sub Maggot', desc: 'Program terbaru: pengolahan sampah organik menggunakan larva BSF (Black Soldier Fly). Ramah lingkungan dan menghasilkan pupuk kompos berkualitas.' },
            { icon: '📍', title: 'Direktori Fasilitas', desc: 'Peta interaktif untuk menemukan bank sampah, TPS, dan drop point terdekat di Balikpapan secara real-time.' },
            { icon: '🛍️', title: 'Produk Recycle', desc: 'Marketplace produk kreatif hasil daur ulang — dari furniture hingga aksesori — yang dibuat oleh pengrajin lokal mitra Recraft.' },
            { icon: '📚', title: 'Edukasi', desc: 'Konten artikel, video, dan workshop interaktif tentang pengelolaan sampah yang benar dan gaya hidup berkelanjutan.' },
            { icon: '❤️', title: 'Donasi', desc: 'Program donasi untuk mendukung inisiatif lingkungan dan pemberdayaan komunitas pengelola sampah di Balikpapan.' },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FITUR UNGGULAN ── */}
      <Section id="fitur" label="Fitur Unggulan" title="Yang Membuat Recraft Berbeda">

        {/* Screenshots Recraft */}
        <div className="cs-img-grid-2">
          <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img
              src="/recraft/home.png"
              alt="Screenshot — Homepage Recraft"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img
              src="/recraft/produk.png"
              alt="Screenshot — Marketplace Produk Recycle"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }}
            />
          </div>
        </div>
        <div className="cs-img-grid-2">
          <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img
              src="/recraft/jualsampah.png"
              alt="Screenshot — Halaman Jual Sampah"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img
              src="/recraft/aichatbot.png"
              alt="Screenshot — Reca AI Chatbot"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }}
            />
          </div>
        </div>

        <Prose>
          <p>
            Fitur paling inovatif Recraft adalah <strong>Reca</strong> — AI Assistant
            berbasis Gemini AI yang tersedia 24/7 untuk membantu pengguna menemukan drop
            point terdekat, memahami cara memilah sampah, hingga menghitung estimasi nilai
            sampah yang akan dijual. Reca memahami konteks percakapan dan merespons dalam
            Bahasa Indonesia.
          </p>
          <p>
            Selain itu, fitur <strong>Carbon Tracker</strong> memungkinkan pengguna melihat
            berapa ton karbon yang telah mereka selamatkan melalui kontribusi di Recraft —
            gamifikasi lingkungan yang memotivasi konsistensi.
          </p>
        </Prose>
      </Section>

      {/* ── DAMPAK ── */}
      <Section id="dampak" label="Dampak" title="Angka yang Bicara">
        <motion.div className="cs-stats-grid"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          {[
            { n: '500+', desc: 'Produk recycle terjual melalui marketplace Recraft.' },
            { n: '2 ton+', desc: 'Sampah anorganik terpilah berhasil dikumpulkan dari masyarakat.' },
            { n: '3 ton+', desc: 'Emisi karbon yang berhasil diselamatkan dari pengelolaan sampah.' },
            { n: '1 ton+', desc: 'Sampah makanan/organik yang berhasil dikelola melalui Bio-Sub Maggot.' },
          ].map((s) => (
            <motion.div key={s.n} className="cs-stat-card"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-stat-number" style={{ color: ACCENT }}>{s.n}</span>
              <p className="cs-stat-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="cs-chart-row">
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Volume Dampak per Kategori (skala relatif)</p>
            <BarChart data={impactData} color={ACCENT} height={160} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Distribusi Penggunaan Layanan</p>
            <DonutChart segments={layananSegments} size={150} />
          </div>
        </div>

        <img src="/recraft/dashboard.png"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', display: 'block' }}
          alt="Screenshot — Dashboard Carbon Tracker / Statistik Dampak" />
      </Section>

      {/* ── TECH STACK ── */}
      <Section id="tech" label="Tech Stack" title="Teknologi yang Digunakan">
        <Prose>
          <p>
            Recraft dibangun dengan stack modern yang menggabungkan Laravel untuk backend
            yang robust, React untuk UI yang responsif, dan integrasi Gemini AI untuk
            menghadirkan pengalaman chatbot yang cerdas dan kontekstual.
          </p>
        </Prose>
        <div className="cs-tech-badges">
          {TECH.map((t) => (
            <motion.span
              key={t.label}
              className="cs-tech-badge"
              style={{ color: t.color, borderColor: `${t.color}44`, background: `${t.color}11` }}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            >
              {t.label}
            </motion.span>
          ))}
        </div>
        {/* <div style={{ marginTop: 24 }}>
          <ImageSlot label="Screenshot — Arsitektur Sistem / ERD Database Recraft" aspectRatio="16/6" />
        </div> */}
      </Section>
    </CaseStudyLayout>
  )
}

function RecraftHero({ accent }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          recraft.id — Live
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>
          Sampah Jadi Bermanfaat.<br />Bumi Jadi Lebih Baik.
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
          Platform daur ulang & pengelolaan sampah berkelanjutan untuk masyarakat Balikpapan.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {['2 ton+\nSampah', '3 ton+\nCarbon', '500+\nProduk'].map((stat) => {
          const [n, l] = stat.split('\n')
          return (
            <div key={l} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: 'rgba(255,255,255,0.08)', borderRadius: 12,
              padding: '16px 20px', minWidth: 80,
            }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: accent }}>{n}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
