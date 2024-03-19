// #animations
import backendanimation from "../assets/animation/backend.json";
import webanimation from "../assets/animation/web.json";
import appanimation from "../assets/animation/appdevelopment.json";
import uixanimation from "../assets/animation/uix.json";
import {
  variables,
  variablesbanner,
  variableslogo,
  spotifybanner,
  socialbanner,
  airbnbbanner,
  javascriptCertificate,
  problemSolvingCertificate,
  dsacertificate,
  javacertificate,
  linuxcertificate,
  browser,
  mobile,
  backend,
  ui,
  googleCertificate,
  netfundamentalscertificate,
  androidcertificate,
  dataminingcertificate,
  frontendcertificate,
} from "../assets";
import XIcon from "@mui/icons-material/X";

import {
  socialanime,
  spotifyanime,
  spotifydashboard,
  spotifydashboardmobile,
  spotifylogo,
  spotifymain,
  spotifymainmobile,
  urbananalysis,
  urbancartmobile,
  urbandetail,
  urbandetailmobile,
  urbanmain,
  urbanmainmobile,
  urbanshowcase,
  urbansigninmobile,
  urbanstorebanner,
  urbanstorelogo,
} from "../assets/projects";
import { GitHub } from "@mui/icons-material";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "featured",
    title: "Featured",
  },
];

export const services = [
  {
    title: "Web Developer",
    animation: webanimation,
    icon: browser,
  },
  {
    title: "Mobile Application Developer",
    animation: appanimation,
    icon: mobile,
  },
  {
    title: "Backend Developer",
    animation: backendanimation,
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    animation: uixanimation,
    icon: ui,
  },
];
const frontend = [
  {
    name: "HTML5",
    color: "#E74C3C",
  },
  {
    name: "CSS3",
  },
  {
    name: "JavaScript",
    color: "#FFEB3B",
  },
  {
    name: "TypeScript",
    color: "#2980B9",
  },
  {
    name: "Three.Js",
  },
  {
    name: "Tailwind CSS",
    color: "#48C9B0",
  },
  {
    name: "Shadcn UI",
  },
  {
    name: "React Js",
    color: "#2196F3",
  },
  {
    name: "Next Js 14",
  },
  {
    name: "figma",
    color: "#EC407A",
  },
];

const webtools = [
  {
    name: "Redux Toolkit",
    color: "#7E57C2",
  },
  {
    name: "git /GitHub",
  },
  {
    name: "postman",
    color: "#FB8C00",
  },
];
const web3 = [
  {
    name: "Solidity",
    color: "#78909C ",
  },
  {
    name: "Metamask",
    color: "#FFCA28",
  },
  {
    name: "WEB3",
    color: "#9C27B0",
  },
];
const mobiletech = [
  {
    name: "Android",
    color: "#4CAF50",
  },
  {
    name: "Flutter",
  },
  {
    name: "React Native",
    color: "#2196F3",
  },
];
const backendtech = [
  {
    name: "Node JS",
    color: "#4CAF50",
  },

  {
    name: "Java",
    color: "#FFEB3B",
  },
  {
    name: "Python",
    color: "#FFEB3B",
  },
  {
    name: "PHP",
  },
  {
    name: "C/C++",
  },
  {
    name: "express Js",
    color: "#B0BEC5",
  },
  {
    name: "asp.net",
  },
];

const database = [
  {
    name: "MongoDB",
    color: "#4CAF50",
  },
  {
    name: "Firebase",
    color: "#FFEB3B",
  },
  {
    name: "MySQL",
  },
  {
    name: "GraphQL",
  },
  {
    name: "PostgreSQL",
    color: "#2196F3",
  },
  {
    name: "Redis",
    color: "#F44336",
  },
];
const devops = [
  {
    name: "Docker",
    color: "#2196F3",
  },
  {
    name: "GIT",
    color: "#B0BEC5",
  },
  {
    name: "Jenkins",
  },
  {
    name: "AWS",
  },
];

