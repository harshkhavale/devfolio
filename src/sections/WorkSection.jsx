import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Smartphone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    id: 'easysportspass',
    type: 'redirect',
    number: '01',
    title: 'EasySportsPass',
    category: 'B2B Fitness',
    year: '2024',
    tagline: 'Connecting gym owners with corporate wellness programs at scale.',
    tags: ['React', '.NET', 'MySQL', 'Stripe'],
  },
  {
    id: 'artndirt',
    type: 'redirect',
    number: '02',
    title: 'Art N Dirt',
    category: 'E-Commerce',
    year: '2024',
    tagline: 'Art marketplace with a custom Razorpay subscription plugin.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Razorpay'],
  },
  {
    id: 'scholar',
    type: 'redirect',
    number: '03',
    title: 'Scholar',
    category: 'Mobile · EdTech',
    year: '2024',
    tagline: 'Personalised LMS connecting learners, mentors, and communities.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    id: 'taskflow',
    type: 'redirect',
    number: '04',
    title: 'TaskFlow',
    category: 'Mobile · Productivity',
    year: '2023',
    tagline: 'Kanban-style project management app built for remote teams.',
    tags: ['Flutter', 'Dart', 'Supabase', 'BLoC'],
  },
  {
    id: 'shopsnap',
    type: 'redirect',
    number: '05',
    title: 'ShopSnap',
    category: 'Mobile · Shopping',
    year: '2023',
    tagline: 'A simple and fast mobile shopping app for everyday use.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
]

// ── Redirect card ─────────────────────────────────────────────────────────────
const RedirectCard = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative group"
    >
      {/* Offset shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />

      <div
        onClick={() => navigate(`/work/${project.id}`)}
        className="relative h-full flex flex-col justify-between p-6 md:p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 cursor-pointer group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-200"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <span className="text-xs font-mono text-gray-400">{project.number}</span>
          <span className="text-xs tracking-widest uppercase text-gray-400">
            {project.category} · {project.year}
          </span>
        </div>

        {/* Title + tagline */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between gap-4 mt-8">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
      </div>
    </motion.article>
  )
}

// ── Collapsible card ──────────────────────────────────────────────────────────
const CollapsibleCard = ({ project, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative group"
    >
      {/* Offset shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />

      <div className="relative border-2 border-black dark:border-white bg-white dark:bg-zinc-900">
        {/* Header */}
        <button
          onClick={() => setOpen(v => !v)}
          className="w-full text-left p-6 md:p-8"
        >
          {/* Top row */}
          <div className="flex items-start justify-between mb-8">
            <span className="text-xs font-mono text-gray-400">{project.number}</span>
            <span className="text-xs tracking-widest uppercase text-gray-400">
              {project.category} · {project.year}
            </span>
          </div>

          {/* Title + tagline */}
          <div className="flex-1 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {project.title}
              </h3>
              <Smartphone className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pt-4 border-t border-gray-100 dark:border-zinc-800 space-y-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-px bg-gray-100 dark:bg-zinc-800">
                  {[
                    { label: 'Platform', value: project.platform },
                    { label: 'Role', value: project.role },
                    { label: 'Timeline', value: project.timeline },
                  ].map(item => (
                    <div key={item.label} className="bg-white dark:bg-zinc-900 px-4 py-3">
                      <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
const WorkSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 0.2], [60, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-12 md:mb-16"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-widest">
            FREELANCE WORK
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Clients I've
            <span className="block text-gray-400 dark:text-gray-600">Shipped For</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {projects.map((project, idx) =>
            project.type === 'redirect' ? (
              <RedirectCard key={project.id} project={project} index={idx} />
            ) : (
              <CollapsibleCard key={project.id} project={project} index={idx} />
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Interested in working together?
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-medium text-sm"
            >
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="h-[1px] w-full bg-black dark:bg-white mt-16" />
    </section>
  )
}

export default WorkSection
