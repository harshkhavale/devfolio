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
    type: 'collapsible',
    number: '04',
    title: 'TaskFlow',
    category: 'Mobile · Productivity',
    year: '2023',
    tagline: 'Kanban-style project management app built for remote teams.',
    tags: ['Flutter', 'Dart', 'Supabase', 'BLoC'],
    platform: 'iOS & Android',
    description:
      'TaskFlow gives remote teams a visual board to plan sprints, assign tasks, and track blockers in real time. Deep linking lets members jump straight to a card from Slack or email. Built with Flutter for a pixel-perfect native feel on both platforms from a single codebase.',
    role: 'Flutter Developer',
    timeline: '3 months · 2023',
  },
  {
    id: 'shopsnap',
    type: 'collapsible',
    number: '05',
    title: 'ShopSnap',
    category: 'Mobile · E-Commerce',
    year: '2023',
    tagline: 'Scan-to-buy shopping app with AR product previews.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'ARKit'],
    platform: 'iOS',
    description:
      'ShopSnap lets shoppers scan any product barcode to instantly see price comparisons, reviews, and an AR preview of how the item looks in their space. Integrates with multiple retailer APIs to surface the best deal. Reduced average checkout time by 40% in user testing.',
    role: 'Full Stack Mobile Developer',
    timeline: '5 months · 2023',
  },
]

// ── Redirect row (web clients) ──────────────────────────────────────────────
const RedirectRow = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onClick={() => navigate(`/work/${project.id}`)}
      className="group cursor-pointer border-b border-black dark:border-white/20 relative"
    >
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-start md:items-center justify-between gap-6 py-8 md:py-10 px-4 md:px-8">
        <div className="flex items-start md:items-center gap-5 md:gap-10 flex-1 min-w-0">
          <span className="text-xs font-mono text-gray-400 flex-shrink-0 pt-1 md:pt-0">
            {project.number}
          </span>
          <div className="min-w-0">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight group-hover:translate-x-1 transition-transform duration-300">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1 truncate">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-10 flex-shrink-0">
          <div className="hidden md:flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <span className="hidden md:block text-xs tracking-widest uppercase text-gray-400 whitespace-nowrap">
            {project.category} · {project.year}
          </span>
          <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </div>
    </motion.article>
  )
}

// ── Collapsible row (mobile clients) ────────────────────────────────────────
const CollapsibleRow = ({ project, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-black dark:border-white/20"
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(v => !v)}
        className="group w-full text-left relative"
      >
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-start md:items-center justify-between gap-6 py-8 md:py-10 px-4 md:px-8">
          <div className="flex items-start md:items-center gap-5 md:gap-10 flex-1 min-w-0">
            <span className="text-xs font-mono text-gray-400 flex-shrink-0 pt-1 md:pt-0">
              {project.number}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl md:text-4xl font-bold leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <Smartphone className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1 truncate">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 md:gap-10 flex-shrink-0">
            <div className="hidden md:flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            <span className="hidden md:block text-xs tracking-widest uppercase text-gray-400 whitespace-nowrap">
              {project.category} · {project.year}
            </span>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Collapsible content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 dark:border-zinc-800">
              {/* Description + meta */}
              <div className="px-4 md:px-8 pt-8 pb-8 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-16">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed md:text-lg">
                  {project.description}
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Platform', value: project.platform },
                    { label: 'Role', value: project.role },
                    { label: 'Timeline', value: project.timeline },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-baseline border-b border-gray-100 dark:border-zinc-800 pb-3">
                      <span className="text-xs tracking-widest uppercase text-gray-400">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshot strip */}
              {project.screenshots?.length > 0 && (
                <div className="px-4 md:px-8 pb-10">
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {project.screenshots.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="h-[320px] w-auto flex-shrink-0 rounded-xl border border-gray-200 dark:border-zinc-700 object-cover object-top"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
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

        <div className="border-t border-black dark:border-white/20">
          {projects.map((project, idx) =>
            project.type === 'redirect' ? (
              <RedirectRow key={project.id} project={project} index={idx} />
            ) : (
              <CollapsibleRow key={project.id} project={project} index={idx} />
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-between"
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
