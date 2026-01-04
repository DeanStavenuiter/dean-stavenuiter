"use client";
import React, { useEffect, useRef } from "react";
import AnimatedTitle from "./animations/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Dean built a complete website for my new restaurant and guided me through the entire process. After launch, I saw a clear increase in website views and reservations. His professionalism and knowledge exceeded my expectations.",
    name: "Altin",
    role: "Owner",
    company: "Mero",
  },
  {
    quote:
      "Dean created and later fully redesigned my website, significantly improving my Google visibility and client inquiries. Communication was fast, clear, and reliable, and any changes were handled quickly. I would definitely recommend working with him.",
    name: "Denise",
    role: "Owner",
    company: "Denise B Photography",
  },
];

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7.5V11.5H7C7 14.26 9.24 16.5 12 16.5V18.5C8.13 18.5 5 15.37 5 11.5V7.5C5 6.4 5.9 5.5 7 5.5H9C10.1 5.5 11 6.4 11 7.5ZM19 7.5V11.5H15C15 14.26 17.24 16.5 20 16.5V18.5C16.13 18.5 13 15.37 13 11.5V7.5C13 6.4 13.9 5.5 15 5.5H17C18.1 5.5 19 6.4 19 7.5Z"
      fill="currentColor"
    />
  </svg>
);

const Testimonials = (): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".testimonial-card");

    // Set initial state for cards
    gsap.set(cards, {
      opacity: 0,
      y: 40,
    });

    // Animate cards on scroll
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
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
    };
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 md:px-20">
      <AnimatedTitle title="Reviews" />
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="testimonial-card relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
          >
            {/* Quote icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-black rounded-full p-2">
                <QuoteIcon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Quote text */}
            <blockquote className="mt-4 flex-grow">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author info */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div>
                <p className="font-sofia-sans-condensed font-bold text-black text-lg">
                  {testimonial.name}
                </p>
                <p className="font-spline-sans-mono text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

