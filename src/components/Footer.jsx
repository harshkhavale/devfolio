import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React from "react";
const Footer = () => {
  const contacts = [
    {
      id: "linkdin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/harshkhavale11/",
      icon: <LinkedIn />,
    },
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/harshkhavale",
      icon: <GitHub />,
    },
    {
      id: "email",
      title: "Gmail",
      url: "harshkhavale1102@gmailcom",
      icon: <Email />,
    },
    {
      id: "X",
      title: "X",
      url: "https://twitter.com/HarshKhavale",
      icon: <X />,
    },
  ];
  return (
    <div className="relative flex justify-center gap-4 items-center p-2">
      <div>
        <p className="font-bold md:text-xl text-sm happy-font">
          harshkhavale@2024
        </p>
      </div>
      <div className="bg-white h-8 p-1"></div>
      <div className="contact p-2 ">
        <ul className="list-none flex my-4 gap-4">
          {contacts.map((link) => (
            <li
              key={link.id}
              className={`bg-white shadow-2xl rounded-full p-1 text-black  gap-2 font-medium cursor-pointer transition-transform transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
