import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setIsHovered(true));
      link.addEventListener("mouseleave", () => setIsHovered(false));
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setIsHovered(true));
        link.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 bg-white rounded-full mix-blend-difference"
      animate={{
        left: mousePos.x - (isHovered ? 20 : 5),
        top: mousePos.y - (isHovered ? 20 : 5),
        width: isHovered ? 60 : 10,
        height: isHovered ? 60 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 70,  // Lower for smoother motion
        damping: 15,    // Higher for a softer, natural ease
      }}
    />
  );
};

export default CustomCursor;
