import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './shared.css'

export default function CaseStudyLayout({ title, tags, navItems, accentColor = '#3B5BDB', children }) {
  const navigate = useNavigate()
  const [active, setActive] = useState(navItems[0]?.id ?? '')

  useEffect(() => {
    const observers = []
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-25% 0px -65% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [navItems])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="cs-root">
      <aside className="cs-sidebar">
        <motion.button
          className="cs-back"
          onClick={() => navigate(-1)}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        <h2 className="cs-sidebar-title">{title}</h2>

        <div className="cs-tags">
          {tags.map((t) => (
            <span
              key={t.label}
              className="cs-tag"
              style={t.primary
                ? { background: accentColor, color: '#fff' }
                : undefined}
            >
              {t.label}
            </span>
          ))}
        </div>

        <nav className="cs-nav">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className={`cs-nav-item ${active === id ? 'active' : ''}`}
              style={active === id ? { '--nav-accent': accentColor } : undefined}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="cs-main">{children}</main>
    </div>
  )
}

/* ── Helpers exported for page use ── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Section({ id, label, title, children }) {
  return (
    <motion.section
      id={id}
      className="cs-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.span className="cs-section-label" variants={fadeUp}>{label}</motion.span>
      {title && <motion.h2 className="cs-section-title" variants={fadeUp}>{title}</motion.h2>}
      {children}
    </motion.section>
  )
}

export function Prose({ children }) {
  return (
    <motion.div className="cs-body" variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function MetaRow({ label, children }) {
  return (
    <motion.div className="cs-meta-row" variants={fadeUp}>
      <span className="cs-meta-label">{label}</span>
      <div className="cs-meta-value">{children}</div>
    </motion.div>
  )
}

export function Highlight({ children }) {
  return <p className="cs-highlight">{children}</p>
}

/* ── Image placeholder slot — user drops real screenshots here ── */
export function ImageSlot({ label = 'Screenshot', aspectRatio = '16/9' }) {
  return (
    <motion.div
      className="cs-img-slot"
      style={{ aspectRatio }}
      variants={fadeUp}
    >
      <div className="cs-img-slot-inner">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5" opacity="0.4">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span className="cs-img-slot-label">{label}</span>
        <span className="cs-img-slot-hint">Ganti dengan: &lt;img src="..." /&gt;</span>
      </div>
    </motion.div>
  )
}