export { frontend, database, devops, backendtech, webtools, mobiletech, web3 };

export const certificates = [
  {
    title: "Google",
    link: "https://www.hackerrank.com/certificates/c3536b132243",
    img: googleCertificate,
  },
  {
    title: "Javascript",
    link: "https://www.hackerrank.com/certificates/c3536b132243",
    img: javascriptCertificate,
  },
  {
    title: "Linux ",
    link: "",
    img: linuxcertificate,
  },
  {
    title: "Problem Solving",
    link: "https://www.hackerrank.com/certificates/0644fd90b3c2",
    img: problemSolvingCertificate,
  },
  {
    title: "DSA",
    link: "",
    img: dsacertificate,
  },
  {
    title: "Java",
    link: "",
    img: javacertificate,
  },
];
export const certificates2 = [
  {
    title: ".NET Certificate",
    link: "https://www.hackerrank.com/certificates/c3536b132243",
    img: netfundamentalscertificate,
  },
  {
    title: "Android Certificate",
    link: "https://www.hackerrank.com/certificates/c3536b132243",
    img: androidcertificate,
  },
  {
    title: "Data Mining Certificate",
    link: "",
    img: dataminingcertificate,
  },
  {
    title: "Frontend CSS",
    link: "https://www.hackerrank.com/certificates/0644fd90b3c2",
    img: frontendcertificate,
  },
];

export const projects = [
  {
    title: "VARIABLES",
    bannerImg: variablesbanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#ECF0F1",
    theme2: "#41566e",
    theme2: "#232426",
    color: "#17202A",
    logo: variableslogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: variables,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "URBAN_STORE",
    bannerImg: urbanstorebanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#E74C3C",
    theme2: "#41566e",
    theme2: "#232426",
    color: "#FDFEFE",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: "https://urban-store-in-apk.vercel.app/",
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: urbandetail,
      },
      {
        name: "Home",
        image: urbanshowcase,
      },
      {
        name: "Home",
        image: urbananalysis,
      },
    ],
    pages: [
      {
        title: "Home",
        image: urbanmain,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanmainmobile,
      },
      {
        image: urbancartmobile,
      },
      {
        image: urbandetailmobile,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },

  {
    title: "SPOTIFY",
    bannerImg: spotifybanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#2ECC71",
    theme2: "#00ff1a",
    theme2: "#232426",
    color: "#FDFEF",
    logo: spotifylogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: spotifymain,
      },
      {
        name: "Home",
        image: spotifydashboard,
      },
    ],
    pages: [
      {
        title: "Home",
        image: spotifymain,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: spotifymainmobile,
      },
      {
        image: spotifydashboardmobile,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "SOCIAL",
    bannerImg: socialanime,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#D6EAF8",
    theme2: "#41566e",
    theme2: "#232426",
    color: "black",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanstorelogo,
      },
      {
        image: urbanstorelogo,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
  {
    title: "airbnb",
    bannerImg: airbnbbanner,
    tagline: "let's get up to date",
    technologies: [
      "ASP.NET",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstarp",
      "RazorPay",
    ],
    theme: "#F8BBD0",
    theme2: "#41566e",
    theme2: "#232426",
    color: "black",
    logo: urbanstorelogo,
    startDate: "Nov/2022",
    endDate: "Jan/2023",
    github: "https://github.com/harshkhavale/asp.net-mobile-shopee-variables",
    deploy: null,
    headerText: "variables is an Digital electronics gadget ecommerse website.",
    slider: [
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
      {
        name: "Home",
        image: variables,
      },
    ],
    pages: [
      {
        title: "Home",
        image: variables,
        info: "Icon has the ability to adjust the layout and order of most any page on the website. As seen on the homepage there's a newsletter sign up, announcement, featured collections, product categories, career listing, and recent limiter posts.",
      },
    ],
    mobile: [
      {
        image: urbanstorelogo,
      },
      {
        image: urbanstorelogo,
      },
    ],
    next: {
      title: "URBANSTORE",
      to: "/urbanstore",
    },
  },
];
