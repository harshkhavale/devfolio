import React from "react";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import { arroe, profile, profilephoto, semicolon } from "../assets";
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
    <div className="flex w-full md:flex-row gap-4 flex-col-reverse items-center bg-white dark:bg-[#000000] ">
      <motion.div
        variants={slideInLeftEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="relative  flex-1 "
      >
        <div className="mx-auto flex flex-row items-start gap-5">
          <div className="p-2 px-8">
            <div className="flex md:ps-0  ">

              <p className=" font-bold excalidraw text-8xl">Harsh Khavale</p>
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
                <a href="#" className=" inline new-font text-5xl">{' '}
                  together!
                </a>
                "
              </p></div>
          </div>
        </div>
      </motion.div>
      <p className="text-4xl new-font absolute top-32 right-40 md:visible hidden z-20"  >yeah, it's me! </p>
      <motion.div
        variants={slideInRightEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="profile relative flex-1 gap-2 flex flex-col "
      >
        <div className=" flex flex-col items-center gap-2 z-40 ">

        </div>
        <div className="relative w-full h-[100vh]">


          <img
            src={profilephoto}
            className="md:absolute  md:block md:inset-0 h-4/5 md:h-2/3 md:top-20 z-20 "
            alt="profile-img"
          />
          <img
            src={profile}
            className="absolute lg:block hidden h-2/3 top-80 md:right-40 z-20 "
            alt="profile-img"
          />
        </div>


        {/* <div className=" absolute -top-96 p-[30rem] dark:bg-[#261BB3] bg-gray-200 -right-40 rounded-full  e"></div> */}

      </motion.div>
    </div>
  );
};

export default Hero;
