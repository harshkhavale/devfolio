import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { CornerDownRight } from "lucide-react";
import { fadeIn } from '../utils/motion';

const Navbar = () => {
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
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    applyTheme();
  }, [isDark]);
  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", isDark);
  };
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    
    <div
    className={`navbar z-50 fixed bg-white dark:bg-[#191919] top-0 p-0
border-b flex justify-between border-black md:px-4 px-2 dark:border-white`}
  ><p className=" text-3xl asthetic font-semibold new-font">harsh khavale</p>
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
            <a href={`#${link.id}`} className="text-sm flex gap-1 ">
              <CornerDownRight className="text-xs font-light h-4 w-4" />
              {link.title}
            </a>
          </li>
        ))}
      </ul>





      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
        className={`${toggle ? "hidden" : "flex-col"
          } fixed p-4 top-40  start-40 z-50 h-screen w-screen bg-white flex justify-center  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40`}
      >
        <div className="absolute h-full dark:bg-black dark:text-white bg-white">
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
      <div className="relative w-9 h-5 bg-gray-800 dark:ring-1 ring-white/30 peer-focus:outline-none rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
    </label>
    <div
      className="sm:hidden cursor-pointer flex items-center"
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? (
        <DragHandleOutlined />
      ) : (
        <Close
          className={`${!isNonMobileScreens
            ? "border-2 z-[500000] fixed right-20 rounded-full border-current text-current"
            : ""
            }`}
        />
      )}
    </div>
  </div>
  )
}

export default Navbar