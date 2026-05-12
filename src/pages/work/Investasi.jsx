import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { BarChart, DonutChart } from './Charts'

const NAV = [
  { id: 'overview',  label: 'Overview' },
  { id: 'portal',    label: 'Portal Publik' },
  { id: 'admin',     label: 'Panel Admin' },
  { id: 'galeri',    label: 'Galeri' },
  { id: 'tech',      label: 'Tech Stack' },
]

const TAGS = [
  { label: 'Portal Investasi BPN', primary: true },
  { label: 'Laravel + React' },
  { label: 'Leaflet Maps' },
  { label: 'Gemini AI' },
]

const ACCENT = '#f59e0b'

const fiturData = [
  { label: 'Peta',      value: 92 },
  { label: 'Chatbot',   value: 78 },
  { label: 'Kalkulator', value: 65 },
  { label: 'Regulasi',  value: 55 },
  { label: 'Profil',    value: 70 },
]

const sektorSegments = [
  { label: 'Energi',        value: 30, color: ACCENT },
  { label: 'Properti',      value: 25, color: '#10b981' },
  { label: 'Manufaktur',    value: 20, color: '#3B5BDB' },
  { label: 'Pariwisata',    value: 15, color: '#7c3aed' },
  { label: 'Agrikultur',    value: 10, color: '#ef4444' },
]

const TECH = [
  { label: 'PHP 8.2 / Laravel 12', color: '#ef4444' },
  { label: 'React 19 / TypeScript', color: '#61dafb' },
  { label: 'Inertia.js',            color: ACCENT },
  { label: 'TailwindCSS 4',         color: '#38bdf8' },
  { label: 'Leaflet + MarkerCluster', color: '#10b981' },
  { label: 'Gemini AI (Chatbot)',   color: '#4285f4' },
  { label: 'MySQL 8',               color: '#336791' },
  { label: 'Framer Motion',         color: '#7c3aed' },
]

