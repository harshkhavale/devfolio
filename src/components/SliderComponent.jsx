import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper/core";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

import { LuCodesandbox } from "react-icons/lu";
import { GitHub, Launch, Link, LinkOffRounded } from "@mui/icons-material";
import { projects } from "../constants";
SwiperCore.use([Navigation]);

const SliderComponent = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section id="work" className="relative z-40">
      <div className="flex justify-between p-4">
        <div className=" bg-primary  rounded-3xl text-white text-xl flex items-center p-2">
          Featured Projects
        </div>
        <div className=" bg-white w-min flex gap-4 border-2 border-current rounded-3xl p-2">
          <button onClick={goPrev} className="text-gray-500 focus:outline-none">
            <IoIosArrowBack />
          </button>
          <button onClick={goNext} className="text-gray-500 focus:outline-none">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={isNonMobileScreens ? 3 : 1}
        onSwiper={setSwiper}
        navigation={false} // Disable default navigation
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className=" relative rounded-lg shadow-md h-72 overflow-hidden">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { ease: "easeInOut" },
                }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="links flex items-center bg-white p-2 text-black rounded-3xl m-2 gap-4 absolute top-0 right-0">
                {project.gitlink && (
                  <a href={project.gitlink}>
                    {" "}
                    <GitHub />
                  </a>
                )}
                {project.deploylink && (
                  <a href={project.deploylink}>
                    <Launch />
                  </a>
                )}
              </div>
              <div className="absolute bottom-0 px-4 dark:bg-gray-900 bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  ">
                <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderComponent;
