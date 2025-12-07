import React, { useRef } from 'react'
import GalleryComponent from '../components/GalleryComponent'
import { CornerDownRight, Quote, Ungroup } from 'lucide-react'
import { semicolon2 } from '../assets'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <>
    <div
    ref={containerRef}
    id="hero"
    className=" relative flex flex-col justify-center items-center py-20 px-4 md:px-0 bg-gradient-to-r dark:from-[#000000] from-[#efeff6] dark:to-black to-[#ffffff] overflow-hidden"
  >
    <motion.div
      style={{ y: textY, opacity, scale }}
      className=" relative w-full text-3xl z-20"
    >
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" md:text-base text-xs pb-4 font-bold dark:text-gray-400 text-gray-400 md:ps-10"
      >
        {'[DEVFOLIO-25]'}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className=" md:text-9xl font-bold text-5xl text-wrap text-right px-4 md:ps-96 z-50"
      >
        <a href="#" className="z-50 ">Architecting </a> code, <span className=' font-bold excalidraw'>crafting</span> Scalable Solutions. Full Stack Artisan & DevOps <span className='font-bold excalidraw'>aficionado.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="md:ps-[50rem] py-8"
      >
        <p className=" py-4 md:text-2xl text-xl">I specialize in crafting user-centric applications that are visually striking and intuitive. I bring a unique combination of creativity and technical skill to every project.</p>

        <div className=" flex items-center dark:text-white text-[#000000]">
          <CornerDownRight /> <a href="#contact" className=" text-xl underline underline-offset-2 px-4 p-2">connect with me!</a>
        </div>

      </motion.div>
    </motion.div>
    <motion.div
      style={{ y: y1 }}
      className='-z-0 opacity-5 dark:opacity '
    >
      <img src={semicolon2} alt="" className=' w-[50rem] absolute md:-top-[90rem] -top-[40rem] -right-12 md:-start-2 -z-10'/>
    </motion.div>
    <motion.div
      style={{ y: y2 }}
      className=' absolute excalidraw z-10 dark:opacity-100 opacity-0 -top-54 -start-40'
    >
      <Ungroup className=' fill-white/10 stroke-white/10 text-9xl size-[80rem]'/>
    </motion.div>



  </div>
  <GalleryComponent />

  </>
  )
}

export default HeroSection