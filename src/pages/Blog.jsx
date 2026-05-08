import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/pages.css'
import './Gallery.css'

/* ─────────────────────────────────────────────────────────────────────
   GALLERY DATA — ganti src dengan path gambar asli di folder /public
   size: 'tall' | 'wide' | 'square' | 'short'
   category: label yang muncul di pojok kartu
───────────────────────────────────────────────────────────────────── */
const ITEMS = [
  { id: 1, src: './galery/foto/plane.jpeg', title: 'Plane', category: 'Photo', size: 'tall', bg: '#1a1a1a' },
  { id: 2, src: './galery/artwork/cigarettes.jpeg', title: 'cigarettes', category: 'Artwork', size: 'short', bg: '#0f1a2e' },
  { id: 3, src: './galery/foto/beach.jpeg', title: 'Foto 02', category: 'Photo', size: 'square', bg: '#1a0f0f' },
  { id: 4, src: './galery/artwork/colorEye.jpeg', title: 'Illustration', category: 'Artwork', size: 'tall', bg: '#0f1a0f' },
  { id: 5, src: './galery/artwork/cure.jpeg', title: 'artwork 02', category: 'Artwork', size: 'wide', bg: '#1a1535' },
  { id: 6, src: './galery/foto/cat.jpeg', title: 'Foto 03', category: 'Photo', size: 'short', bg: '#2a1a00' },
  { id: 7, src: './galery/foto/park.jpeg', title: 'Foto 04', category: 'Photo', size: 'square', bg: '#1a1a2a' },
  { id: 8, src: './galery/artwork/beatles.jpeg', title: 'artwork 03', category: 'Artwork', size: 'tall', bg: '#0a1a1a' },
  { id: 9, src: './galery/foto/beach2.jpeg', title: 'Foto 05', category: 'Photo', size: 'short', bg: '#1a0a1a' },
  { id: 10, src: './galery/artwork/bottle.jpeg', title: 'Artwork 01', category: 'Artwork', size: 'wide', bg: '#1a1500' },
  { id: 11, src: './galery/foto/sand.jpeg', title: 'Foto 06', category: 'Photo', size: 'tall', bg: '#0f0f1a' },
  { id: 12, src: './galery/artwork/fire.jpeg', title: 'artwork 04', category: 'Artwork', size: 'square', bg: '#001a15' },
  { id: 13, src: './galery/foto/sigit.jpeg', title: 'Foto 07', category: 'Photo', size: 'short', bg: '#1a1000' },
  { id: 14, src: './galery/foto/tiang.jpeg', title: 'Foto 08', category: 'Photo', size: 'wide', bg: '#1a0010' },
  { id: 15, src: './galery/artwork/chair.jpeg', title: 'Artwork 02', category: 'Artwork', size: 'tall', bg: '#0d1520' },
  { id: 16, src: './galery/artwork/daisy.jpeg', title: 'artwork 05', category: 'Artwork', size: 'short', bg: '#1a1a0a' },
  { id: 17, src: './galery/foto/flag.jpeg', title: 'Foto 09', category: 'Photo', size: 'square', bg: '#0a1a0a' },
  { id: 18, src: './galery/foto/kc.jpeg', title: 'Foto 10', category: 'Photo', size: 'tall', bg: '#1a0a0a' },
  { id: 19, src: './galery/artwork/gambler.jpeg', title: 'gambler', category: 'Artwork', size: 'wide', bg: '#101025' },
  { id: 20, src: './galery/artwork/eye.jpeg', title: 'artwork 06', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 21, src: './galery/artwork/hand.jpeg', title: 'artwork 08', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 22, src: './galery/artwork/light.jpeg', title: 'artwork 09', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 23, src: './galery/artwork/mirir.jpeg', title: 'artwork 10', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 24, src: './galery/artwork/moon.jpeg', title: 'artwork 11', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 25, src: './galery/artwork/sign.jpeg', title: 'artwork 12', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 26, src: './galery/artwork/smoke.jpeg', title: 'artwork 13', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 27, src: './galery/artwork/sun.jpeg', title: 'artwork 14', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 28, src: './galery/artwork/fish.jpeg', title: 'artwork 15', category: 'Artwork', size: 'short', bg: '#0a1a15' },
  { id: 29, src: './galery/artwork/guitar.jpeg', title: 'artwork 16', category: 'Artwork', size: 'short', bg: '#0a1a15' },


]

