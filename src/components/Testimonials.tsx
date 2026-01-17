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
  {
    quote:
      "I needed a website that clearly communicates what I do. Dean quickly understood my needs and delivered a professional, flexible website. The result is a strong online presence that builds trust, showcases my work, and makes it easier for clients to get in touch. I would definitely recommend working with him.",
    name: "Gianluca",
    role: "Creative/Private Chef",
    company: "Gianluca Vetrugno",
  },
  {
    quote:"Our website was outdated and needed a major upgrade. Dean helped me with building the new website. After delivery, we had a good-working, beautiful website. The contact was always good and fast, and if something needed to be adjusted, he handled it immediately. Yes, I would definitely recommend him.",
    name: "Matthias",
    role: "Owner",
    company: "Belas VOF",
  }
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const container = containerRef.current;
    const cards = Array.from(track.children) as HTMLElement[];
    
    // Clone the cards for seamless infinite scroll
    cards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    // Calculate total width of original cards
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // gap-6
    const totalWidth = (cardWidth + gap) * cards.length;

    // Set up infinite scroll animation
    const animation = gsap.to(track, {
      x: -totalWidth,
      duration: 43, // Adjust speed here (higher = slower)
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    track.addEventListener("mouseenter", () => animation.pause());
    track.addEventListener("mouseleave", () => animation.resume());

    // Initial fade-in animation
    const allCards = track.querySelectorAll(".testimonial-card");
    gsap.set(allCards, { opacity: 0, y: 40 });
    
    ScrollTrigger.create({
      trigger: container,
      start: "top 75%",
      onEnter: () => {
        gsap.to(allCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-20 overflow-x-hidden">
      <div className="px-4 md:px-20">
        <AnimatedTitle title="Reviews" />
      </div>

      <div ref={containerRef} className="w-full mt-12 overflow-hidden py-6">
        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="testimonial-card relative flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Quote icon in border */}
              <div className="absolute -top-5 left-8">
                <div className="bg-black rounded-full p-2.5">
                  <QuoteIcon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="mt-4 flex-grow">
                <p className="text-sm md:text-base leading-relaxed text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="font-sofia-sans-condensed font-bold text-black text-lg">
                  {testimonial.name}
                </p>
                <p className="font-spline-sans-mono text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
