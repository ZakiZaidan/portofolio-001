import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/pages.css'

const PROJECTS = [
  {
    id: 'recraft',
    title: 'Recraft — Platform Daur Ulang & Pengelolaan Sampah',
    desc: 'Marketplace daur ulang, Bio-Sub Maggot, peta drop point interaktif, dan AI chatbot Reca untuk masyarakat Balikpapan.',
    type: 'web',
    accent: '#10b981',
    gradient: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
    tags: ['Full-Stack Web', 'Laravel', 'AI Chatbot'],
    live: 'recraft.id',
    route: '/work/recraft',
  },
  {
    id: 'inspace',
    title: 'INSPACE — Website Event Kompetisi Nasional HMSI ITK',
    desc: 'Website resmi event tahunan HMSI Institut Teknologi Kalimantan — menampung 3 kompetisi nasional: UI/UX, Business Plan, dan Creative Video.',
    type: 'web',
    accent: '#7c3aed',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 100%)',
    tags: ['Event Website', 'Frontend', 'HMSI ITK'],
    live: 'inspace.itk.ac.id',
    route: '/work/inspace',
  },
  {
    id: 'covid',
    title: 'Dashboard COVID-19 Indonesia',
    desc: '6 modul analisis data interaktif: geospasial, vaksinasi, kapasitas RS, dampak kebijakan — dibangun dengan Streamlit & Supabase.',
    type: 'dashboard',
    accent: '#3B5BDB',
    gradient: 'linear-gradient(135deg, #0a0a15 0%, #0a1a40 100%)',
    tags: ['Python', 'Streamlit', 'Supabase', 'Data Viz'],
    github: 'ZakiZaidan/streamlitCovid19Dashboard',
    route: '/work/covid',
  },
  {
    id: 'investasi',
    title: 'Portal Potensi Investasi Kota Balikpapan',
    desc: 'Portal investasi lengkap dengan peta interaktif Leaflet, chatbot AI Gemini, kalkulator ROI, dan panel admin dengan 2FA.',
    type: 'dashboard',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #1c1400 0%, #3d2800 100%)',
    tags: ['Laravel 12', 'React 19', 'Leaflet', 'Gemini AI'],
    github: 'ZakiZaidan/petaPotensiInvestasi',
    route: '/work/investasi',
  },
  {
    id: 'staypack',
    title: 'Staypack — App Komunitas Backpacker',
    desc: 'Desain UI/UX aplikasi mobile komunitas untuk backpacker: trip planner, gear review, travel buddy matching, dan peta rute offline.',
    type: 'mobile',
    accent: '#0d9488',
    gradient: 'linear-gradient(135deg, #0d1f1f 0%, #064e3b 100%)',
    tags: ['Figma', 'Mobile UX', 'Community App'],
    prototype: 'https://www.figma.com/proto/ksUkrDqqBKrfboGj232nAr/StayPack?node-id=1-3&p=f&t=XWmYg0WdoCtOcTcE-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1',
    route: '/work/staypack',
  },
  {
    id: 'pawcare',
    title: 'PawCare — App Monitoring Penitipan Hewan',
    desc: 'Desain UI/UX aplikasi mobile untuk monitoring real-time penitipan hewan — komunikasi owner-sitter, log aktivitas, dan laporan harian.',
    type: 'mobile',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #1c1100 0%, #4a3200 100%)',
    tags: ['Figma', 'Mobile UX', 'Pet Care'],
    prototype: 'https://www.figma.com/proto/llsczJXXh3iatkFhz9TxtY/Paw-Care_Kelompok-7?node-id=601-8818&p=f&t=OGTQVyXtiIt4wgxF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=601%3A8818&show-proto-sidebar=1',
    route: '/work/pawcare',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Work() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="page-container">
        <motion.div
          className="page-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="page-title" variants={itemVariants}>
            Work<span className="title-dot">.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{ fontSize: '1rem', color: 'var(--text-tertiary)', maxWidth: 560, marginTop: -24 }}
          >
            Proyek-proyek yang pernah saya kerjakan — dari full-stack web, data dashboard, hingga desain Figma.
          </motion.p>

          <motion.div className="projects-grid" variants={containerVariants}>
            {PROJECTS.map((p) => (
              <motion.article
                key={p.id}
                className="work-card"
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => navigate(p.route)}
              >
                {/* Card visual */}
                <div className="work-card-image" style={{ background: p.gradient }}>
                  {p.id === 'recraft'   && <WorkCardImage src="/recraft.png" />}
                  {p.id === 'inspace'   && <WorkCardImage src="/inspace.png" />}
                  {p.id === 'covid'     && <WorkCardImage src="/covid.png" />}
                  {p.id === 'investasi' && <WorkCardImage src="/petapotensi.png" />}
                  {p.id === 'staypack'  && <WorkPhoneShot src="/staypack.png" />}
                  {p.id === 'pawcare'   && <WorkPhoneShot src="/pawcare.png" />}

                  {/* Type pill */}
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    padding: '4px 10px', borderRadius: 20,
                    background: `${p.accent}22`, border: `1px solid ${p.accent}55`,
                    fontSize: 11, fontWeight: 600, color: p.accent,
                    backdropFilter: 'blur(8px)',
                  }}>
                    {p.type === 'mobile' ? '📱 Figma Design' : p.type === 'dashboard' ? '📊 Dashboard' : '🌐 Web'}
                  </div>

                  {/* Live / GitHub / Prototype badge */}
                  {p.live && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '4px 10px', borderRadius: 20,
                      background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)',
                      fontSize: 11, color: '#22c55e', fontWeight: 600,
                      backdropFilter: 'blur(8px)',
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                      Live
                    </div>
                  )}
                  {p.github && !p.live && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '4px 10px', borderRadius: 20,
                      background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                      fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 500,
                      backdropFilter: 'blur(8px)',
                    }}>
                      GitHub
                    </div>
                  )}
                  {p.prototype && (
                    <a
                      href={p.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: 'absolute', top: 14, right: 14,
                        display: 'flex', alignItems: 'center', gap: 5,
                        padding: '4px 10px', borderRadius: 20,
                        background: 'rgba(99,102,241,0.18)', border: '1px solid rgba(99,102,241,0.45)',
                        fontSize: 11, color: '#818cf8', fontWeight: 600,
                        backdropFilter: 'blur(8px)',
                        textDecoration: 'none', cursor: 'pointer',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Prototype
                    </a>
                  )}
                </div>

                {/* Card body */}
                <div style={{ padding: '18px 22px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{
                          padding: '3px 9px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 500,
                          background: `${p.accent}15`, color: p.accent,
                          border: `1px solid ${p.accent}30`,
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: p.accent, fontWeight: 600, flexShrink: 0 }}>
                      Lihat →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div className="color-palette" variants={itemVariants}>
            <div className="palette-info">
              <span className="palette-stat">6</span>
              <span className="palette-label">Proyek selesai</span>
            </div>
            <div className="palette-info">
              <span className="palette-stat">2</span>
              <span className="palette-label">Live website</span>
            </div>
            <div style={{ flex: 1 }} />
            <div className="palette-colors">
              {['#10b981','#7c3aed','#3B5BDB','#f59e0b','#0d9488'].map((c) => (
                <div key={c} className="palette-color" style={{ background: c }} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Navigation activePage="work" />
      <Footer />
    </div>
  )
}

/* ── Card preview components ── */

function WorkCardImage({ src }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
      }}
    />
  )
}

