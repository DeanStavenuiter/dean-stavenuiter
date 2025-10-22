"use client";
import React, { useEffect, useRef } from "react";
import AnimatedTitle from "./animations/AnimatedTitle";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textContainerRef.current) return;

    // Store ref value to use in cleanup
    const container = textContainerRef.current;

    // Initialize SplitText on all paragraphs
    const paragraphs = container.querySelectorAll("p");
    const typeSplit = new SplitText(paragraphs, {
      type: "lines",
      linesClass: "split-line",
    });

    // Set initial state for lines
    gsap.set(typeSplit.lines, {
      opacity: 0,
      y: 20,
    });

    // Animate lines on scroll
    gsap.to(typeSplit.lines, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
      typeSplit.revert();
    };
  }, []);

  return (
    <section id="about" className=" md:py-20 px-6 md:px-20">
      <AnimatedTitle title="About Me" />
      <article
        ref={textContainerRef}
        className="max-w-4xl mx-auto space-y-6 [&_.split-line]:overflow-visible"
      >
        <div className="flex justify-center">
          <div className="relative justify-center flex rounded-full overflow-hidden w-[150px] h-[150px] mt-6 md:mt-0">
            <Image
              src="/dean-stavenuiter.webp"
              alt="Dean Stavenuiter"
              width={200}
              height={200}
              className="absolute rounded-full drop-shadow-lg object-cover scale-140 bottom-[16px] left-[4px]"
            />
          </div>
        </div>
        <p className="text-lg leading-relaxed text-black">
          Hi, I&apos;m Dean, a Fullstack & OutSystems Developer with a
          background that is a little different from most. Before moving into
          tech, I spent more than 14 years working as a chef in Michelin-starred
          kitchens. That environment taught me discipline, attention to detail,
          and how to create experiences people value, which I now bring into my
          work as a developer.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          During Covid I decided to change careers and taught myself
          programming. After finishing an intensive online course, I joined HSO,
          where I currently work on enterprise applications using OutSystems. In
          my free time I like to build websites, developer tools, and side
          projects with modern web technologies such as Next.js, React, Prisma,
          MongoDB, and AWS.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          What motivates me is creating things that people actually use. Whether
          it&apos;s a tool that improves a workflow or a full-scale application,
          I enjoy building solutions that bring real value. I have already
          earned several OutSystems certifications and I continue to push myself
          to grow in high-code development.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Outside of coding I enjoy training Brazilian Jiu-Jitsu and going to
          the gym, which help me stay sharp and focused for new challenges.
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
