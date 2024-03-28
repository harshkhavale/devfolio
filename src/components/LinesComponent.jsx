import React from "react";

const LinesComponent = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-full m-auto w-90vw">
      <div className="line" style={{ marginLeft: "-25%" }}>
        <div className="line-after"></div>
      </div>
      <div className="line">
        <div className="line-after" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="line" style={{ marginLeft: "25%" }}>
        <div className="line-after" style={{ animationDelay: "2.5s" }}></div>
      </div>
    </div>
  );
};

export default LinesComponent;
