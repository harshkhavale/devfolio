
import React, { useRef } from "react";
import { frontend, backend, database, devops, tools } from "../constants";
import { Container, Database, GitBranch, PanelTop, Settings } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const categories = [
  { icon: <Settings/> ,title: "Backend", items: backend },
  { icon: <Database/>, title: "Database", items: database },
  { icon: <PanelTop/> ,title: "Frontend", items: frontend },

  {icon: <Container/>, title: "DevOps", items: devops },
  {icon: <GitBranch/>, title: "Tools", items: tools },
];

// Category card with scroll-based transforms
const CategoryCard = ({ category, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y, rotateX, transformPerspective: 1000 }}
      className="overflow-hidden rounded-2xl shadow-md backdrop-blur-md"
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="text-3xl text-black/80 text-center py-4 excalidraw flex items-center justify-center underline underline-offset-4 gap-2 dark:text-gray-400 mb-4"
      >
        {category.icon}
        {category.title}
      </motion.h3>
      <ul className="space-y-2 flex flex-wrap justify-center gap-2 p-4">
        {category.items.map((item, itemIndex) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05 + itemIndex * 0.03,
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 },
            }}
            className="flex relative border-4 text-nowrap rounded-3xl p-2 w-min excalidraw items-center justify-center gap-3 text-xl cursor-pointer"
            style={{ borderColor: item.color }}
          >
            {item.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export const FeaturedSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden py-20 px-4">
      {/* Content */}
      <div className="relative z-10 mx-auto text-center">
        <motion.p
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="text-5xl mb-40 excalidraw"
        >
          Technologies and tools I work with daily
        </motion.p>

        {/* Categories with staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