function WorkPhoneShot({ src }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '115%',
        width: 'auto',
        objectFit: 'contain',
        objectPosition: 'bottom center',
        filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.55))',
      }}
    />
  )
}

function RecraftPreview({ accent }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 16, padding: 28 }}>
      <div style={{ fontSize: 40, fontWeight: 800, color: accent, letterSpacing: '-0.02em' }}>♻️</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 6 }}>RECRAFT</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Platform Daur Ulang Balikpapan</div>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        {[['500+','Produk'],['2t+','Sampah'],['3t+','Carbon']].map(([n,l]) => (
          <div key={l} style={{ background: `${accent}20`, border: `1px solid ${accent}40`, borderRadius: 10, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: accent }}>{n}</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InspacePreview({ accent }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, padding: 28, position: 'relative', overflow: 'hidden' }}>
      {[60, 120, 200].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', width: s, height: s, borderRadius: '50%',
          border: `1px solid ${accent}20`,
          left: `${[10, 60, -10][i]}%`, top: `${[-10, 20, 50][i]}%`,
        }} />
      ))}
      <div style={{ fontSize: 30, fontWeight: 800, color: 'white', letterSpacing: '0.05em', position: 'relative' }}>INSPACE</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textAlign: 'center', maxWidth: 220, lineHeight: 1.5, position: 'relative' }}>
        Information System Path to Creativity
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '80%', position: 'relative' }}>
        {[['🎨','UI/UX Competition'],['📊','Business Plan'],['🎬','Creative Video']].map(([e,t]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: `${accent}15`, border: `1px solid ${accent}30`, borderRadius: 8 }}>
            <span style={{ fontSize: 12 }}>{e}</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CovidPreview({ accent }) {
  const bars = [55, 72, 88, 65, 90, 78, 82]
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 24, gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>COVID-19 ID</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Dashboard</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[['Kasus','78%',accent],['Sembuh','92%','#10b981'],['ICU','62%','#e67e22']].map(([l,v,c]) => (
          <div key={l} style={{ flex: 1, background: `${c}15`, borderRadius: 8, padding: '8px 6px', textAlign: 'center', border: `1px solid ${c}25` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: c }}>{v}</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 3 }}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1, height: `${h}%`,
            background: i === bars.length - 1 ? accent : `${accent}55`,
            borderRadius: '3px 3px 0 0',
          }} />
        ))}
      </div>
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
        6 modul analisis · Python · Streamlit · Supabase
      </div>
    </div>
  )
}

