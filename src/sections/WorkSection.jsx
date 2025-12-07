import React, { useRef, useState } from 'react'
import { bluehyphen, zengram, espHome, espAdmin, espLogin } from '../assets/projects'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'

// Featured Project with Image Gallery
const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const containerRef = useRef(null)

  const images = [espHome, espAdmin, espLogin]
  const imageLabels = ['Landing Page', 'Admin Dashboard', 'Login Portal']

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity, y }}
      className="relative w-full"
    >
      {/* Featured Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="px-3 py-1 text-xs font-bold bg-orange-500 text-white rounded-full">
          FEATURED PROJECT
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Gallery */}
        <div className="relative group">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`EasySportsPass ${imageLabels[currentImage]}`}
                  className="w-full h-full object-cover object-top"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Image Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevImage}
                  className="p-2 bg-white/90 dark:bg-black/90 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextImage}
                  className="p-2 bg-white/90 dark:bg-black/90 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Current Label */}
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full text-sm font-medium backdrop-blur-sm">
                {imageLabels[currentImage]}
              </div>
            </div>

            {/* Image Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImage
                      ? 'bg-orange-500 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2"
          >
            {['React', 'Node.js', 'MongoDB', 'Stripe'].map((tech, idx) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-white dark:bg-zinc-800 rounded shadow-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">
              EasySportsPass
            </h3>
            <p className="text-orange-500 font-medium">B2B Fitness Platform</p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive platform connecting gym owners with corporate clients.
            Features include membership management, corporate wellness programs,
            real-time analytics dashboard, and seamless payment integration.
          </p>

          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'JWT Auth'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="https://easysportspass.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Visit Site <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Bento Grid Project Card
const BentoCard = ({ project, size = 'normal' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    normal: 'col-span-1 row-span-1',
    tall: 'col-span-1 md:row-span-2',
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className={`group relative ${sizeClasses[size]}`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative h-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800"
      >
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white rounded-full"
            >
              <ExternalLink className="w-6 h-6 text-black" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const WorkSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleY = useTransform(scrollYProgress, [0, 0.2], [80, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  const projects = [
    {
      title: "BlueHyphen",
      category: "Tech Startup",
      description: "A tech-driven startup building innovative, scalable, and user-centric digital solutions for web and enterprise applications.",
      image: bluehyphen,
      link: "https://bluehyphen.com",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      title: "Zengram",
      category: "Social Platform",
      description: "A Zen-focused social app designed for mindful connections, fostering calmness and meaningful interactions.",
      image: zengram,
      link: "#",
      tags: ["React Native", "Firebase", "UI/UX"]
    },
  ]

  return (
    <section id="work" ref={sectionRef} className="overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-widest">
            PORTFOLIO
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Solutions I've
            <span className="block text-gray-400 dark:text-gray-600">Built</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-20 md:mb-32">
          <FeaturedProject />
        </div>

        {/* Other Projects - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Other Projects</h3>
          <p className="text-gray-500 dark:text-gray-400">More work I'm proud of</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <BentoCard key={project.title} project={project} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      <div className="h-[1px] w-full bg-black dark:bg-white mt-20" />
    </section>
  )
}

export default WorkSection
