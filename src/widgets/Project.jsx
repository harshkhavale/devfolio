import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  return (
    <Link
      to={`/project?projectId=${project.id}`}
      className=" md:h-60 h-28 m-auto relative rounded-3xl flex justify-center items-center"
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
          className="w-full border-2 border-current h-full object-cover"
        />
      </div>
    </Link>
  );
};

export default Project;
