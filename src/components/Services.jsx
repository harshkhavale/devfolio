import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants/data";

const ServiceCard = ({ title, index, desc, image }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className=" dark:text-white  md:w-[22%] rounded-2xl border-2 dark:border-white  overflow-hidden"
    >
      <div className=" h-32 relative w-full border-b-2 flex items-center gap-2 overflow-hidden ">
        <img
          src={image}
          alt=""
          className=" absolute top-0 left-0 w-full rounded-t-2xl h-full object-cover"
        />
        
      </div>

      <div className="w-full relative  rounded-[20px] ">
     
        <div className="min-h-[250px] h-full border-0 p-1 ps-4 flex justify-evenly items-center flex-col  ">
        <span className="font-bold text-9xl absolute z-10 text-black/5 dark:text-white/10">
          {title}
        </span> <p className=" normal-font z-20"><span className=" font-bold text-2xl ">{title}{"  "}</span>{desc}</p> 
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="relative ">
      <div className=" w-full flex flex-wrap gap-2 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "Services");