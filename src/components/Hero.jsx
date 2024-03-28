import React from "react";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import SubHeroSection from "../components/SubHeroSection";
import Resume from "./Resume";
import { profile, twist } from "../assets";
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
    <div className="flex w-full md:flex-row gap-4 p-2 flex-col-reverse items-center">
      <motion.div
        variants={slideInLeftEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="relative  flex-1 "
      >
        <div className="mx-auto flex flex-row items-start gap-5">
          <div>
            <div className="flex ">
              <h1
                className={`${styles.heroSubText} mt-6 font-bold happy-font w-full`}
              >
                Hey there , I' m{" "}
              </h1>

              <SubHeroSection />
            </div>
            <div className=" "></div>
            <p className={`${styles.heroSubText} mt-20 md:mt-32 text-[20px] `}>
              {" "}
              A full stack web and mobile application developer.
            </p>
            <p className="happy-font font-bold text-primary p-4 my-4 ps-1">
              "An innovative MCA student at D.Y. Patil Institute of Management
              and Research, Pune, blending technical prowess with creative flair
              to craft immersive digital experiences for web and mobile
              platforms. Let's collaborate to engineer something truly
              extraordinary
              <p className=" inline underline underline-offset-8 font-bold happy-font text-xl">
                {" "}
                together!
              </p>
              "
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideInRightEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="profile relative flex-1  "
      >
        <img
          src={profile}
          alt="profile"
          className="relative bg-black border-2 rounded-full z-20"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
