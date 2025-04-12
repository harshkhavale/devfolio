import React from "react";

export default function GradientBox({content}) {
  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-[#261FB3] flex flex-col items-center justify-center px-4 text-center">
      {/* Blurred Gradient Circles */}
      <div className="absolute top-20 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-blue-500 rounded-full filter blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] md:bg-blue-600 rounded-full filter blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:bg-indigo-500 rounded-full filter blur-3xl opacity-20 z-0" />

      {/* Content */}
     {content}
    </div>
  );
}