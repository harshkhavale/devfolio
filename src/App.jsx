import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Index from "./pages/Index";
import EasySportsPass from "./pages/work/EasySportsPass";
import ArtNDirt from "./pages/work/ArtNDirt";
import Footer from "./components/Footer";
import CustomCursor from "./widgets/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

// Scroll Progress Indicator Component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Delay to ensure smooth transition
      }
    }, 150); // 150ms * 20 = 3 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#000000] text-white items-center justify-center  z-50">
     
      <p className="mt-2 font-bold text-9xl excalidraw md:text-[18rem]">{"<"}{progress}%{">"}</p>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="dark:text-white dark:bg-[#191919] bg-white text-black overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work/easysportspass" element={<EasySportsPass />} />
            <Route path="/work/artndirt" element={<ArtNDirt />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
