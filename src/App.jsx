import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home      from './pages/Home'
import Work      from './pages/Work'
import About     from './pages/About'
import Blog      from './pages/Blog'
import Recraft   from './pages/work/Recraft'
import Inspace   from './pages/work/Inspace'
import Covid     from './pages/work/Covid'
import Investasi from './pages/work/Investasi'
import Staypack  from './pages/work/Staypack'
import PawCare   from './pages/work/PawCare'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/recraft"   element={<Recraft />} />
        <Route path="/work/inspace"   element={<Inspace />} />
        <Route path="/work/covid"     element={<Covid />} />
        <Route path="/work/investasi" element={<Investasi />} />
        <Route path="/work/staypack"  element={<Staypack />} />
        <Route path="/work/pawcare"   element={<PawCare />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog"  element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
