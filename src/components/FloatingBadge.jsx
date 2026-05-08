import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingBadge.css'

function FloatingBadge({ id, text, color, position, testimonial }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="floating-badge-wrapper"
      style={{ left: position.x, top: position.y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="floating-badge"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: Math.random() * 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="badge-text">{text}</span>
      </motion.div>

      <AnimatePresence>
        {hovered && testimonial && (
          <motion.div
            className="testimonial-popup"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testimonial-header">
              <div
                className="testimonial-avatar"
                style={{ backgroundColor: color }}
              >
                {text}
              </div>
              <div className="testimonial-meta">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-role">
                  {testimonial.role}{' '}
                  <span className="testimonial-company">{testimonial.company}</span>
                </span>
              </div>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingBadge
