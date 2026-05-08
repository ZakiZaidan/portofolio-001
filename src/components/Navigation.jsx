import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation({ activePage }) {
  const location = useLocation()
  
  const navItems = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'work', label: 'Work', path: '/work' },
    { icon: 'gallery', label: 'Gallery', path: '/blog' },
    { icon: 'about', label: 'About', path: '/about' },
  ]

  const icons = {
    home: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12h3v9h6v-6h2v6h6v-9h3L12 2z"/>
      </svg>
    ),
    work: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    gallery: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
    about: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    )
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <div className="nav-items">
          {navItems.map((item) => (
            <Link to={item.path} key={item.icon}>
              <motion.button
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-icon">
                  {icons[item.icon]}
                </span>
              </motion.button>
            </Link>
          ))}
        </div>
        
        <div className="nav-divider" />
        
        <motion.a 
          href="https://drive.google.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navigation
