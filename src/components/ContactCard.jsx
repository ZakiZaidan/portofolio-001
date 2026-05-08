import { motion } from 'framer-motion'
import { useState } from 'react'
import './ContactCard.css'

function ContactCard({ position }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nabhishah@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="contact-card"
      style={{
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="contact-label">Let's Get in Touch</span>
      <motion.button
        className="contact-button"
        onClick={handleCopy}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="contact-email">ahmadzakizaidan@gmail.com</span>
        <span className={`copy-status ${copied ? 'copied' : ''}`}>
          {copied ? '✓ Copied!' : 'Click to copy'}
        </span>
      </motion.button>
    </motion.div>
  )
}

export default ContactCard
