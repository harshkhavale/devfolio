import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import ss1 from '../../assets/projects/apps/ss-1.png'
import ss2 from '../../assets/projects/apps/ss-2.png'
import ss3 from '../../assets/projects/apps/ss-3.png'
import ss4 from '../../assets/projects/apps/ss-4.png'

const PageHeader = () => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  )
  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
  }
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/')
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/80 dark:bg-[#191919]/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
      <motion.button onClick={handleBack} whileHover={{ x: -4 }} className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </motion.button>
      <p className="excalidraw text-xl font-semibold hidden md:block">Harsh Khavale</p>
      <label className="cursor-pointer">
        <input type="checkbox" checked={isDark} onChange={toggleDark} className="sr-only" />
        <div className="relative w-9 h-5 bg-gray-800 dark:bg-gray-200 rounded-full">
          <div className={`absolute top-[2px] left-[2px] h-4 w-4 rounded-full transition-all ${isDark ? 'translate-x-full bg-black' : 'bg-white'}`} />
        </div>
      </label>
    </header>
  )
}

const screenshots = [
  { src: ss1, label: 'Home' },
  { src: ss2, label: 'Product' },
  { src: ss3, label: 'Cart' },
  { src: ss4, label: 'Orders' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const ShopSnap = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % screenshots.length), 3000)
    return () => clearInterval(t)
  }, [active])

  return (
    <div className="min-h-screen dark:bg-[#191919] bg-white dark:text-white text-black">
      <PageHeader />

      {/* ── Hero + Mockup ── */}
      <section className="pt-32 md:pt-44 pb-0 px-6 md:px-14 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-16">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="px-3 py-1 text-xs font-medium border border-gray-200 dark:border-zinc-700 tracking-widest uppercase">Mobile · Shopping</span>
              <span className="text-gray-400 text-sm">2023</span>
            </div>

            <h1 className="text-[4rem] md:text-[7rem] font-bold leading-none mb-10">
              Shop
              <span className="block text-gray-300 dark:text-zinc-600">Snap</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-10">
              A simple and fast mobile shopping app for everyday use — on iOS and Android.
            </p>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((s, i) => (
                <button key={i} onClick={() => setActive(i)} className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${i === active ? 'scale-105 opacity-100' : 'opacity-40 hover:opacity-70'}`}>
                  <img src={s.src} alt={s.label} className="h-14 w-auto object-cover object-top" />
                </button>
              ))}
            </div>
            <p className="text-xs font-mono text-gray-400 mt-3">
              {String(active + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </p>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center md:justify-end flex-shrink-0">
            <div className="relative w-[260px] md:w-[300px] mt-6">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black dark:bg-white rounded-3xl" />
              <div className="relative border-2 border-black dark:border-white rounded-3xl overflow-hidden bg-black h-[640px]">
                <AnimatePresence mode="wait">
                  <motion.img key={active} src={screenshots[active].src} alt={screenshots[active].label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute inset-0 w-full h-full object-cover object-top" />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="mb-24 md:mb-36" />

      {/* ── Content ── */}
      <div className="px-6 md:px-14 max-w-7xl mx-auto">
        <div className="h-[2px] w-full bg-black dark:bg-white mb-24" />

        {/* The Idea */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16 mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 pt-1">The Idea</p>
          <div className="space-y-5">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              Shopping apps are often bloated. ShopSnap strips it back to what matters.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              ShopSnap is a clean, lightweight shopping app that lets users browse products, save favourites, and checkout quickly. Built with React Native for cross-platform support and a Node.js + MongoDB backend handling product listings, user carts, and order history. The focus was on speed and simplicity — fast load times, minimal friction at checkout.
            </p>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">Project Details</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black dark:bg-white">
            {[
              { label: 'Platform', value: 'iOS & Android' },
              { label: 'Industry', value: 'E-Commerce' },
              { label: 'My Role', value: 'Mobile Developer' },
              { label: 'Timeline', value: '2 months · 2023' },
            ].map(item => (
              <div key={item.label} className="bg-white dark:bg-[#191919] p-6 md:p-8">
                <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {['React Native', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Push Notifications'].map(tech => (
              <span key={tech} className="px-4 py-2 border-2 border-black dark:border-white text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Nav */}
        <motion.div {...fadeUp} className="py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t-2 border-black dark:border-white">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Previous Project</p>
            <button onClick={() => navigate('/work/taskflow')} className="text-3xl md:text-4xl font-bold hover:underline underline-offset-4 flex items-center gap-2 group">
              TaskFlow <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ShopSnap
