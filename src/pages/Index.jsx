import React, { useState, useEffect, useRef } from "react";

import { useMediaQuery } from "@mui/material";
import Creative from "../components/Creative";
import Hero from "../components/Hero";




import Testimonials from "../components/Testimonials";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";
import { FeaturedSection } from "../sections/FeaturedSection";
import Navbar from "../components/Navbar";
import ServiceSection from "../sections/ServiceSection";
import {  gallery4} from "../assets";
import GradientBox from "../components/GradientBox";
import {
  ChevronDown, CodeXml, CornerDownRight, Frame, MessageCircle,
  MousePointer2, PenTool, Sparkles, Spline, Square, SquareDashed,
  SquareDashedMousePointer, Type, Code2, Palette, Layers, Zap,
  Figma, Github, Terminal, Smartphone
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ScrollDivider } from "../components/HorizontalScrollText";

// Animated section divider
const AnimatedDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="md:my-20 my-10 overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="h-[1px] w-full dark:bg-white bg-black origin-left"
      />
    </div>
  );
};

// Modern Design & Code Section
const DesignCodeSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  const tools = [
    { icon: Figma, label: "Figma", color: "text-purple-500" },
    { icon: Code2, label: "VS Code", color: "text-blue-500" },
    { icon: Terminal, label: "Terminal", color: "text-green-500" },
    { icon: Github, label: "GitHub", color: "text-gray-700 dark:text-gray-300" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-40 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-widest"
          >
            CUSTOM SOLUTIONS THROUGH
          </motion.p>

          {/* Big Animated Title */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[12rem] font-bold leading-none tracking-tight"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Design
              </motion.span>
              <span className="inline-block new-font text-3xl md:text-8xl mx-4 text-gray-400">
                and
              </span>
              <motion.span
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["200%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Code
              </motion.span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Showcase Card */}
        <motion.div
          style={{ rotateX: rotate, transformPerspective: 1000 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 p-2 shadow-2xl shadow-purple-500/10"
          >
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-t-2xl">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-zinc-700 rounded-lg px-4 py-1.5 text-xs text-gray-400 text-center">
                  localhost:3000
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-b-2xl">
              <img
                src={gallery4}
                alt="Design and Code Showcase"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Floating Tool Cards */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700"
              >
                <tool.icon className={`w-4 h-4 ${tool.color}`} />
                <span className="text-sm font-medium hidden md:inline">{tool.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-12 md:gap-20 mt-24"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Self and Others section with scroll transforms
const SelfOthersSection = ({ isNonMobileScreens }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const selfX = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const othersX = useTransform(scrollYProgress, [0.2, 0.7], [200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const selfOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const othersOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id="about" ref={sectionRef} className="about_section relative overflow-hidden">
      <Hero />
      <GradientBox
        content={
          <>
            <div className="relative w-full dark:-mt-60 lg:dark:-mt-80 pt-0 md:px-20">
              <div className="difference flex flex-col p-2">
                <div className="flex items-center gap-36">
                  <div className="flex">
                    <motion.p
                      style={{ x: selfX, opacity: selfOpacity }}
                      className="lg:text-[22rem] font-bold text-[10rem]"
                    >
                      Self
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="font-bold lg:text-[10rem] md:mt-0 new-font mb-10 text-[3rem] flex items-end"
                    >
                      and
                    </motion.p>
                  </div>

                  {isNonMobileScreens && (
                    <motion.p
                      style={{ opacity: textOpacity }}
                      className="mt-20 text-xl"
                    >
                      My standout quality lies in my versatility across diverse
                      fields within technology. While others may specialize in one
                      area, I excel in web development, mobile app development,
                      backend solutions, and UI/UX design. This versatility allows
                      me to offer unique insights, solve complex problems
                      creatively, and deliver innovative solutions that stand out in
                      the competitive landscape.
                    </motion.p>
                  )}
                </div>
                <div className="flex justify-between md:-mt-48 -mt-24">
                  <motion.p
                    style={{ x: othersX, opacity: othersOpacity }}
                    className="lg:text-[22rem] font-bold text-[7rem] text-left"
                  >
                    Others
                  </motion.p>
                </div>
                {!isNonMobileScreens && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="p-2 text-xl">
                      My standout quality lies in my versatility across diverse
                      fields within technology. While others may specialize in one
                      area, I excel in web development, mobile app development,
                      backend solutions, and UI/UX design. This versatility allows
                      me to offer unique insights, solve complex problems
                      creatively, and deliver innovative solutions that stand out in
                      the competitive landscape.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </>
        }
      />
    </section>
  );
};

const Index = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AnimatedDivider />

      {/* New Modern Design & Code Section */}
      {/* <DesignCodeSection /> */}

      <AboutSection />
      <WorkSection />
      <ExperienceSection />
     <ServiceSection/>

     

      <SelfOthersSection isNonMobileScreens={isNonMobileScreens} />

      {/* <AnimatedDivider /> */}
      {/* <ScrollDivider text="SKILLS & EXPERTISE" /> */}

      {/* <FeaturedSection/> */}
      <Creative />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;
