// src/widgets/SmoothScrollWrapper.jsx
import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize smooth-scrollbar on the container
    const scrollbar = Scrollbar.init(document.querySelector(".smooth-scroll-wrapper"), {
      damping: 0.1,  // Adjust for smoother scrolling
    });

    // Cleanup on component unmount
    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper">
      <div className="smooth-scroll-element">
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;
