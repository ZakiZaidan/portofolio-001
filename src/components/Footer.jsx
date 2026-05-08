import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Footer.css'

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('ahmadzakizaidan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animasi huruf Z dari pixel/dot
  const zPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.5, ease: 'easeInOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <footer className="footer" ref={ref}>
      {/* Video Background */}
      <div className="footer-video-wrapper">
        <video
          className="footer-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="/4K Planet Earth Spinning in Space  Free HD Videos - No Copyright.mp4"
            type="video/mp4"
          />
        </video>
        <div className="footer-video-overlay" />
      </div>

      {/* Animated Z Letter */}
      <div className="footer-z-container">
        <motion.svg
          className="footer-z"
          viewBox="0 0 200 200"
          fill="none"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Huruf Z sebagai stroke path */}
          <motion.path
            d="M 30 40 L 170 40 L 30 160 L 170 160"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={zPathVariants}
          />
        </motion.svg>

        {/* Pixel dots melayang di sekitar Z */}
        {/* <ZPixelDots isInView={isInView} /> */}
      </div>

      {/* Footer Content */}
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="footer-quote" variants={itemVariants}>
          <p className="footer-quote-text">
            Science is not only a discipline of mind, but also of romance and passion
          </p>
          <cite className="footer-quote-author">~Stephen Hawking</cite>
        </motion.div>

        <motion.div className="footer-contact-section" variants={itemVariants}>
          <p className="footer-contact-label">Let's Get in Touch</p>

          <div className="footer-socials">
            <motion.a
              href="https://instagram.com/zaydan.__"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/ZakiZaidan"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* GitHub */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>

          <motion.button
            className="footer-email"
            onClick={handleCopy}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>ahmadzakizaidan@gmail.com</span>
            <span className={`footer-copy-badge ${copied ? 'visible' : ''}`}>
              {copied ? '✓ Copied!' : 'Click to copy'}
            </span>
          </motion.button>
        </motion.div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <span className="footer-copy">
            © {new Date().getFullYear()} Portfolio. All rights reserved by Zaydan.
          </span>
        </motion.div>
      </motion.div>
    </footer>
  )
}

// Pixel dots melayang di sekitar huruf Z
function ZPixelDots({ isInView }) {
  const dots = [
    { x: '15%', y: '20%', delay: 0 },
    { x: '80%', y: '15%', delay: 0.3 },
    { x: '70%', y: '75%', delay: 0.6 },
    { x: '20%', y: '80%', delay: 0.2 },
    { x: '50%', y: '10%', delay: 0.8 },
    { x: '90%', y: '50%', delay: 0.4 },
    { x: '10%', y: '55%', delay: 1.0 },
    { x: '55%', y: '90%', delay: 0.5 },
    { x: '35%', y: '30%', delay: 1.2 },
    { x: '65%', y: '40%', delay: 0.7 },
    { x: '25%', y: '65%', delay: 0.9 },
    { x: '75%', y: '60%', delay: 1.1 },
  ]

  return (
    <div className="z-pixel-dots">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="z-dot"
          style={{ left: dot.x, top: dot.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView
            ? {
              opacity: [0, 1, 0.6, 1],
              scale: [0, 1, 0.8, 1],
              y: [0, -8, 0, -4, 0],
            }
            : { opacity: 0, scale: 0 }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default Footer
