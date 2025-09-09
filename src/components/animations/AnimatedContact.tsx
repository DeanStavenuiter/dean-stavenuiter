"use client";
import React, { useState } from "react";
import Link from "next/link";

const AnimatedContact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href="/contact" className="uppercase font-spline-sans-mono flex items-center group">
      <div
        className="flex items-center relative contact cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="hidden md:block group-hover:font-bold text-[18px] 2xl:text-[23px] relative">
          contact me{" "}
          <span
            className="underline-contact"
            style={{
              width: isHovered ? "100%" : "0%",
              transition: "width 0.3s ease-out",
            }}
          ></span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
          className="hidden md:block transform rotate-[325deg] transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:font-bold"
        >
          <path d="m547.69-267.69-28.31-28.77L682.92-460H200v-40h482.92L519.38-663.54l28.31-28.77L760-480 547.69-267.69Z" />
        </svg>
      </div>
    </Link>
  );
};

export default AnimatedContact;