export default function Investasi() {
  return (
    <CaseStudyLayout
      title="Portal Potensi Investasi Kota Balikpapan"
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
          background: 'linear-gradient(160deg, #1c1400 0%, #3d2800 60%, #4a3000 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <InvestasiHero accent={ACCENT} />
      </motion.div>

      {/* ── GITHUB LINK ── */}
      <motion.div
        className="cs-live-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span style={{ fontSize: 18 }}>⚡</span>
        <span className="cs-live-url">github.com/ZakiZaidan/petaPotensiInvestasi</span>
        <a href="https://github.com/ZakiZaidan/petaPotensiInvestasi"
          target="_blank" rel="noopener noreferrer" className="cs-live-link">
          GitHub →
        </a>
      </motion.div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" label="Overview"
        title="Portal Investasi Balikpapan — Peta, AI, & Data Terpadu">
        <Prose>
          <p>
            Aplikasi web komprehensif berbasis <strong>Laravel + React (Inertia.js)</strong>
            yang dirancang untuk memberikan informasi lengkap tentang potensi investasi di
            Kota Balikpapan — mulai dari infrastruktur, peluang investasi, regulasi, statistik
            daerah, hingga kalkulator ROI.
          </p>
          <p>
            Sistem ini dilengkapi peta interaktif berbasis Leaflet untuk visualisasi lokasi
            investasi dengan marker clustering, serta <strong>AI chatbot berbasis Gemini</strong>
            yang membantu calon investor mendapatkan informasi spesifik tentang Balikpapan
            secara conversational.
          </p>
          <Highlight>
            Portal ini mencakup 9 modul portal publik dan 8 modul panel admin — semuanya
            dilindungi dengan autentikasi + Two-Factor Authentication (2FA).
          </Highlight>
        </Prose>

        <div className="cs-meta-rows">
          <MetaRow label="Role">
            {['Full-Stack Dev', 'UI/UX', 'AI Integration', 'Database Design'].map((t) => (
              <span key={t} className="cs-contrib-tag">{t}</span>
            ))}
          </MetaRow>
          <MetaRow label="Repository">
            <span className="cs-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              ZakiZaidan/petaPotensiInvestasi
            </span>
          </MetaRow>
        </div>
      </Section>

      {/* ── PORTAL PUBLIK ── */}
      <Section id="portal" label="Portal Publik" title="9 Modul untuk Calon Investor">
        <div className="cs-card-grid-3">
          {[
            { icon: '🗺️', title: 'Peta Interaktif',       desc: 'Visualisasi lokasi infrastruktur & peluang investasi. Marker clustering, filter kategori, info detail per lokasi.' },
            { icon: '🏗️', title: 'Infrastruktur',          desc: 'Katalog infrastruktur tersedia di Balikpapan: spesifikasi, lokasi di peta, dan galeri foto.' },
            { icon: '💼', title: 'Peluang Investasi',      desc: 'Katalog peluang per sektor dengan detail estimasi investasi, ROI, persyaratan, dan kontak penanggungjawab.' },
            { icon: '📜', title: 'Regulasi',               desc: 'Daftar peraturan & kebijakan terkait investasi, kategorisasi, dan dokumen yang dapat diunduh langsung.' },
            { icon: '📈', title: 'Kalkulator ROI',         desc: 'Perhitungan estimasi Return on Investment, analisis kelayakan, dan proyeksi keuntungan per sektor investasi.' },
            { icon: '🤖', title: 'Chatbot AI (Gemini)',    desc: 'Asisten virtual berbasis Gemini AI dengan training data khusus Balikpapan. Mendukung riwayat percakapan & feedback.' },
            { icon: '📊', title: 'Profil Daerah',          desc: 'Statistik demografis & ekonomi Balikpapan per kecamatan, visualisasi data dengan Recharts.' },
            { icon: '📋', title: 'Beranda',                desc: 'Informasi umum potensi investasi Balikpapan, statistik utama, dan data terkini.' },
            { icon: '✉️', title: 'Kontak',                 desc: 'Form kontak untuk calon investor dengan sistem pesan tersimpan di database dan notifikasi admin.' },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-chart-row" style={{ marginTop: 16 }}>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Kompleksitas Implementasi per Fitur (%)</p>
            <BarChart data={fiturData} color={ACCENT} height={160} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Sebaran Sektor Peluang Investasi</p>
            <DonutChart segments={sektorSegments} size={155} />
          </div>
        </div>
      </Section>

      {/* ── PANEL ADMIN ── */}
      <Section id="admin" label="Panel Admin" title="Sistem Manajemen Konten Lengkap">
        <Prose>
          <p>
            Panel admin dilindungi dengan autentikasi lengkap termasuk <strong>Two-Factor
            Authentication (2FA)</strong>, email verification, dan password reset. Semua
            data dapat dikelola penuh (CRUD) melalui interface yang bersih dan intuitif.
          </p>
        </Prose>
        <div className="cs-card-grid-2">
          {[
            { icon: '📊', title: 'Dashboard Admin',     desc: 'Ringkasan statistik sistem, jumlah data per kategori, dan pesan calon investor yang belum dibaca.' },
            { icon: '🤖', title: 'Manajemen Chatbot',   desc: 'Training data chatbot, analytics percakapan, riwayat feedback, import/export data, dan test chatbot langsung.' },
            { icon: '🗺️', title: 'Manajemen Lokasi',   desc: 'CRUD infrastruktur, peluang investasi, dan kecamatan — lengkap dengan pengaturan koordinat untuk peta.' },
            { icon: '🔒', title: 'Keamanan 2FA',        desc: 'Two-Factor Authentication dengan authenticator app, recovery codes, dan manajemen sesi yang aman.' },
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

      {/* ── GALERI ── */}
      <Section id="galeri" label="Galeri" title="Screenshot Aplikasi">
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Halaman Beranda / Landing Page" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Peta Interaktif Leaflet + Marker Clustering" aspectRatio="4/3" />
        </div>
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Halaman Peluang Investasi" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Chatbot AI Gemini" aspectRatio="4/3" />
        </div>
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Kalkulator ROI" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Panel Admin Dashboard" aspectRatio="4/3" />
        </div>
        <ImageSlot label="Screenshot — Panel Training Data Chatbot" aspectRatio="16/6" />
      </Section>

      {/* ── TECH ── */}
      <Section id="tech" label="Tech Stack" title="Teknologi yang Digunakan">
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
        <div style={{ marginTop: 24 }}>
          <ImageSlot label="Screenshot — ERD / Skema Database MySQL" aspectRatio="16/6" />
        </div>
      </Section>
    </CaseStudyLayout>
  )
}

function InvestasiHero({ accent }) {
  return (
    <>
      <div className="cs-hero-text" style={{ color: 'white', flex: '1 1 auto', minWidth: 0 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          Laravel · React · Leaflet · Gemini AI
        </div>
        <h1 style={{ fontSize: 'clamp(20px, 5vw, 26px)', fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>
          Portal Potensi Investasi<br />Kota Balikpapan
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
          Platform informasi investasi lengkap dengan peta interaktif, AI chatbot, dan kalkulator ROI.
        </p>
      </div>
      <div className="cs-hero-side" style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 180, flexShrink: 0 }}>
        {/* Map preview */}
        <div style={{
          background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: 12, padding: '12px 16px',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Peta Interaktif</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['🏗️ Infrastruktur', '💼 Investasi', '📍 Kecamatan'].map((l) => (
              <span key={l} style={{ fontSize: 10, color: accent, background: 'rgba(245,158,11,0.15)', padding: '2px 8px', borderRadius: 8 }}>{l}</span>
            ))}
          </div>
        </div>
        <div style={{
          background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.3)',
          borderRadius: 12, padding: '12px 16px',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>AI Chatbot (Gemini)</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
            "Berapa estimasi ROI sektor energi di Balikpapan?"
          </div>
        </div>
      </div>
    </>
  )
}
