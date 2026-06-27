import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Server,
  Palette,
  ArrowRight,
  Globe,
  Database,
  Layers,
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Web Development",
    shortTitle: "Web",
    description: "Crafting captivating user experiences with React.js, Next.js, and modern frameworks. Responsive designs that engage users across all devices.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    stats: { projects: "3", satisfaction: "100%" }
  },
  {
    id: 2,
    title: "Mobile Development",
    shortTitle: "Mobile",
    description: "Building cross-platform applications with React Native and Flutter. Native-like experiences with optimal performance across iOS and Android.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    stats: { projects: "2", satisfaction: "100%" }
  },
  {
    id: 3,
    title: "Backend Systems",
    shortTitle: "Backend",
    description: "Architecting robust server-side solutions with Node.js, Express, and scalable databases. APIs that power your applications reliably.",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    stats: { projects: "3", satisfaction: "100%" }
  },
  {
    id: 4,
    title: "UI/UX Design",
    shortTitle: "Design",
    description: "Designing intuitive interfaces with Figma and modern design principles. User-centric solutions that balance aesthetics with functionality.",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    stats: { projects: "2", satisfaction: "100%" }
  },
]

// 3D Tilt Card Effect
const ServiceCard = ({ service, index, isHovered, onHover }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    onHover(null)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      {/* Offset shadow box */}
      <div className="relative">
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
        <div className="relative h-full p-6 md:p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 overflow-hidden">
          {/* Icon */}
          <motion.div
            className="relative w-14 h-14 border border-gray-200 dark:border-zinc-700 flex items-center justify-center mb-6 bg-gray-50 dark:bg-zinc-800"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7" />
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium border border-gray-200 dark:border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 border-t-2 border-black dark:border-white">
              <div>
                <p className="text-2xl font-bold">{service.stats.projects}</p>
                <p className="text-xs text-gray-500">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{service.stats.satisfaction}</p>
                <p className="text-xs text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hover Arrow */}
          <motion.div
            className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Floating Elements Background
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
        />
      ))}
    </div>
  )
}

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section
      id="service"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-zinc-800 mb-6 text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400"
          >
            What I Do
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Stuff I Ship
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, I build digital experiences that users love.
            Here's what I bring to the table.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Have a project in mind? Let's make it happen.
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-medium"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="bg-black dark:bg-white h-[1px] w-full mt-20" />
    </section>
  )
}

export default ServiceSection
