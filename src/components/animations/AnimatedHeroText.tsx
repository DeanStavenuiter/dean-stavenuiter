"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const Hero = () => {

  const span1 = useRef<HTMLSpanElement>(null);
  const span2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!span1.current || !span2.current) return;
  
    const splitSpan1 = new SplitText(span1.current, { type: "chars" });
    const splitSpan2 = new SplitText(span2.current, { type: "chars" });

    gsap.from(splitSpan1.chars, {
      opacity: 0,
      y: -50,
      ease: "power4.inOut",
      stagger: {
        from: "edges",
        each: 0.1,
      },
      onStart: () => {
        span1.current?.classList.add('gsap-initialized');
      }
    });
  
    gsap.from(splitSpan2.chars, {
      opacity: 0,
      y: -50,
      ease: "power4.inOut",
      stagger: {
        from: "edges",
        each: 0.1,
      },
      onStart: () => {
        span2.current?.classList.add('gsap-initialized');
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center mb-40">
      <h2 className="font-bold uppercase flex flex-start h1-hero flex-col w-[100%] mt-[150px] ">
        <div className="flex justify-center w-full">
          <span className="text-clip-bg w-full text-clip-bg" ref={span1}>fullstack</span>
        </div>
        <div className="flex justify-center w-full">
          <span className="text-clip-bg w-full text-clip-bg" ref={span2}>developer</span>
        </div>
      </h2>
    </div>
  );
};

export default Hero;
