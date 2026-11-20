import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Experience from './components/Experience.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'

export default function App() {
  
  const [isLogin, setIsLogin] = useState(window.location.hash === '#login')

  useEffect(() => {
    const onHash = () => {
      const login = window.location.hash === '#login'
      setIsLogin(login)
      if (login) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Scroll-reveal observer (landing page only)
  useEffect(() => {
    if (isLogin) return
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in-view'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isLogin])

  if (isLogin) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-cream">
        <Login />
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}