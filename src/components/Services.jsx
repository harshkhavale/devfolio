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
      className=" dark:text-white  md:w-[22%] flex flex-col justify-center  items-center  overflow-hidden"
    > {image}
      <div className=" h-32 relative w-full  flex items-center gap-2 overflow-hidden ">
       
        <p className="absolute inset-0 flex justify-center items-center text-[5rem]">
          {title}
        </p>
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
