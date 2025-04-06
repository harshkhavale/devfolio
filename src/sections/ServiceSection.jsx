import React from 'react'
import Services from '../components/Services'

const ServiceSection = () => {
  return (
    <section
    id="service"
    className="expertise justify-center  items-center relative"
  >

    <div className="side flex flex-col justify-center md:pt-40  gap-8 p-4">
      <p className=" text-center text-5xl md:text-7xl py-12">
      Stuff I Ship {">"}

      </p>
    </div>
    <div className=" md:pb-80 pb-20">
      <Services />
    </div>
    <div className=" bg-black dark:[#261FB3] h-[1px] w-full" />

  </section>  )
}

export default ServiceSection