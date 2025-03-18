import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Close, DragHandleOutlined } from "@mui/icons-material";
import { CornerDownRight, Eclipse, Github, HomeIcon, Layers, Linkedin, Mail, Phone, Square, User, XIcon } from "lucide-react";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "about", title: "About", icon: <User/> },
    { id: "work", title: "Work", icon: <Square /> },
    { id: "contact", title: "Contact", icon: <Phone /> },
    { id: "featured", title: "Featured", icon: <Eclipse /> },
  ];

  const contacts = [
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/harshkhavale11/", icon: <Linkedin /> },
    { id: "github", title: "GitHub", url: "https://github.com/harshkhavale", icon: <Github /> },
    { id: "email", title: "Gmail", url: "mailto:harshkhavale1102@gmail.com", icon: <Mail /> },
    { id: "x", title: "X", url: "https://twitter.com/HarshKhavale", icon: <XIcon /> },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <nav className="navbar z-50 fixed bg-white dark:bg-[#191919] top-0 p-2 w-full border-b flex justify-between items-center border-black dark:border-white">
      <p className="text-3xl font-semibold new-font">harsh khavale</p>
      <div className="flex items-center gap-6">
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-black dark:hover:text-white rounded-3xl cursor-pointer transition-all">
              <a href={`#${link.id}`} className="text-sm flex items-center gap-2">
                <CornerDownRight className="h-4 w-4" />
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <label className="cursor-pointer">
          <input type="checkbox" checked={isDark} onChange={toggleDarkMode} className="sr-only" />
          <div className="relative w-9 h-5 bg-gray-800 dark:bg-gray-200 rounded-full">
            <div className={`absolute top-[2px] left-[2px] h-4 w-4 rounded-full transition-all ${isDark ? 'translate-x-full bg-black' : 'bg-white'}`}></div>
          </div>
        </label>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <Close /> : <DragHandleOutlined />}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: toggle ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-[#191919] shadow-xl z-50 p-6 flex flex-col items-start space-y-6`}
      >
        <button className="absolute top-4 right-4 p-2 rounded-3xl border" onClick={() => setToggle(false)}>
          <Close />
        </button>

        <ul className="flex flex-col items-start gap-6 mt-40 w-full">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-black dark:hover:text-white cursor-pointer w-full">
              <a href={`#${link.id}`} className="text-xl flex gap-3 items-center" onClick={() => setToggle(false)}>
                {link.icon} {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex gap-4 mt-40">
          {contacts.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 border rounded-3xl  transition-transform transform hover:-translate-y-1">
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
