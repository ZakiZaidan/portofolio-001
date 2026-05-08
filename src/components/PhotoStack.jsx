import { motion } from 'framer-motion'
import './PhotoStack.css'

function PhotoStack() {
  const photos = [
    {
      id: 1,
      title: 'A Girl With Guitar',
      gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
      photo: './galery/foto/beach.jpeg',
      rotation: -5,
      offset: { x: 0, y: 0 }
    },
    {
      id: 2,
      title: 'Observatory',
      gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
      photo: './galery/foto/plane.jpeg',
      rotation: 3,
      offset: { x: 30, y: 20 }
    },
    {
      id: 3,
      title: 'Me in Night City',
      gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)',
      photo: './galery/foto/park.jpeg',
      rotation: -2,
      offset: { x: 60, y: 5 }
    },
  ]

  return (
    <motion.div
      className="photo-stack"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="stack-label">Photography</div>
      <div className="photos-container">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="stack-photo"
            style={{
              background: photo.photo ? `url(${photo.photo})` : photo.gradient,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `rotate(${photo.rotation}deg)`,
              left: photo.offset.x,
              top: photo.offset.y,
              zIndex: index,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 10,
              rotate: 0,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default PhotoStack
