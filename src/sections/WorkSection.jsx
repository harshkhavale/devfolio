import React from 'react'
import { artndirt, bluehyphen, easysportspass, stage, zengram } from '../assets/projects'
import { lazybox } from '../assets'

const WorkSection = () => {
  return (
    <section className='p-8' >
      <p className=' text-right text-5xl py-16'>Projects I have Worked On</p>
      <div className=' flex flex-col md:flex-row relative gap-4  '>
        <div className="div1 flex flex-1 gap-4">
          <div className="flex flex-col flex-1 gap-2 relative">
            <img src={zengram} className=" h-[18rem] object-cover" />
            <p>EasySportsPass is a streamlined platform connecting sports facility  centralized system. Suppliers can list their facilities, while corporates can easily book passes for employees, promoting wellness and team-building activities.</p>
            <p className=' font-bold text-3xl text-blue-600 new-font'>zengram.com</p>
            </div>
          <div className="flex flex-col flex-1 gap-2">
            <img src={easysportspass} className=" h-[14rem] object-cover object-left-top" alt="" />
            
            <p>Art and Dirt is a vibrant online platform that beautifully blends creativity and functionality.  reflecting the brand's essence through thoughtful design and smooth navigation. With a perfect balance of aesthetics and technology, Art and Dirt stands as a testament to the power of professional web development, ensuring users can explore and engage with art effortlessly.</p>
            <p className=' font-bold text-3xl text-blue-600 new-font'>easysportspass.com</p>

            </div>
        </div><div className="div2 flex-1">
          <div className="flex flex-col gap-2 relative"> <img src={bluehyphen} alt="" className='object-cover object-left-top h-[24rem]' /> 
          <p>Soemthing which describes this project</p>
          <p className=' font-bold text-3xl text-blue-600 new-font'>bluehyphen.com</p></div>
        </div></div>
    </section>
  )
}

export default WorkSection