import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

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
  'https://github.com/user-attachments/assets/ba98f167-d7f1-455f-a3a1-2fa090b0b703',
  'https://github.com/user-attachments/assets/d71e708c-956d-4574-8726-4edea9e25b97',
  'https://github.com/user-attachments/assets/e6a0458b-ecb9-4aab-b86c-1db16c862bd6',
  'https://github.com/user-attachments/assets/2679df65-c442-492d-bdc9-8f309aa2dd0b',
  'https://github.com/user-attachments/assets/a1a0ac12-e552-4919-ac70-3b658774ac6c',
  'https://github.com/user-attachments/assets/24af9e6d-d00b-4af9-85e6-cb3234cb9522',
  'https://github.com/user-attachments/assets/3c3a3d86-db2c-4bda-8d9d-61c944dd6df3',
  'https://github.com/user-attachments/assets/7bd08833-e76b-4115-97d2-7bb02e5abb3c',
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const Scholar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Auto-advance every 3s
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % screenshots.length), 3000)
    return () => clearInterval(t)
  }, [active])


  return (
    <div className="min-h-screen dark:bg-[#191919] bg-white dark:text-white text-black">
      <PageHeader />

      {/* ── Hero + Mockup side by side ── */}
      <section className="pt-32 md:pt-44 pb-0 px-6 md:px-14 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-16">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="px-3 py-1 text-xs font-medium border border-gray-200 dark:border-zinc-700 tracking-widest uppercase">
                Mobile · EdTech
              </span>
              <span className="text-gray-400 text-sm">2024</span>
              <span className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                Live
              </span>
            </div>

            <h1 className="text-[4rem] md:text-[7rem] font-bold leading-none mb-10">
              Scholar
              <span className="block text-gray-300 dark:text-zinc-600">LMS</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-10">
              A personalised learning management system connecting learners, mentors, and communities — on iOS and Android.
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                    i === active
                      ? 'scale-105 opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={src} alt={`thumb ${i + 1}`} className="h-14 w-auto object-cover object-top" />
                </button>
              ))}
            </div>

            {/* Counter */}
            <p className="text-xs font-mono text-gray-400 mt-3">
              {String(active + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            </p>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end flex-shrink-0"
          >
            <div className="relative w-[260px] md:w-[300px] mt-6">
              {/* Offset shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black dark:bg-white rounded-3xl" />
              <div className="relative border-2 border-black dark:border-white rounded-3xl overflow-hidden bg-black h-[640px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={screenshots[active]}
                    alt={`Scholar screenshot ${active + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
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
              Generic e-learning platforms treat every learner the same. Scholar doesn't.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              Scholar adapts course content, pacing, and recommendations to each student's progress and learning style. Instructors get cohort dashboards and live session tools. Learners get personalised paths, peer community boards, mentor chat, and auto-generated certificates on completion.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              Built with React Native for a true cross-platform experience, backed by a Node.js API and MongoDB. Real-time features — live sessions, chat, notifications — run on Socket.io. The community feed shown in the screenshots highlights how learners connect, share milestones, and grow together.
            </p>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div {...fadeUp} className="mb-28">
          <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">Project Details</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black dark:bg-white">
            {[
              { label: 'Platform', value: 'iOS & Android' },
              { label: 'Industry', value: 'EdTech' },
              { label: 'My Role', value: 'Full Stack Mobile Dev' },
              { label: 'Timeline', value: '6 months · 2024' },
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
            {['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT Auth', 'Push Notifications'].map(tech => (
              <span
                key={tech}
                className="px-4 py-2 border-2 border-black dark:border-white text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
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
              onClick={() => navigate('/work/artndirt')}
              className="text-3xl md:text-4xl font-bold hover:underline underline-offset-4 flex items-center gap-2 group"
            >
              Art N Dirt
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Scholar
