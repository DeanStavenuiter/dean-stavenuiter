"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const footer = footerRef.current;
    const elements = footer.querySelectorAll(".footer-element");

    // Set initial state
    gsap.set(elements, {
      opacity: 0,
      y: 20,
    });

    // Animate on scroll
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: footer,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Heart animation timeline with loop
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.fromTo('#heart1', {
      opacity: 1,
      y: 0,
      x: 0,
    }, {
      opacity: 0,
      y: -30,
      x: 15,
      duration: 1.5,
      ease: "power2.out",
    });

    tl.fromTo('#heart2', {
      opacity: 1,
      y: 0,
      x: 0,
    }, {
      opacity: 0,
      y: -30,
      x: -15,
      duration: 1.5,
      ease: "power2.out",
    }, "-=1.0"); // Start 1 second before heart1 finishes for overlap

    // Pulse animation for heart3
    gsap.to('#heart3', {
      scale: 1.2,
      duration: 0.6,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === footer) {
          trigger.kill();
        }
      });
    };
  }, []);


  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deanstavenuiter/",
    },
    {
      name: "GitHub",
      url: "https://github.com/deanstavenuiter",
    },
    {
      name: "Email",
      url: "mailto:info@deanstavenuiter.nl",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="mt-20 border-t border-gray-300 bg-white py-12 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="footer-element">
            <h3 className="text-2xl font-bold text-black mb-4 font-sofia-sans-condensed uppercase tracking-wide">
              Dean Stavenuiter
            </h3>
            <p className="text-base text-gray-700 font-spline-sans-mono">
              Fullstack & OutSystems Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-element">
            <h4 className="text-lg font-semibold text-black mb-4 font-sofia-sans-condensed uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 font-spline-sans-mono">
              <li>
                <a
                  href="#about"
                  className="text-base text-gray-700 hover:text-black transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-base text-gray-700 hover:text-black transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base text-gray-700 hover:text-black transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-element">
            <h4 className="text-lg font-semibold text-black mb-4 font-sofia-sans-condensed uppercase tracking-wide">
              Connect
            </h4>
            <ul className="space-y-2 font-spline-sans-mono">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-700 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-element">
            <h4 className="text-lg font-semibold text-black mb-4 font-sofia-sans-condensed uppercase tracking-wide">Projects</h4>
            <ul className="space-y-2 font-spline-sans-mono">
              <li>
                <a href="https://trex.deanstavenuiter.nl" target="_blank" className="text-base text-gray-700 hover:text-black transition-colors duration-200">
                  TREX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-element border-t border-gray-300 pt-8">
          <div className="text-black text-xs sm:text-sm flex items-center gap-1 order-1 sm:order-2 flex-wrap justify-between">
            <span className="text-black text-xs sm:text-sm flex items-center gap-1 order-2 sm:order-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <div className="relative">
                <svg
                  id='heart1'
                  width="14"
                  height="13"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[3px]"
                >
                  <path
                    d="M10.1208 19.3216L8.65325 18.0059C6.94959 16.4709 5.54111 15.1468 4.42783 14.0335C3.31455 12.9202 2.42898 11.9208 1.77113 11.0352C1.11328 10.1497 0.653632 9.33578 0.392179 8.59359C0.130726 7.8514 0 7.09234 0 6.31642C0 4.73083 0.53134 3.4067 1.59402 2.34402C2.6567 1.28134 3.98083 0.75 5.56642 0.75C6.44355 0.75 7.27851 0.935547 8.0713 1.30664C8.86409 1.67774 9.54725 2.20064 10.1208 2.87536C10.6943 2.20064 11.3774 1.67774 12.1702 1.30664C12.963 0.935547 13.798 0.75 14.6751 0.75C16.2607 0.75 17.5848 1.28134 18.6475 2.34402C19.7102 3.4067 20.2415 4.73083 20.2415 6.31642C20.2415 7.09234 20.1108 7.8514 19.8493 8.59359C19.5879 9.33578 19.1282 10.1497 18.4704 11.0352C17.8125 11.9208 16.927 12.9202 15.8137 14.0335C14.7004 15.1468 13.2919 16.4709 11.5883 18.0059L10.1208 19.3216Z"
                    fill="#ef4444"
                  />
                </svg>
                <svg
                  id='heart2'
                  width="14"
                  height="13"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[3px]"
                >
                  <path
                    d="M10.1208 19.3216L8.65325 18.0059C6.94959 16.4709 5.54111 15.1468 4.42783 14.0335C3.31455 12.9202 2.42898 11.9208 1.77113 11.0352C1.11328 10.1497 0.653632 9.33578 0.392179 8.59359C0.130726 7.8514 0 7.09234 0 6.31642C0 4.73083 0.53134 3.4067 1.59402 2.34402C2.6567 1.28134 3.98083 0.75 5.56642 0.75C6.44355 0.75 7.27851 0.935547 8.0713 1.30664C8.86409 1.67774 9.54725 2.20064 10.1208 2.87536C10.6943 2.20064 11.3774 1.67774 12.1702 1.30664C12.963 0.935547 13.798 0.75 14.6751 0.75C16.2607 0.75 17.5848 1.28134 18.6475 2.34402C19.7102 3.4067 20.2415 4.73083 20.2415 6.31642C20.2415 7.09234 20.1108 7.8514 19.8493 8.59359C19.5879 9.33578 19.1282 10.1497 18.4704 11.0352C17.8125 11.9208 16.927 12.9202 15.8137 14.0335C14.7004 15.1468 13.2919 16.4709 11.5883 18.0059L10.1208 19.3216Z"
                    fill="#ef4444"
                  />
                </svg>
                <svg
                  id='heart3'
                  width="14"
                  height="13"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M10.1208 19.3216L8.65325 18.0059C6.94959 16.4709 5.54111 15.1468 4.42783 14.0335C3.31455 12.9202 2.42898 11.9208 1.77113 11.0352C1.11328 10.1497 0.653632 9.33578 0.392179 8.59359C0.130726 7.8514 0 7.09234 0 6.31642C0 4.73083 0.53134 3.4067 1.59402 2.34402C2.6567 1.28134 3.98083 0.75 5.56642 0.75C6.44355 0.75 7.27851 0.935547 8.0713 1.30664C8.86409 1.67774 9.54725 2.20064 10.1208 2.87536C10.6943 2.20064 11.3774 1.67774 12.1702 1.30664C12.963 0.935547 13.798 0.75 14.6751 0.75C16.2607 0.75 17.5848 1.28134 18.6475 2.34402C19.7102 3.4067 20.2415 4.73083 20.2415 6.31642C20.2415 7.09234 20.1108 7.8514 19.8493 8.59359C19.5879 9.33578 19.1282 10.1497 18.4704 11.0352C17.8125 11.9208 16.927 12.9202 15.8137 14.0335C14.7004 15.1468 13.2919 16.4709 11.5883 18.0059L10.1208 19.3216Z"
                    fill="#ef4444"
                  />
                </svg>
              </div>
              by
              <Link
                href="https://www.deanstavenuiter.nl"
                className="underline decoration-dotted underline-offset-2"
              >
                Dean Stavenuiter
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
