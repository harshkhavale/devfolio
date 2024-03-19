import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  return (
    <Link
      to={`/project?projectId=${project.id}`}
      className=" md:h-72 h-40 border-2 border-current relative rounded-3xl overflow-hidden flex justify-center items-center"
    >
      <div>
        <motion.img
          whileHover={{
            scale: 1.1,
            zIndex: 10,
            transition: { ease: "easeInOut" },
          }}
          src={project.image}
          alt=""
          className="w-full h-72 object-cover"
        />
        <div className=" absolute w-full  bottom-0 flex justify-center items-center">
          <h1 className="md:text-[4em] text-2xl font-bold text-black ">
            {project.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Project;
