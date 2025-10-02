"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const AnimatedText = ({ text, href }: { text: string; href: string }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  const init = useCallback(() => {
    if (!wrapperRef.current) return;

    gsap.set(wrapperRef.current, { autoAlpha: 1 });
    const split = new SplitText(wrapperRef.current, { type: "chars" });
    splitRef.current = split;

    gsap.from(split.chars, {
      opacity: 0,
      y: -50,
      ease: "back(4)",
      delay: 1.5,
      stagger: {
        from: "edges",
        each: 0.07,
      },
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!splitRef.current || !wrapperRef.current) return;

    const chars = splitRef.current.chars;
    if (chars.length < 2) return;

    // Animate the wrapper to grow slightly, increase font weight, and add glow
    gsap.to(wrapperRef.current, {
      scale: 1.05,
      fontWeight: 900,
      duration: 0.3,
      ease: "power2.out",
    });

    // Move first character left and last character right
    gsap.to(chars[0], {
      x: -10,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(chars[chars.length - 1], {
      x: 10,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!splitRef.current || !wrapperRef.current) return;

    const chars = splitRef.current.chars;
    if (chars.length < 2) return;

    // Reset wrapper scale, font weight, and remove glow
    gsap.to(wrapperRef.current, {
      scale: 1,
      fontWeight: 400,
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset character positions
    gsap.to(chars[0], {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(chars[chars.length - 1], {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Link href={href}>
      <span
        ref={wrapperRef}
        className="uppercase font-spline-sans-mono cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
    </Link>
  );
};

export default AnimatedText;
