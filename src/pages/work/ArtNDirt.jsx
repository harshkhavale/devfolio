import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import artndirtHome from '../../assets/work/artndirt-home.png'
import artndirtShop from '../../assets/work/artndirt-shop.png'
import artndirtPayment from '../../assets/work/artndirt-payment.png'

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
      <motion.button
        onClick={handleBack}
        whileHover={{ x: -4 }}
        className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
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
  { src: artndirtHome, label: 'Homepage' },
  { src: artndirtShop, label: 'Shop' },
  { src: artndirtPayment, label: 'Razorpay Checkout' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const ArtNDirt = () => {
  const navigate = useNavigate()
  const [activeShot, setActiveShot] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveShot(prev => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [activeShot])

  return (
    <div className="min-h-screen dark:bg-[#191919] bg-white dark:text-white text-black">
      <PageHeader />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6 md:px-14 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="px-3 py-1 text-xs font-medium border border-gray-200 dark:border-zinc-700 tracking-widest uppercase">
              Art E-Commerce
            </span>
            <span className="text-gray-400 text-sm">2024</span>
            <span className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              Live
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[4rem] md:text-[9rem] font-bold leading-none mb-10">
            Art N
            <span className="block text-gray-300 dark:text-zinc-600">Dirt</span>
          </h1>

          {/* Tagline + CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              A WordPress-based art marketplace for independent artists, built with a custom Razorpay subscription plugin from scratch.
            </p>
            <div className="relative inline-block flex-shrink-0">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
              <motion.a
                href="https://artndirt.com"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-medium"
              >
                Visit Live Site <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Hero Image ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mx-6 md:mx-14 mb-24 md:mb-36 relative"
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black dark:bg-white" />
        <div className="relative border-2 border-black dark:border-white overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white dark:bg-zinc-700 rounded px-3 py-1 text-xs text-gray-400 text-center max-w-xs mx-auto">
                artndirt.com
              </div>
            </div>
          </div>
          <img
            src={artndirtHome}
            alt="Art N Dirt Homepage"
            className="w-full object-cover object-top"
            style={{ maxHeight: '72vh' }}
          />
        </div>
      </motion.div>

      {/* ── Content ── */}
      <div className="px-6 md:px-14 max-w-7xl mx-auto">

        <div className="h-[2px] w-full bg-black dark:bg-white mb-24" />

        {/* The Idea */}
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-16 mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 pt-1">
            The Idea
          </p>
          <div className="space-y-5">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              Independent artists needed a way to sell original work and offer exclusive content subscriptions — without paying platform fees to middlemen.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              Art N Dirt is a WordPress-powered e-commerce site for an independent art studio. The core challenge was enabling recurring memberships — artists wanted to offer exclusive print drops and digital content on a subscription basis. WooCommerce didn't support Razorpay subscriptions out of the box, so I built a custom WordPress plugin that handles webhook verification, subscription lifecycle events (create, renew, cancel), and payment state sync with the WooCommerce order system.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              The result: artists can offer tiered memberships (monthly/yearly), ship physical prints to subscribers, and gate premium digital content — all through a single dashboard, with Indian payment rails via Razorpay.
            </p>
          </div>
        </motion.div>

        {/* Project Info Grid */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
            Project Details
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black dark:bg-white">
            {[
              { label: 'Client', value: 'Art N Dirt Studio' },
              { label: 'Industry', value: 'Art / Creative' },
              { label: 'My Role', value: 'WordPress Developer' },
              { label: 'Timeline', value: '3 months · 2024' },
            ].map(item => (
              <div key={item.label} className="bg-white dark:bg-[#191919] p-6 md:p-8">
                <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
                  {item.label}
                </p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {['WordPress', 'WooCommerce', 'PHP', 'Razorpay API', 'Custom Plugin', 'MySQL', 'REST Webhooks', 'Elementor'].map(tech => (
              <span
                key={tech}
                className="px-4 py-2 border-2 border-black dark:border-white text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="h-[2px] w-full bg-black dark:bg-white mb-24" />

        {/* Screenshots */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-8">
            Screenshots
          </p>

          {/* Single image carousel */}
          <div className="relative">
            {/* Offset shadow */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black dark:bg-white" />
            {/* Image frame */}
            <div className="relative w-full overflow-hidden border-2 border-black dark:border-white bg-black" style={{ height: 'min(55vw, 580px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <img
                    src={screenshots[activeShot].src}
                    alt={screenshots[activeShot].label}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 text-white text-sm font-medium">
                    {screenshots[activeShot].label}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Chevrons — outside overflow-hidden so they never clip or shift */}
            <button
              onClick={() => setActiveShot((activeShot - 1 + screenshots.length) % screenshots.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveShot((activeShot + 1) % screenshots.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots + counter */}
          <div className="flex items-center justify-between mt-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {screenshots[activeShot].label}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 dark:text-gray-600 font-mono">
                {String(activeShot + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveShot(idx)}
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      idx === activeShot
                        ? 'w-8 bg-black dark:bg-white'
                        : 'w-4 bg-gray-300 dark:bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Nav */}
        <motion.div
          {...fadeUp}
          className="py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t-2 border-black dark:border-white"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Previous Project</p>
            <button
              onClick={() => navigate('/work/easysportspass')}
              className="text-3xl md:text-4xl font-bold hover:underline underline-offset-4 flex items-center gap-2 group"
            >
              EasySportsPass
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
          <a
            href="https://artndirt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
          >
            <ExternalLink className="w-4 h-4" />
            artndirt.com
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default ArtNDirt
