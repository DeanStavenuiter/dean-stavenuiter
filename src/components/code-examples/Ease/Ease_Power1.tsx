"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function EasePower1() {
  const easeRefIn = useRef<HTMLDivElement>(null);
  const easeRefOut = useRef<HTMLDivElement>(null);
  const easeRefInOut = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(easeRefIn.current, {
      x: 250,
      duration: 2.5,
      ease: "power1.in",
    });

    gsap.to(easeRefOut.current, {
      x: 250,
      duration: 2.5,
      ease: "power1.out",
    });

    gsap.to(easeRefInOut.current, {
      x: 250,
      duration: 2.5,
      ease: "power1.inOut",
    });
  });

  return (
      <div className="flex flex-start flex-col text-white font-bold gap-2 w-full">
        <div className="flex items-center gap-2">
          <span
            ref={easeRefIn}
            className="w-12 h-12 bg-[#082aff] rounded-full flex items-center justify-center"
          >1</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            ref={easeRefOut}
            className="w-12 h-12 bg-[#082aff] rounded-full flex items-center justify-center"
          >2</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            ref={easeRefInOut}
          className="w-12 h-12 bg-[#082aff] rounded-full flex items-center justify-center"
        >3</span>
      </div>
    </div>
  );
}
