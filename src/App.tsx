import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/hero/Navbar'
import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/AboutPage'
import { SupportPage } from './pages/SupportPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPage } from './pages/PrivacyPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className='bg-cream'>
      <div className="w-full max-w-[1980px] mx-auto">
        <Navbar />
        <ScrollManager />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
