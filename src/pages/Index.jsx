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

import { hletter, rocket } from "../assets";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import { IoFlowerOutline } from "react-icons/io5";
import SliderComponent from "../components/SliderComponent";
import Resume from "../components/Resume";
import { SkillsBox } from "../components/SkillsBox";
import { LuRocket } from "react-icons/lu";
import LinesComponent from "../components/LinesComponent";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    {
      id: "about",
      title: "About",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: "work",
      title: "Work",
      icon: <WorkOutlineOutlinedIcon />,
    },
    {
      id: "contact",
      title: "Contact",
      icon: <CallOutlinedIcon />,
    },
    {
      id: "featured",
      title: "Featured",
      icon: <ViewInArOutlinedIcon />,
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
            <ul className="list-none hidden sm:flex flex-row items-center gap-8 rounded-2xl  md:p-2">
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
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Resume />

          <div
            className="sm:hidden cursor-pointer flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <DragHandleOutlined />
            ) : (
              <Close
                className={
                  !isNonMobileScreens &&
                  `border-2 z-[500000] fixed -right-20  rounded-full border-current text-current`
                }
              />
            )}
          </div>

          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className={`${
              toggle ? "hidden" : "flex-col "
            } fixed p-4 -top-10 -start-40  h-[120vh] w-[100vh] flex justify-center bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-white border-t-0 border-r-0`}
          >
            <div className=" absolute  start-24 p-20 h-full dark:bg-black dark:text-white bg-white">
              <ul className="list-none flex-row pt-20 mb-40 items-center gap-8 rounded-2xl ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? " md:p-2 " : " "
                    } hover:text-primary rounded-3xl md:p-6  cursor-pointer`}
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
                    <a href={`#${link.id}`} className="font-semibold text-5xl">
                      {link.icon} {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="list-none flex my-4 gap-4">
                {contacts.map((link) => (
                  <a
                    href={link.url}
                    key={link.id}
                    target="_blank"
                    className={` shadow-2xl rounded-full p-1  gap-2 font-medium cursor-pointer transition-transform transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
                  >
                    {link.icon}
                  </a>
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
          <p className="text-center bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent  flex justify-center font-black text-[5vh] md:text-[18vh] happy-font">
            Abstracting
          </p>
          <p
            className="flex items-center  text-center justify-center font-black text-[5vh] md:text-[20vh]"
            style={{ fontFamily: "Pilowlava" }}
          >
            Art
            <IoFlowerOutline className=" text-pink-500" />,
          </p>
          <p className=" text-center  flex justify-center font-black text-[5vh]   md:text-[20vh]">
            BUILDING
          </p>
          <p className=" text-center bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent flex justify-center font-black text-[5vh] happy-font md:text-[18vh]">
            solutions.{" "}
          </p>
        </div>
      </div>
      <SliderComponent />
      <section
        id=""
        className="expertise mt-8 justify-center  items-center relative"
      >
        <div className="side flex flex-col justify-center  gap-8 p-4">
          <p className=" font-bold text-5xl flex items-center gap-2  md:text-7xl">
            EXPERTISE
            <img src={rocket} className="h-20" alt="" />{" "}
          </p>
        </div>
        <div className="">
          <Services />
        </div>
      </section>

      <div className="portfolio  mb-16  ">
        <div className="marquee-container z-50">
          <p className="marquee-text happy-font font-black text-[12rem] md:text-[20rem] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent  ">
            portfolio.
          </p>
          <p className="marquee-text2 happy-font font-black  text-[12rem] md:text-[20rem] bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
            portfolio.
          </p>
        </div>{" "}
      </div>

      <section id="about" className="about_section  relative overflow-hidden ">
        <div className="relative w-full pt-0 md:px-20">
          <Hero />
          <div className="difference flex flex-col p-2 ">
            <div className="flex items-center gap-36">
              <div className="flex">
                <p className="md:text-[22rem] font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-[10rem]">
                  Self
                </p>
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
