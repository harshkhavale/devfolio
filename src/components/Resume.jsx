import React from "react";
import { resume } from "../assets";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Resume = () => {
  return (
    <div className="bg-primary hover:bg-white hover:text-black mx-4 hover:scale-105 rounded-3xl flex justify-center items-center ">
      <a
        className="lg:tooltip tooltip-right happy-font font-bold p-2 text-xs"
        data-tip="resume"
        href={resume}
        download="resume.pdf"
      >
        Download
      </a>
    </div>
  );
};

export default Resume;
