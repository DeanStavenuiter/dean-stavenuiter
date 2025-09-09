import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center mt-[50px] md:mt-[100px]">
      <h1 className="font-bold uppercase flex flex-start flex-col h1-hero w-[95%]">
        <div className="flex justify-center w-full">
          <span className="text-clip-bg w-full">full stack</span>
        </div>
        <div className="flex justify-center w-full">
          <span className="text-clip-bg w-full">developer</span>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
