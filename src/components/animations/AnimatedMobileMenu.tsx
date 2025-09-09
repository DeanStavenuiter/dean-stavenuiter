"use client"
import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const AnimatedMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const leftBracketRef = useRef<HTMLSpanElement>(null)
  const rightBracketRef = useRef<HTMLSpanElement>(null)
  const menuTextRef = useRef<HTMLSpanElement>(null)
  const closeTextRef = useRef<HTMLSpanElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      // Create a timeline for coordinated animation
      const tl = gsap.timeline()
      
      // First: Fade out menu text
      tl.to(menuTextRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (menuTextRef.current) {
            menuTextRef.current.style.display = 'none'
          }
        }
      })
      
      // Simultaneously: Slide brackets towards each other (closing in on the fixed width)
      .to(leftBracketRef.current, {
        x: 20, // Move right 
        duration: 0.4,
        ease: "power2.inOut"
      }, 0) // Start at same time as text fade
      
      .to(rightBracketRef.current, {
        x: -20, // Move left 
        duration: 0.4,
        ease: "power2.inOut"
      }, 0) // Start at same time as text fade
      
      // Finally: Fade in the x text
      .fromTo(closeTextRef.current, 
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.2,
          ease: "power2.inOut",
          onStart: () => {
            if (closeTextRef.current) {
              closeTextRef.current.style.display = 'inline-block'
            }
          }
        }, 0.2) // Start after text has faded out
      
    } else {
      // Reverse animation
      const tl = gsap.timeline()
      
      // First: Fade out x text
      tl.to(closeTextRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (closeTextRef.current) {
            closeTextRef.current.style.display = 'none'
          }
        }
      })
      
      // Simultaneously: Slide brackets back to original positions
      .to(leftBracketRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, 0)
      
      .to(rightBracketRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, 0)
      
      // Finally: Fade in menu text
      .fromTo(menuTextRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.inOut",
          onStart: () => {
            if (menuTextRef.current) {
              menuTextRef.current.style.display = 'inline-block'
            }
          }
        }, 0.2)
    }
  }, [isOpen])

  return (
    <>
      {/* Menu Toggle Button */}
      <button 
        onClick={toggleMenu}
        className="block md:hidden group-hover:font-bold pr-10 text-[23px] relative overflow-hidden z-[9999]"
      >
        <span className="inline-block">
          <span ref={leftBracketRef} className="inline-block">[</span>
          <span className="inline-block" style={{ width: '60px', textAlign: 'center' }}>
            <span 
              ref={menuTextRef}
              className="inline-block"
            >
              menu
            </span>
            <span 
              ref={closeTextRef}
              className="inline-block opacity-0"
              style={{ display: 'none' }}
            >
              x
            </span>
          </span>
          <span ref={rightBracketRef} className="inline-block">]</span>
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-500 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Bar */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Menu</h2>
          
          <nav className="space-y-6">
            <a 
              href="#about" 
              className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AnimatedMobileMenu