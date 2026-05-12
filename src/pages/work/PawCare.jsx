import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { LineChart, BarChart, DonutChart } from './Charts'

const NAV = [
  { id: 'overview',  label: 'Overview' },
  { id: 'research',  label: 'User Research' },
  { id: 'fitur',     label: 'Fitur Utama' },
  { id: 'screens',   label: 'Key Screens' },
  { id: 'desain',    label: 'Design System' },
]

const TAGS = [
  { label: 'PawCare', primary: true },
  { label: 'Figma Design' },
  { label: 'Mobile UX' },
  { label: 'Pet Care App' },
]

const ACCENT = '#f59e0b'

const painData = [
  { label: 'Monitoring', value: 88 },
  { label: 'Komunikasi', value: 76 },
  { label: 'Jadwal',     value: 70 },
  { label: 'Laporan',    value: 82 },
  { label: 'Kepercayaan', value: 91 },
]

const retentionData = [
  { label: 'Mgg 1', value: 95 },
  { label: 'Mgg 2', value: 87 },
  { label: 'Mgg 3', value: 82 },
  { label: 'Mgg 4', value: 78 },
  { label: 'Mgg 5', value: 76 },
  { label: 'Mgg 6', value: 74 },
]

const userSegments = [
  { label: 'Dog Owner',  value: 48, color: ACCENT },
  { label: 'Cat Owner',  value: 35, color: '#0d7377' },
  { label: 'Multi-pet',  value: 12, color: '#7c3aed' },
  { label: 'Other Pet',  value: 5,  color: '#ef4444' },
]

