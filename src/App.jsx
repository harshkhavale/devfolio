import React from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className=" dark:text-white dark:bg-[#191919] bg-white text-black overflow-x-hidden ">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<ProjectPage />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
