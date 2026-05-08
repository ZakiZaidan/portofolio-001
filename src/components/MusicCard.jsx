import { motion } from 'framer-motion'
import './MusicCard.css'

function MusicCard({ position }) {
  return (
    <motion.div
      className="music-card"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, zIndex: 50 }}
    >
      <div className="music-card-label">
        <span className="music-card-dot" />
        Now Listening
      </div>

      <div className="music-card-embed">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{ width: '100%', overflow: 'hidden', borderRadius: 12, background: 'transparent' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/id/playlist/jes-gejes/pl.u-jV890v9saR61vke?l=id"
          title="jes gejes — Apple Music"
        />
      </div>
    </motion.div>
  )
}

export default MusicCard
