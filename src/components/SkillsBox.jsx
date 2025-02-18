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

import { fadeIn, textVariant } from "../utils/motion";
import { box, box2 } from "../assets";


export const SkillsBox = ({isDark}) => {
  return (
    <section id="featured">
      <div className="md:mx-40 mx-10 relative">
        <p className=" font-bold text-5xl flex mb-8 items-center gap-4 z-50 md:text-7xl">
          SKILLBOX
          <img src={isDark?box2:box} className={`${isDark?'h-16':'h-20'}`} alt="" />
        </p>

        <div className="bucket happy-font  flex flex-wrap gap-4 text-sm">
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}  className="frontend dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {frontend.map((fe, index) => (
                <p
                  key={fe.name}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
                  style={{ borderColor: fe.color }}
                >
                  {fe.name}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 2, 0.75)} className="frontend dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Backend</p>
            <div  className="flex flex-wrap gap-2">
              {backendtech.map((be, index) => (
                <p
                  key={be.name}
                  style={{ borderColor: be.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
                >
                  {be.name}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 3, 0.75)}  className="frontend dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Database</p>
            <div className="flex flex-wrap gap-2">
              {database.map((db, index) => (
                <p
                  key={db.name}
                  style={{ borderColor: db.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
                >
                  {db.name}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 4, 0.75)}  className="frontend relative overflow-hidden dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Devops</p>
            <div className="flex flex-wrap gap-2 p-4">
              {devops.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
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
          </motion.div>
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 5, 0.75)}  className="frontend overflow-hidden relative dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Mobile</p>
            <div className="flex flex-wrap gap-2 p-4">
              {mobiletech.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
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
          </motion.div>
          <motion.div       variants={fadeIn("right", "spring", 0.5 * 6, 0.75)}  className="frontend overflow-hidden relative dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Web 3</p>
            <div className="flex flex-wrap gap-2 p-4">
              {web3.map((dv, index) => (
                <p
                  key={dv.name}
                  style={{ borderColor: dv.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
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
          </motion.div>

          <motion.div       variants={fadeIn("right", "spring", 0.5 * 7, 0.75)}  className="frontend dark:bg-zinc-800 bg-gray-200   rounded-3xl p-4">
            <p className="font-bold mb-4">Tool's</p>
            <div className="flex flex-wrap gap-2">
              {webtools.map((wt, index) => (
                <p
                  key={wt.name}
                  style={{ borderColor: wt.color }}
                  className={` dark:text-white border-2 happyfont font-bold border-black dark:bg-black p-2 rounded-xl`}
                >
                  {wt.name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
