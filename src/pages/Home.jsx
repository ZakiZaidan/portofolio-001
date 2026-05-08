import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Navigation from '../components/Navigation'
import HeroCard from '../components/HeroCard'
import ProjectCard from '../components/ProjectCard'
import FloatingBadge from '../components/FloatingBadge'
import PhotoStack from '../components/PhotoStack'
import QuoteCard from '../components/QuoteCard'
import ContactCard from '../components/ContactCard'
import ArtworkCard from '../components/ArtworkCard'
import MusicCard from '../components/MusicCard'
import '../styles/canvas.css'

// ============================================================
//  PANDUAN POSISI CANVAS
//  Canvas center (= tengah layar saat load) ada di (1200, 1000)
//  Ukuran komponen:
//    HeroCard       : ~320w × 400h  → area: x:1040–1360, y:800–1200
//    phone card     : 280w × 380h
//    wide card      : 320w × 220h
//    laptop card    : 320w × 240h
//    badge          : 48w  × 48h
//    artwork small  : 80w  × 80h   (+ 28 label)
//    artwork medium : 120w × 120h  (+ 28 label)
// ============================================================

function Home() {
  const constraintsRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  // Reset posisi ke tengah saat halaman dimuat/refresh
  useEffect(() => {
    x.set(0)
    y.set(0)
  }, [])

  // ==========================================
  // EDIT PROJECTS DI SINI
  // Zona aman di luar HeroCard:
  //   kiri  → x < 960   |  kanan → x > 1440
  //   atas  → y < 720   |  bawah → y > 1280
  // ==========================================
  const projects = [
    {
      id: 'recraft',
      title: 'Recraft — Platform Daur Ulang Balikpapan',
      type: 'wide',
      gradient: 'linear-gradient(180deg, #022c22 0%, #064e3b 100%)',
      position: { x: 580, y: 680 },
      route: '/work/recraft',
    },
    {
      id: 'staypack',
      title: 'Staypack — App Komunitas Backpacker',
      type: 'phone',
      gradient: 'linear-gradient(180deg, #0d1f1f 0%, #064e3b 100%)',
      position: { x: 1460, y: 520 },
      route: '/work/staypack',
    },
    {
      id: 'inspace',
      title: 'INSPACE — Website Event Kompetisi HMSI ITK',
      type: 'wide',
      gradient: 'linear-gradient(180deg, #1a0533 0%, #2d1b69 100%)',
      position: { x: 540, y: 980 },
      route: '/work/inspace',
    },
    {
      id: 'covid',
      title: 'Dashboard COVID-19 Indonesia (Streamlit)',
      type: 'laptop',
      gradient: 'linear-gradient(180deg, #0a0a15 0%, #0a1a40 100%)',
      position: { x: 1460, y: 990 },
      route: '/work/covid',
    },
    {
      id: 'investasi',
      title: 'Portal Potensi Investasi Kota Balikpapan',
      type: 'laptop',
      gradient: 'linear-gradient(180deg, #1c1400 0%, #3d2800 100%)',
      position: { x: 560, y: 1270 },
      route: '/work/investasi',
    },
    {
      id: 'pawcare',
      title: 'PawCare — App Monitoring Penitipan Hewan',
      type: 'phone',
      gradient: 'linear-gradient(180deg, #1c1100 0%, #4a3200 100%)',
      position: { x: 1460, y: 1310 },
      route: '/work/pawcare',
    },
  ]

  // ==========================================
  // EDIT BADGES DI SINI  (48×48px)
  // ==========================================
  const badges = [
    // atas-kanan: antara hero dan music card
    {
      id: 'RN', text: 'RN', color: '#3B5BDB', position: { x: 1390, y: 540 },
      testimonial: {
        name: 'Raflie N.',
        role: 'CEO Recraft Circular Living System',
        company: 'Recraft',
        quote: "Ahmad is a great designer and a great person. He is always willing to help and always willing to learn. He is a great asset to the team."
      }
    },
    // bawah-tengah: di bawah hero
    {
      id: 'VJ', text: 'VJ', color: '#3B5BDB', position: { x: 1090, y: 1300 },
      testimonial: {
        name: 'V.J.',
        role: '❤️',
        company: '🏠',
        quote: "1.662,1 km and i long for you.",
      }
    },
    // kanan-bawah: antara music dan dashboard
    {
      id: 'AI', text: 'AI', color: '#3B5BDB', position: { x: 1820, y: 1160 },
      testimonial: {
        name: 'Ariel I.',
        role: 'Vice Chairman INSPACE 2025',
        company: 'Inspace ITK',
        quote: "Ahmad's designs consistently elevated our product. His attention to detail and user-first mindset made every sprint a win.",
      }
    },
    // kanan-tengah: skill badge UX
    { id: 'UX', text: 'UX', color: '#7c3aed', position: { x: 1820, y: 840 } ,
    testimonial: {
      name: 'Me',
      role: 'As human being',
      company: 'Me',
      quote: "I'm just a human being, but i'm trying to be the best i can be.",
     },
    },
    // kiri-tengah: skill badge UI
    { id: 'UI', text: 'UI', color: '#10b981', position: { x: 840, y: 990 } ,
    testimonial: {
      name: 'Claude',
      role: 'AI Assistant',
      company: 'Anthropic',
      quote: "I'm a great assistant, but i'm not a human being.",
     },
   }
]

  // ==========================================
  // EDIT ARTWORK / ALBUM ART DI SINI
  // size: 'small'=80px  |  'medium'=120px  |  'large'=160px
  // ==========================================
  const artworks = [
    {
      id: 'art1',
      title: 'beatles',
      image: './galery/artwork/beatles.jpeg',
      position: { x: 380, y: 870 },    // kiri-tengah, sebelah kiri HUD  →  380–500
      size: 'medium'
    },
    {
      id: 'art2',
      title: '火炎',
      image: './galery/artwork/fire.jpeg',
      position: { x: 1870, y: 710 },   // kanan-atas, sebelah kanan music  →  1870–1950
      size: 'small'
    },
    {
      id: 'art3',
      title: 'デジタルハンド',
      image: './galery/artwork/hand.jpeg',
      position: { x: 390, y: 1390 },   // kiri-bawah, sebelah kiri spatial  →  390–470
      size: 'small'
    },
    {
      id: 'art4',
      title: "恋する",
      image: 'up.png',
      position: { x: 1870, y: 1250 },  // kanan-bawah, sebelah kanan dashboard →  1870–1990
      size: 'medium'
    },
  ]

  // ==========================================
  // EDIT QUOTE DI SINI  (320w × ~130h)
  // ==========================================
  const quoteData = {
    quote: "Science is not only a discipline of mind, but also of romance and passion.",
    author: "Stephen Hawking",
    position: { x: 870, y: 520 },  // di atas hero, sedikit ke kiri  →  area 870–1190, 520–650
  }

  // ==========================================
  // EDIT CONTACT CARD DI SINI  (~240w × ~100h)
  // ==========================================
  const contactPosition = { x: 900, y: 1395 }  // bawah-tengah kiri  →  area 900–1140, 1395–1495

  // PhotoStack diatur di: src/components/PhotoStack.css  (.photo-stack top/left)

  return (
    <div className="app">
      <div className="canvas-container" ref={constraintsRef}>
        <motion.div
          className="canvas"
          drag
          dragConstraints={{
            top: -1000,
            left: -1200,
            right: 1200,
            bottom: 1000,
          }}
          dragElastic={0.05}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 30, power: 0.3 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ x: springX, y: springY }}
        >
          <div className="grid-background" />

          {/* Quote Card */}
          <QuoteCard {...quoteData} />

          {/* Floating Badges */}
          {badges.map((badge) => (
            <FloatingBadge key={badge.id} {...badge} />
          ))}

          {/* Hero Card — TENGAH CANVAS = TENGAH LAYAR */}
          <HeroCard />

          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {/* Artwork Cards */}
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}

          {/* Music Card */}
          <MusicCard position={{ x: 560, y: 1560 }} />

          {/* Contact Card */}
          <ContactCard position={contactPosition} />

          {/* Photo Stack */}
          <PhotoStack />

        </motion.div>
      </div>

      <Navigation activePage="home" />

      <motion.div
        className="drag-hint"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </svg>
        <span>Drag to explore</span>
      </motion.div>

      {/* Tombol reset ke tengah */}
      <motion.button
        className="reset-center-btn"
        onClick={() => { x.set(0); y.set(0) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Reset ke tengah"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
        Center
      </motion.button>
    </div>
  )
}

export default Home
