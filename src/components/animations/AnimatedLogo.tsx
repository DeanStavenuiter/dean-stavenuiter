"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import SplitText from "gsap/SplitText";

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const span1 = useRef<HTMLSpanElement>(null);
  const span2 = useRef<HTMLSpanElement>(null);
  const span3 = useRef<HTMLSpanElement>(null);
  const span4 = useRef<HTMLSpanElement>(null);

  const init = useCallback(() => {
    if (!logoRef.current) return;

    const splitSpan1 = new SplitText(span1.current, { type: "chars" });
    const splitSpan2 = new SplitText(span2.current, { type: "chars" });
    const splitSpan3 = new SplitText(span3.current, { type: "chars" });
    const splitSpan4 = new SplitText(span4.current, { type: "chars" });

    gsap.from(splitSpan1.chars, {
      opacity: 0,
      x: -50,
      ease: "power4.inOut",
      delay: 1,
      stagger: {
        from: "end",
        each: 0.1,
      },
    });

    gsap.from(splitSpan2.chars, {
      opacity: 0,
      x: -50,
      ease: "power4.inOut",
      delay: 1.2,
      stagger: {
        from: "end",
        each: 0.1,
      },
    });

    gsap.from(splitSpan3.chars, {
      opacity: 0,
      x: -50,
      ease: "power4.inOut",
      delay: 1.4,
      stagger: {
        from: "end",
        each: 0.07,
      },
    });

    gsap.from(splitSpan4.chars, {
      opacity: 0,
      x: -50,
      ease: "power4.inOut",
      delay: 1.6,
      stagger: {
        from: "end",
        each: 0.07,
      },
    });
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Link href="/" className="">
      <h1 className="flex flex-col pl-4" ref={logoRef}>
        <span
          ref={span1}
          className="uppercase font-spline-sans-mono font-bold text-[2rem]/6 tracking-tighter"
        >
          dean
        </span>
        <span
          ref={span2}
          className="uppercase font-spline-sans-mono font-bold text-[2rem]/6 tracking-tighter"
        >
          stav
        </span>
        <span
          ref={span3}
          className="uppercase font-spline-sans-mono font-bold text-[2rem]/6 tracking-tighter"
        >
          enui
        </span>
        <span
          ref={span4}
          className="uppercase font-spline-sans-mono font-bold text-[2rem]/6 tracking-tighter"
        >
          ter.
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
