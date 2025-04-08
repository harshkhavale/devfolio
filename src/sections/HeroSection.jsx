import React from 'react'
import GalleryComponent from '../components/GalleryComponent'
import { CornerDownRight } from 'lucide-react'
import { semicolon2 } from '../assets'

const HeroSection = () => {
  return (
    <>
    <div
    id="hero"
    className=" relative flex flex-col justify-center items-center py-20 px-4 md:px-0 bg-gradient-to-r dark:from-[#261FB3] from-[#efeff6] dark:to-black to-[#ffffff]"
  >
    <div className=" relative w-full text-3xl z-20">
      <p className=" md:text-base text-xs pb-4 font-bold dark:text-gray-400 text-gray-400 md:ps-10">{'[DEVFOLIO-25]'}</p>
            <p className=" md:text-9xl font-bold text-5xl text-wrap text-right px-4 md:ps-96 z-50">
        <a href="#" className="z-50 ">Architecting </a> code, <span className=' font-bold md:text-[#261FB3]'>crafting</span> Scalable Solutions. Full Stack Artisan & DevOps <span className='font-bold md:text-[#261FB3]'>aficionado.</span>
      </p><div className="md:ps-[50rem] py-8">
        <p className=" py-4 md:text-2xl text-xl">I specialize in crafting user-centric applications that are visually striking and intuitive. I bring a unique combination of creativity and technical skill to every project.</p>

        <div className=" flex items-center dark:text-white text-[#261FB3]">
          <CornerDownRight /> <a href="#contact" className=" text-xl underline underline-offset-2 px-4 p-2">connect with me!</a>
        </div>

      </div>
    </div>
    <div className='-z-0 opacity-5 dark:opacity-100 '><img src={semicolon2} alt="" className=' w-[50rem] absolute md:-top-[90rem] -top-[40rem] -right-12 md:-start-2 -z-10'/></div>


  </div>
  <GalleryComponent />

  </>
  )
}

export default HeroSection