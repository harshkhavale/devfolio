import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let isScrolling = false;

    const handleScroll = (event) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentScroll = window.scrollY;
      let nextSection = null;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (currentScroll >= sectionTop - sectionHeight / 2 && currentScroll < sectionTop + sectionHeight / 2) {
          if (event.deltaY > 0 && index < sections.length - 1) {
            nextSection = sections[index + 1];
          } else if (event.deltaY < 0 && index > 0) {
            nextSection = sections[index - 1];
          }
        }
      });

      if (nextSection) {
        window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800); // Prevent rapid scrolling
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
