import React from 'react'
import Services from '../components/Services'

const ServiceSection = () => {
  return (
    <section
    id="service"
    className="expertise my-8 justify-center  items-center relative"
  >
       <div className=" h-[1px] w-full dark:bg-white bg-black"></div>

    <div className="side flex flex-col justify-center  gap-8 p-4">
      <p className=" text-right text-7xl py-12">
        Services we provide

      </p>
    </div>
    <div className="">
      <Services />
    </div>
  </section>  )
}

export default ServiceSection