import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, desc, image }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className=" dark:text-white  md:w-[22%] shadow-xl rounded-2xl border-2 dark:border-white  overflow-hidden"
    >
      <div className=" h-32 relative w-full border-b-2 flex items-center gap-2 overflow-hidden ">
        <img
          src={image}
          alt=""
          className=" absolute top-0 left-0 w-full rounded-t-2xl h-full object-cover"
        />
        <p className="absolute inset-0 flex text-white justify-center items-center font-bold text-[5rem]">
          {title}
        </p>
      </div>

      <div className="w-full  rounded-[20px] ">
        <div className="min-h-[250px] border-0 happy-font font-bold p-1 ps-4 flex justify-evenly items-center flex-col bg-gray-50 dark:bg-gray-800">
          {desc}
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
