import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { BarChart } from './Charts'

const NAV = [
  { id: 'overview',    label: 'Overview' },
  { id: 'kompetisi',   label: 'Kompetisi' },
  { id: 'desain',      label: 'Desain Website' },
  { id: 'galeri',      label: 'Galeri Halaman' },
  { id: 'tech',        label: 'Tech Stack' },
]

const TAGS = [
  { label: 'INSPACE 2026', primary: true },
  { label: 'Event Website' },
  { label: 'HMSI ITK' },
  { label: 'National Competition' },
]

const ACCENT = '#7c3aed'

const kompetisiData = [
  { label: 'UI/UX',     value: 90 },
  { label: 'BizPlan',   value: 78 },
  { label: 'CreVid',    value: 65 },
]

const TECH = [
  { label: 'HTML / CSS',    color: '#ef4444' },
  { label: 'JavaScript',    color: '#f59e0b' },
  { label: 'TailwindCSS',   color: '#38bdf8' },
  { label: 'Vite',          color: ACCENT },
  { label: 'Vercel',        color: '#ffffff' },
]

export default function Inspace() {
  return (
    <CaseStudyLayout
      title="INSPACE — Website Event Kompetisi Nasional HMSI ITK"
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
          background: 'linear-gradient(160deg, #1a0533 0%, #2d1b69 50%, #1e1b4b 100%)',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 260,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <InspaceHero accent={ACCENT} />
      </motion.div>

      {/* ── LIVE LINK ── */}
      <motion.div
        className="cs-live-banner"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="cs-live-dot" />
        <span className="cs-live-url">inspace.itk.ac.id — Dibuat bersama tim HMSI ITK</span>
        <a href="https://inspace.itk.ac.id" target="_blank" rel="noopener noreferrer" className="cs-live-link">
          Kunjungi →
        </a>
      </motion.div>

      {/* ── OVERVIEW ── */}
      <Section id="overview" label="Overview" title="Information System Path to Creativity">
        <Prose>
          <p>
            <strong>INSPACE</strong> (Information System Path to Creativity) adalah rangkaian
            kegiatan tahunan berskala nasional yang diselenggarakan oleh Himpunan Mahasiswa
            Sistem Informasi (HMSI) Institut Teknologi Kalimantan. Saya berkontribusi dalam
            tim pengembangan website resmi event ini.
          </p>
          <p>
            INSPACE 2026 mengusung tema <em>"Personal Branding sebagai Strategi Karier Berdampak
            di Era Teknologi dan Industri Kreatif"</em> — sebuah tema yang sangat relevan bagi
            mahasiswa yang sedang membangun identitas profesional di era digital.
          </p>
          <Highlight>
            Website INSPACE menjadi wajah resmi event nasional yang diikuti mahasiswa dari
            seluruh Indonesia, menampilkan informasi kompetisi, talkshow, dan sponsor secara
            terstruktur dan menarik.
          </Highlight>
        </Prose>

        <div className="cs-meta-rows">
          <MetaRow label="Penyelenggara">
            <span className="cs-date">HMSI — Institut Teknologi Kalimantan</span>
          </MetaRow>
          <MetaRow label="Kontribusi">
            {['Frontend Dev', 'UI Design', 'Tim Website'].map((t) => (
              <span key={t} className="cs-contrib-tag">{t}</span>
            ))}
          </MetaRow>
          <MetaRow label="Target">
            <span className="cs-date">Mahasiswa & SMA/SMK Nasional</span>
          </MetaRow>
        </div>
      </Section>

      {/* ── KOMPETISI ── */}
      <Section id="kompetisi" label="Kompetisi" title="3 Kompetisi Bergengsi Tingkat Nasional">
        <div className="cs-card-grid-3">
          {[
            {
              icon: '🎨', title: 'UI/UX Competition',
              date: '2 Mei – 5 Jun 2026',
              desc: 'Kompetisi desain antarmuka yang berorientasi pada kenyamanan dan kemudahan pengguna. Terbuka untuk mahasiswa aktif seluruh Indonesia.',
              color: ACCENT,
            },
            {
              icon: '📊', title: 'Business Plan Competition',
              date: '2 Mei – 4 Jun 2026',
              desc: 'Kompetisi rencana bisnis untuk mahasiswa aktif Perguruan Tinggi di seluruh Indonesia. Fokus pada inovasi dan dampak industri kreatif.',
              color: '#3B5BDB',
            },
            {
              icon: '🎬', title: 'Creative Video Competition',
              date: '2 Mei – 14 Jun 2026',
              desc: 'Kompetisi video kreatif menggabungkan kreativitas, editing, dan storytelling untuk menyampaikan pesan inspiratif melalui media visual.',
              color: '#0d7377',
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              className="cs-info-card"
              style={{ borderTop: `3px solid ${c.color}` }}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <div style={{ fontSize: '0.72rem', color: c.color, fontWeight: 600, marginBottom: 6 }}>{c.date}</div>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="cs-chart-wrap" style={{ marginTop: 16 }}>
          <p className="cs-chart-title">Estimasi Antusias Peserta per Kompetisi (%)</p>
          <BarChart data={kompetisiData} color={ACCENT} height={140} />
        </div>
      </Section>

      {/* ── DESAIN WEBSITE ── */}
      <Section id="desain" label="Desain Website" title="Filosofi Visual INSPACE">
        <Prose>
          <p>
            Desain website INSPACE menggunakan palet warna gelap dengan aksen ungu yang
            mencerminkan kreativitas, inovasi, dan semangat teknologi. Tipografi bold
            yang kuat dipilih untuk menegaskan skala dan prestise event nasional ini.
          </p>
          <p>
            Setiap section website dirancang dengan prinsip <strong>scroll storytelling</strong>
            — pengunjung dibawa secara naratif dari pengenalan event, ke kompetisi, talkshow,
            sponsor, hingga FAQ — semuanya dalam satu halaman yang mulus.
          </p>
        </Prose>
        <div className="cs-card-grid-2">
          {[
            { icon: '🌙', title: 'Dark & Cinematic',   desc: 'Background gelap dengan gradient warna ungu dan biru menyampaikan nuansa teknologi yang futuristik dan prestisius.' },
            { icon: '✨', title: 'Animated Reveal',    desc: 'Setiap section muncul dengan animasi scroll yang halus — memberikan kesan website yang hidup dan interaktif.' },
            { icon: '📱', title: 'Mobile-First',       desc: 'Fully responsive untuk memastikan mahasiswa dari seluruh Indonesia bisa mengakses dengan nyaman dari smartphone mereka.' },
            { icon: '🗺️', title: 'Clear Navigation',  desc: 'Sticky navbar dengan smooth scroll ke masing-masing section memudahkan navigasi tanpa kebingungan.' },
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
      <Section id="galeri" label="Galeri Halaman" title="Screenshot Website">
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Hero Section / Landing Page INSPACE" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Section Kompetisi" aspectRatio="4/3" />
        </div>
        <div className="cs-img-grid-2">
          <ImageSlot label="Screenshot — Section Talkshow" aspectRatio="4/3" />
          <ImageSlot label="Screenshot — Section Sponsor & FAQ" aspectRatio="4/3" />
        </div>
        <ImageSlot label="Screenshot — Tampilan Mobile / Responsive" aspectRatio="16/7" />
      </Section>

      {/* ── TECH ── */}
      <Section id="tech" label="Tech Stack" title="Dibangun Dengan">
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
    </CaseStudyLayout>
  )
}

function InspaceHero({ accent }) {
  return (
    <>
      {[
        { x: '8%', y: '20%', size: 60 },
        { x: '75%', y: '10%', size: 40 },
        { x: '85%', y: '65%', size: 80 },
      ].map((c, i) => (
        <div key={i} style={{
          position: 'absolute', left: c.x, top: c.y,
          width: c.size, height: c.size, borderRadius: '50%',
          background: `${accent}15`, border: `1px solid ${accent}30`,
        }} />
      ))}
      <div className="cs-hero-text" style={{ position: 'relative', zIndex: 2, flex: '1 1 auto', minWidth: 0 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          HMSI Institut Teknologi Kalimantan
        </div>
        <h1 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 800, lineHeight: 1.25, marginBottom: 12, color: 'white' }}>
          INSPACE 2026
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 300 }}>
          Information System Path to Creativity — Event kompetisi nasional tahunan HMSI ITK.
        </p>
      </div>
      <div className="cs-hero-side" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
        {['UI/UX Competition', 'Business Plan', 'Creative Video'].map((comp) => (
          <div key={comp} style={{
            padding: '8px 16px', borderRadius: 10,
            background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)',
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
          }}>
            {comp}
          </div>
        ))}
      </div>
    </>
  )
}
