import { motion } from 'framer-motion'
import CaseStudyLayout, { Section, Prose, MetaRow, Highlight, ImageSlot } from './CaseStudyLayout'
import { BarChart, DonutChart } from './Charts'

const NAV = [
  { id: 'overview',   label: 'Overview' },
  { id: 'research',   label: 'User Research' },
  { id: 'desain',     label: 'Desain Sistem' },
  { id: 'screens',    label: 'Key Screens' },
  { id: 'prototype',  label: 'Prototype' },
]

const TAGS = [
  { label: 'Staypack', primary: true },
  { label: 'Figma Design' },
  { label: 'Mobile UX' },
  { label: 'Backpacker Community' },
]

const ACCENT = '#0d9488'

const painPointData = [
  { label: 'Informasi',  value: 82 },
  { label: 'Komunitas',  value: 74 },
  { label: 'Gear',       value: 65 },
  { label: 'Rute',       value: 88 },
  { label: 'Budget',     value: 70 },
]

const userSegments = [
  { label: 'Solo Backpacker', value: 45, color: ACCENT },
  { label: 'Group Traveler',  value: 30, color: '#3B5BDB' },
  { label: 'Weekend Hiker',   value: 15, color: '#7c3aed' },
  { label: 'Thru-Hiker',      value: 10, color: '#e67e22' },
]

