import React from 'react'
import { bluehyphen, easysportspass, zengram } from '../assets/projects'

const WorkSection = () => {
  return (
    <section id="work" className="" >
      <div className='p-8 py-40' >
        <p className=' text-5xl md:text-7xl pb-20 text-center'>Solutions I’ve Built {">"}</p>
        <div className=' flex flex-col md:flex-row relative gap-4  '>
          <div className="div1 flex-col md:flex-row flex-1 gap-4">
            <div className="flex flex-col flex-1 gap-2 relative">
              <img src={zengram} className=" h-[18rem] object-cover" />
              <p className='normal-font bg-gray-400/10 dark:bg-black/30 p-1'>Zengram is a Zen-focused social app designed for mindful connections. Share, reflect, and engage in a peaceful digital space that fosters calmness, positivity, and meaningful interactions.</p>
              <p className=' font-bold text-2xl text-[#000000]  '>zengram.com</p>
            </div>
            <div className="flex relative flex-col flex-1 gap-2">
              <img src={easysportspass} className=" h-[28rem] rounded-xl object-contain" alt="" />

              <p className=' absolute -right-16 -bottom-10 w-80 bg-orange-600 rounded-xl p-2 excalidraw'><b className=' excalidraw text-xl'>EasySportsPass</b> is a smart platform connecting gym owners with corporates, making gym access seamless through easy passes and memberships. Empowering businesses to offer fitness perks while helping gyms grow.               <a href='https://easysportspass.com' className=' excalidraw font-bold text-sm text-white  '>https://easysportspass.com</a>
              </p>

            </div>
          </div><div className="div2 flex-1">
            <div className="flex flex-col gap-2 relative"> <img src={bluehyphen} alt="" className='object-cover object-left-top h-[24rem]' />
              <p className='normal-font bg-gray-400/10 dark:bg-black/30 p-1'>BlueHyphen is a tech-driven startup building innovative, scalable, and user-centric digital solutions. We turn ideas into seamless web platforms and enterprise applications with creativity and precision.</p>
              <p className=' font-bold text-2xl text-[#000000]  '>bluehyphen.com</p></div>
          </div></div>
      </div>
      <div className=' h-[1px] w-full bg-black dark:bg-white my-8'></div>

    </section>

  )
}

export default WorkSection