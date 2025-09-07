"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Logo = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({
      defaults:{
        duration:2,
        yoyo:true,
        ease:'power2.inOut'
      }
    })
    .fromTo('.left, .right', {
      svgOrigin:'640 500',
      skewY:(i)=>[-30,15][i],
      scaleX:(i)=>[0.6,0.85][i],
      x:0
    },{
      skewY:(i)=>[-10,30][i],
      scaleX:(i)=>[0.85,0.6][i],  
      x:-200
    })
    .play(.5)
    
    const tl2 = gsap.timeline()
    
    const textElements = svgElement.querySelectorAll('text');
    textElements.forEach((t,i)=>{
      tl2.add(
        gsap.fromTo(t, {
          xPercent:-100,
          x:700
        }, {
          duration:1,
          xPercent:0,
          x:575,
          ease:'sine.inOut'
        })
        , i%3*0.2)
    })

    
    const handlePointerMove = (e: PointerEvent)=>{
      const rect = svgElement.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const progress = relativeX / rect.width;
      
      tl.pause()
      tl2.pause()
      gsap.to([tl,tl2], {
        duration: 2,
        ease: 'power4',
        progress: Math.max(0, Math.min(1, progress))
      })
    }

    const handlePointerLeave = () => {
      tl.play()
      tl2.play()
    }

    svgElement.addEventListener('pointermove', handlePointerMove);
    svgElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      svgElement.removeEventListener('pointermove', handlePointerMove);
      svgElement.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <svg 
      ref={svgRef} 
      viewBox="0 0 1280 720" 
      className="svg-logo"
      style={{
        width: '150px',
        height: '150px',
        position: 'fixed',
        zIndex: 1000
      }}
    >
      <mask id="maskLeft">
        <rect x="-50%" width="100%" height="100%" fill="#fff" />
      </mask>
      <mask id="maskRight">
        <rect x="50%" width="100%" height="100%" fill="#fff" />
      </mask>
      <g fontSize="300">
        <g mask="url(#maskLeft)" fill="#fff" className="left">
          <text y="230">DEAN</text>
          <text y="460">DEAN</text>
          <text y="690">DEAN</text>
        </g>
        <g mask="url(#maskRight)" fill="#aaa" className="right">
          <text y="230">DEAN</text>
          <text y="460">DEAN</text>
          <text y="690">DEAN</text>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
