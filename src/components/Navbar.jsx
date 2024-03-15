import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`z-[50]  navbar flex justify-center pt-2 ${
        !isNonMobileScreens ? "" : ""
      } `}
    >
      <div className="navbar w-full px-4 flex gap-2 justify-between items-center">
        <div
          className={`logo flex flex-col gap-4 dark:text-white text-black items-center ${
            !isNonMobileScreens ? "" : ""
          } `}
        >
          <div className=" flex gap-2 items-center">
            <img src={logo} alt="" className="w-6 h-6 rounded-md " />
            <p className=" happy-font font-bold text-xl">harsh khavale.</p>
          </div>

          <div className=" w-full bg-sky-500 p-1" />
        </div>
        <div className="links">
          <ul className="list-none hidden sm:flex flex-row items-center gap-10 rounded-2xl  p-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? " p-2" : "text-secondary"
                } hover:underline underline-offset-[1rem]   cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`} className=" happy-font font-semibold">
                  {""}
                  {link.id}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
          <ul className="list-none my-2 flex  flex-col gap-4">
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
                  href={`${link.id}`}
                  className="text-5xl font-bold text-center hover:text-[#3c42ff]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {}
    </div>
  );
};

export default Navbar;
