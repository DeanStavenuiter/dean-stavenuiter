"use client";

import React from "react";
import AnimatedTitle from "./animations/AnimatedTitle";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20">
      <AnimatedTitle title="Projects" />

      <article className="max-w-4xl mx-auto mt-8 md:mt-12">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <Link
              href="https://trex.deanstavenuiter.nl"
              target="_blank"
              className="mx-auto sm:mx-0 shrink-0"
            >
              <Image
                src="/trex-no-name-no-bg.png"
                alt="TREX"
                width={85}
                height={85}
                className="drop-shadow-lg w-20 h-20 sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 text-center sm:text-left">
                TREX
              </h3>
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed text-gray-700">
                <p>
                  Do you work on a Mac and constantly lose something you copied
                  a minute ago?
                </p>
                <p>
                  Same here — so I built{" "}
                  <span className="font-semibold text-black">TREX</span>.
                </p>
                <p>
                  It&apos;s a clean, fast clipboard manager that keeps your
                  entire copy history at your fingertips.
                </p>
                <p className="break-words">
                  Check it out here:{" "}
                  <a
                    href="https://trex.deanstavenuiter.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors break-all"
                  >
                    trex.deanstavenuiter.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
