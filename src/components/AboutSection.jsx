import { CornerDownRight } from 'lucide-react'
import { ArrowDownRight } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className=' flex justify-end px-4' >
            <div className=' flex-col w-1/2 justify-end'>
            <p className='text-6xl text-left -ms-80'> <span className='ps-80'>                  </span>My design journey started with a passion for creating intuitive and visually captivating experiences, driven by the transformative impact of design in solving problems and enhancing user interactions with technology. My aim is to develop digital experiences that blend functionality with delight.</p>
            <div className="">
                <div className=' flex py-4 gap-6' >
                    <p className='text-lg'>My design philosophy focuses on crafting seamless, engaging user journeys that leave a lasting impression. I believe in the power of clear communication, user empathy, and a meticulous eye for detail to create high-quality websites.</p>
                    <p className='text-lg'>When I'm not designing or developing, I explore the vibrant Los Angeles neighborhood, seek inspiration in nature, and continuously learn new things to improve my design skills.</p>
                </div>
                <a href='#' className='text-sm flex gap-2 underline underline-offset-8'> <CornerDownRight/> Learn More About Me</a>
            </div>
            <div className=' flex gap-20 py-20 '>
                <div>
                    <p>Years in Work</p>
                    <p className=' text-[10rem]'>3+</p>
                </div>
                <div>
                    <p>total happy clients</p>
                    <p className=' text-[10rem]'>25+</p>

                </div>

            </div></div>
        </section>
    )
}

export default AboutSection