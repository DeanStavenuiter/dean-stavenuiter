import React from "react";
import AnimatedText from "./animations/AnimatedText";

const Navigation = () => {
  return (
    <div className="flex justify-center items-center z-[99999] fixed gap-x-8">
      <AnimatedText text="[ About ]" href="/about" />
      <AnimatedText text="[ Works ]" href="/works" />
      <AnimatedText text="[ Contact ]" href="/contact" />
      <AnimatedText text="[ Blog ]" href="/blog" />
    </div>
  );
};

export default Navigation;
