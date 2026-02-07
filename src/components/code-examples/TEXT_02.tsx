"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Text01() {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(useGSAP);

  const text = `TEXT`;
  const textRefChars = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const splitChars = new SplitText(textRefChars.current, { type: "chars" });

    gsap.from(splitChars.chars, {
      y: 150,
      opacity: 0.5,
      duration: 0.4,
      ease: "power1.inOut",
      stagger: {
        from: "end",
        each: 0.05,
      },
    });
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <span
        ref={textRefChars}
        className="font-bold text-[#082aff]"
        style={{ fontSize: "clamp(3rem, 10vw, 110px)" }}
      >
        {text}
      </span>
    </div>
  );
}
