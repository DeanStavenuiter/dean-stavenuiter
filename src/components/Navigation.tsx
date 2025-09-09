import React from "react";
import AnimatedText from "./animations/AnimatedText";

const Navigation = () => {
  return (
    <div className="hidden md:flex gap-x-8 text-[18px] 2xl:text-[23px]">
      <AnimatedText text="[ About ]" href="/about" />
      <AnimatedText text="[ Works ]" href="/works" />
      <AnimatedText text="[ Contact ]" href="/contact" />
      <AnimatedText text="[ Blog ]" href="/blog" />
    </div>
  );
};

export default Navigation;
