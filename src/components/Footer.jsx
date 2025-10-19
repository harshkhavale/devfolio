import { Github, Linkedin, Mail, X } from "lucide-react";
import React from "react";
const Footer = () => {
  const contacts = [
    {
      id: "linkdin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/harshkhavale11/",
      icon: <Linkedin/>,
    },
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/harshkhavale",
      icon: <Github />,
    },
    {
      id: "email",
      title: "Gmail",
      url: "harshkhavale1102@gmailcom",
      icon: <Mail />,
    },
    {
      id: "X",
      title: "X",
      url: "https://twitter.com/HarshKhavale",
      icon: <X/>,
    },
  ];
  return (
    <div className="relative flex justify-center gap-4 items-center p-2">
      <div>
        <p className="font-bold md:text-xl text-sm text-[#000000] dark:text-white">
          harshkhavale@2025
        </p>
      </div>
      <div className="bg-[#000000] dark:bg-white h-8 p-1"></div>
      <div className="contact p-2 ">
        <ul className="list-none flex my-4 gap-2">
          {contacts.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              className={` shadow-2xl rounded-full p-1 text-[#000000] dark:text-white gap-2 font-medium cursor-pointer `}
            >
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
