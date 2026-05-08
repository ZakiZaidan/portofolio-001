import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { LineChart, BarChart, DonutChart } from './Charts'

const NAV = [
  { id: 'overview',  label: 'Overview' },
  { id: 'fitur',     label: 'Fitur Dashboard' },
  { id: 'galeri',    label: 'Galeri' },
  { id: 'tech',      label: 'Tech Stack' },
  { id: 'arsitektur', label: 'Arsitektur' },
]

const TAGS = [
  { label: 'COVID-19 Dashboard', primary: true },
  { label: 'Python / Streamlit' },
  { label: 'Supabase' },
  { label: 'Data Visualization' },
]

const ACCENT = '#3B5BDB'

const kpiData = [
  { label: 'Kasus',     value: 78 },
  { label: 'Sembuh',    value: 92 },
  { label: 'Meninggal', value: 45 },
  { label: 'Vaksin',    value: 88 },
  { label: 'ICU',       value: 62 },
]

const trendData = [
  { label: 'Jan', value: 55 },
  { label: 'Feb', value: 68 },
  { label: 'Mar', value: 82 },
  { label: 'Apr', value: 75 },
  { label: 'Mei', value: 60 },
  { label: 'Jun', value: 40 },
]

const dataSegments = [
  { label: 'Kasus Aktif',    value: 30, color: ACCENT },
  { label: 'Sembuh',         value: 45, color: '#10b981' },
  { label: 'Vaksinasi',      value: 15, color: '#7c3aed' },
  { label: 'Infrastruktur',  value: 10, color: '#e67e22' },
]

const TECH = [
  { label: 'Python 3.x',       color: '#f59e0b' },
  { label: 'Streamlit',        color: '#ff4b4b' },
  { label: 'Supabase',         color: '#10b981' },
  { label: 'PostgreSQL',       color: '#336791' },
  { label: 'Plotly Express',   color: ACCENT },
  { label: 'Pandas / NumPy',   color: '#e67e22' },
]

