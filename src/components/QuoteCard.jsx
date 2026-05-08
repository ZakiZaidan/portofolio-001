import { motion } from 'framer-motion'
import './QuoteCard.css'

function QuoteCard({ quote, author, position }) {
  return (
    <motion.div 
      className="quote-card"
      style={{
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="quote-content">
        <span className="quote-mark">"</span>
        <p className="quote-text">{quote}</p>
        <span className="quote-mark">"</span>
      </div>
      <cite className="quote-author">~{author}</cite>
    </motion.div>
  )
}

export default QuoteCard