const ALL_CATEGORIES = ['All', ...new Set(ITEMS.map((i) => i.category))]

const CATEGORY_ACCENT = {
  Photo: '#60a5fa',
  'UI Design': '#a78bfa',
  Artwork: '#34d399',
}

/* height per size variant */
const SIZE_HEIGHT = {
  tall: 340,
  wide: 200,
  square: 260,
  short: 180,
}

export default function Blog() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  const filtered = active === 'All' ? ITEMS : ITEMS.filter((i) => i.category === active)

  return (
    <div className="page gallery-page">
      <div className="page-container">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="page-title gallery-title">
            Gallery<BlinkCursor />
          </h1>
          <p className="gallery-subtitle">
            Foto, desain, dan karya visual yang saya kumpulkan —
            dari eksplorasi UI sampai momen yang ingin saya kenang.
          </p>

          {/* Filter pills */}
          <div className="gallery-filters">
            {ALL_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                className={`gallery-filter-btn${active === cat ? ' active' : ''}`}
                style={active === cat && cat !== 'All' ? {
                  background: `${CATEGORY_ACCENT[cat]}18`,
                  borderColor: `${CATEGORY_ACCENT[cat]}55`,
                  color: CATEGORY_ACCENT[cat],
                } : {}}
                onClick={() => setActive(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
                <span className="gallery-filter-count">
                  {cat === 'All' ? ITEMS.length : ITEMS.filter((i) => i.category === cat).length}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Masonry grid ── */}
        <motion.div
          className="gallery-masonry"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                idx={idx}
                onClick={() => item.src && setLightbox(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      <Navigation activePage="blog" />
      <Footer />
    </div>
  )
}

/* ── Single gallery card ─────────────────────────────────────────── */
function GalleryCard({ item, idx, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const accent = CATEGORY_ACCENT[item.category] || '#ffffff'
  const h = SIZE_HEIGHT[item.size]

  return (
    <motion.div
      ref={ref}
      className={`gallery-card gallery-card--${item.size}`}
      style={{ '--card-h': `${h}px` }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (idx % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      onClick={onClick}
    >
      {/* image / placeholder */}
      <div className="gallery-card-img" style={{ background: item.bg }}>
        {item.src ? (
          <img src={item.src} alt={item.title} />
        ) : (
          <PlaceholderSlot id={item.id} accent={accent} />
        )}

        {/* hover overlay */}
        <motion.div
          className="gallery-card-overlay"
          variants={{ hover: { opacity: 1 }, initial: { opacity: 0 } }}
          initial="initial"
        >
          {item.src && (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M12 10h-2v2H9v-2H7V9h2V7h1v2h2z" />
            </svg>
          )}
        </motion.div>
      </div>

      {/* caption */}
      <div className="gallery-card-caption">
        <span className="gallery-card-title">{item.title}</span>
        <span
          className="gallery-card-tag"
          style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
        >
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

/* ── Placeholder slot shown when src is null ─────────────────────── */
function PlaceholderSlot({ id, accent }) {
  return (
    <div className="gallery-placeholder">
      {/* subtle grid lines */}
      <svg className="gallery-placeholder-grid" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[25, 50, 75].map((v) => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="100" stroke={`${accent}12`} strokeWidth="0.5" />
            <line x1="0" y1={v} x2="100" y2={v} stroke={`${accent}12`} strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      {/* centre icon */}
      <div className="gallery-placeholder-icon" style={{ color: `${accent}40` }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>

      {/* slot number */}
      <span className="gallery-placeholder-num" style={{ color: `${accent}25` }}>
        {String(id).padStart(2, '0')}
      </span>
    </div>
  )
}

/* ── Lightbox ────────────────────────────────────────────────────── */
function Lightbox({ item, onClose }) {
  return (
    <motion.div
      className="gallery-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="gallery-lightbox-inner"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.title} />
        <div className="gallery-lightbox-footer">
          <span>{item.title}</span>
          <button className="gallery-lightbox-close" onClick={onClose}>✕</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Blinking cursor (title) ─────────────────────────────────────── */
function BlinkCursor() {
  return (
    <motion.span
      className="gallery-cursor"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
    >
      |
    </motion.span>
  )
}
