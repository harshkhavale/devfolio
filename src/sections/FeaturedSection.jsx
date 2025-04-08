
import React from "react";
import { frontend, backend, database, devops, tools } from "../constants";
import { PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { title: "Backend", items: backend },
  { title: "Database", items: database },
  { title: "Frontend", items: frontend },

  { title: "DevOps", items: devops },
  { title: "Tools", items: tools },
];

export const FeaturedSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-20 px-4">
      {/* Blurred Background Balls */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full blur-3xl opacity-20"></div> */}

      {/* Content */}
      <div className="relative z-10 mx-auto text-center">
      <p className=' text-5xl text-center'>My Developer Arsenal</p>
      <p className=" mb-12">
          Technologies and tools I work with daily
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {categories.map((category) => (
            <div key={category.title} className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur-md">
              <h3 className="text-8xl font-semibold text-white/10 text-gray-300 mb-4 ">{category.title}</h3>
              <ul className="space-y-2 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.li
                    key={item.name}
                    className="flex relative border-4
                     text-nowrap rounded-3xl p-2 w-min items-center gap-3 text-xl"
                    whileHover={{ scale: 1.05 }}
                    style={{ borderColor: item.color }}

                  >
                    {/* <span
                      className="w-4 absolute top-0 h-4"
                      style={{ backgroundColor: item.color }}
                    ></span> */}
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
