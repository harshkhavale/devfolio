import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    id: 'easysportspass',
    number: '01',
    title: 'EasySportsPass',
    category: 'B2B Fitness',
    year: '2024',
    tagline: 'Connecting gym owners with corporate wellness programs at scale.',
    tags: ['React', '.NET', 'MySQL', 'Stripe'],
  },
  {
    id: 'artndirt',
    number: '02',
    title: 'Art N Dirt',
    category: 'E-Commerce',
    year: '2024',
    tagline: 'Art marketplace with a custom Razorpay subscription plugin.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Razorpay'],
  },
]

const ProjectRow = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => navigate(`/work/${project.id}`)}
      className="group cursor-pointer border-b border-black dark:border-white/20 relative"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-start md:items-center justify-between gap-6 py-8 md:py-10 px-4 md:px-8">
        {/* Left */}
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
            {/* Tags — mobile only */}
            <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
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

        {/* Rows */}
        <div className="border-t border-black dark:border-white/20">
          {projects.map((project, idx) => (
            <ProjectRow key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* CTA */}
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