export default function PawCare() {
  return (
    <CaseStudyLayout
      title="PawCare — Aplikasi Monitoring Penitipan Hewan Peliharaan"
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
          background: 'linear-gradient(160deg, #1c1100 0%, #3d2800 50%, #4a3200 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
          minHeight: 260,
        }}
      >
        <PawCareHero accent={ACCENT} />
      </motion.div>

      {/* ── FIGMA NOTE ── */}
      <motion.div
        className="cs-live-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span style={{ fontSize: 16 }}>🎨</span>
        <span className="cs-live-url">Desain UI/UX — Dibuat di Figma</span>
        <a
          href="https://www.figma.com/proto/llsczJXXh3iatkFhz9TxtY/Paw-Care_Kelompok-7?node-id=601-8818&p=f&t=OGTQVyXtiIt4wgxF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=601%3A8818&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 20,
            background: `${ACCENT}20`, border: `1px solid ${ACCENT}50`,
            color: ACCENT, fontSize: 12, fontWeight: 600,
            textDecoration: 'none', transition: 'background 0.2s',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Buka Prototype
        </a>
      </motion.div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" label="Overview" title="Peace of Mind untuk Setiap Pet Parent">
        <Prose>
          <p>
            <strong>PawCare</strong> adalah aplikasi mobile yang menghubungkan pemilik hewan
            peliharaan dengan jasa penitipan — memberikan monitoring real-time, laporan
            aktivitas harian, dan komunikasi langsung antara pemilik dan sitter. Tidak ada
            lagi rasa cemas saat menitipkan hewan kesayangan.
          </p>
          <p>
            Dirancang untuk dua persona: <strong>Pet Owner</strong> (memonitor dan berkomunikasi)
            dan <strong>Pet Sitter</strong> (mengelola jadwal, mencatat aktivitas, dan
            mengirim update). Keduanya mendapat pengalaman yang disesuaikan dengan kebutuhan
            masing-masing.
          </p>
          <Highlight>
            91% pemilik hewan merasa cemas saat menitipkan hewan karena kurangnya informasi
            real-time. PawCare hadir untuk menjawab keresahan itu.
          </Highlight>
        </Prose>

        <div className="cs-meta-rows">
          <MetaRow label="Jenis Proyek">
            {['UI/UX Design', 'Figma Prototype', 'Mobile App'].map((t) => (
              <span key={t} className="cs-contrib-tag">{t}</span>
            ))}
          </MetaRow>
          <MetaRow label="Tools">
            <span className="cs-date">🎨 Figma</span>
            <span className="cs-date">📱 Auto Layout</span>
            <span className="cs-date">🎭 Prototyping</span>
          </MetaRow>
          <MetaRow label="Target User">
            <span className="cs-date">🐾 Pet Owner & Pet Sitter</span>
          </MetaRow>
        </div>
      </Section>

      {/* ── RESEARCH ── */}
      <Section id="research" label="User Research" title="Memahami Kekhawatiran Pet Owner">
        <Prose>
          <p>
            Riset dilakukan melalui 15 wawancara dengan pet owner dan 8 wawancara dengan
            pet sitter aktif. Insight terkuat: <strong>kedua pihak mengalami masalah komunikasi</strong>
            — pemilik tidak tahu kondisi hewan, sitter kewalahan memberikan update manual.
          </p>
        </Prose>
        <div className="cs-card-grid-3">
          {[
            { icon: '😰', title: 'Kecemasan Owner',    stat: '91%', desc: 'Merasa cemas karena tidak tahu kondisi hewan secara real-time selama dititipkan.' },
            { icon: '📱', title: 'Komunikasi Manual',  stat: '84%', desc: 'Harus WA sitter berulang kali untuk tahu kondisi hewan. Sitter kewalahan dengan pertanyaan repetitif.' },
            { icon: '📋', title: 'Tidak Ada Laporan',  stat: '72%', desc: 'Tidak ada rekam jejak aktivitas hewan: kapan makan, tidur, main, atau ada masalah kesehatan.' },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <span className="cs-info-card-stat" style={{ color: ACCENT }}>{c.stat}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-chart-row">
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Intensitas Pain Point per Kategori (%)</p>
            <BarChart data={painData} color={ACCENT} height={160} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Segmentasi Pengguna Target</p>
            <DonutChart segments={userSegments} size={155} />
          </div>
        </div>
      </Section>

      {/* ── FITUR ── */}
      <Section id="fitur" label="Fitur Utama" title="Dari Monitoring Hingga Pelaporan">
        <div className="cs-card-grid-2">
          {[
            {
              icon: '📷', title: 'Foto & Video Update',
              desc: 'Sitter mengirim foto/video kondisi hewan langsung dari app. Owner menerima notifikasi real-time — bukan harus chat manual.',
            },
            {
              icon: '🍽️', title: 'Jadwal Makan & Aktivitas',
              desc: 'Sitter mencatat waktu makan, bermain, dan istirahat. Owner melihat timeline aktivitas harian hewan secara kronologis.',
            },
            {
              icon: '🏥', title: 'Health Log',
              desc: 'Pencatatan kondisi kesehatan: suhu tubuh, nafsu makan, perilaku tidak biasa. Termasuk pengingat jadwal obat jika ada.',
            },
            {
              icon: '💬', title: 'In-App Chat',
              desc: 'Komunikasi terstruktur antara owner & sitter dalam satu channel — mengurangi chaos dari WA/Telegram/phone calls.',
            },
            {
              icon: '⭐', title: 'Review & Rating',
              desc: 'Setelah masa penitipan selesai, owner memberikan rating & ulasan untuk membangun reputasi sitter yang terpercaya.',
            },
            {
              icon: '📊', title: 'Laporan Penitipan',
              desc: 'Auto-generate laporan PDF aktivitas hewan selama periode penitipan — berguna sebagai referensi untuk kunjungan berikutnya.',
            },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-chart-wrap" style={{ marginTop: 16 }}>
          <p className="cs-chart-title">Proyeksi Retensi Pengguna setelah Penitipan Pertama (%)</p>
          <LineChart data={retentionData} color={ACCENT} height={150} />
        </div>
      </Section>

      {/* ── KEY SCREENS ── */}
      <Section id="screens" label="Key Screens" title="Tampilan Desain Figma">
        <div className="cs-img-grid-3">
          <ImageSlot label="Screen — Home Owner (Live Feed)" aspectRatio="9/16" />
          <ImageSlot label="Screen — Aktivitas Hewan Hari Ini" aspectRatio="9/16" />
          <ImageSlot label="Screen — In-App Chat Owner–Sitter" aspectRatio="9/16" />
        </div>
        <div className="cs-img-grid-3">
          <ImageSlot label="Screen — Dashboard Sitter" aspectRatio="9/16" />
          <ImageSlot label="Screen — Log Aktivitas (Sitter View)" aspectRatio="9/16" />
          <ImageSlot label="Screen — Laporan Penitipan PDF Preview" aspectRatio="9/16" />
        </div>
        <ImageSlot label="Overview — Semua Screen di Figma Canvas (Owner + Sitter View)" aspectRatio="16/6" />
      </Section>

      {/* ── DESIGN SYSTEM ── */}
      <Section id="desain" label="Design System" title="Visual Language PawCare">
        <Prose>
          <p>
            PawCare menggunakan palet hangat amber-cream yang membangkitkan rasa kepercayaan,
            kehangatan, dan kepedulian — sangat berbeda dari aplikasi pet care yang biasanya
            menggunakan biru dingin. Warm color palette secara psikologis mengurangi kecemasan
            pengguna.
          </p>
        </Prose>
        <motion.div className="cs-chart-wrap"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
          <p className="cs-chart-title">Color Palette</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { c: ACCENT,    n: 'Amber — Primary' },
              { c: '#fef3c7', n: 'Cream — Background' },
              { c: '#78350f', n: 'Brown — Text' },
              { c: '#0d7377', n: 'Teal — Accent' },
              { c: '#ef4444', n: 'Red — Alert' },
              { c: '#22c55e', n: 'Green — Healthy' },
            ].map((col) => (
              <div key={col.c} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                <div style={{ width: 52, height: 36, borderRadius: 10, background: col.c }} />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>{col.n}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <ImageSlot label="Screenshot — Component Library PawCare di Figma" />
      </Section>
    </CaseStudyLayout>
  )
}

function PawCareHero({ accent }) {
  return (
    <>
      <div className="cs-hero-text" style={{ color: 'white', flex: '1 1 auto', minWidth: 0 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          Figma Design · Pet Care App
        </div>
        <h1 style={{ fontSize: 'clamp(20px, 5vw, 26px)', fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>
          PawCare 🐾<br />
          <span style={{ color: accent }}>Titip dengan Tenang.</span>
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
          Monitoring real-time penitipan hewan peliharaan — untuk pet owner yang peduli.
        </p>
      </div>
      {/* Phone mockup — disembunyikan di mobile via CSS */}
      <div className="cs-hero-phone" style={{
        width: 110, background: '#1c1100', borderRadius: 24,
        padding: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        flexShrink: 0,
      }}>
        <div style={{ background: '#2a1800', borderRadius: 18, overflow: 'hidden', padding: '22px 10px 10px' }}>
          <div style={{ fontSize: 8, color: accent, fontWeight: 700, marginBottom: 6 }}>🐾 PAWCARE</div>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Luna is doing great! 🐶</div>

          {/* activity items */}
          {[
            { time: '14:30', icon: '🍽️', text: 'Makan siang' },
            { time: '15:00', icon: '🎾', text: 'Bermain 20 min' },
            { time: '15:45', icon: '😴', text: 'Istirahat' },
          ].map((item) => (
            <div key={item.text} style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 4px', marginBottom: 3,
              background: 'rgba(245,158,11,0.1)', borderRadius: 6,
            }}>
              <span style={{ fontSize: 12 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 7, color: 'white' }}>{item.text}</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.3)' }}>{item.time}</div>
              </div>
            </div>
          ))}

          <div style={{
            marginTop: 6, background: accent, borderRadius: 8,
            padding: '5px', textAlign: 'center',
            fontSize: 7, color: 'white', fontWeight: 700,
          }}>
            📷 Lihat Foto Terbaru
          </div>
        </div>
      </div>
    </>
  )
}
