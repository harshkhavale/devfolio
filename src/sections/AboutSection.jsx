import { ChevronDown, CodeXml, CornerDownRight, MessageCircle, MousePointer2, PenTool, Sparkles, Spline, Square, SquareDashed, SquareDashedMousePointer, Type } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounting();
        }
      },
      { threshold: 0.6 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const increment = (target, setState) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setState(count);
        if (count >= target) clearInterval(interval);
      }, 60); // Speed of count
    };

    increment(3, setYears); // Target: 3+ years
    increment(25, setClients); // Target: 25+ clients
  };

  return (
    <section ref={sectionRef} id="about" className=" sticky top-0" >
      <div>
       
        <div className="flex md:justify-end px-4">

          <div className="flex-col md:w-1/2 justify-end">
            <p className="md:text-2xl text-2xl md:text-left md:-ms-80 excalidraw border rounded-xl p-2 bg-green-400 text-black text-wrap">
              <span className="md:ps-80"></span>
              My design philosophy focuses on crafting seamless, engaging user journeys that leave a lasting impression. I believe in the power of clear communication, user empathy, and a meticulous eye for detail to create high-quality websites.

            </p>

            <div className="">
              <div className="flex md:flex-row flex-wrap py-4 gap-6">
                

                <p className="md:text-lg p-4 rounded-lg bg-yellow-400 dark:bg-yellow-400 text-black border excalidraw">
                  When I'm not designing or developing, I explore the vibrant pune city & neighborhood, seek inspiration in nature, and continuously
                  learn new things to improve my design skills.
                </p>
              </div>
              <a href="#" className="text-sm flex gap-2 underline underline-offset-8 normal-font">
                <CornerDownRight /> Learn More About Me
              </a>
            </div>

            <div className="flex md:gap-20 gap-8 py-20">
              <div>
                <p className=" normal-font">Years in Work</p>
                <p className="md:text-[12rem] text-9xl font-bold">{years}+</p>
              </div>
              <div>
                <p className=" normal-font">Total Happy Clients</p>
                <p className="md:text-[12rem] text-9xl font-bold">{clients}+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-[1px] w-full bg-black dark:bg-white my-8'></div>


    </section>
  );
};

export default AboutSection;
