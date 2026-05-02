import React, { useRef, useState } from 'react'
import { espHome, espAdmin, espLogin } from '../assets/projects'
import artndirtHome from '../assets/work/artndirt-home.png'
import artndirtShop from '../assets/work/artndirt-shop.png'
import artndirtPayment from '../assets/work/artndirt-payment.png'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Featured Project with editorial 3-panel layout
const FeaturedProject = () => {
  const [active, setActive] = useState(1)
  const containerRef = useRef(null)

  const panels = [
    { src: espLogin,  label: 'Login Portal' },
    { src: espHome,   label: 'Landing Page' },
    { src: espAdmin,  label: 'Admin Dashboard' },
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  return (
    <motion.div ref={containerRef} style={{ opacity, y }} className="relative w-full">
      {/* 3-panel image strip */}
      <div className="flex w-full h-[55vw] max-h-[600px] overflow-hidden">
        {panels.map((panel, idx) => {
          const isCenter = idx === active
          return (
            <motion.div
              key={idx}
              onClick={() => setActive(idx)}
              animate={{ flex: isCenter ? 3 : 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden cursor-pointer"
            >
              <img
                src={panel.src}
                alt={panel.label}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Dark scrim on non-active */}
              <motion.div
                animate={{ opacity: isCenter ? 0 : 0.5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black"
              />
              {/* Center expand hint */}
              {isCenter && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              )}
              {/* Next label on right panel */}
              {idx === (active + 1) % panels.length && (
                <div className="absolute bottom-8 right-6 text-right text-white">
                  <p className="text-sm opacity-70">Next</p>
                  <p className="font-semibold">{panels[(active + 1) % panels.length].label}</p>
                </div>
              )}
              {/* Panel label bottom left on non-active left */}
              {idx !== active && idx === (active - 1 + panels.length) % panels.length && (
                <div className="absolute bottom-8 left-6 text-white">
                  <p className="text-sm opacity-70">{panel.label}</p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Info row below panels */}
      <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-gray-200 dark:border-zinc-800 mt-0">
        {/* Left: attribution / link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">B2B Fitness Platform · 2024</p>
          <motion.a
            href="https://easysportspass.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
          >
            Discover EasySportsPass <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
          <div className="flex flex-wrap gap-2 pt-3">
            {['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs border border-gray-200 dark:border-zinc-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: title + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:max-w-md space-y-3"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">EasySportsPass</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{panels[active].label}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            A comprehensive platform connecting gym owners with corporate clients.
            Features include membership management, corporate wellness programs,
            real-time analytics dashboard, and seamless payment integration.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Art N Dirt project — same editorial panel layout
const ArtNDirtProject = () => {
  const [active, setActive] = useState(1)
  const containerRef = useRef(null)

  const panels = [
    { src: artndirtShop,    label: 'Shop' },
    { src: artndirtHome,    label: 'Homepage' },
    { src: artndirtPayment, label: 'Razorpay Checkout' },
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  return (
    <motion.div ref={containerRef} style={{ opacity, y }} className="relative w-full">
      <div className="flex w-full h-[55vw] max-h-[600px] overflow-hidden">
        {panels.map((panel, idx) => {
          const isCenter = idx === active
          return (
            <motion.div
              key={idx}
              onClick={() => setActive(idx)}
              animate={{ flex: isCenter ? 3 : 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="relative overflow-hidden cursor-pointer"
            >
              <img
                src={panel.src}
                alt={panel.label}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <motion.div
                animate={{ opacity: isCenter ? 0 : 0.5 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black"
              />
              {isCenter && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              )}
              {idx === (active + 1) % panels.length && (
                <div className="absolute bottom-8 right-6 text-right text-white">
                  <p className="text-sm opacity-70">Next</p>
                  <p className="font-semibold">{panels[(active + 1) % panels.length].label}</p>
                </div>
              )}
              {idx !== active && idx === (active - 1 + panels.length) % panels.length && (
                <div className="absolute bottom-8 left-6 text-white">
                  <p className="text-sm opacity-70">{panel.label}</p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-gray-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">WordPress Art E-commerce · Custom Plugin</p>
          <motion.a
            href="https://artndirt.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
          >
            Visit artndirt.com <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
          <div className="flex flex-wrap gap-2 pt-3">
            {['WordPress', 'WooCommerce', 'Razorpay', 'PHP', 'Custom Plugin'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs border border-gray-200 dark:border-zinc-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:max-w-md space-y-3"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Art N Dirt</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{panels[active].label}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            A WordPress-based art e-commerce platform for independent artists. Built a custom Razorpay subscription plugin from scratch to handle recurring memberships, enabling artists to offer exclusive content and print subscriptions seamlessly.
          </p>
        </motion.div>
      </div>
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

  return (
    <section id="work" ref={sectionRef} className="overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-widest">
            FREELANCE WORK
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Clients I've
            <span className="block text-gray-400 dark:text-gray-600">Shipped For</span>
          </h2>
        </motion.div>

        {/* EasySportsPass */}
        <div className="mb-24 md:mb-36">
          <FeaturedProject />
        </div>

        <div className="h-[1px] w-full bg-gray-200 dark:bg-zinc-800 mb-24 md:mb-36" />

        {/* Art N Dirt */}
        <ArtNDirtProject />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Interested in working together?
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-medium"
            >
              Let's Talk <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="h-[1px] w-full bg-black dark:bg-white mt-20" />
    </section>
  )
}

export default WorkSection
