import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex sm:items-center justify-center pt-20">
      <h1 className="font-bold uppercase flex flex-col h1-hero">
        <div className="flex justify-center">
          <span className="text-clip-bg">full stack</span>
        </div>
        <span className="text-clip-bg">developer</span>
      </h1>
    </div>
  );
};

export default Hero;
