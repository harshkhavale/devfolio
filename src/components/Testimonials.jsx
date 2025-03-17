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
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { testimonials } from "../constants/data";
SwiperCore.use([Navigation]);

const Testimonials = () => {
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
    <section id="work" className="relative z-40 md:p-20 px-4">
      <div className="flex justify-between">
       <p className=" text-5xl">My colleagues and clients say</p>
       
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={isNonMobileScreens ? 2 : 1}
        onSwiper={setSwiper}
        navigation={false} // Disable default navigation
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {testimonials.map((project) => (
          <SwiperSlide key={project.id}>
            <div className=" relative h-72 overflow-hidden">
              {/* <motion.img
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  transition: { ease: "easeInOut" },
                }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              /> */}
             
              <div className=" p-2">
                <h3 className="text-xl md:pe-32 happyfont py-4 ">"{project.testimonial}"</h3>
                <p>{project.name}</p>
                <p>{project.company}</p>
              </div>
            </div>
            <div className="hidden md:block bg-black p-[1px] rotate-90 w-full absolute -right-80"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" w-min flex gap-4 p-2">
          <button onClick={goPrev} className="text-gray-500 focus:outline-none">
          <MoveLeft/> Prev
          </button>
          <button onClick={goNext} className="text-gray-500 focus:outline-none">
            <MoveRight/> Next
          </button>
        </div>
    </section>
  );
};

export default Testimonials;
