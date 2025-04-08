import React, { useState, useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import Creative from "../components/Creative";
import Hero from "../components/Hero";




import Testimonials from "../components/Testimonials";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";
import ContactSection from "../sections/ContactSection";
import { FeaturedSection } from "../sections/FeaturedSection";
import Navbar from "../components/Navbar";
import ServiceSection from "../sections/ServiceSection";
import ContainerScroll from "../components/ContainerScroll";
import { dashboard, gallery12, mobile, website } from "../assets";
import GradientBox from "../components/GradientBox";
const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <div className=" h-[1px] w-full dark:bg-white md:my-20 my-10 bg-black"></div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-xl flex justify-center flex-col font-semibold text-black dark:text-white text-center">
              custom solution's through <br />
              <span className="text-5xl flex items-center justify-center text-[#261FB3] md:pb-20 md:text-[18rem] text-center font-bold mt-1 leading-none text-nowrap">
                Design<span className=" new-font md:text-9xl px-4">and </span>Code
              </span>
            </h1>
          </>
        }
      >
        <img
          src={mobile}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <AboutSection />     
      <WorkSection />
     <ServiceSection/>

     

      <section id="about" className="about_section relative overflow-hidden ">
        <Hero /><GradientBox content={<>
          <div className="relative w-full dark:-mt-60 md:dark:-mt-80 pt-0 md:px-20">
          <div className="difference flex flex-col p-2 ">
            <div className="flex items-center gap-36">
              <div className="flex">
                <p className="md:text-[22rem] font-bold text-[10rem]">
                  Self
                </p>
                <p className="font-bold md:text-[10rem] md:mt-0 new-font  mb-10 text-[3rem] flex items-end">
                  and
                </p>
              </div>

              {isNonMobileScreens && (
                <p className=" mt-20 text-xl">
                  My standout quality lies in my versatility across diverse
                  fields within technology. While others may specialize in one
                  area, I excel in web development, mobile app development,
                  backend solutions, and UI/UX design. This versatility allows
                  me to offer unique insights, solve complex problems
                  creatively, and deliver innovative solutions that stand out in
                  the competitive landscape.
                </p>
              )}
            </div>
            <div className="flex justify-between md:-mt-48 -mt-24">
              <p className="md:text-[22rem] font-bold text-[7rem] text-left ">
                Others
              </p>
            </div>
            {!isNonMobileScreens && (
              <div className="">
                <p className=" p-2 text-xl">
                  My standout quality lies in my versatility across diverse
                  fields within technology. While others may specialize in one
                  area, I excel in web development, mobile app development,
                  backend solutions, and UI/UX design. This versatility allows
                  me to offer unique insights, solve complex problems
                  creatively, and deliver innovative solutions that stand out in
                  the competitive landscape.
                </p>
              </div>
            )}
          </div>
        </div>
          </>}/>

        
      </section>
      <div className=" bg-black dark:bg-[#261FB3] h-[1px] mb-10 w-full" />

      <FeaturedSection/>
      <Creative />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;
