import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Menu } from "lucide-react";

// Utility function to join classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Main Floating Dock Component
export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// Desktop version of the dock
const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-4", className)}>
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="h-12 w-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-105 transition-all dark:bg-neutral-800/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-5 w-5 text-neutral-700 dark:text-neutral-200">{item.icon}</div>
        </a>
      ))}
    </div>
  );
};

// Mobile version of the dock
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed bottom-4 right-4 md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 flex flex-col gap-3 items-end"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-105 transition-all dark:bg-neutral-800/80"
                >
                  <div className="h-5 w-5 text-neutral-700 dark:text-neutral-200">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:scale-105 transition-all dark:bg-neutral-800/80"
      >
        <Menu className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
      </button>
    </div>
  );
};
