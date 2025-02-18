import React from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import CustomCursor from "./widgets/CustomCursor";
const App = () => {
  
  
  return (
    <div className=" dark:text-white dark:bg-[#191919] bg-white text-black overflow-x-hidden ">
            <CustomCursor />

      <AnimatePresence>

        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
