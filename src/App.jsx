import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import CustomCursor from "./widgets/CustomCursor";

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
    <div className="fixed inset-0 flex flex-col bg-[#261FB3] text-white items-center justify-center  z-50">
     
      <p className="mt-2 text-9xl">{"<"}{progress}%</p>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : ( */}
        <div className="dark:text-white dark:bg-[#191919] bg-white text-black overflow-x-hidden">
          <CustomCursor />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      {/* )}  */}
    </>
  );
};

export default App;
