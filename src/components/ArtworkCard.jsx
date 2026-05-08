import { motion } from 'framer-motion'
import './ArtworkCard.css'

function ArtworkCard({ title, gradient, image, position, size = 'medium' }) {
  return (
    <motion.div 
      className={`artwork-card ${size}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <div className="artwork-image">
        {image ? (
          <img src={image} alt={title || 'Artwork'} className="artwork-image-content" />
        ) : (
          <div className="artwork-image-placeholder" style={{ background: gradient }} />
        )}
      </div>
      {title && <span className="artwork-title">{title}</span>}
    </motion.div>
  )
}

export default ArtworkCard
