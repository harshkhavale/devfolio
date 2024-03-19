import React from "react";
import SplineBox from "../components/SplineBox";
import Navbar from "../components/Navbar";
import RotatedText from "../widgets/RotatedText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import ScrollCards from "../components/ScrollCards";
import { useMediaQuery } from "@mui/material";
import Creative from "../components/Creative";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TechSection from "../components/TechSection";
import {
  coder,
  gradientcolor,
  javascriptCertificate,
  problemSolvingCertificate,
} from "../assets";
import Services from "../components/Services";
// import { contacts, certificates } from "../constants";
import { useScroll, useTransform } from "framer-motion";
import {
  urbananime,
  spotifyanime,
  academixanime,
  airbnbanime,
  socialanime,
  variablesanime,
  stageanime,
} from "../assets/projects";

import { robox } from "../assets";

import Project from "../widgets/Project";
const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();

  const projects = [
    {
      title: "STAGE",
      image: stageanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 4,
    },
    {
      title: "urban_store",
      image: urbananime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 2,
    },
    {
      title: "spotify",
      image: spotifyanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
    {
      title: "ACADEMIX",
      image: academixanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 2,
    },
    {
      title: "Airbnb",
      image: airbnbanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
    {
      title: "social",
      image: socialanime,
      subtitle: "lorecdijhuoehouebvoivovbv",
      id: 3,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="main-page flex flex-col md:grid relative z-50  grid-rows-1 grid-cols-6 md:px-0">
        <div className="left col-span-3 p-4">
          <div className="  flex flex-col items-center justify-center   text-9xl  font-black ">
            <p className=" text-center flex justify-center md:ms-10 font-black text-[8vh] happy-font md:text-[18vh]">
              Abstracting
            </p>
            <p className=" text-center flex justify-center font-black text-[10vh] happy-font md:text-[20vh]">
              Art, Building Solutions.{" "}
            </p>

            <div className="flex flex-col ">
              <div className="flex justify-end md:justify-center">
                <p className=" text-base happy-font ">through</p>
              </div>

              <div className="flex justify-end md:justify-center mb-6 items-center">
                <div className="line h-1 w-40 mx-[-13px] rounded-3xl bg-current"></div>

                <KeyboardArrowRightIcon />
              </div>
              <div></div>

              <div className="flex flex-col gap-2 md:-mt-10 ">
                <div className="line flex gap-1">
                  <div className="blue bg-blue-500 p-2 w-2 rounded-xl"></div>
                  <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                  <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                  <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
                </div>
                <div className="line flex gap-1">
                  <div className="orange bg-orange-500 w-5 p-2 rounded-xl"></div>
                  <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                  <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
                </div>
              </div>
              <div className="arrow flex items-center ">
                <div className="code flex -mt-2 items-center">
                  <p className=" font-black md:text-[35vh] happy-font text-[16vh]">
                    code
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-end items-end">
                <div className="line flex gap-1">
                  <div className="blue bg-blue-500 p-2 w-2 rounded-xl"></div>
                  <div className="skyblue bg-sky-500 p-1 w-4 rounded-xl"></div>
                  <div className="gray bg-gray-200 p-1 w-10 rounded-xl"></div>
                  <div className="pink bg-pink-500 p-1 w-8 rounded-xl"></div>
                </div>
                <div className="line flex gap-1">
                  <div className="orange bg-orange-500 w-5 p-2 rounded-xl"></div>
                  <div className="teal bg-teal-500 p-1 w-12 rounded-xl"></div>
                  <div className="pink bg-sky-500 p-1 w-8 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right col-span-3 absolute top-0 -z-10 -mt-10 md:relative overflow-hidden">
          <SplineBox />

          <div className="contact absolute  rounded-tl-3xl ps-4 bottom-0 md:bottom-16 right-0 p-2 "></div>
        </div>
      </div>
      <div className=" mt-4 md:-mt-36 px-20">
        <RotatedText
          title={"ABOUT"}
          subtitle={"KNOW-MORE-KNOW-MORE-KNOW-MORE"}
        />
      </div>
      <div className="section2 md:flex items-center relative">
        <div className="side flex flex-col md:w-6/12 gap-8 p-4">
          <p className=" font-bold text-7xl z-50 md:text-9xl">EXPERTISE</p>

          <div className="flex w-12/12  flex-col md:flex-row ">
            <p className=" happy-font font-semibold text-xs z-50 md:text-2xl p-2">
              In web development, mobile app development, backend development,
              and UI/UX design, I excel. Using React, Next.js, and Angular, I
              craft seamless web experiences. With Android, React Native, and
              Flutter, I create responsive mobile apps. Backend solutions are my
              forte, using Python, Java, and JavaScript. Additionally, I design
              captivating interfaces with Figma and Canva. My diverse skill set
              ensures innovative solutions across the digital spectrum.{" "}
            </p>
          </div>
        </div>
        <div className=" w-12/12 md:w-6/12 z-[5000]">
          <Services />
        </div>
      </div>

      <div className="section3  mb-16  ">
        <div className="marquee-container z-50">
          <p className="marquee-text happy-font text-[12rem] md:text-[20rem] text-current ">
            portfolio.
          </p>
          <p className="marquee-text2 happy-font  text-[12rem] md:text-[20rem]">
            portfolio.
          </p>
        </div>{" "}
      </div>
      <div
        className={`relative flex ${
          isNonMobileScreens ? "flex-row" : "flex-col"
        }`}
      >
        <div className=" flex-1">
          <div className="md:px-8  px-2">
            <p className="text-bold -my-10 happy-font font-bold">
              Projects I have done so far..
            </p>
            <h1 className="md:text-9xl text-[7rem] font-bold">WORK</h1>
            <p className=" my-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga
              voluptatibus quidem optio libero sed recusandae iure fugiat, ullam
              doloribus!
            </p>
          </div>

          <img src={robox} alt="" className=" sticky" />
        </div>
        <div className="md:p-8 p-2 flex-2">
          <div className="grid gap-1 grid-rows-3 ">
            <div className="grid gap-2 grid-rows-1 grid-cols-5 ">
              <div className=" col-span-2 h-full w-full">
                <Project project={projects[2]} />
              </div>
              <div className=" col-span-3 h-full w-full">
                {" "}
                <Project project={projects[0]} />
              </div>
            </div>
            <div className="grid gap-2 grid-rows-1 grid-cols-5">
              <div className=" col-span-3 h-full w-full">
                {" "}
                <Project project={projects[1]} />
              </div>

              <div className=" col-span-2">
                <Project project={projects[3]} />
              </div>
            </div>
            <div className="grid gap-2 grid-rows-1 grid-cols-5">
              <div className=" col-span-2 ">
                {" "}
                <Project project={projects[5]} />
              </div>
              <div className=" col-span-3 ">
                <Project project={projects[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about relative overflow-hidden ">
        <p className="url fixed top-52 opacity-5 bg-transparent  left-[-250px] dark:opacity-10 font-black text-[12rem] rotate-90 ">
          ABOUT
        </p>

        <div className="relative w-full pt-0 md:px-20">
          <Hero />
          <div className="difference flex flex-col p-2 ">
            <div className="flex items-center gap-36">
              <div className="flex">
                <p className="md:text-[22rem] font-bold text-[10rem]">Self</p>
                <p className="font-bold md:text-[10rem] text-[7rem] flex items-end">
                  &
                </p>
              </div>

              {isNonMobileScreens && (
                <p className=" mt-20 ">
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
            <div className="flex justify-between md:-mt-40 -mt-24">
              <p className="md:text-[22rem] font-bold text-[8rem] text-left">
                Others
              </p>
            </div>
            {!isNonMobileScreens && (
              <div className="">
                <div className="flex justify-center">
                  <RotatedText
                    title={"DIFFERENCE"}
                    subtitle={"the-difference-between-"}
                  />
                </div>

                <p className="font-bold p-2 ">
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
          <TechSection />
        </div>
      </div>
      <div className="">
        <Creative />
        <ScrollCards />
        <Contact />
      </div>
      <div className=" h-screen w-screen p-20"></div>
    </div>
  );
};

export default Index;
