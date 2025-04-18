import { CornerDownRight } from "lucide-react";
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

    increment(2, setYears); // Target: 3+ years
    increment(25, setClients); // Target: 25+ clients
  };

  return (
    <section ref={sectionRef} id="about" className=" sticky top-0" >
      <div>
        <div className=' h-[1px] w-full bg-black dark:bg-white my-8'></div>
        <div className="flex md:justify-end px-4">

          <div className="flex-col md:w-1/2 justify-end">
            <p className="md:text-5xl text-2xl md:text-left md:-ms-80 text-wrap">
              <span className="md:ps-80"></span>
              My design journey started with a passion for creating intuitive and
              visually captivating experiences, driven by the transformative impact
              of design in solving problems and enhancing user interactions with
              technology. My aim is to develop digital experiences that blend
              functionality with delight.
            </p>

            <div className="">
              <div className="flex md:flex-row flex-wrap py-4 gap-6">
                <p className="md:text-lg p-4 rounded-lg bg-gray-400/10 dark:bg-black/30 normal-font">
                  My design philosophy focuses on crafting seamless, engaging user journeys that leave a lasting impression. I believe in the power of clear communication, user empathy, and a meticulous eye for detail to create high-quality websites.
                </p>

                <p className="md:text-lg p-4 rounded-lg bg-gray-400/10 dark:bg-black/30 normal-font">
                  When I'm not designing or developing, I explore the vibrant Los
                  Angeles neighborhood, seek inspiration in nature, and continuously
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
