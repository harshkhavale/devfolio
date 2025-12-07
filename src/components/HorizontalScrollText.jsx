import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollText = ({
  text,
  direction = 1, // 1 for right-to-left, -1 for left-to-right
  className = "",
  speed = 300,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, direction * speed]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div style={{ x }} className={className}>
        {text}
      </motion.div>
    </div>
  );
};

// Big scrolling text marquee tied to scroll
export const ScrollMarquee = ({
  children,
  baseVelocity = 100,
  className = "",
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -baseVelocity * 3]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, baseVelocity * 3]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap gap-8"
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
};

// Section divider with scroll text
export const ScrollDivider = ({ text, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className={`overflow-hidden py-20 ${className}`}>
      <motion.div
        style={{ x, opacity }}
        className="text-[8rem] md:text-[15rem] font-bold whitespace-nowrap text-black/5 dark:text-white/5"
      >
        {text} {text} {text}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollText;
