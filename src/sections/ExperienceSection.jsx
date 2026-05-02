import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import ottokitLogo from "../assets/work/ottokit-logo-2.png";
import surecontactLogo from "../assets/work/SureContact-Logo-Primary@2x.png";
import bsfLogo from "../assets/work/brainstormforce.jpeg";
import celebalLogo from "../assets/work/celebal.jpeg";
import banaoLogo from "../assets/work/banao.jpeg";

const experiences = [
  {
    company: "Brainstorm Force",
    logo: bsfLogo,
    type: "Full-time · 1 yr 11 mos",
    roles: [
      {
        title: "Software Developer",
        period: "Jul 2025 – Present",
        duration: "11 mos",
        location: "Pune District, Maharashtra, India",
        remote: false,
      },
      {
        title: "Web Developer",
        period: "Jul 2024 – Jun 2025",
        duration: "1 yr",
        location: "Pune City, Maharashtra, India",
        remote: true,
      },
    ],
    products: [
      {
        name: "OttoKit",
        logo: ottokitLogo,
        bg: "bg-[#1a1a2e]",
        description: "WordPress automation & workflow builder",
      },
      {
        name: "SureContact",
        logo: surecontactLogo,
        bg: "bg-white dark:bg-[#1c1c2e]",
        description: "CRM & contact management platform",
      },
    ],
  },
  {
    company: "Celebal Technologies",
    logo: celebalLogo,
    type: "Internship",
    roles: [
      {
        title: "React Developer",
        period: "May 2024 – Jul 2024",
        duration: "3 mos",
        location: "India",
        remote: true,
      },
    ],
    products: [],
  },
  {
    company: "Across The Globe (ATG)",
    logo: banaoLogo,
    type: "Apprenticeship",
    roles: [
      {
        title: "MERN Stack Developer",
        period: "Jan 2024 – Jul 2024",
        duration: "7 mos",
        location: "India",
        remote: true,
      },
    ],
    products: [],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gray-200/40 dark:bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-gray-200/40 dark:bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-zinc-800 mb-6 text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400"
          >
            Work Experience
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Where I've
            <span className="block">
              been building
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 -translate-x-1/2 hidden sm:block">
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute inset-0 origin-top bg-zinc-900 dark:bg-white"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: expIdx * 0.15 }}
                className={`relative flex flex-col ${
                  expIdx % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-8 md:gap-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10 hidden sm:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: expIdx * 0.15 + 0.3 }}
                    className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-white dark:ring-[#191919]"
                  />
                </div>

                {/* Card */}
                <div className={`w-full md:w-[45%] ${expIdx % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  {/* Offset shadow box */}
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
                    <div className="relative bg-white dark:bg-zinc-900 border-2 border-black dark:border-white overflow-hidden">
                    {/* Company header */}
                    <div className="px-8 py-6 border-b-2 border-black dark:border-white">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 overflow-hidden bg-white flex-shrink-0 border border-gray-200 dark:border-zinc-700">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{exp.type}</p>
                        </div>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="px-8 py-6 space-y-5">
                      {exp.roles.map((role, roleIdx) => (
                        <motion.div
                          key={role.title}
                          initial={{ opacity: 0, x: expIdx % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: expIdx * 0.15 + roleIdx * 0.1 + 0.2 }}
                          className={`relative pl-4 ${
                            roleIdx < exp.roles.length - 1
                              ? "pb-5 border-b border-gray-100 dark:border-zinc-800"
                              : ""
                          }`}
                        >
                          <div
                            className="absolute left-0 top-1 w-1 h-full rounded-full bg-zinc-300 dark:bg-zinc-600"
                          />
                          <p className="font-semibold text-lg">{role.title}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {role.period} · {role.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {role.location}
                              {role.remote && (
                                <span className="ml-1 px-1.5 py-0.5 bg-gray-100 dark:bg-zinc-800 rounded text-xs">
                                  Remote
                                </span>
                              )}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Products */}
                    {exp.products.length > 0 && (
                      <div className="px-8 pb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                          Products I worked on
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.products.map((product) => (
                            <motion.div
                              key={product.name}
                              whileHover={{ y: -3, scale: 1.02 }}
                              className={`relative overflow-hidden border border-gray-200 dark:border-zinc-700 p-4 flex flex-col items-center justify-center gap-2 ${product.bg} cursor-default`}
                            >
                              <img
                                src={product.logo}
                                alt={product.name}
                                className="h-8 object-contain"
                              />
                              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                {product.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>

                {/* Empty opposite side for layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
