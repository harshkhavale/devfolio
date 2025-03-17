import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const keys = [
  "Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
  "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
  "Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
  "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift",
  "Ctrl", "Alt", "Space", "Alt", "Ctrl"
];

const Keyboard = () => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      keyboardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={keyboardRef} className="flex flex-col items-center p-5 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Animated Keyboard</h1>
      <div className="grid grid-cols-14 gap-2">
        {keys.map((key, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            {key}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;