export default function Covid() {
  return (
    <CaseStudyLayout
      title="Dashboard Interaktif COVID-19 Indonesia"
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
          background: 'linear-gradient(160deg, #0a0a15 0%, #0a1a40 60%, #0d1f4f 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        <CovidHero accent={ACCENT} />
      </motion.div>

      {/* ── GITHUB LINK ── */}
      <motion.div
        className="cs-live-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span style={{ fontSize: 18 }}>⚡</span>
        <span className="cs-live-url">github.com/ZakiZaidan/streamlitCovid19Dashboard</span>
        <a href="https://github.com/ZakiZaidan/streamlitCovid19Dashboard"
          target="_blank" rel="noopener noreferrer" className="cs-live-link">
          GitHub →
        </a>
      </motion.div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" label="Overview"
        title="Visualisasi Data COVID-19 Indonesia Secara Interaktif">
        <Prose>
          <p>
            Dashboard interaktif ini dibangun dengan <strong>Streamlit</strong> dan
            <strong> Supabase</strong> untuk memvisualisasikan data COVID-19 Indonesia
            secara komprehensif — mulai dari tren kasus harian, sebaran geografis,
            kapasitas infrastruktur kesehatan, hingga progres vaksinasi nasional.
          </p>
          <p>
            Data disimpan di Supabase (PostgreSQL) dan diproses real-time menggunakan
            Pandas. Dashboard ini mencakup 7 tabel data tambahan (rumah sakit, vaksinasi,
            kebijakan, ekonomi, testing labs, cluster, dan mobilitas).
          </p>
          <Highlight>
            Dashboard menampilkan 6 modul analisis berbeda dalam satu antarmuka terpadu —
            dari geospasial hingga dampak kebijakan — semua dapat difilter secara interaktif.
          </Highlight>
        </Prose>

        <div className="cs-meta-rows">
          <MetaRow label="Role">
            {['Backend Dev', 'Data Engineer', 'Visualisasi'].map((t) => (
              <span key={t} className="cs-contrib-tag">{t}</span>
            ))}
          </MetaRow>
          <MetaRow label="Data Source">
            <span className="cs-date">📊 COVID-19 Indonesia Time Series</span>
          </MetaRow>
          <MetaRow label="Repository">
            <span className="cs-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              ZakiZaidan/streamlitCovid19Dashboard
            </span>
          </MetaRow>
        </div>
      </Section>

      {/* ── FITUR ── */}
      <Section id="fitur" label="Fitur Dashboard" title="6 Modul Analisis Terintegrasi">
        <div className="cs-card-grid-2">
          {[
            { icon: '📊', title: 'KPI Terpadu',             desc: 'Metrics inti COVID-19 (kasus, sembuh, meninggal), infrastruktur kesehatan (RS, ICU, lab), dan indeks vaksinasi & pemulihan ekonomi.' },
            { icon: '🗺️', title: 'Geospasial & Tren',      desc: 'Peta sebaran COVID-19 Indonesia dengan bubble map interaktif, analisis tren waktu 4 subplot, dan moving average 7 hari.' },
            { icon: '🔍', title: 'Analisis Provinsi',       desc: 'Drill-down per provinsi: tren harian & kumulatif, infrastruktur kesehatan, dan statistik detail per wilayah.' },
            { icon: '🏥', title: 'Kapasitas Kesehatan',     desc: 'Distribusi rumah sakit berdasarkan tipe, kapasitas ICU per provinsi, dan analisis kapasitas vs beban COVID-19.' },
            { icon: '💉', title: 'Analitik Vaksinasi',      desc: 'Progress vaksinasi nasional, distribusi jenis vaksin (Sinovac, AZ, Pfizer), dan grafik kumulatif dosis per provinsi.' },
            { icon: '📋', title: 'Dampak Kebijakan',        desc: 'Timeline kebijakan PPKM & karantina, analisis tingkat keketatan, dan tingkat kepatuhan per jenis kebijakan.' },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-chart-row" style={{ marginTop: 24 }}>
          <div className="cs-chart-wrap" style={{ gridColumn: '1 / -1' }}>
            <p className="cs-chart-title">Simulasi Tren Kasus Mingguan (data dummy untuk ilustrasi)</p>
            <LineChart data={trendData} color={ACCENT} height={150} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Coverage Metrik per Kategori (%)</p>
            <BarChart data={kpiData} color={ACCENT} height={160} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Distribusi Tabel Data Supabase</p>
            <DonutChart segments={dataSegments} size={150} />
          </div>
        </div>
      </Section>

      {/* ── GALERI ── */}
      <Section id="galeri" label="Galeri" title="Tampilan Dashboard">
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — KPI Terpadu / Halaman Utama Dashboard" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Peta Geospasial COVID-19 Indonesia" aspectRatio="4/3" />
        </div>
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Analisis Provinsi Detail" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Dashboard Vaksinasi Nasional" aspectRatio="4/3" />
        </div>
        <ImageSlot label="Screenshot — Timeline Dampak Kebijakan PPKM" aspectRatio="16/6" />
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
      </Section>

      {/* ── ARSITEKTUR ── */}
      <Section id="arsitektur" label="Arsitektur" title="Struktur Sistem">
        <Prose>
          <p>
            Data COVID-19 disimpan di Supabase (PostgreSQL) dalam 8 tabel utama.
            Python scripts menangani import data dan generate data dummy untuk testing.
            Streamlit merender UI interaktif secara server-side, sementara Plotly
            menghasilkan visualisasi yang kaya dan responsif.
          </p>
        </Prose>
        <ImageSlot label="Screenshot — ERD / Skema Database Supabase" aspectRatio="16/7" />
        <div className="cs-card-grid-3" style={{ marginTop: 12 }}>
          {[
            { icon: '🗄️', title: 'Supabase DB',   desc: '8 tabel data: covid series, RS, vaksin, kebijakan, ekonomi, lab, cluster, mobilitas.' },
            { icon: '🐍', title: 'Python Scripts', desc: 'generate_enhanced_dummy_data.py + import scripts untuk ETL pipeline data COVID.' },
            { icon: '📊', title: 'Streamlit UI',   desc: 'Multi-page app dengan sidebar navigasi, filter interaktif, dan Plotly charts real-time.' },
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
    </CaseStudyLayout>
  )
}

function CovidHero({ accent }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          Python · Streamlit · Supabase
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>
          COVID-19 Indonesia<br />Interactive Dashboard
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
          6 modul analisis data: geospasial, vaksinasi, kapasitas RS, dan dampak kebijakan — semuanya real-time.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { label: '🏥 Kapasitas Kesehatan', v: 72 },
          { label: '💉 Vaksinasi Nasional',  v: 88 },
          { label: '🗺️ Sebaran Provinsi',   v: 56 },
        ].map((m) => (
          <div key={m.label} style={{ minWidth: 200 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{m.label}</span>
              <span style={{ fontSize: 11, color: accent, fontWeight: 700 }}>{m.v}%</span>
            </div>
            <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: `${m.v}%`, height: '100%', background: accent, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
