import React, { useState } from "react";
import RotatedText from "../widgets/RotatedText";

import { motion } from "framer-motion";
import Certification from "../components/Certification";
import { useMediaQuery } from "@mui/material";
import Creative from "../components/Creative";
import Contact from "../components/Contact";
import { fadeIn } from "../utils/motion";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

import Services from "../components/Services";

import { hletter } from "../assets";
import { Close, DragHandleOutlined, Home } from "@mui/icons-material";
import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import { IoFlowerOutline } from "react-icons/io5";
import SliderComponent from "../components/SliderComponent";
import Resume from "../components/Resume";
import { SkillsBox } from "../components/SkillsBox";
import { LuRocket } from "react-icons/lu";
import LinesComponent from "../components/LinesComponent";

const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    {
      id: "about",
      title: "About",
      icon: <Home />,
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "featured",
      title: "Featured",
    },
  ];
  const contacts = [
    {
      id: "linkdin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/harshkhavale11/",
      icon: <LinkedIn />,
    },
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/harshkhavale",
      icon: <GitHub />,
    },
    {
      id: "email",
      title: "Gmail",
      url: "harshkhavale1102@gmailcom",
      icon: <Email />,
    },
    {
      id: "X",
      title: "X",
      url: "https://twitter.com/HarshKhavale",
      icon: <X />,
    },
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div
        className={`navbar z-50 fixed top-1
 flex justify-center  ${!isNonMobileScreens ? "" : ""} `}
      >
        <div className="navbar rounded-3xl flex justify-between items-center w-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  ">
          <img
            src={hletter}
            alt="logo"
            className="md:w-10 md:h-10 w-6 h-6 md:mx-4"
          />
          <div className="links">
            <ul className="list-none hidden sm:flex flex-row items-center gap-6 rounded-2xl  md:p-2">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? " md:p-2 " : " "
                  } hover:bg-white hover:text-black rounded-3xl md:p-2  cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                  }}
                  onMouseEnter={() => {
                    setHoveredLink(link.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                  }}
                >
                  <a href={`#${link.id}`} className="font-semibold happy-font">
                    {hoveredLink === link.id && link.icon}{" "}
                    {/* Render icon only when link is hovered */}
                    {link.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Resume />

          <div
            className="sm:hidden cursor-pointer flex flex-1 justify-end items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <DragHandleOutlined />
            ) : (
              <Close
                className="border z-[500000] rounded-full border-white text-white"
                style={{ color: "white", fontSize: "5rem" }}
              />
            )}
          </div>

          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className={`${
              toggle ? "hidden" : "flex-col"
            } fixed top-0 start-0 w-screen p-4  z-[5000] h-screen flex justify-center rounded-bl-[10rem] bg-black border-2 border-white border-t-0 border-r-0`}
          >
            <ul className="list-none my-2 flex  flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#3c42ff]" : "text-white"
                  } hover:text-[#3c42ff]  text-[17px] cursor-pointer flex justify-start`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className="text-5xl font-bold text-center hover:text-[#3c42ff]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact p-2 ">
              <ul className="list-none flex my-4 gap-4">
                {contacts.map((link) => (
                  <li
                    key={link.id}
                    className={`bg-white shadow-2xl rounded-full p-1 text-black  gap-2 font-medium cursor-pointer`}
                  >
                    {link.icon}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <LinesComponent />
      <div
        id="home"
        className="home md:h-screen h-72 flex flex-col justify-center items-center relative "
      >
        <div className="  flex flex-wrap md:gap-6 gap-4 items-center justify-center   text-7xl  font-black ">
          <p className="text-center flex justify-center font-black text-[5vh] md:text-[18vh] happy-font">
            Abstracting
          </p>
          <p
            className="flex items-center text-center justify-center font-black text-[5vh] md:text-[20vh]"
            style={{ fontFamily: "Pilowlava" }}
          >
            Art
            <IoFlowerOutline className=" text-pink-500" />,
          </p>
          <p className=" text-center flex justify-center font-black text-[5vh]  md:text-[20vh]">
            BUILDING
          </p>
          <p className=" text-center flex justify-center font-black text-[5vh] happy-font md:text-[18vh]">
            solutions.{" "}
          </p>
        </div>
      </div>
      <SliderComponent />
      <section id="featured" className="expertise mt-8  items-center relative">
        <div className="side flex flex-col  gap-8 p-4">
          <p className=" font-bold text-5xl flex items-center gap-2 z-50 md:text-7xl">
            EXPERTISE
            <LuRocket />
          </p>

          <div className="flex relative rounded-br-[3rem] overflow-hidden  flex-col md:flex-row ">
            <p className=" text-xs z-50 md:text-xl bg-gray-800 font-bold  p-2">
              I'm a versatile developer and designer skilled in frontend and
              backend development, UI/UX design, and mobile development.
              Proficient in technologies like React.js, Express.js, and Figma, I
              specialize in crafting captivating user experiences and robust
              server-side solutions. With a focus on seamless integration and
              user-centric design principles, I create intuitive interfaces and
              cross-platform applications that prioritize performance and
              engagement. Passionate about turning ideas into innovative
              solutions, I thrive on delivering high-quality results that exceed
              expectations in the digital realm. Welcome to my portfolio!
            </p>
          </div>
        </div>
        <div className="">
          <Services />
        </div>
      </section>

      <div className="portfolio  mb-16  ">
        <div className="marquee-container z-50">
          <p className="marquee-text happy-font text-[12rem] md:text-[20rem] text-current ">
            portfolio.
          </p>
          <p className="marquee-text2 happy-font  text-[12rem] md:text-[20rem]">
            portfolio.
          </p>
        </div>{" "}
      </div>

      <section
        id="#about"
        className="about_section bg-[#191919] relative overflow-hidden "
      >
        <div className="relative w-full pt-0 md:px-20">
          <Hero />
          <div className="difference flex flex-col p-2 ">
            <div className="flex items-center gap-36">
              <div className="flex">
                <p className="md:text-[22rem] font-bold text-[10rem]">Self</p>
                <p className="font-bold md:text-[10rem] md:mt-0 happy-font  mb-10 text-[3rem] flex items-end">
                  &
                </p>
              </div>

              {isNonMobileScreens && (
                <p className=" mt-20 text-xl happy-font ">
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
              <p className="md:text-[22rem] font-bold text-[7rem] text-left">
                Others
              </p>
            </div>
            {!isNonMobileScreens && (
              <div className="">
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
        </div>
      </section>
      <SkillsBox />
      <Creative />
      <Certification />
      <Contact />
    </div>
  );
};

export default Index;
