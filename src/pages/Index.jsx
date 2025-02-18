import React, { useState, useEffect } from "react";
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

import { confluence, hletter, letterh, rocket, rocket2 } from "../assets";
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
import { CornerRightDown } from "lucide-react";
import { CornerDownRight } from "lucide-react";
import AboutSection from "../components/AboutSection";
import GalleryComponent from "../components/GalleryComponent";
import { RiArrowRightDownLine } from "react-icons/ri";
import { Cable } from "lucide-react";
import { Zap } from "lucide-react";
import Testimonials from "../components/Testimonials";
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
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    // Apply theme styles on initial render
    applyTheme();
  }, [isDark]);
  const applyTheme = () => {
    // Toggle 'dark' class on the 'html' element
    document.documentElement.classList.toggle("dark", isDark);
  };
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  return (
    <div className="">

      <div
        className={`navbar z-50 fixed bg-white dark:bg-[#191919] top-0 p-0
   border-b flex justify-between border-black px-4 dark:border-white`}
      ><p className=" font-bold text-2xl happyfont">Harsh Khavale</p>
        <div className="flex justify-between items-center">

          <ul className="list-none hidden sm:flex flex-row items-center gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "" : ""
                  } transform ease-in-out transition-all duration-100 hover:text-black rounded-3xl cursor-pointer`}
                onClick={() => setActive(link.title)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a href={`#${link.id}`} className="text-sm flex gap-1 happy-font">
                  <CornerDownRight className="text-xs font-light h-4 w-4" />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>



          <div
            className="sm:hidden cursor-pointer flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <DragHandleOutlined />
            ) : (
              <Close
                className={`${!isNonMobileScreens
                  ? "border-2 z-[500000] fixed -right-20 rounded-full border-current text-current"
                  : ""
                  }`}
              />
            )}
          </div>

          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className={`${toggle ? "hidden" : "flex-col"
              } fixed p-4 -top-10 -start-40 z-50 h-[120vh] w-[100vh] flex justify-center bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-white border-t-0 border-r-0`}
          >
            <div className="absolute start-24 h-full dark:bg-black dark:text-white bg-white">
              <ul className="list-none flex-row items-center gap-8 rounded-2xl">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "md:p-2" : ""
                      } hover:text-primary rounded-3xl cursor-pointer`}
                    onClick={() => setActive(link.title)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
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
                    className="shadow-2xl rounded-full p-1 gap-2 font-medium cursor-pointer transition-transform transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md"
                  >
                    {link.icon}
                  </a>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <label className="items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            checked={isDark}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="relative w-9 h-5 bg-gray-200 dark:ring-1 ring-white/30 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
        </label>
      </div>

      {/* <div className=" h-[1px] absolute top-20 w-full bg-black dark:bg-white"></div> */}

      <div
        id="home"
        className="home md:h-[40rem] h-72 flex flex-col justify-center items-center relative "
      >
        <div className="">
          <p className=" text-7xl text-right px-4">
            <a href="#" className=" underline underline-offset-8 happyfont text-9xl ">Abstracting</a> Code, Crafting Scalable Solutions & Full Stack <a href="#" className=" underline underline-offset-1 happyfont ">Developer</a>  & DevOps Enthusiast
          </p><div className="ps-[50rem] py-8">
            <p className=" py-4 text-2xl">I specialize in crafting user-centric applications that are visually striking and intuitive. I bring a unique combination of creativity and technical skill to every project.</p>

            <div className=" flex items-center gap-2 ">
              <CornerDownRight/> <a href="#" className=" text-base">Contact me</a>
            </div>

          </div>
        </div>
        
      </div>
      <GalleryComponent />
      <div className=' h-[1px] w-full bg-black my-8'></div>

      <AboutSection />
      <SliderComponent />
      <section
        id=""
        className="expertise mt-8 justify-center  items-center relative"
      >
        <div className="side flex flex-col justify-center  gap-8 p-4">
          <p className=" text-5xl flex items-center gap-2 md:text-7xl">
            Services available
            
          </p>
        </div>
        <div className="">
          <Services />
        </div>
      </section>

      <div className="portfolio  mb-16  ">
        <div className="marquee-container z-50">
          <p className="marquee-text capitalize text-[12rem] md:text-[20rem]  ">
            portfolio.
          </p>
          <p className="marquee-text2 capitalize text-[12rem] md:text-[20rem] ">
            portfolio.
          </p>
        </div>{" "}
      </div>

      <section id="about" className="about_section  relative overflow-hidden ">
        <Hero />

        <div className="relative w-full pt-0 md:px-20">
          <div className="difference flex flex-col p-2 ">
            <div className="flex items-center gap-36">
              <div className="flex">
                <p className="md:text-[22rem] font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-[10rem]">
                  Self
                </p>
                <p className="font-bold md:text-[10rem] md:mt-0 happyfont  mb-10 text-[3rem] flex items-end">
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
              <p className="md:text-[22rem] font-bold text-[7rem] text-left bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
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
      <SkillsBox isDark={isDark} />
      <Creative />
      <Certification />
      <Testimonials/>
      <div  className=" h-[1px] w-full dark:bg-white bg-black"></div>
      <p className="text-7xl py-10 md:px-20 ">Would you like to work together?</p>
           
      <Contact />
    </div>
  );
};

export default Index;
