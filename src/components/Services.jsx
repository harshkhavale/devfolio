import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import LottieAnimation from "./LottieAnimation";
import TextOutline from "./TextOutline";
const ServiceCard = ({ title, index, icon, animation, description }) => {
  return (
    <div className="xs:w-[250px] dark:text-white border-2 border-white md:w-[20vw] shadow-xl rounded-2xl">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col ">
          <div className="animation ">
            <LottieAnimation animation={animation} />
          </div>
          <div className=" flex items-center py-2 gap-2">
            <img src={icon} className=" w-4 h-4" alt="" />
            <h3 className="text-center">{title}</h3>
          </div>
        </div>
      </div>
    </div>
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
