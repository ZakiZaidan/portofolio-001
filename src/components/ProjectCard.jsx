import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectCard.css'

function ProjectCard({ id, title, type, gradient, position, image, route }) {
  const navigate = useNavigate()
  const cardStyles = {
    wide: { width: 320, height: 220 },
    phone: { width: 280, height: 380 },
    laptop: { width: 320, height: 240 },
  }

  const style = cardStyles[type] || cardStyles.wide

  return (
    <motion.div 
      className={`project-card project-${type}${route ? ' project-card--clickable' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        width: style.width,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, zIndex: 50 }}
      onClick={() => route && navigate(route)}
    >
      <div 
        className="project-preview"
        style={{ 
          background: gradient,
          height: style.height 
        }}
      >
        {type === 'phone' && id === 'staypack'   && <PhoneScreenshot src="/staypack.png" />}
        {type === 'phone' && id === 'pawcare'    && <PhoneScreenshot src="/pawcare.png" />}
        {type === 'wide'  && id === 'recraft'    && <ProjectImage src="/recraft.png" />}
        {type === 'wide'  && id === 'inspace'    && <ProjectImage src="/inspace.png" />}
        {type === 'laptop' && id === 'covid'     && <ProjectImage src="/covid.png" />}
        {type === 'laptop' && id === 'investasi' && <ProjectImage src="/petapotensi.png" />}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
      </div>
    </motion.div>
  )
}

/* ── Phone mockup screenshot ── */
function PhoneScreenshot({ src }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '100%',
        width: 'auto',
        objectFit: 'contain',
        objectPosition: 'bottom center',
        filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.5))',
      }}
    />
  )
}

/* ── Real screenshot image ── */
function ProjectImage({ src }) {
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

/* ── Staypack phone mockup ── */
function StaypackMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen" style={{ background: 'linear-gradient(180deg, #0d1f1f 0%, #064e3b 100%)' }}>
          <div style={{ padding: '32px 10px 10px', height: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 7, color: '#0d9488', fontWeight: 700, marginBottom: 2 }}>STAYPACK</div>
            {[['🏔️','Trekking Rinjani','12 bergabung'],['🏝️','Labuan Bajo','Budget trip'],['🌿','Jungle Sumatra','Gear review']].map(([e,t,s]) => (
              <div key={t} style={{ display: 'flex', gap: 5, padding: 5, background: 'rgba(13,148,136,0.15)', borderRadius: 7 }}>
                <span style={{ fontSize: 12 }}>{e}</span>
                <div>
                  <div style={{ fontSize: 6, color: 'white', fontWeight: 600 }}>{t}</div>
                  <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.4)' }}>{s}</div>
                </div>
              </div>
            ))}
            <div style={{ background: '#0d9488', borderRadius: 7, padding: 5, textAlign: 'center', fontSize: 6, color: 'white', fontWeight: 700, marginTop: 'auto' }}>+ Buat Trip</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── PawCare phone mockup ── */
function PawCareMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen" style={{ background: 'linear-gradient(180deg, #2a1800 0%, #3d2200 100%)' }}>
          <div style={{ padding: '32px 10px 10px', height: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ fontSize: 7, color: '#f59e0b', fontWeight: 700 }}>🐾 PAWCARE</div>
            <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.4)' }}>Luna is doing great!</div>
            {[['🍽️','Makan siang','14:30'],['🎾','Bermain 20 min','15:00'],['😴','Istirahat','15:45']].map(([i,t,s]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 5px', background: 'rgba(245,158,11,0.1)', borderRadius: 6 }}>
                <span style={{ fontSize: 10 }}>{i}</span>
                <div>
                  <div style={{ fontSize: 6, color: 'white' }}>{t}</div>
                  <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.3)' }}>{s}</div>
                </div>
              </div>
            ))}
            <div style={{ background: '#f59e0b', borderRadius: 7, padding: 5, textAlign: 'center', fontSize: 6, color: 'white', fontWeight: 700, marginTop: 'auto' }}>📷 Foto Terbaru</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Recraft wide mockup ── */
function RecraftMockup() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 20, gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#10b981' }}>♻️ RECRAFT</span>
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>Balikpapan</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[['500+','Produk'],['2t+','Sampah'],['3t+','Carbon']].map(([n,l]) => (
          <div key={l} style={{ flex: 1, background: 'rgba(16,185,129,0.15)', borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#10b981' }}>{n}</div>
            <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)' }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {['Jual Sampah','Bio-Sub','Produk Recycle','Edukasi'].map((t) => (
          <span key={t} style={{ padding: '3px 7px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, fontSize: 7, color: '#10b981' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

/* ── Inspace wide mockup ── */
function InspaceMockup() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 20, gap: 10, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 10, top: 10, width: 80, height: 80, borderRadius: '50%', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }} />
      <div>
        <div style={{ fontSize: 9, color: '#7c3aed', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 3 }}>HMSI ITK</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>INSPACE 2026</div>
        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>Information System Path to Creativity</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {[['🎨','UI/UX Competition'],['📊','Business Plan'],['🎬','Creative Video']].map(([e,t]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', background: 'rgba(124,58,237,0.15)', borderRadius: 8 }}>
            <span style={{ fontSize: 10 }}>{e}</span>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── COVID laptop mockup ── */
function CovidMockup() {
  return (
    <div className="dashboard-mockup">
      <div className="dash-header">
        <span className="dash-logo" style={{ color: '#3B5BDB' }}>COVID-19 ID</span>
        <span className="dash-title">Dashboard</span>
      </div>
      <div className="dash-content">
        <div className="dash-chart">
          <svg viewBox="0 0 100 40">
            <path d="M0 35 L15 28 L30 32 L45 18 L60 24 L75 14 L90 20 L100 10"
              fill="none" stroke="#3B5BDB" strokeWidth="2"/>
            <path d="M0 35 L15 28 L30 32 L45 18 L60 24 L75 14 L90 20 L100 10 L100 40 L0 40 Z"
              fill="rgba(59,91,219,0.15)"/>
          </svg>
        </div>
        <div className="dash-stats">
          {[['#10b981','85%'],['#3B5BDB','92%'],['#7c3aed','70%']].map(([c,v]) => (
            <div key={c} className="stat-item">
              <div className="stat-bar" style={{ width: v, background: c }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Investasi laptop mockup ── */
function InvestasiMockup() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1c1400', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, fontWeight: 800, color: '#f59e0b' }}>PORTAL INVESTASI BPN</span>
      </div>
      <div style={{ flex: 1, background: 'rgba(245,158,11,0.05)', borderRadius: 8, border: '1px solid rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* map grid */}
        {[0,1,2,3].map(i => <div key={i} style={{ position: 'absolute', left: `${25*i}%`, top: 0, bottom: 0, width: 1, background: 'rgba(245,158,11,0.05)' }} />)}
        {[0,1,2].map(i => <div key={i} style={{ position: 'absolute', top: `${33*i}%`, left: 0, right: 0, height: 1, background: 'rgba(245,158,11,0.05)' }} />)}
        {[{x:'25%',y:'40%',c:'#f59e0b'},{x:'55%',y:'55%',c:'#10b981'},{x:'70%',y:'30%',c:'#3B5BDB'}].map((m,i) => (
          <div key={i} style={{ position: 'absolute', left: m.x, top: m.y, width: 10, height: 10, borderRadius: '50%', background: m.c, opacity: 0.8 }} />
        ))}
        <span style={{ fontSize: 9, color: 'rgba(245,158,11,0.3)', position: 'absolute' }}>🗺️ Peta Interaktif</span>
      </div>
    </div>
  )
}

/* ── Old phone mockup kept for fallback ── */
function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="music-header">
            <div className="music-badge">Blinding Lights</div>
            <div className="music-badge">Don't Start Now</div>
          </div>
          <div className="music-player">
            <div className="album-art" />
            <div className="track-info">
              <div className="track-name">Blinding Lights</div>
              <div className="track-artist">The Weeknd</div>
            </div>
            <div className="player-controls">
              <div className="control-dot" />
              <div className="control-dot active" />
            </div>
          </div>
          <div className="track-list">
            <div className="track-item">
              <div className="track-thumb" />
              <div className="track-details">
                <span>Don't Start Now</span>
                <small>Dua Lipa</small>
              </div>
            </div>
            <div className="track-item">
              <div className="track-thumb" />
              <div className="track-details">
                <span>Circles</span>
                <small>Post Malone</small>
              </div>
            </div>
            <div className="track-item">
              <div className="track-thumb" />
              <div className="track-details">
                <span>Goosebumps</span>
                <small>Travis Scott</small>
              </div>
            </div>
          </div>
          <div className="select-mode-btn">Select Mode</div>
        </div>
      </div>
    </div>
  )
}

function HUDMockup() {
  return (
    <div className="hud-mockup">
      <div className="hud-display">
        <div className="speed-section">
          <span className="speed-label">MPH</span>
          <span className="speed-value">44</span>
        </div>
        <div className="hud-center">
          <div className="road-graphic">
            <svg viewBox="0 0 100 60" fill="none" stroke="#4a9eff">
              <path d="M10 55 L50 15 L90 55" strokeWidth="2" />
              <path d="M20 55 L50 25 L80 55" strokeWidth="1" opacity="0.5" />
              <path d="M30 55 L50 35 L70 55" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
          <div className="nav-info">
            <span className="nav-icon">↗</span>
            <span className="nav-distance">0.4mi</span>
            <span className="nav-fuel">⛽</span>
          </div>
        </div>
        <div className="rpm-section">
          <div className="rpm-value">1.8 <small>x1000 rpm</small></div>
          <div className="temp-gauge">
            <span>C</span>
            <div className="temp-bar">
              <div className="temp-fill" />
            </div>
            <span>H</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      <div className="dash-header">
        <span className="dash-logo">ADVENTUM</span>
        <span className="dash-title">Dashboard</span>
      </div>
      <div className="dash-content">
        <div className="dash-chart">
          <svg viewBox="0 0 100 40">
            <path d="M0 35 L20 28 L40 32 L60 20 L80 25 L100 15" 
              fill="none" stroke="#3B5BDB" strokeWidth="2"/>
            <path d="M0 35 L20 28 L40 32 L60 20 L80 25 L100 15 L100 40 L0 40 Z" 
              fill="url(#chartGrad)" opacity="0.3"/>
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B5BDB"/>
                <stop offset="100%" stopColor="transparent"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="dash-stats">
          <div className="stat-item">
            <div className="stat-bar" style={{width: '75%'}} />
          </div>
          <div className="stat-item">
            <div className="stat-bar" style={{width: '60%'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SpatialMockup() {
  return (
    <div className="spatial-mockup">
      <div className="laptop-frame">
        <div className="laptop-screen">
          <div className="spatial-scene">
            <div className="mountain" />
            <div className="sky-gradient" />
          </div>
        </div>
        <div className="laptop-base" />
      </div>
    </div>
  )
}

export default ProjectCard
