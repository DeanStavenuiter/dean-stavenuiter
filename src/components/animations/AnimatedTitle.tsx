import React, { useEffect, useRef } from 'react'
import SplitText from 'gsap/SplitText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title }: { title: string }) => {

    const titleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!titleRef.current) return

        const title = new SplitText(titleRef.current, { type: "chars" })
        
        // Set initial state (hidden)
        gsap.set(title.chars, {
            opacity: 0,
            y: -50,
        })

        // Create scroll-triggered animation
        gsap.to(title.chars, {
            opacity: 1,
            y: 0,
            ease: "back.out(1.7)",
            stagger: {
                from: "center",
                each: 0.06,
            },
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 70%", 
                end: "bottom 20%", 
                toggleActions: "play none none reverse",
            }
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === titleRef.current) {
                    trigger.kill()
                }
            })
        }
    }, [])


  return (
    <div>
        <h2 ref={titleRef} className='lg:text-[15rem] md:text-[10rem] sm:text-[8rem] text-[4rem] font-bold uppercase text-center text-black overflow-hidden'>{title}</h2>
    </div>
  )
}

export default AnimatedTitle