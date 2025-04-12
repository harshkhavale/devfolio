import React from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import { AppWindow } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Bolt } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Figma } from "lucide-react";
import { backend, mobile, uiux, website } from "../assets";

export const services =[
    {
        
      title: "web",
      desc: "As a Frontend Developer,I specialize in crafting captivating user experiences with technologies like React.js and Next.js. Proficient in HTML, CSS, and JavaScript, I create responsive designs using frameworks like Tailwind CSS. My focus on detail ensures seamless navigation and engagement across devices",
      image: website
    },
    {
      title: "mobile",
      desc: "In the realm of Mobile Development,Specializing in Android, React Native, and Flutter, I create cross-platform applications with native-like experiences. By leveraging frontend expertise, I prioritize performance and usability, delivering engaging mobile solutions across devices.",
      image:mobile

    },
    {
      title: "backend",
      desc: "In my role as a Backend Developer,With expertise in Express.js, Node.js, and more, I architect robust server-side solutions for dynamic web applications. I excel in database management with SQL, Firebase, and MongoDB, optimizing performance and reliability. My REST API proficiency ensures smooth interactions and scalability.",
      image:backend

    },
    {
      title: "ui/ux",
  
      desc: "As a UI/UX Designer, I design intuitive interfaces using tools like Figma, blending creativity with user-centric principles. Attention to detail and collaboration with development teams ensure seamless integration of design and functionality, enhancing the overall user experience",
      image:uiux

    },
  ];

  export const testimonials = [
    {
        id:1,
      name: "Manish S.",
      image: "https://via.placeholder.com/150",
      testimonial: "I've worked with Harsh on several projects, and he's consistently delivering high-quality, intuitive designs. His attention to detail and creativity make him a favorite among my teammates."
    },
    {        id:2,

      name: "Vikas Maderna",
      company: "Manager at Salesforce",
      image: "https://via.placeholder.com/150",
      testimonial: "Harsh is a skilled and dedicated developer. His ability to create clean, efficient code and maintain high-quality designs is truly commendable."
    },
    {        id:3,

        name: "Akkshara P.",
      image: "https://via.placeholder.com/150",
      testimonial: "Working with Harsh K. on my Art and Dirt website was exceptional. His professionalism and web development expertise were clear from the start, seamlessly translating my vision into a beautiful, functional site. Harsh's creativity and technical skills ensured an efficient process, perfectly capturing the essence of Art and Dirt. I highly recommend him for any web development projects – his dedication and talent truly shine"
    }

  ]