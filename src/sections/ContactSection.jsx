import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
} from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://qaing.surecontact.com/embed/forms.js";
    script.async = true;
    script.onload = () => {
      if (window.SureContactForms) {
        window.SureContactForms.render({
          formId: "cf951d27-4791-4967-8fd3-dd47710e75aa",
          container: "#surecontact-form-portfolio-query",
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/harshk-bsf", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshkhavale", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/harshkhavale", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, text: "harshkhavale.work@gmail.com", label: "Email" },
    { icon: MapPin, text: "India", label: "Location" },
    { icon: Clock, text: "Available for freelance", label: "Status" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
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
            Get In Touch
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Would you like to
            <span className="block">
              work together?
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black dark:bg-white" />
              <div className="relative p-8 md:p-10 border-2 border-black dark:border-white bg-white dark:bg-zinc-900">
                <div id="surecontact-form-portfolio-query" />
              </div>
            </div>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Big Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-6xl md:text-8xl font-bold excalidraw">
                Harsh K.
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-400 mt-2">
                Full Stack Developer & Designer
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
                    <info.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium">{info.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 w-fit"
            >
              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Available for new projects
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
