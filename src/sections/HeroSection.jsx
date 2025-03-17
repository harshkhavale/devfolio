import React from 'react'
import GalleryComponent from '../components/GalleryComponent'
import { CornerDownRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <>
    <div
    id="hero"
    className=" flex flex-col justify-center items-center relative mt-20 md:my-20 my-24 px-4 md:px-0"
  >
    <div className=" relative w-full text-3xl">
      <p className=" md:text-base text-xs pb-4 font-bold text-gray-400 md:ps-10">{'[DEVFOLIO-25]'}</p>
      <p className=" md:text-7xl text-5xl text-wrap text-right px-4 md:ps-96">
        <a href="#" className="">Architecting </a> code, <span className=' font-bold'>crafting</span> Scalable Solutions. Full Stack Artisan & DevOps <span className='font-bold'>aficionado.</span>
      </p><div className="md:ps-[50rem] py-8">
        <p className=" py-4 md:text-2xl text-xl">I specialize in crafting user-centric applications that are visually striking and intuitive. I bring a unique combination of creativity and technical skill to every project.</p>

        <div className=" flex items-center gap-2 ">
          <CornerDownRight /> <a href="#" className=" text-base underline underline-offset-4">Contact me</a>
        </div>

      </div>
    </div>

  </div>
  <GalleryComponent />

  </>
  )
}

export default HeroSection