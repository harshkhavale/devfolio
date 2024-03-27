import React from "react";
import { motion } from "framer-motion";
import {
  database,
  webtools,
  backendtech,
  mobiletech,
  frontend,
  devops,
  web3,
} from "../constants";
import { BsBoxSeam } from "react-icons/bs";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const TechCard = ({ name, index, icon }) => {
  return (
    <div className=" shadow-2xl p-1 m-1 rounded-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  p-[1px]  "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" overflow-hidden flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt={name}
            className="md:w-12 md:h-12 w-10 h-10 object-contain -"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const SkillsBox = () => {
  return (
    <div>
      <div className="md:mx-40 mx-10 relative">
        <p className=" font-bold text-7xl z-50 md:text-9xl">SKILL's BUCKET</p>

        <div className=" absolute right-0 flex item-center happy-font font-bold text-5xl">
          <BsBoxSeam className=" h-20 w-20 -rotate-6" />
        </div>
        <div className="bucket happy-font  flex flex-wrap gap-4 text-sm">
          <div className="frontend bg-zinc-800  rounded-md p-4">
            <p className="font-bold mb-4">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {frontend.map((fe, index) => (
                <p
                  key={fe.name}
                  className={` text-white border-2 happy-font font-bold border-black bg-black p-2 rounded-xl`}
                  style={{ borderColor: fe.color }}
                >
                  {fe.name}
                </p>
              ))}
            </div>
          </div>
          <div className="frontend bg-zinc-800  rounded-md p-4">
            <p className="font-bold mb-4">Backend</p>
            <div className="flex flex-wrap gap-2">
              {backendtech.map((be, index) => (
                <p
                  key={be.name}
                  style={{ borderColor: be.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {be.name}
                </p>
              ))}
            </div>
          </div>
          <div className="database bg-zinc-800  rounded-md p-4">
            <p className="font-bold mb-4">Database</p>
            <div className="flex flex-wrap gap-2">
              {database.map((db, index) => (
                <p
                  key={db.name}
                  style={{ borderColor: db.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {db.name}
                </p>
              ))}
            </div>
          </div>
          <div className="devops relative bg-zinc-800 overflow-hidden  rounded-md p-4 ">
            <p className="font-bold mb-4">Devops</p>
            <div className="flex flex-wrap gap-2 p-4">
              {devops.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {dv.name}
                </p>
              ))}
            </div>
            <progress
              className="absolute bottom-0 w-full mt-8 -start-0 progress progress-accent"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="mobile relative bg-zinc-800 overflow-hidden  rounded-md p-4 ">
            <p className="font-bold mb-4">Mobile</p>
            <div className="flex flex-wrap gap-2 p-4">
              {mobiletech.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {dv.name}
                </p>
              ))}
            </div>
            <progress
              className="absolute bottom-0 w-full mt-8 -start-0 progress progress-error"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="web3 relative bg-zinc-800 overflow-hidden  rounded-md p-4 ">
            <p className="font-bold mb-4">Web 3</p>
            <div className="flex flex-wrap gap-2 p-4">
              {web3.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {dv.name}
                </p>
              ))}
            </div>
            <progress
              className="absolute bottom-0 w-full mt-8 -start-0 progress progress-primary"
              value="40"
              max="100"
            ></progress>
          </div>

          <div className="tool's bg-zinc-800  rounded-md p-4">
            <p className="font-bold mb-4">Tool's</p>
            <div className="flex flex-wrap gap-2">
              {webtools.map((wt, index) => (
                <p
                  key={wt.name}
                  style={{ borderColor: wt.color }}
                  className={` text-white border-2 border-black bg-black p-2 rounded-xl`}
                >
                  {wt.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