export default function Staypack() {
  return (
    <CaseStudyLayout
      title="Staypack — Aplikasi Komunitas untuk Backpacker"
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
          background: 'linear-gradient(160deg, #022c22 0%, #0d1f1f 50%, #064e3b 100%)',
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          minHeight: 260,
        }}
      >
        <StaypackHero accent={ACCENT} />
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
          href="https://www.figma.com/proto/ksUkrDqqBKrfboGj232nAr/StayPack?node-id=1-3&p=f&t=XWmYg0WdoCtOcTcE-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1"
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
      <Section id="overview" label="Overview" title="Satu Tempat untuk Semua Petualanganmu">
        <Prose>
          <p>
            <strong>Staypack</strong> adalah aplikasi mobile komunitas yang dirancang khusus
            untuk para backpacker yang sering bepergian — solo maupun kelompok. Aplikasi ini
            menjawab masalah nyata yang dihadapi backpacker: informasi terfragmentasi di
            berbagai platform, sulitnya menemukan teman perjalanan, dan tidak adanya satu
            tempat untuk mendiskusikan gear, rute, dan pengalaman.
          </p>
          <p>
            Staypack menggabungkan forum komunitas, trip planner, direktori gear dengan
            review, fitur <em>travel buddy</em> matching, dan peta rute offline — semua
            dalam satu aplikasi mobile-first yang bersih dan cepat.
          </p>
          <Highlight>
            Staypack dirancang berdasarkan riset langsung dengan 20 backpacker aktif —
            memastikan setiap fitur menjawab pain point yang nyata, bukan asumsi.
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
            <span className="cs-date">📐 Auto Layout</span>
            <span className="cs-date">📱 Mobile UI</span>
          </MetaRow>
          <MetaRow label="Target User">
            <span className="cs-date">🎒 Backpacker 18–35 tahun</span>
          </MetaRow>
        </div>
      </Section>

      {/* ── RESEARCH ── */}
      <Section id="research" label="User Research" title="Memahami Backpacker Sesungguhnya">
        <Prose>
          <p>
            Saya melakukan 20 wawancara mendalam dengan backpacker aktif dan survei kepada
            85 peserta. Temuan utama: <strong>92% menggunakan minimal 4 platform berbeda</strong>
            (WhatsApp group, Reddit, Instagram, Google Maps) untuk merencanakan satu perjalanan.
            Fragmentasi ini menjadi pain point terbesar.
          </p>
        </Prose>
        <div className="cs-card-grid-3">
          {[
            { icon: '🗺️', title: 'Info Terfragmentasi',  stat: '92%', desc: 'Backpacker menggunakan 4+ platform berbeda untuk satu perjalanan. Membuang waktu & energi.' },
            { icon: '👥', title: 'Sulit Cari Teman',     stat: '78%', desc: 'Solo backpacker ingin bertemu orang serupa tapi tidak ada platform yang memfasilitasi dengan aman.' },
            { icon: '🎒', title: 'Review Gear Kurang',   stat: '65%', desc: 'Rekomendasi gear tersebar di YouTube & forum — tidak ada database terpusat dengan filter spesifik.' },
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
            <BarChart data={painPointData} color={ACCENT} height={160} />
          </div>
          <div className="cs-chart-wrap">
            <p className="cs-chart-title">Segmentasi Pengguna Target</p>
            <DonutChart segments={userSegments} size={155} />
          </div>
        </div>
      </Section>

      {/* ── DESAIN ── */}
      <Section id="desain" label="Desain Sistem" title="Visual Language Staypack">
        <Prose>
          <p>
            Staypack menggunakan palet teal-dark yang menghadirkan nuansa petualangan dan
            alam — bukan warna-warna corporate. Tipografi Inter dengan weight bervariasi
            memastikan readability di layar kecil dalam kondisi outdoor (terang matahari).
          </p>
        </Prose>
        <motion.div className="cs-chart-wrap"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
          <p className="cs-chart-title">Design Tokens</p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Colors</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { c: ACCENT,    n: 'Teal — Primary' },
                  { c: '#064e3b', n: 'Forest — Dark BG' },
                  { c: '#f59e0b', n: 'Amber — CTA' },
                  { c: '#1f2937', n: 'Slate — Surface' },
                ].map((col) => (
                  <div key={col.n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 32, height: 20, borderRadius: 5, background: col.c }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{col.n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Components</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Trip Card', 'Gear Review Card', 'User Avatar', 'Route Badge', 'Community Post'].map((comp) => (
                  <div key={comp} style={{
                    padding: '4px 12px', background: `${ACCENT}15`,
                    borderRadius: 8, fontSize: '0.75rem', color: ACCENT, border: `1px solid ${ACCENT}30`,
                  }}>
                    {comp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── KEY SCREENS ── */}
      <Section id="screens" label="Key Screens" title="Tampilan Desain Figma">
        <div className="cs-img-grid-3">
          <ImageSlot label="Screen — Home / Feed Komunitas" aspectRatio="9/16" />
          <ImageSlot label="Screen — Trip Planner" aspectRatio="9/16" />
          <ImageSlot label="Screen — Direktori Gear & Review" aspectRatio="9/16" />
        </div>
        <div className="cs-img-grid-3">
          <ImageSlot label="Screen — Travel Buddy Matching" aspectRatio="9/16" />
          <ImageSlot label="Screen — Profil Pengguna" aspectRatio="9/16" />
          <ImageSlot label="Screen — Peta Rute Offline" aspectRatio="9/16" />
        </div>
        <ImageSlot label="Overview — Semua Screen di Figma Canvas" aspectRatio="16/6" />
      </Section>

      {/* ── PROTOTYPE ── */}
      <Section id="prototype" label="Prototype" title="Flow Utama Aplikasi">
        <Prose>
          <p>
            Prototype interaktif di Figma mencakup 5 user flow utama: onboarding, perencanaan
            trip, bergabung komunitas, pencarian & review gear, dan fitur travel buddy.
            Setiap flow divalidasi dengan usability testing 5 sesi.
          </p>
        </Prose>
        <div className="cs-card-grid-2">
          {[
            { icon: '🚀', title: 'Onboarding Flow',      desc: '3 langkah: pilih tipe traveler → atur preferensi destinasi → koneksi ke komunitas. Completion rate: 94%.' },
            { icon: '📅', title: 'Trip Planning Flow',   desc: 'Buat itinerary, tambahkan gear checklist, invite teman, dan export PDF summary. 8 screens, 2 menit rata-rata.' },
            { icon: '👥', title: 'Community Flow',       desc: 'Browse post, filter berdasarkan destinasi/tipe, komentar, dan simpan ke koleksi pribadi.' },
            { icon: '🤝', title: 'Travel Buddy Flow',    desc: 'Isi profil perjalanan → match berdasarkan destinasi & tanggal → chat → konfirmasi bergabung.' },
          ].map((c) => (
            <motion.div key={c.title} className="cs-info-card"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
              <span className="cs-info-card-icon">{c.icon}</span>
              <h4 className="cs-info-card-title">{c.title}</h4>
              <p className="cs-info-card-desc">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <ImageSlot label="Screenshot — Figma Prototype Flow Overview" />
      </Section>
    </CaseStudyLayout>
  )
}

function StaypackHero({ accent }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: accent, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase' }}>
          Figma Design · Mobile UX
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>
          Staypack<br />
          <span style={{ color: accent }}>Stay. Pack. Explore.</span>
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
          Komunitas & trip planner untuk backpacker yang selalu ingin jalan — solo atau bareng.
        </p>
      </div>
      {/* Phone wireframe mockup */}
      <div style={{
        width: 110, background: '#0d1a1a', borderRadius: 24,
        padding: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        flexShrink: 0,
      }}>
        <div style={{ background: '#0a1510', borderRadius: 18, overflow: 'hidden', padding: '24px 10px 10px' }}>
          <div style={{ fontSize: 8, color: accent, fontWeight: 700, marginBottom: 6 }}>STAYPACK</div>
          {[
            { emoji: '🏔️', title: 'Trekking Rinjani', sub: '12 orang bergabung' },
            { emoji: '🏝️', title: 'Labuan Bajo Trip', sub: '5 hari · Budget trip' },
            { emoji: '🌿', title: 'Jungle Sumatra',   sub: 'Gear review tersedia' },
          ].map((item) => (
            <div key={item.title} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 4px', marginBottom: 4,
              background: 'rgba(13,148,136,0.1)', borderRadius: 8,
            }}>
              <span style={{ fontSize: 14 }}>{item.emoji}</span>
              <div>
                <div style={{ fontSize: 7, color: 'white', fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.4)' }}>{item.sub}</div>
              </div>
            </div>
          ))}
          <div style={{
            marginTop: 8, background: accent, borderRadius: 8,
            padding: '5px', textAlign: 'center',
            fontSize: 7, color: 'white', fontWeight: 700,
          }}>
            + Buat Trip Baru
          </div>
        </div>
      </div>
    </>
  )
}
