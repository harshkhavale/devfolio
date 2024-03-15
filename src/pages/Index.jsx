import React from "react";
import SplineBox from "../components/SplineBox";
import Navbar from "../components/Navbar";
import RotatedText from "../widgets/RotatedText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import StackedCards from "../components/StackedCards";
import ScrollCards from "../components/ScrollCards";
import { useMediaQuery } from "@mui/material";
import Creative from "../components/Creative";

import {
  coder,
  gradientcolor,
  javascriptCertificate,
  problemSolvingCertificate,
} from "../assets";
import Services from "../components/Services";
// import { contacts, certificates } from "../constants";

const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

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

          <div className="contact absolute  rounded-tl-3xl ps-4 bottom-0 md:bottom-16 right-0 p-2 ">
            {/* <ul className="list-none flex my-4 justify-end items-end flex-col gap-4">
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className={`bg-white shadow-2xl rounded-full p-2 md:p-4 text-black text-[18px] gap-2 font-medium cursor-pointer transition-transform transition-shadow transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
                >
                  <a href={link.url} target="_blank">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
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
          <p
            className="marquee-text happy-font text-[12rem] md:text-[20rem] text-current "
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            portfolio.
          </p>
          <p
            className="marquee-text2 happy-font  text-[12rem] md:text-[20rem]"
            style={{
              // fontFamily: "Belgan",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            portfolio.
          </p>
        </div>{" "}
      </div>
      <div className="">
        <Creative />
        <ScrollCards />
      </div>
      <div className=" h-screen w-screen p-20"></div>
    </div>
  );
};

export default Index;
