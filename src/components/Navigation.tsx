import React from "react";
import AnimatedText from "./animations/AnimatedText";

const Navigation = () => {
  return (
    <div className="hidden md:flex gap-x-8 text-[18px] 2xl:text-[23px] text-[2rem]/6">
      <AnimatedText text="[ About ]" href="#about" />
      <AnimatedText text="[ Experience ]" href="#experience" />
      <AnimatedText text="[ Reviews ]" href="#testimonials" />
      {/* <AnimatedText text="[ Projects ]" href="#projects" /> */}
      {/* <AnimatedText text="[ Blog ]" href="/blog" /> */}
    </div>
  );
};

export default Navigation;
