import React from "react";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import {  arroe, profile, profilephoto } from "../assets";
const slideInRightEffect = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const slideInLeftEffect = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const Hero = () => {
  return (
    <div className="flex w-full md:flex-row gap-4 flex-col-reverse items-center bg-gray-100 dark:bg-slate-900 ">
      <motion.div
        variants={slideInLeftEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="relative  flex-1 "
      >
        <div className="mx-auto flex flex-row items-start gap-5">
          <div className=" px-8">
            <div className="flex md:ps-0  ">
           
            <p className=" text-8xl">Harsh Khavale</p>
            </div>
            <div className=" flex flex-col justify-center md:p-auto">
            <p className={`${styles.heroSubText} mt-10 md:mt-10 text-[20px] happyfont `}>
              A full stack web and mobile application developer.
            </p>
            <p className="happy-font  text-2xl p-4 my-4 ps-1">
              "An innovative BIENG,blending technical prowess with creative flair
              to craft immersive digital experiences for web and mobile
              platforms. Let's collaborate to engineer something truly
              extraordinary
              <a href="#" className=" inline font-bold new-font text-3xl">{' '}
                together!
              </a>
              "
            </p></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideInRightEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="profile relative flex-1 gap-2 flex flex-col "
      >
        <div className=" flex flex-col items-center gap-2 z-40 ">
          <img src={arroe} alt="" className="z-40 h-40 absolute rotate-45 top-40 left-0" />
          <p className="new-font font-bold absolute top-16 left-4 text-3xl">yes, it's me!</p>
        </div>
        <div className=" overflow-hidden rounded-0 z-20">
        <img src={profilephoto} className="z-10  h-[100vh] object-cover " alt="profile-img" />
        </div>
        <div className=" absolute -top-96 p-[30rem] dark:bg-slate-950 bg-gray-200 -right-40 rounded-full  e"></div>

      </motion.div>
    </div>
  );
};

export default Hero;