function InvestasiPreview({ accent }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 24, gap: 10 }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: accent }}>PORTAL INVESTASI BPN</div>
      <div style={{ flex: 1, background: `${accent}08`, borderRadius: 10, border: `1px solid ${accent}20`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* grid lines */}
        {[1,2,3].map(i => <div key={i} style={{ position: 'absolute', left: `${25*i}%`, top: 0, bottom: 0, width: 1, background: `${accent}08` }} />)}
        {[1,2].map(i => <div key={i} style={{ position: 'absolute', top: `${33*i}%`, left: 0, right: 0, height: 1, background: `${accent}08` }} />)}
        {[{x:'20%',y:'45%',c:accent},{x:'50%',y:'60%',c:'#10b981'},{x:'72%',y:'28%',c:'#3B5BDB'},{x:'35%',y:'30%',c:'#7c3aed'}].map((m,i) => (
          <div key={i} style={{ position: 'absolute', left: m.x, top: m.y, width: 10, height: 10, borderRadius: '50%', background: m.c, opacity: 0.8, boxShadow: `0 0 10px ${m.c}88` }} />
        ))}
        <span style={{ fontSize: 10, color: `${accent}50` }}>🗺️ Peta Interaktif</span>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {['Laravel 12','React 19','Leaflet','Gemini AI'].map((t) => (
          <span key={t} style={{ padding: '3px 7px', background: `${accent}15`, borderRadius: 8, fontSize: 9, color: accent, border: `1px solid ${accent}30` }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function StaypackPreview({ accent }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: 24 }}>
      <div style={{ width: 120, background: '#0d1a1a', borderRadius: 24, padding: 8, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ background: 'linear-gradient(180deg, #0d1f1f 0%, #064e3b 100%)', borderRadius: 18, overflow: 'hidden', padding: '24px 10px 10px' }}>
          <div style={{ fontSize: 8, color: accent, fontWeight: 700, marginBottom: 6 }}>STAYPACK</div>
          {[['🏔️','Rinjani Trek','12 join'],['🏝️','Labuan Bajo','Budget trip'],['🌿','Sumatra Trail','Gear list']].map(([e,t,s]) => (
            <div key={t} style={{ display: 'flex', gap: 5, padding: '4px 5px', background: `${accent}15`, borderRadius: 7, marginBottom: 4 }}>
              <span style={{ fontSize: 12 }}>{e}</span>
              <div>
                <div style={{ fontSize: 7, color: 'white', fontWeight: 600 }}>{t}</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.35)' }}>{s}</div>
              </div>
            </div>
          ))}
          <div style={{ background: accent, borderRadius: 7, padding: '5px', textAlign: 'center', fontSize: 7, color: 'white', fontWeight: 700, marginTop: 4 }}>+ Buat Trip</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 6 }}>Staypack</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, maxWidth: 120 }}>Komunitas & planner untuk backpacker</div>
      </div>
    </div>
  )
}

function PawCarePreview({ accent }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: 24 }}>
      <div style={{ width: 120, background: '#1c1100', borderRadius: 24, padding: 8, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ background: 'linear-gradient(180deg, #2a1800 0%, #3d2200 100%)', borderRadius: 18, overflow: 'hidden', padding: '22px 10px 10px' }}>
          <div style={{ fontSize: 8, color: accent, fontWeight: 700 }}>🐾 PAWCARE</div>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>Luna is doing great!</div>
          {[['🍽️','Makan','14:30'],['🎾','Bermain','15:00'],['😴','Istirahat','15:45']].map(([i,t,s]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 4px', background: `${accent}15`, borderRadius: 6, marginBottom: 3 }}>
              <span style={{ fontSize: 11 }}>{i}</span>
              <div>
                <div style={{ fontSize: 7, color: 'white' }}>{t}</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.3)' }}>{s}</div>
              </div>
            </div>
          ))}
          <div style={{ background: accent, borderRadius: 7, padding: '5px', textAlign: 'center', fontSize: 7, color: 'white', fontWeight: 700, marginTop: 4 }}>📷 Foto Terbaru</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 6 }}>PawCare</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, maxWidth: 120 }}>Monitoring penitipan hewan real-time</div>
      </div>
    </div>
  )
}
