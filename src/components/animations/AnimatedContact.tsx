"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const AnimatedContact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const init = useCallback(() => {
    if (!contactRef.current) return;

    gsap.fromTo(
      contactRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
        duration: 1.2,
      }
    );
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Link
      href="/contact"
      className="uppercase font-spline-sans-mono flex items-center group text-[2rem]/6"
    >
      <div
        className="flex items-center relative contact cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={contactRef}
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
          fill="currentColor"
          className="hidden md:block transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:font-bold"
        >
          <path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z" />
        </svg>
      </div>
    </Link>
  );
};

export default AnimatedContact;
