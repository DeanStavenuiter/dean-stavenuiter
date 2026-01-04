"use client";
import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import { gsap } from "gsap";

// Create a context for sharing state between button and popup
const MobileMenuContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

export const MobileMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle body scroll when menu state changes
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isOpen) {
      // Store original values
      const originalBodyOverflow = body.style.overflow;
      const originalHtmlOverflow = html.style.overflow;

      // Prevent scrolling
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";

      // Cleanup function to restore original values
      return () => {
        body.style.overflow = originalBodyOverflow || "auto";
        html.style.overflow = originalHtmlOverflow || "auto";
      };
    } else {
      // Restore scrolling
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const MobileMenuPopup = () => {
  const context = useContext(MobileMenuContext);
  if (!context) return null;

  const { isOpen, setIsOpen } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          height: "100vh",
        }}
      >
        <div className="p-8 pt-8 mt-[125px] text-right font-spline-sans-mono">
          <h2 className="text-2xl font-bold mb-8 text-black font-sofia-sans-condensed">Menu</h2>

          <nav className="space-y-6 ">
            <a
              href="#about"
              className="block text-lg text-gray-700"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-lg text-gray-700"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#testimonials"
              className="block text-lg text-gray-700"
              onClick={toggleMenu}
            >
              Reviews
            </a>
            <a
              href="#projects"
              className="block text-lg text-gray-700"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-lg text-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

const AnimatedMobileMenu = () => {
  const leftBracketRef = useRef<HTMLSpanElement>(null);
  const rightBracketRef = useRef<HTMLSpanElement>(null);
  const menuTextRef = useRef<HTMLSpanElement>(null);
  const closeTextRef = useRef<HTMLSpanElement>(null);

  const context = useContext(MobileMenuContext);

  const { isOpen, setIsOpen } = context || {
    isOpen: false,
    setIsOpen: () => {},
  };

  const toggleMenu = () => {
    if (context) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (!context) return;
    if (isOpen) {
      // Create a timeline for coordinated animation
      const tl = gsap.timeline();

      // First: Fade out menu text
      tl.to(menuTextRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (menuTextRef.current) {
            menuTextRef.current.style.display = "none";
          }
        },
      })

        // Simultaneously: Slide brackets towards each other (closing in on the fixed width)
        .to(
          leftBracketRef.current,
          {
            x: 20, // Move right
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        ) // Start at same time as text fade

        .to(
          rightBracketRef.current,
          {
            x: -20, // Move left
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        ) // Start at same time as text fade

        // Finally: Fade in the x text
        .fromTo(
          closeTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
            onStart: () => {
              if (closeTextRef.current) {
                closeTextRef.current.style.display = "inline-block";
              }
            },
          },
          0.2
        ); // Start after text has faded out
    } else {
      // Reverse animation
      const tl = gsap.timeline();

      // First: Fade out x text
      tl.to(closeTextRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (closeTextRef.current) {
            closeTextRef.current.style.display = "none";
          }
        },
      })

        // Simultaneously: Slide brackets back to original positions
        .to(
          leftBracketRef.current,
          {
            x: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        )

        .to(
          rightBracketRef.current,
          {
            x: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        )

        // Finally: Fade in menu text
        .fromTo(
          menuTextRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.2,
            ease: "power2.inOut",
            onStart: () => {
              if (menuTextRef.current) {
                menuTextRef.current.style.display = "inline-block";
              }
            },
          },
          0.2
        );
    }
  }, [isOpen, context]);

  if (!context) return null;

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="block md:hidden group-hover:font-bold text-[23px]/6 relative overflow-hidden z-[999999] font-spline-sans-mono"
      >
        <span className="inline-block">
          <span ref={leftBracketRef} className="inline-block">
            [
          </span>
          <span
            className="inline-block"
            style={{ width: "60px", textAlign: "center" }}
          >
            <span ref={menuTextRef} className="inline-block">
              menu
            </span>
            <span
              ref={closeTextRef}
              className="inline-block opacity-0"
              style={{ display: "none" }}
            >
              x
            </span>
          </span>
          <span ref={rightBracketRef} className="inline-block">
            ]
          </span>
        </span>
      </button>
    </>
  );
};

export default AnimatedMobileMenu;
