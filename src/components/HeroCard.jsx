import { motion } from 'framer-motion'
import { useState } from 'react'
import './HeroCard.css'

function HeroCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('ahmadzakizaidan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="hero-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="highlight">Zaydan</span>
        </motion.h1>

        <motion.div
          className="hero-photos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="photo photo-1">
            <div className="photo-inner" style={{ 
              backgroundImage: 'url(./galery/foto/beach.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </div>
          <div className="photo photo-2">
            <div className="photo-inner" style={{ 
              backgroundImage: 'url(./galery/foto/cat.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </div>
          <div className="photo photo-3">
            <div className="photo-inner" style={{ 
              backgroundImage: 'url(./galery/foto/sand.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </div>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Design engineer working across industries, screens, spaces, and realities.
        </motion.p>

        <motion.div
          className="hero-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="indicator-dot" />
        </motion.div>

        <motion.a
          href="/work"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Go</span>
          <span className="arrow">→</span>
          <span>To Case Studies</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default HeroCard
